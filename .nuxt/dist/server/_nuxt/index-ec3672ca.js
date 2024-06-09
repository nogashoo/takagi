import { _ as __nuxt_component_0$1 } from "./nuxt-link-37d54afa.js";
import { defineComponent, mergeProps, withCtx, createVNode, unref, useSSRContext, ref, computed, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderList } from "vue/server-renderer";
import { I as IMAGE } from "./image-384ef720.js";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./AppButton-5a60c7e3.js";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "destr";
import "defu";
import "klona";
import "devalue";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Recommend",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "recommend" }, _attrs))} data-v-a40ab0e7><div class="title" data-v-a40ab0e7><p class="text" data-v-a40ab0e7>ニガテ科目を克服！成績ぐんぐんアップ！</p><div class="line" data-v-a40ab0e7></div></div><div class="details" data-v-a40ab0e7><div class="text" data-v-a40ab0e7><p data-v-a40ab0e7>無料学習相談、体験授業実施中！</p><p data-v-a40ab0e7>勉強のお困りごと・成績についてのことなど</p><p data-v-a40ab0e7>お気楽にご相談ください！</p></div><div class="button" data-v-a40ab0e7>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/hoge",
        class: "reserve"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text" data-v-a40ab0e7${_scopeId}>無料学習相談&amp;体験授業予約</p>`);
          } else {
            return [
              createVNode("p", { class: "text" }, "無料学習相談&体験授業予約")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="friend" href="https://line.me/ti/p/xvK1fqfVqW" data-v-a40ab0e7><img class="line-logo"${ssrRenderAttr("src", unref(IMAGE).line)} data-v-a40ab0e7><p class="text" data-v-a40ab0e7>友達追加</p></a></div></div></div>`);
    };
  }
});
const Recommend_vue_vue_type_style_index_0_scoped_a40ab0e7_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Recommend.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a40ab0e7"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AccordionButton",
  __ssrInlineRender: true,
  props: {
    type: {},
    title: {}
  },
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["accordion-button", { "-open": unref(isOpen) }]
      }, _attrs))}><button class="button"><h2 class="title">${ssrInterpolate(_ctx.title)}</h2><img class="${ssrRenderClass([{ "-open": unref(isOpen) }, "arrow"])}"${ssrRenderAttr("src", unref(IMAGE).arrow)}></button><div class="detail">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const AccordionButton_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccordionButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AccordionLesson",
  __ssrInlineRender: true,
  props: {
    title: {},
    default: {},
    lessons: {}
  },
  setup(__props) {
    const props = __props;
    const isSelect = ref(props.default);
    const elementary = computed(() => {
      return props.lessons.map((lesson) => {
        return {
          title: lesson.title,
          detail: lesson.detail,
          isActive: isSelect.value === lesson.title
        };
      });
    });
    const handleClickForElement = (title) => {
      isSelect.value = title;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccordionButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "box" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AccordionButton, { title: _ctx.title }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="category"${_scopeId}><!--[-->`);
            ssrRenderList(unref(elementary), (item, key) => {
              _push2(`<button class="${ssrRenderClass([{ "-active": item.isActive }, "button"])}"${_scopeId}>${ssrInterpolate(item.title)}</button>`);
            });
            _push2(`<!--]--></div><!--[-->`);
            ssrRenderList(unref(elementary), (item, key) => {
              _push2(`<div${_scopeId}>`);
              if (item.isActive) {
                _push2(`<div class="text"${_scopeId}>${item.detail}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "category" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(elementary), (item, key) => {
                    return openBlock(), createBlock("button", {
                      class: ["button", { "-active": item.isActive }],
                      key,
                      onClick: ($event) => handleClickForElement(item.title)
                    }, toDisplayString(item.title), 11, ["onClick"]);
                  }), 128))
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(elementary), (item, key) => {
                  return openBlock(), createBlock("div", { key }, [
                    item.isActive ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text",
                      innerHTML: item.detail
                    }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const AccordionLesson_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccordionLesson.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const study = "" + __buildAssetsURL("study.277cdb08.png");
const boss = "" + __buildAssetsURL("boss.741dffaf.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const elementaryLessons = [
      {
        title: "基礎学力向上講座",
        detail: "学校での内容を定着させることを第一目標に、更に応用問題で学力アップを目指します。中学校へ進学した際に小学生の範囲が理解できているかどうかが良いスタートを切れるかどうかの条件となります。<br />国語・数学・英語に特に注力し基礎学力を小学生のうちから養います。 国語では、哲学的な内容を扱う講座や、小論文の授業をご用意致しております。"
      },
      {
        title: "英検対策",
        detail: "現在、高校入試や大学入試に於いて様々な学校が英語の試験の代わりとして英検のスコア提出を導入しています。<br>当塾では英検対策に精通した塾長が独自に作り上げた指導により高い合格率をあげる英検対策講座を用意しています。4技能の力をアップさせるだけではなく、英検合格は自分自身の自信につながります。"
      },
      {
        title: "哲学対話",
        detail: "高木塾では、開校当初より「哲学対話」という授業を小学生向けに実施しております。塾で哲学？！と思われる方もいらっしゃるかもしれません。学力が上がるの？と思うかもしれません。実際、哲学対話を通して「文章を書く能力が上がった」「学校で積極的になった」「物事を多角的にとらえる力が身についた」という喜びの声も多数いただいております。<br>哲学対話の授業はトピックに関するお題を読み、そして塾長が作成したオリジナルワークシートに答えや自分の考えを記入し、最後はフィードバックを受け取ります。「人は何のために生きているのか」「なぜ勉強するのか」「差別や対立の原因は何？」なの日常のあらゆる疑問に基づいた題材を用います。"
      }
    ];
    const middleLessons = [
      {
        title: "定期テスト対策",
        detail: "中間テスト、期末テストで成果を出すために当塾では毎回講師と生徒が話し合い適切な目標設定を行います。<br />中学校の内申点は高校受験に影響するために当塾においても力を入れて指導します。また具体的な計画を立て、実行そして振り返りをすることによって生徒自ら勉強する力を身につけます。"
      },
      {
        title: "高校受験対策",
        detail: "適切な志望校の設定を行い目標に向かって過去問等を使用しながら学力向上を目指します。<br>日頃の定期テスト対策に加えて苦手な分野を徹底的に学習する講座、応用問題を行う講座を用意しています。"
      },
      {
        title: "英検対策",
        detail: "現在、高校入試や大学入試に於いて様々な学校が英語の試験の代わりとして英検のスコア提出を導入しています。<br>当塾では英検対策に精通した塾長が独自に作り上げた指導により高い合格率をあげる英検対策講座を用意しています。4技能の力をアップさせるだけではなく、英検合格は自分自身の自信につながります。"
      }
    ];
    const heightLessons = [
      {
        title: "難関大学突破コース（文系・理系）",
        detail: "関関同立・早慶上智、国公立大学を目指すコースとなります。学習指導から、学習方法の提示まで包括的に大学受験をサポートします。"
      },
      {
        title: "大学入試基礎対策コース",
        detail: "入試に向けて、各教科の基礎を固めるコースとなります。英語であれば、基礎文法・基礎長文、数学であればI&Aなど入試に向けて各教科の基礎を学習します。"
      },
      {
        title: "定期テスト対策コース",
        detail: "学校での学びを定着させ、定期テストでの高得点を目指します。先々の指定校推薦・総合型選抜などを見据えます。"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Recommend = __nuxt_component_0;
      const _component_AppButton = __nuxt_component_1;
      const _component_AccordionLesson = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Recommend, null, null, _parent));
      _push(`<div class="concept" data-v-6d8c709f><div class="title" data-v-6d8c709f><h1 class="top" data-v-6d8c709f>高木塾の教育概念</h1><p class="detail" data-v-6d8c709f> 勉強は人生を豊かに生きるための道具の一つです。<br data-v-6d8c709f> 成績アップや志望校合格を通じて、子どもたちの<strong class="strong1" data-v-6d8c709f>「自己実現」</strong>を叶える場所でありたいと思っています。<br data-v-6d8c709f> お子様の限りない可能性を信じて、信頼関係を築き、明確な目標設定を行い、<br data-v-6d8c709f> 質の高い授業・コーチングを受けることで、お子様の成績アップ、目標達成に導きます！！ </p></div><ul class="list" data-v-6d8c709f><li class="item" data-v-6d8c709f><img${ssrRenderAttr("src", unref(study))} data-v-6d8c709f><div class="text" data-v-6d8c709f><h2 class="title" data-v-6d8c709f>好奇心や積極性を引き出す指導</h2><div class="explanation" data-v-6d8c709f><p data-v-6d8c709f> 受け身ではなく自ら<strong class="strong2" data-v-6d8c709f>積極的</strong>に学ぼうとするようになります。<br data-v-6d8c709f>積極的に情報を収集する癖が身につくため、新たな分野にチャレンジをするなど、高木塾に通う生徒たちは<strong class="strong2" data-v-6d8c709f>生き生き</strong>と日々を過ごしています。 </p></div></div></li><li class="item" data-v-6d8c709f><div class="text" data-v-6d8c709f><h2 class="title" data-v-6d8c709f>自立・自律した学習者を育てるカリキュラム</h2><div class="explanation" data-v-6d8c709f><p data-v-6d8c709f><strong class="strong2" data-v-6d8c709f>自立した人間</strong>を育てたいという思いで指導をさせていただいております。<br data-v-6d8c709f>良い成績をとるために<strong class="strong2" data-v-6d8c709f>計画</strong>を立てて勉強する習慣がつくと、一生役に立つ管理スキルが身に付きます。 </p></div></div><img${ssrRenderAttr("src", unref(study))} data-v-6d8c709f></li><li class="item" data-v-6d8c709f><img${ssrRenderAttr("src", unref(study))} data-v-6d8c709f><div class="text" data-v-6d8c709f><h2 class="title" data-v-6d8c709f>自信をつける教育</h2><div class="explanation" data-v-6d8c709f><p data-v-6d8c709f><strong class="strong2" data-v-6d8c709f>学力が向上</strong>するため、自信をもって日々を過ごせるようになります。<br data-v-6d8c709f><strong class="strong2" data-v-6d8c709f>成功体験</strong>を勉強を通じて積み重ねることにより、学校生活は勿論、何か物事を始めるときに自分ならできる！という感覚を持って生活できます。 </p></div></div></li><li class="item" data-v-6d8c709f><div class="text" data-v-6d8c709f><h2 class="title" data-v-6d8c709f>学習習慣の定着</h2><div class="explanation" data-v-6d8c709f><p data-v-6d8c709f> 塾では、全教科基礎内容〜応用・発展までを学習します。<br data-v-6d8c709f>そして家では、既習事項の確認や、予習を行うことによって、<strong class="strong2" data-v-6d8c709f>塾での学び×家庭学習</strong>がサイクルと化します。良いサイクルを生み出し、さらなるレベルアップへとつながります。 </p></div></div><img${ssrRenderAttr("src", unref(study))} data-v-6d8c709f></li></ul>`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: "button",
        title: "もっと見る",
        to: "hoge"
      }, null, _parent));
      _push(`</div><div class="strong-point" data-v-6d8c709f><h1 class="top" data-v-6d8c709f>強み</h1><ul class="list" data-v-6d8c709f><li class="item" data-v-6d8c709f><div class="text" data-v-6d8c709f><h2 class="title" data-v-6d8c709f>きめ細やかな指導</h2><p class="title-detail" data-v-6d8c709f> 生徒達が何で躓いているのか，どこが理解できていないのか、などを的確に把握し、個人に合った最適な指導を行います。個別指導ならではの個別最適化された指導で、効率よく成果を出すことが出来ます。 </p></div></li><li class="item" data-v-6d8c709f><div class="text" data-v-6d8c709f><h2 class="title" data-v-6d8c709f>高い指導力</h2><p class="title-detail" data-v-6d8c709f> 高校で学科責任者として勤務していた代表を始め、教育に熱い気持ちを持つ講師達が指導します。また、高学歴講師も多数在籍しており、幅広いレベルの生徒の指導が可能となります。 </p></div></li><li class="item" data-v-6d8c709f><div class="text" data-v-6d8c709f><h2 class="title" data-v-6d8c709f>自立を促す指導</h2><p class="title-detail" data-v-6d8c709f> 学習の最終目的地は自立学習者を育成することです。自分の目標を達成するためには何をすれば良いのか。何を我慢して何に時間を割くべきなのか、どのようにすれば効率が良いのかなどを考えられる学習者の育成を目指します。 </p></div></li></ul></div><div class="lesson" data-v-6d8c709f><h1 class="top" data-v-6d8c709f>授業内容</h1><div class="details" data-v-6d8c709f>`);
      _push(ssrRenderComponent(_component_AccordionLesson, {
        title: "小学生講座",
        default: "基礎学力向上講座",
        lessons: elementaryLessons
      }, null, _parent));
      _push(ssrRenderComponent(_component_AccordionLesson, {
        title: "中学生講座",
        default: "定期テスト対策",
        lessons: middleLessons
      }, null, _parent));
      _push(ssrRenderComponent(_component_AccordionLesson, {
        title: "高校生講座",
        default: "難関大学突破コース（文系・理系）",
        lessons: heightLessons
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: "button",
        title: "授業料一覧はこちら",
        to: "hoge"
      }, null, _parent));
      _push(`</div><div class="notice" data-v-6d8c709f><h1 class="top" data-v-6d8c709f>生徒の声</h1><div class="detail" data-v-6d8c709f><img class="image"${ssrRenderAttr("src", unref(study))} data-v-6d8c709f><div class="contents" data-v-6d8c709f><h3 class="title" data-v-6d8c709f>期末テスト 点数アップ！</h3><p data-v-6d8c709f> 数学は60点台から今回の期末テストでは92点をマークしました。苦手教科の英語も60点台から80点まで伸びました！「高木塾では基礎を徹底して教えてくれる、分からないところもわかるまで教えてくれるので勉強していて楽しいです！」 </p></div></div><div class="detail" data-v-6d8c709f><img class="image"${ssrRenderAttr("src", unref(study))} data-v-6d8c709f><div class="contents" data-v-6d8c709f><h3 class="title" data-v-6d8c709f>入塾後3か月で5教科370→400点オーバー！</h3><p data-v-6d8c709f> 数学は60点台から今回の期末テストでは92点をマークしました。苦手教科の英語も60点台から80点まで伸びました！「高木塾では基礎を徹底して教えてくれる、分からないところもわかるまで教えてくれるので勉強していて楽しいです！」 </p></div></div>`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: "button",
        title: "もっと見る",
        to: "hoge"
      }, null, _parent));
      _push(`</div><div class="introduce" data-v-6d8c709f><h1 class="top" data-v-6d8c709f>塾長の紹介</h1><div class="detail" data-v-6d8c709f><img class="image"${ssrRenderAttr("src", unref(boss))} data-v-6d8c709f><div class="contents" data-v-6d8c709f><p data-v-6d8c709f> 1995年生まれ。奈良県出身。関西学院大学法学部政治科(教職課程にて英語教員免許取得)卒業。大阪府内の高校教諭を経て、「子供たちが夢をもって前を向いて生きていく社会を創る」ため、2021年に高木塾を創立。勉強苦手から普通へ、普通から得意へ、段階を経て子供たちが学力をアップさせる指導を得意としており、もともと勉強が苦手だった子供たちが大幅に偏差値アップを遂げることも少なくない。 </p><br data-v-6d8c709f><div class="lisence" data-v-6d8c709f><h4 data-v-6d8c709f>保有資格</h4><ul class="list" data-v-6d8c709f><li data-v-6d8c709f>実用英語技能検定１級</li><li data-v-6d8c709f>TOEIC935</li><li data-v-6d8c709f>中高英語教員免許状</li><li data-v-6d8c709f>学習心理カウンセラー</li></ul></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/staff",
        class: "staff"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btnarrow4" data-v-6d8c709f${_scopeId}>その他スタッフ</button>`);
          } else {
            return [
              createVNode("button", { class: "btnarrow4" }, "その他スタッフ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_Recommend, null, null, _parent));
      _push(`<div class="place" data-v-6d8c709f><h1 class="top" data-v-6d8c709f>アクセス</h1><div class="map" data-v-6d8c709f><div class="detail" data-v-6d8c709f><iframe class="map-image" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.5595460997824!2d135.8249267842885!3d34.716287712553104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013958f8272bc7%3A0xaf96b7315ec3be99!2z44CSNjE5LTAyMTYg5Lqs6YO95bqc5pyo5rSl5bed5biC5bee6KaL5Y-w77yU5LiB55uu77yR4oiS77ySIOaWsOiIiOODk-ODqw!5e0!3m2!1sja!2sjp!4v1698983667014!5m2!1sja!2sjp" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-6d8c709f></iframe><h3 data-v-6d8c709f>木津川州見台教室</h3><p class="address" data-v-6d8c709f> 〒619‐0216<br data-v-6d8c709f>京都府木津川市州見台4-1-2<br data-v-6d8c709f>新興ビル203 </p></div><div class="detail" data-v-6d8c709f><iframe class="map-image" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.2744402002118!2d135.7831917756798!3d34.69825728334406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013b0d24abdc35%3A0x349bf7772edaee4f!2z44K744Oz44OB44Ol44Oq44O8MjHjg5Xjgqnjgrnjg4bjg7zjg6vlpYjoia_opb_lpKflr7rlupc!5e0!3m2!1sja!2sjp!4v1698984069321!5m2!1sja!2sjp" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-6d8c709f></iframe><h3 data-v-6d8c709f>奈良大和西大寺校</h3><p class="address" data-v-6d8c709f> 〒631-0803<br data-v-6d8c709f>奈良県奈良市山陵町127-1<br data-v-6d8c709f>フォーステール奈良西大寺店内 </p></div></div></div><div class="request" data-v-6d8c709f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/details",
        class: "contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text" data-v-6d8c709f${_scopeId}>資料請求はこちら！</p>`);
          } else {
            return [
              createVNode("p", { class: "text" }, "資料請求はこちら！")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_6d8c709f_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6d8c709f"]]);
export {
  index as default
};
//# sourceMappingURL=index-ec3672ca.js.map
