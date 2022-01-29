

<template>
  <div class="container">
    <div class="score_board" v-for="post in TeamScoreData" :key="post.id">
      <p class="team_name">{{ post.name }}</p>
      <p class="score">{{ post.score }}<span>Points</span></p>
    </div>
  </div>
</template>

<script>
//  点数出力ページ

export default {
  name: "ResultPage",
  data() {
    return {
      TeamScoreData: [], // {id: Number, name: String, score: Number, isNew: Boolean}
    };
  },
  mounted() {
    const socket = new WebSocket("ws://localhost:5001");

    socket.onmessage = (event) => {
      console.dir(event.data);
      this.addData(JSON.parse(event.data));
    };
  },
  methods: {
    addData(data) {
      // 既存のスコアのisNewをfalseにする (= 新規レコードのフラグを外す)
      const list2 = this.TeamScoreData.map((val) => {
        return {
          id: val.id,
          name: val.name,
          score: val.score,
          isNew: false,
        };
      });
      console.log(list2);

      list2.push({
        id: list2.length + 1,
        name: data.name,
        score: Number(data.score),
        isNew: true,
      });

      if (list2.length >= 2) {
        list2.shift();
      }

      // 並び順をスコアの降順に変更
      this.TeamScoreData = list2;
    },
  },
};
</script>

<style>
/* Google Fonts 読み込み */
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
span {
  padding-left: 20px;
  font-size: 20px;
  letter-spacing: 0px;
}
/* 全体を囲うコンテナー */
.container {
  width: 100%;
  height: 100vh;
  background-color: #15151e;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.score_board {
  font-family: "Share Tech Mono", monospace;
  /* color: #daf6ff;
  text-shadow: 0 0 20px #0aafe6; */
  color: #ffe0da;
  text-shadow: 0 0 20px #e63d0a;
  line-height: 1.2;
  text-align: center;
}

.team_name {
  padding-top: 20%;
  font-size: 10vw;
  font-weight: bold;
  margin-bottom: 0;
  letter-spacing: 5px;
}

.score {
  font-size: 40vw;
  margin-top: 0%;
  letter-spacing: -30px;
  margin-bottom: 20%;
  padding-left: 5%;
}

/* 文字サイズ調整 */
@media screen and (max-width: 500px) {
  .team_name {
    font-size: 5vw;
  }
  .score {
    font-size: 20vw;
  }
}

/* animation */
/* .v-leave-active,
.v-enter-active {
  transition: opacity 0.5s, transform 0.5s;
}
.v-leave-to,
.v-enter {
  opacity: 0;
  transform: translateX(200px);
}
.v-leave,
.v-enter-to {
  opacity: 1;
}
.v-move {
  transition: transform 0.5s;
} */
</style>