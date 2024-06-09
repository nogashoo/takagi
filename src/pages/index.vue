<script setup lang="ts">
import study from "~/assets/images/study.png";
import boss from "~/assets/images/boss.jpg";

const elementaryLessons = [
  {
    title: "基礎学力向上講座",
    detail:
      "学校での内容を定着させることを第一目標に、更に応用問題で学力アップを目指します。中学校へ進学した際に小学生の範囲が理解できているかどうかが良いスタートを切れるかどうかの条件となります。<br />国語・数学・英語に特に注力し基礎学力を小学生のうちから養います。 国語では、哲学的な内容を扱う講座や、小論文の授業をご用意致しております。",
  },
  {
    title: "英検対策",
    detail:
      "現在、高校入試や大学入試に於いて様々な学校が英語の試験の代わりとして英検のスコア提出を導入しています。<br>当塾では英検対策に精通した塾長が独自に作り上げた指導により高い合格率をあげる英検対策講座を用意しています。4技能の力をアップさせるだけではなく、英検合格は自分自身の自信につながります。",
  },
  {
    title: "哲学対話",
    detail:
      "高木塾では、開校当初より「哲学対話」という授業を小学生向けに実施しております。塾で哲学？！と思われる方もいらっしゃるかもしれません。学力が上がるの？と思うかもしれません。実際、哲学対話を通して「文章を書く能力が上がった」「学校で積極的になった」「物事を多角的にとらえる力が身についた」という喜びの声も多数いただいております。<br>哲学対話の授業はトピックに関するお題を読み、そして塾長が作成したオリジナルワークシートに答えや自分の考えを記入し、最後はフィードバックを受け取ります。「人は何のために生きているのか」「なぜ勉強するのか」「差別や対立の原因は何？」なの日常のあらゆる疑問に基づいた題材を用います。",
  },
];

const middleLessons = [
  {
    title: "定期テスト対策",
    detail:
      "中間テスト、期末テストで成果を出すために当塾では毎回講師と生徒が話し合い適切な目標設定を行います。<br />中学校の内申点は高校受験に影響するために当塾においても力を入れて指導します。また具体的な計画を立て、実行そして振り返りをすることによって生徒自ら勉強する力を身につけます。",
  },
  {
    title: "高校受験対策",
    detail:
      "適切な志望校の設定を行い目標に向かって過去問等を使用しながら学力向上を目指します。<br>日頃の定期テスト対策に加えて苦手な分野を徹底的に学習する講座、応用問題を行う講座を用意しています。",
  },
  {
    title: "英検対策",
    detail:
      "現在、高校入試や大学入試に於いて様々な学校が英語の試験の代わりとして英検のスコア提出を導入しています。<br>当塾では英検対策に精通した塾長が独自に作り上げた指導により高い合格率をあげる英検対策講座を用意しています。4技能の力をアップさせるだけではなく、英検合格は自分自身の自信につながります。",
  },
];

const heightLessons = [
  {
    title: "難関大学突破コース（文系・理系）",
    detail:
      "関関同立・早慶上智、国公立大学を目指すコースとなります。学習指導から、学習方法の提示まで包括的に大学受験をサポートします。",
  },
  {
    title: "大学入試基礎対策コース",
    detail:
      "入試に向けて、各教科の基礎を固めるコースとなります。英語であれば、基礎文法・基礎長文、数学であればI&Aなど入試に向けて各教科の基礎を学習します。",
  },
  {
    title: "定期テスト対策コース",
    detail:
      "学校での学びを定着させ、定期テストでの高得点を目指します。先々の指定校推薦・総合型選抜などを見据えます。",
  },
];
</script>

