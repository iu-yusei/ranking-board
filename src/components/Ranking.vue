<template>
  <div class="rank-wrap">
    <div class="ranking-header">RANKING</div>
    <table class="ranking-table">
      <!-- <thead>
        <tr>
          <th>RANK</th>
          <th>TEAM</th>
          <th>SCORE</th>
        </tr>
      </thead> -->
      <transition-group tag="tbody">
        <tr
          class="ranking"
          v-for="(post, index) in allScoreData"
          :key="post.id"
        >
          <td :class="{ newRecord: post.isNew }">
            <img src="../assets/oukan.png" alt="" />
            <div id="rank">{{ index + 1 }}</div>
          </td>
          <td :class="{ newRecord: post.isNew }" class="team_data">
            {{ post.name }}
          </td>
          <td :class="{ newRecord: post.isNew }" class="score_data">
            {{ post.score }}
          </td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script>
export default {
  name: "Ranking",
  data() {
    return {
      allScoreData: [], // {id: Number, name: String, score: Number, isNew: Boolean}
    };
  },
  mounted() {
    const socket = new WebSocket("ws://localhost:5002");

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

      list.push({
        id: list.length + 1,
        name: data.name,
        score: Number(data.score),
        isNew: true,
      });

      // 並び順をスコアの降順に変更
      this.allScoreData = list.sort((a, b) => (a.score > b.score ? -1 : 1));
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
.ranking-header {
  /* background: #f72d2d; */
  color: white;
  font-size: 55px;
  text-align: center;
  font-family: "Share Tech Mono", monospace;
  padding-top: 3%;
  font-weight: bold;
  letter-spacing: 8px;
  margin-bottom: 1%;
}

table {
  border-collapse: collapse;
  overflow: hidden;
  border-spacing: 0px;
}

td {
  font-weight: bold;
  color: white;
  /* font-style: italic; */
  padding: 5px;
  /* border: 1px solid; */
  /* border-color: #f72d2d; */
  /* border-color: #fff; */
}
th {
  /* color: #fd5068; */
  color: #fff;
  text-shadow: 0 0 5px #e63d0a;
  font-family: "Share Tech Mono", monospace;
  /* color: #daf6ff;
  text-shadow: 0 0 20px #0aafe6; */
  /* color: #ffe0da; */
  font-size: 40px;
  font-style: italic;
  padding-bottom: 2%;
}

.rank-wrap {
  margin-top: 0;
  padding-left: 20px;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/bg1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.ranking-table {
  margin: auto;
  width: 75vw;
}
.newRecord {
  /* font-weight: bold; */
  /* font-size: 30px; */
  transition: all 3s;
}

.ranking {
  /* background: #f72d2d; */
  background: #fff;
  /* color: black; */
  font-size: 35px;
  display: block;
  margin-bottom: 2%;
}

td {
  color: black;
}
.ranking:nth-of-type(1) {
  font-size: 40px;
  /* font-family: "Bangers", cursive; */
  text-align: center;
  /* text-shadow: 0 0 20px #e63d0a; */
  font-weight: bold;

  text-decoration: none;

  position: relative;

  transition: all 0.8s;
}
td:nth-of-type(1) {
  width: 200px;
  background: #000;
  color: white;
  /* align-content: center; */
}
td:nth-of-type(2) {
  width: 60%;
}
td:nth-of-type(3) {
  width: 20%;
}


td:nth-of-type(1) img {
  /* position: absolute;
  top: -5%;
  left: 10%; */
  display: inline-block;
  width: 50px;
}
.ranking:nth-of-type(2n) td:nth-of-type(1) img {
  display: none;
}
.ranking:nth-of-type(3n) td:nth-of-type(1) img {
  display: none;
}
.ranking:nth-of-type(5n) td:nth-of-type(1) img {
  display: none;
}
.ranking:nth-of-type(7n) td:nth-of-type(1) img {
  display: none;
}
#rank {
  display: inline-block;
  position: relative;
  top: -8px;
  left: 2px;
  font-size: 40px;
}
.ranking:nth-of-type(2n) td:nth-of-type(1) #rank {
  font-size: 30px;
  top: 2%;
}
.ranking:nth-of-type(3n) td:nth-of-type(1) #rank {
  font-size: 30px;
  top: 2%;
}
.ranking:nth-of-type(5n) td:nth-of-type(1) #rank {
  font-size: 30px;
  top: 2%;
}
.ranking:nth-of-type(7n) td:nth-of-type(1) #rank {
  font-size: 30px;
  top: 2%;
}



td:nth-of-type(3) {
  background-image: linear-gradient(
    135deg,
    #e2d02a 0%,
    #f7d334 37%,
    #f7ea34 47%,
    #f3f317 50%,
    #e0e016 53%,
    #e1ce08 63%,
    #b8751e 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  /* text-shadow: 0 0 0px black;  */
}
/* .ranking:nth-of-type(1) td:nth-of-type(1) {
  background: linear-gradient(
    135deg,
    #b67b03 0%,
    #daaf08 15%,
    #fee9a0 23%,
    #daaf08 27%,
    #b67b03 30% 33%,
    #b67b03 33%,
    #daaf08 48%,
    #fee9a0 56%,
    #daaf08 60%,
    #b67b03 63% 66%,
    #b67b03 66%,
    #daaf08 81%,
    #fee9a0 89%,
    #daaf08 94%,
    #b67b03 97% 100%
  ) !important;
} */
.ranking:nth-of-type(1)::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: -100%;
  background-image: linear-gradient(
    130deg,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 75%
  );

  /* 【変更部分】inifiniteによりずっと続ける */
  -webkit-animation: shine 3s infinite;
  animation: shine 3s infinite;
}

@-webkit-keyframes shine {
  100% {
    left: 100%;
  }
}

@keyframes shine {
  100% {
    left: 100%;
  }
}
/* tr:nth-of-type(2) {
  background: linear-gradient(
    45deg,
    #757575 0%,
    #9e9e9e 15%,
    #e8e8e8 23%,
    #9e9e9e 27%,
    #757575 30% 33%,
    #757575 33%,
    #9e9e9e 48%,
    #e8e8e8 56%,
    #9e9e9e 60%,
    #757575 63% 66%,
    #757575 66%,
    #9e9e9e 81%,
    #e8e8e8 89%,
    #9e9e9e 94%,
    #757575 97% 100%
  ) !important;
  transition: all 0.8s;
}
tr:nth-of-type(3) {
  background: #ff9900;
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#97461a),
    color-stop(0.3, #fbd8c5),
    color-stop(0.8, #6c2e16),
    to(#efdbcd)
  );
  transition: all 0.8s;
} */
/* animation */
.v-leave-active,
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
}
</style>