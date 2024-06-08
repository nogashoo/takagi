<script setup lang="ts">
import { IMAGE } from "~/common/image";
</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="logo">
      <img class="logo" :src="IMAGE.logo" />
      <img class="takagi" :src="IMAGE.takagi" />
    </NuxtLink>
    <nav class="contents">
      <ul class="list">
        <li class="gnavi__list">
          <NuxtLink class="link" to="/">高木塾について</NuxtLink>
          <ul class="dropdown__lists">
            <li class="dropdown__list">
              <NuxtLink class="link" to="/">会社概要</NuxtLink>
            </li>
            <li class="dropdown__list">
              <NuxtLink class="link" to="/">授業料一覧</NuxtLink>
            </li>
            <li class="dropdown__list">
              <NuxtLink class="link" to="/staff">スタッフ紹介</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="gnavi__list">
          <NuxtLink class="link" to="/">塾生の声</NuxtLink>
        </li>
        <li class="gnavi__list">
          <NuxtLink class="link" to="/">塾長のブログ</NuxtLink>
        </li>
        <li class="gnavi__list">
          <NuxtLink class="link" to="/">お問い合わせ</NuxtLink>
          <ul class="dropdown__lists">
            <li class="dropdown__list">
              <NuxtLink class="link" to="/">資料請求</NuxtLink>
            </li>
            <li class="dropdown__list">
              <NuxtLink class="link" to="/">採用情報</NuxtLink>
            </li>
            <li class="dropdown__list">
              <NuxtLink class="link" to="/">よくある質問</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
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
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  position: fixed;
  width: 100%;
  height: 75px;
  top: 0;
  justify-content: space-between;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  background-color: $white;
  z-index: 9999;
}

.logo {
  display: flex;
  margin: auto 0 auto 10px;

  > .logo {
    display: flex;
    width: 60px;
    height: 60px;
  }

  > .takagi {
    padding-top: 5px;
    padding-left: 10px;
    width: 120px;
    height: 55px;
  }
}

.contents {
  margin: auto 100px auto 10px;

  > .list {
    display: flex;
    list-style: none;
    padding-left: 0;
    gap: 25px;

    > .title > .link {
      color: $black;
      text-decoration: none;

      &:hover {
        color: $blue-line;
      }
    }
  }
}

.sns {
  display: flex;
  margin: auto 30px auto 10px;
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

.link {
  color: $black;
  text-decoration: none;

  &:hover {
    color: $blue-line;
  }
}

.dropdown__lists {
  display: none;
  position: absolute;
  margin-top: 20px;
  width: 150px;
  background-color: $white-blue1;
  border-color: $black;
  transition: 0.2s;

  ::before {
    content: "";
    position: absolute;
    pointer-events: none;
    top: -30px;
    left: 20%;
    margin-left: -15px;
    border: 15px solid transparent;
    border-bottom: 15px solid $white-blue1;
  }

  > .dropdown__list {
    display: flex;
    height: 40px;
    text-decoration: none;
    align-items: center;
    cursor: pointer;

    &:hover {
      display: flex;
      background-color: $white-blue;
    }

    > .link {
      margin-left: 5px;
      color: $black;
    }
  }
}

.gnavi__list {
  padding: 20px 0;

  &:hover {
    overflow: visible;

    > .dropdown__lists {
      overflow: visible;
      display: block;
      border-radius: 2px;
    }
  }
}
</style>
