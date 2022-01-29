<template>
  <div id="app">
    <ResultPage />

    <a class="scroll_arrow" href="#ranking"></a>
    <a class="scroll_arrow" href="#ranking"></a>
    <a class="scroll_arrow" href="#ranking"></a>

    <div id="ranking">
      <Ranking />
    </div>

    <!-- <div class="contents-wrap"> -->
    <!-- <div v-if="leftArrow" class="isleft" v-on:click="ChangeToResult()"></div> -->

    <!-- <Ranking v-if="rankShow" />
      <ResultPage v-if="resultShow" /> -->
    <!-- <div
        v-if="rightArrow"
        class="isright"
        v-on:click="ChangeToRanking()"
      ></div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import Ranking from "./components/Ranking.vue";
import ResultPage from "./components/ResultPage.vue";

export default {
  name: "App",
  components: {
    Ranking,
    ResultPage,
  },
  data() {
    return {
      rightArrow: true,
      leftArrow: false,
      isLeft: true,
      isRight: true,
      rankShow: false, // {id: Number, name: String, score: Number, isNew: Boolean}
      resultShow: true,
    };
  },
  methods: {
    ChangeToRanking() {
      this.rankShow = true;
      this.rightArrow = false;
      this.leftArrow = true;
      this.resultShow = false;
    },
    ChangeToResult() {
      this.rankShow = false;
      this.leftArrow = false;
      this.rightArrow = true;
      this.resultShow = true;
    },
  },
};
</script>
<style>
@import "./components/css/Normalize.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d0d5da;
  margin: 0;
  width: 100%;
  scroll-behavior: smooth;
}
#ranking {
  padding-top: 40px;
  background-color: #000;
}
a {
  width: 100%;
  cursor: pointer;
}
.scroll_arrow {
  width: 25px;
  height: 25px;
  position: absolute;
  text-align: center;
  border: 5px solid;
  border-radius: 4px;
  border-color: transparent transparent#fd5068 #fd5068;
  background-color: rgba(255, 255, 255, 0);
  transform: rotate(-45deg);
  bottom: 6%;
  /* left: 47%; */
  right: 8%;
  /* z-index: 3; */
  animation-name: expansion;
  animation-duration: 2s;
  animation-timing-function: ease-in;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-play-state: running;
}
.scroll_arrow:nth-child(1) {
  bottom: 6%;
  animation-delay: 0s;
  /* z-index: 2; */
}
.scroll_arrow:nth-child(2) {
  bottom: 8%;
  animation-delay: 5s;
  /* background-color: #fff; */
  /* z-index: 2; */
}
.scroll_arrow:nth-child(3) {
  bottom: 10%;
  animation-delay: 10s;
  /* z-index: 1; */
}

@keyframes expansion {
  0% {
    border-color: transparent transparent#fd5068 #fd5068;
    background-color: rgba(255, 255, 255, 0);
  }
  100% {
    border-color: transparent transparent#f7e2e5 #f7e2e5;
    background-color: rgba(255, 255, 255, 0);
  }
}

/* .contents-wrap {
  display: flex;
} */
/* .isright {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 48%;
  right: 40px;
  border: 6px solid;
  border-radius: 4px;
  border-color: transparent transparent#fd5068 #fd5068;
  background-color: #000;
  transform: rotate(-135deg);
}
.isleft {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 48%;
  right: 40px;
  border: 6px solid;
  border-radius: 4px;
  border-color: transparent transparent#fd5068 #fd5068;
  background-color: #000;
  transform: rotate(-135deg);
  left: 40px;
  transform: rotate(45deg);
} */
</style>