<template>
  <Recommend />
  <div class="concept">
    <div class="title">
      <h1 class="top">高木塾の教育概念</h1>
      <p class="detail">
        勉強は人生を豊かに生きるための道具の一つです。<br />
        成績アップや志望校合格を通じて、子どもたちの<strong class="strong1"
          >「自己実現」</strong
        >を叶える場所でありたいと思っています。<br />
        お子様の限りない可能性を信じて、信頼関係を築き、明確な目標設定を行い、<br />
        質の高い授業・コーチングを受けることで、お子様の成績アップ、目標達成に導きます！！
      </p>
    </div>
    <ul class="list">
      <li class="item">
        <img :src="study" />
        <div class="text">
          <h2 class="title">好奇心や積極性を引き出す指導</h2>
          <div class="explanation">
            <p>
              受け身ではなく自ら<strong class="strong2">積極的</strong
              >に学ぼうとするようになります。<br />積極的に情報を収集する癖が身につくため、新たな分野にチャレンジをするなど、高木塾に通う生徒たちは<strong
                class="strong2"
                >生き生き</strong
              >と日々を過ごしています。
            </p>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="text">
          <h2 class="title">自立・自律した学習者を育てるカリキュラム</h2>
          <div class="explanation">
            <p>
              <strong class="strong2">自立した人間</strong
              >を育てたいという思いで指導をさせていただいております。<br />良い成績をとるために<strong
                class="strong2"
                >計画</strong
              >を立てて勉強する習慣がつくと、一生役に立つ管理スキルが身に付きます。
            </p>
          </div>
        </div>
        <img :src="study" />
      </li>
      <li class="item">
        <img :src="study" />
        <div class="text">
          <h2 class="title">自信をつける教育</h2>
          <div class="explanation">
            <p>
              <strong class="strong2">学力が向上</strong
              >するため、自信をもって日々を過ごせるようになります。<br /><strong
                class="strong2"
                >成功体験</strong
              >を勉強を通じて積み重ねることにより、学校生活は勿論、何か物事を始めるときに自分ならできる！という感覚を持って生活できます。
            </p>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="text">
          <h2 class="title">学習習慣の定着</h2>
          <div class="explanation">
            <p>
              塾では、全教科基礎内容〜応用・発展までを学習します。<br />そして家では、既習事項の確認や、予習を行うことによって、<strong
                class="strong2"
                >塾での学び×家庭学習</strong
              >がサイクルと化します。良いサイクルを生み出し、さらなるレベルアップへとつながります。
            </p>
          </div>
        </div>
        <img :src="study" />
      </li>
    </ul>
    <AppButton class="button" title="もっと見る" to="" />
  </div>
  <div class="strong-point">
    <h1 class="top">強み</h1>
    <ul class="list">
      <li class="item">
        <div class="text">
          <h2 class="title">きめ細やかな指導</h2>
          <p class="title-detail">
            生徒達が何で躓いているのか，どこが理解できていないのか、などを的確に把握し、個人に合った最適な指導を行います。個別指導ならではの個別最適化された指導で、効率よく成果を出すことが出来ます。
          </p>
        </div>
      </li>
      <li class="item">
        <div class="text">
          <h2 class="title">高い指導力</h2>
          <p class="title-detail">
            高校で学科責任者として勤務していた代表を始め、教育に熱い気持ちを持つ講師達が指導します。また、高学歴講師も多数在籍しており、幅広いレベルの生徒の指導が可能となります。
          </p>
        </div>
      </li>
      <li class="item">
        <div class="text">
          <h2 class="title">自立を促す指導</h2>
          <p class="title-detail">
            学習の最終目的地は自立学習者を育成することです。自分の目標を達成するためには何をすれば良いのか。何を我慢して何に時間を割くべきなのか、どのようにすれば効率が良いのかなどを考えられる学習者の育成を目指します。
          </p>
        </div>
      </li>
    </ul>
  </div>
  <div class="lesson">
    <h1 class="top">授業内容</h1>
    <div class="details">
      <AccordionLesson
        title="小学生講座"
        default="基礎学力向上講座"
        :lessons="elementaryLessons"
      />
      <AccordionLesson
        title="中学生講座"
        default="定期テスト対策"
        :lessons="middleLessons"
      />
      <AccordionLesson
        title="高校生講座"
        default="難関大学突破コース（文系・理系）"
        :lessons="heightLessons"
      />
    </div>
    <AppButton class="button" title="授業料一覧はこちら" to="" />
  </div>
  <div class="notice">
    <h1 class="top">生徒の声</h1>
    <div class="detail">
      <img class="image" :src="study" />
      <div class="contents">
        <h3 class="title">期末テスト 点数アップ！</h3>
        <p>
          数学は60点台から今回の期末テストでは92点をマークしました。苦手教科の英語も60点台から80点まで伸びました！「高木塾では基礎を徹底して教えてくれる、分からないところもわかるまで教えてくれるので勉強していて楽しいです！」
        </p>
      </div>
    </div>
    <div class="detail">
      <img class="image" :src="study" />
      <div class="contents">
        <h3 class="title">入塾後3か月で5教科370→400点オーバー！</h3>
        <p>
          数学は60点台から今回の期末テストでは92点をマークしました。苦手教科の英語も60点台から80点まで伸びました！「高木塾では基礎を徹底して教えてくれる、分からないところもわかるまで教えてくれるので勉強していて楽しいです！」
        </p>
      </div>
    </div>
    <AppButton class="button" title="もっと見る" to="" />
  </div>
  <div class="introduce">
    <h1 class="top">塾長の紹介</h1>
    <div class="detail">
      <img class="image" :src="boss" />
      <div class="contents">
        <p>
          1995年生まれ。奈良県出身。関西学院大学法学部政治科(教職課程にて英語教員免許取得)卒業。大阪府内の高校教諭を経て、「子供たちが夢をもって前を向いて生きていく社会を創る」ため、2021年に高木塾を創立。勉強苦手から普通へ、普通から得意へ、段階を経て子供たちが学力をアップさせる指導を得意としており、もともと勉強が苦手だった子供たちが大幅に偏差値アップを遂げることも少なくない。
        </p>
        <br />
        <div class="lisence">
          <h4>保有資格</h4>
          <ul class="list">
            <li>実用英語技能検定１級</li>
            <li>TOEIC935</li>
            <li>中高英語教員免許状</li>
            <li>学習心理カウンセラー</li>
          </ul>
        </div>
        <NuxtLink to="/staff" class="staff">
          <button class="btnarrow4">その他スタッフ</button>
        </NuxtLink>
      </div>
    </div>
  </div>
  <Recommend />
  <div class="place">
    <h1 class="top">アクセス</h1>
    <div class="map">
      <div class="detail">
        <iframe
          class="map-image"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.5595460997824!2d135.8249267842885!3d34.716287712553104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013958f8272bc7%3A0xaf96b7315ec3be99!2z44CSNjE5LTAyMTYg5Lqs6YO95bqc5pyo5rSl5bed5biC5bee6KaL5Y-w77yU5LiB55uu77yR4oiS77ySIOaWsOiIiOODk-ODqw!5e0!3m2!1sja!2sjp!4v1698983667014!5m2!1sja!2sjp"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        <h3>木津川州見台教室</h3>
        <p class="address">
          〒619‐0216<br />京都府木津川市州見台4-1-2<br />新興ビル203
        </p>
      </div>
      <div class="detail">
        <iframe
          class="map-image"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.2744402002118!2d135.7831917756798!3d34.69825728334406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013b0d24abdc35%3A0x349bf7772edaee4f!2z44K744Oz44OB44Ol44Oq44O8MjHjg5Xjgqnjgrnjg4bjg7zjg6vlpYjoia_opb_lpKflr7rlupc!5e0!3m2!1sja!2sjp!4v1698984069321!5m2!1sja!2sjp"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        <h3>奈良大和西大寺校</h3>
        <p class="address">
          〒631-0803<br />奈良県奈良市山陵町127-1<br />フォーステール奈良西大寺店内
        </p>
      </div>
    </div>
  </div>
  <div class="request">
    <NuxtLink to="/details" class="contact">
      <p class="text">資料請求はこちら！</p>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.concept {
  padding: 50px 40px;

  > .title {
    display: flex;
    flex-flow: column;
    text-align: center;

    > .top {
      position: relative;
      margin: auto;

      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 110px;
        height: 4px;
        bottom: -10px;
        background-color: $blue-line;
        left: calc(50% - 55px);
      }
    }

    > .detail {
      margin: 40px 0 60px;
      line-height: 2;
    }
  }

  > .list {
    display: flex;
    flex-flow: column;
    margin: 0 150px;
    list-style: none;
    gap: 40px;

    > .item:nth-child(2n) {
      display: flex;
      padding: 20px 20px 20px 0;
      background-color: $lite-blue;
      border-style: solid;
      border-color: $black;
      border-width: 2px;
      border-radius: 10px;
      box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.3);
    }

    > .item:nth-child(2n-1) {
      display: flex;
      padding: 20px 0 20px 20px;
      background-color: $lite-blue;
      border-style: solid;
      border-color: $black;
      border-width: 2px;
      border-radius: 10px;
      box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.3);
    }
  }
}

