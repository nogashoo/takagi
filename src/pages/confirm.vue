<script setup lang="ts">
import { IMAGE } from "~/common/image";

const { contactState, send } = useContact();
const router = useRouter();

const clickSend = async () => {
  try {
    await send();

    router.push("/completed");
  } catch {
    router.push("/details");
  }
};
</script>

<template>
  <Navigate from="confirm" />
  <div class="contents">
    <dl class="form-area">
      <dt class="item"><span class="title">お名前(保護者様)</span></dt>
      <dd class="input">
        <p>{{ contactState.parentName }}</p>
      </dd>
      <dt class="item"><span class="title">お名前(カタカナ)</span></dt>
      <dd class="input">
        <p>{{ contactState.parentNameKana }}</p>
      </dd>
      <dt class="item"><span class="title">お名前(お子様)</span></dt>
      <dd class="input">
        <p>{{ contactState.childName }}</p>
      </dd>
      <dt class="item"><span class="title">お名前(カタカナ)</span></dt>
      <dd class="input">
        <p>{{ contactState.childNameKana }}</p>
      </dd>
      <dt class="item"><span class="title">メールアドレス</span></dt>
      <dd class="input">
        <p>{{ contactState.email }}</p>
      </dd>
      <dt class="item"><span class="title">電話番号</span></dt>
      <dd class="input">
        <p>{{ contactState.phoneNumber }}</p>
      </dd>
      <dt class="item"><span class="title">通われている学校</span></dt>
      <dd class="input">
        <p>{{ contactState.schoolName }}</p>
      </dd>
      <dt class="item"><span class="title">学年</span></dt>
      <dd class="label-list">
        <p>{{ contactState.grade }} 年</p>
      </dd>
    </dl>
    <dl class="form-other-area">
      <dt class="item"><span class="title">学習状況や学習上の課題</span></dt>
      <dd class="input">
        <p>{{ contactState.messagAssignment }}</p>
      </dd>
      <dt class="item"><span class="title">資料請求に関して</span></dt>
      <dd class="input">
        <p>{{ contactState.messageDocument }}</p>
      </dd>
    </dl>
  </div>
  <div class="button-area">
    <AppButton title="送信する" @click="clickSend" />
    <NuxtLink class="back" to="/details">
      <p class="text">戻る</p>
      <img class="arrow" :src="IMAGE.arrow" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.contents {
  margin: 40px auto 0;
  max-width: 800px;
  border-style: solid;
  border-color: $white-blue;
  border-width: 2px;
  border-radius: 10px;
}

.form-area {
  display: grid;
  grid-template-columns: repeat(1, 1fr 2fr);
  margin: 80px 30px 50px 100px;
  gap: 50px;

  > .item {
    display: flex;
    align-items: center;
  }

  > .input {
    margin-left: 20px;

    > .input-text {
      padding: 2px;
      min-width: 250px;
      height: 30px;
      font-size: 16px;
    }
  }

  > .label-list {
    display: flex;
    margin-left: 20px;
    gap: 10px;

    > .label > .input {
      margin-right: 2px;
    }
  }
}

.form-other-area {
  margin-left: 100px;

  > .item {
    margin-bottom: 10px;
  }

  > .input {
    margin: 0 0 50px 30px;

    > .message {
      font-family: inherit;
      min-width: 520px;
      height: 200px;
      padding: 3px;
      font-size: 16px;
    }
  }
}

.button-area {
  display: flex;
  position: relative;
  max-width: 700px;
  margin: 30px auto 100px;

  > .button {
    margin: 30px auto 0;
  }

  > .back {
    position: absolute;
    margin-top: 20px;
    text-align: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    color: $black;
    background-color: $gray;
    border-color: $black;
    border-style: solid;
    text-decoration: none;
    border-radius: 9999px;

    > .text {
      margin-top: 6px;
      padding: 0;
      font-size: 16px;
    }
    > .arrow {
      transform: rotate(180deg);
    }
  }
}
</style>
