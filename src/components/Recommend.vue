<script setup lang="ts">
import { IMAGE } from "~/common/image";
</script>

<template>
  <div class="recommend">
    <div class="title">
      <p class="text">ニガテ科目を克服！成績ぐんぐんアップ！</p>
      <div class="line" />
    </div>
    <div class="details">
      <div class="text">
        <p>無料学習相談、体験授業実施中！</p>
        <p>勉強のお困りごと・成績についてのことなど</p>
        <p>お気楽にご相談ください！</p>
      </div>
      <div class="button">
        <NuxtLink to="/hoge" class="reserve"
          ><p class="text">無料学習相談&体験授業予約</p></NuxtLink
        >
        <a class="friend" href="https://line.me/ti/p/xvK1fqfVqW">
          <img class="line-logo" :src="IMAGE.line" />
          <p class="text">友達追加</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recommend {
  background-color: #0401a8;
  height: 320px;
}

.title {
  display: flex;
  flex-flow: column;
  text-align: center;
  max-width: 860px;
  margin: auto;

  > .text {
    padding-top: 20px;
    font-size: 40px;
    color: $white;
    text-shadow: 2px 2px 2px #555;
    z-index: 2;
  }
  > .line {
    content: "";
    width: 100%;
    height: 21px;
    background-color: $yellow;
    margin-top: -40px;
    z-index: 1;
  }
}

.details {
  display: flex;
  justify-content: space-between;
  margin: 40px auto;

  > .text {
    font-size: 32px;
    font-weight: bold;
    color: $white;
    padding-left: 150px;
  }
  > .button {
    margin-right: 60px;

    > .reserve {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -10px;
      background-color: #d2fff4;
      width: 380px;
      height: 70px;
      text-decoration: none;

      > .text {
        color: $black;
        font-size: 26px;
        font-weight: bold;
      }
    }

    > .friend {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      background-color: #06c755;
      width: 380px;
      height: 70px;
      text-decoration: none;

      > .line-logo {
        margin-right: 20px;
      }

      > .text {
        color: $white;
        font-size: 26px;
        font-weight: bold;
      }
    }
  }
}
</style>
