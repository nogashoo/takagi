<template>
  <Navigate from="completed" />
  <div class="contents">
    <div class="text">
      <p class="main">申し込みが完了しました！</p>
      <br />
      <p>
        後日こちらからメールまたはお電話にてご返信させていただきますのでお待ちください！
      </p>
    </div>
  </div>
  <AppButton class="button" title="トップページに戻る" to="hoge" />
</template>

<style lang="scss" scoped>
.contents {
  margin: 50px 350px 70px;
  text-align: center;
  border-style: solid;
  border-color: $white-blue;
  border-width: 2px;
  border-radius: 10px;

  > .text {
    margin: 20px 0;

    > .main {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
