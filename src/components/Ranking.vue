<template>
  <div class="rank-wrap">
    <table class="ranking-table">
      <thead>
        <tr>
          <th>RANK</th>
          <th>NAME</th>
          <th>SCORE</th>
        </tr>
      </thead>
      <transition-group tag="tbody">
        <tr
          class="ranking"
          v-for="(post, index) in allScoreData"
          :key="post.id"
        >
          <td :class="{ newRecord: post.isNew }">{{ index + 1 }} 位</td>
          <td :class="{ newRecord: post.isNew }">{{ post.name }}</td>
          <td :class="{ newRecord: post.isNew }">{{ post.score }}</td>
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
td {
  font-weight: bold;
  font-size: 25px;
  color: black;
}
th {
  color: white;
}
.rank-wrap {
  padding-top: 70px;
  width: 100%;
  height: 100vh;
  background-color: #000;
}

.ranking-table {
  margin: auto;
  width: 80vw;
}
.newRecord {
  border: 0px none;
  font-weight: bold;
  font-size: 30px;
  transition: all 3s;
}
.rank {
  background: rgba(255, 0, 0, 0.815);
  scroll-behavior: smooth;
}
.ranking:nth-of-type(1) {
  background: linear-gradient(
    45deg,
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
  transition: all 0.8s;
}
tr:nth-of-type(2) {
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
}
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