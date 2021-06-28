<template>
  <div class="home">
    <p>여러분 안녕하세요!</p>
    <p>MBTI - 농구선수 매칭 어플리케이션을 개발한 민동준입니다.</p>
    <p>이번 기회로 여러분의 마음속 깊이 자리잡고 있는 NBA 선수는 누구인지 찾아낼 수 있는 기회입니다. </p>
    <p>간단한 mbti 문항 테스트를 하고 빨간 버튼을 눌러주세요. 문항에 대해서 너무 깊이 생각하지 말아주세요. </p>
    <p>상단에 Quiz를 누르시면 바로 진행 가능합니다. </p>
    <p><b><i>가장 중요한 것은 마음에 들지 않는 선수가 나와도 인정해야 하다는것입니다.</i></b></p>
    <img class="nba" src="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fmisc_logos%2F500%2Fnba.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
  },

});
</script>

<style >
  .home {
    text-align: center;
  }

  .nba {
    object-fit: contain;
    width: 50vw;
  }

</style>
