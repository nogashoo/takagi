<script setup lang="ts">
import { IMAGE } from "~/common/image";
</script>

<template>
  <footer class="footer">
    <div class="main">
      <nav class="contents">
        <p class="title">目次</p>
        <ul class="list">
          <li>
            <NuxtLink class="link" to="/">高木塾について</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/">塾生の声</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/">塾長のブログ</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/">お問い合わせ</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/">資料請求</NuxtLink>
          </li>
        </ul>
      </nav>
      <div>
        <p class="title">その他</p>
        <address class="address">
          電話：<a href="tel:00000000000">00000000000</a> <br />
          メール：<a href="mailto:example@gmail.com">example@gmail.com</a>
        </address>
      </div>
      <div class="sns">
        <a
          class="link"
          href="https://instagram.com/oyayubidesu?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
        >
          <img class="instagram" :src="IMAGE.instagram" />
        </a>
        <a
          class="link"
          href="https://youtube.com/@user-rw3ds2wf1b?si=uyQzKbwl2cC4nsKY"
          ><img class="youtube" :src="IMAGE.youtube"
        /></a>
      </div>
      <small class="copy-right">© YYYY 高木塾</small>
    </div>
    <div class="logo"><img class="logo-mark" :src="IMAGE.logo" /></div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: absolute;
  background-color: $gray;
  width: 100%;
  height: 300px;
  > .main {
    display: flex;
    position: absolute;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-flow: column;
    text-align: center;
    z-index: 10;

    > .contents {
      margin: auto;
      > .list {
        display: flex;
        list-style: none;
        margin: 0 auto;
        gap: 25px;
      }
    }

    > .sns {
      display: flex;
      margin: 20px auto;
      gap: 15px;

      > .link > .instagram {
        margin-top: 2px;
        width: 30px;
        height: 30px;
      }

      > .link > .youtube {
        width: 35px;
        height: 35px;
      }
    }

    > .copy-right {
      margin-bottom: 5px;
      font-size: 6px;
    }
  }

  > .logo {
    display: flex;
    position: absolute;
    justify-content: center;
    width: 100%;
    height: 100%;

    > .logo-mark {
      aspect-ratio: 1/1;
      width: 250px;
      height: auto;
      opacity: 0.1;
      z-index: 1;
    }
  }
}

.title {
  margin-bottom: 10px;
  font-weight: bold;
}

.link {
  text-decoration: none;

  &:hover {
    color: $blue-line;
  }
}

a {
  font-family: $base-font;
  color: $black;
  text-decoration: none;

  &:hover {
    color: $blue-line;
  }
}

address {
  font-family: $base-font;
}
</style>
