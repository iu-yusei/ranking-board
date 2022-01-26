

<template>
  <div class="container">
    <div class="score_board" v-for="post in allScoreData" :key="post.id">
      <p class="team_name">{{ post.name }}</p>
      <p class="score">{{ post.score }}</p>
    </div>
  </div>
</template>

<script>
//  点数出力ページ

export default {
  name: "ResultPage",
  data() {
    return {
      allScoreData: [], // {id: Number, name: String, score: Number, isNew: Boolean}
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
      const list = this.allScoreData.map((val) => {
        return {
          id: val.id,
          name: val.name,
          score: val.score,
          isNew: false,
        };
      });
      console.log(list);

      list.push({
        id: list.length + 1,
        name: data.name,
        score: Number(data.score),
        isNew: true,
      });

      // 並び順をスコアの降順に変更
      this.allScoreData = list;
    },
  },
};
</script>

<style>
/* Google Fonts 読み込み */
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");

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
  color: #daf6ff;
  text-shadow: 0 0 20px #0aafe6;
  line-height: 1.2;
  text-align: center;
}

.team_name {
  font-size: 25px;
}

.score {
  font-size: 100px;
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