.text {
  text-align: center;

  > .title {
    display: inline-block;
    text-align: center;
    background: linear-gradient(transparent 40%, $yellow 80%);
  }

  > .explanation {
    display: flex;
    height: 80%;
    align-items: center;
    text-align: start;
    line-height: 2rem;
    margin: auto 60px;
  }
  > .title-detail {
    display: flex;
    height: 80%;
    align-items: center;
    margin: auto 20px;
  }
}

.strong-point {
  padding: 50px 40px;
  background-color: $lite-blue;

  > .top {
    position: relative;
    text-align: center;

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 50px;
      height: 4px;
      bottom: -10px;
      background-color: $blue-line;
      left: calc(50% - 25px);
    }
  }

  > .list {
    display: flex;
    justify-content: center;
    margin: 50px auto 30px;
    list-style: none;
    gap: 40px;

    > .item {
      display: flex;
      width: 300px;
      height: 100%;
      aspect-ratio: 1/1;
      background-color: $blue;
      border-radius: 9999px;

      > .text {
        margin-top: 30px;
        line-height: 1.5rem;
      }
    }
  }
}

.lesson {
  padding: 50px 40px;

  > .top {
    position: relative;
    text-align: center;

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 80px;
      height: 4px;
      bottom: -10px;
      background-color: $blue-line;
      left: calc(50% - 40px);
    }
  }

  > .details {
    display: flex;
    flex-flow: column;
    margin: 50px 200px 0;
    gap: 20px;
  }
}

.notice {
  padding: 50px 40px;
  background-color: $lite-blue;

  > .top {
    position: relative;
    text-align: center;

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 80px;
      height: 4px;
      bottom: -10px;
      background-color: $blue-line;
      left: calc(50% - 40px);
    }
  }

  > .detail {
    display: flex;
    margin: 40px 80px;
    background-color: $white;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);

    > .image {
      min-width: 350px;
    }

    > .contents {
      margin: 0 20px;
      > .title {
        position: relative;
        padding: 20px 0 30px;

        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          background-color: $blue-line;
        }
      }
    }
  }
}

.introduce {
  padding: 50px 40px;

  > .top {
    position: relative;
    text-align: center;

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 80px;
      height: 4px;
      bottom: -10px;
      background-color: $blue-line;
      left: calc(50% - 40px);
    }
  }

  > .detail {
    display: flex;
    margin: 80px 100px 20px;

    > .image {
      min-width: 350px;
    }

    > .contents {
      position: relative;
      margin: auto 0;
      padding-left: 100px;

      > .lisence {
        > .list {
          margin-left: 30px;
        }
      }
    }
  }
}

.place {
  padding: 50px 40px;

  > .top {
    position: relative;
    text-align: center;

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 80px;
      height: 4px;
      bottom: -10px;
      background-color: $blue-line;
      left: calc(50% - 40px);
    }
  }

  > .map {
    display: flex;
    margin: 80px auto 0;
    justify-content: center;
    gap: 100px;

    > .detail {
      text-align: center;
      gap: 20px;

      > .map-image {
        margin-bottom: 10px;
        width: 400px;
        height: auto;
        aspect-ratio: 7/4;
        border: 0;
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
      }
    }
  }
}

.button {
  display: block;
  margin: 50px auto 0;
}

.strong1 {
  font-size: 20px;
  color: $blue-line;
  background: linear-gradient(transparent 40%, $yellow 80%);
}

.strong2 {
  font-size: 15px;
  background: linear-gradient(transparent 40%, $yellow 80%);
}

/*矢印と下線の形状*/
.staff {
  position: absolute;
  background-color: $white;
  right: 0;
  :hover {
    cursor: pointer;
  }

  > .btnarrow4 {
    font-weight: bold;
    font-size: 20px;
    /*矢印と下線の基点とするためrelativeを指定*/
    position: relative;
    /*形状*/
    display: inline-block;
    padding: 0 20px;
    color: #333;
    text-decoration: none;
    outline: none;
    background-color: $white;
    border: 0;

    &::before {
      content: "";
      /*絶対配置で下線の位置を決める*/
      position: absolute;
      bottom: -8px;
      left: 10px;
      /*下線の形状*/
      width: 200px;
      height: 2px;
      background: $blue-line;
      /*アニメーションの指定*/
      transition: all 0.3s;
    }

    &::after {
      content: "";
      /*絶対配置で矢印の位置を決める*/
      position: absolute;
      bottom: 3px;
      right: -34px;
      /*矢印の形状*/
      width: 30px;
      height: 2px;
      background: $blue-line;
      transform: rotate(45deg);
      /*アニメーションの指定*/
      transition: all 0.3s;
    }

    /*hoverした際の移動*/
    &:hover::before {
      left: 21px;
    }

    &:hover::after {
      right: -45px;
    }
  }
}

.request {
  z-index: 1;
}

.contact {
  position: fixed;
  bottom: 30px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
  background-color: $yellow;
  width: 280px;
  height: 70px;
  text-decoration: none;
  border: 2px solid;
  border-radius: 10px;
  z-index: 9999;

  > .text {
    color: $black;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
