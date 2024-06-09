import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-37d54afa.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, unref, ref, computed, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
import { I as IMAGE } from './image-384ef720.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_1 } from './AppButton-5a60c7e3.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Recommend",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "recommend" }, _attrs))} data-v-db7b0127><div class="title" data-v-db7b0127><p class="text" data-v-db7b0127>\u30CB\u30AC\u30C6\u79D1\u76EE\u3092\u514B\u670D\uFF01\u6210\u7E3E\u3050\u3093\u3050\u3093\u30A2\u30C3\u30D7\uFF01</p><div class="line" data-v-db7b0127></div></div><div class="details" data-v-db7b0127><div class="text" data-v-db7b0127><p data-v-db7b0127>\u7121\u6599\u5B66\u7FD2\u76F8\u8AC7\u3001\u4F53\u9A13\u6388\u696D\u5B9F\u65BD\u4E2D\uFF01</p><p data-v-db7b0127>\u52C9\u5F37\u306E\u304A\u56F0\u308A\u3054\u3068\u30FB\u6210\u7E3E\u306B\u3064\u3044\u3066\u306E\u3053\u3068\u306A\u3069</p><p data-v-db7b0127>\u304A\u6C17\u697D\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\uFF01</p></div><div class="button" data-v-db7b0127>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "",
        class: "reserve"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text" data-v-db7b0127${_scopeId}>\u7121\u6599\u5B66\u7FD2\u76F8\u8AC7&amp;\u4F53\u9A13\u6388\u696D\u4E88\u7D04</p>`);
          } else {
            return [
              createVNode("p", { class: "text" }, "\u7121\u6599\u5B66\u7FD2\u76F8\u8AC7&\u4F53\u9A13\u6388\u696D\u4E88\u7D04")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="friend" href="https://line.me/ti/p/xvK1fqfVqW" data-v-db7b0127><img class="line-logo"${ssrRenderAttr("src", unref(IMAGE).line)} data-v-db7b0127><p class="text" data-v-db7b0127>\u53CB\u9054\u8FFD\u52A0</p></a></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Recommend.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-db7b0127"]]);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccordionLesson.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const study = "" + buildAssetsURL("study.277cdb08.png");
const boss = "" + buildAssetsURL("boss.741dffaf.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const elementaryLessons = [
      {
        title: "\u57FA\u790E\u5B66\u529B\u5411\u4E0A\u8B1B\u5EA7",
        detail: "\u5B66\u6821\u3067\u306E\u5185\u5BB9\u3092\u5B9A\u7740\u3055\u305B\u308B\u3053\u3068\u3092\u7B2C\u4E00\u76EE\u6A19\u306B\u3001\u66F4\u306B\u5FDC\u7528\u554F\u984C\u3067\u5B66\u529B\u30A2\u30C3\u30D7\u3092\u76EE\u6307\u3057\u307E\u3059\u3002\u4E2D\u5B66\u6821\u3078\u9032\u5B66\u3057\u305F\u969B\u306B\u5C0F\u5B66\u751F\u306E\u7BC4\u56F2\u304C\u7406\u89E3\u3067\u304D\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u304C\u826F\u3044\u30B9\u30BF\u30FC\u30C8\u3092\u5207\u308C\u308B\u304B\u3069\u3046\u304B\u306E\u6761\u4EF6\u3068\u306A\u308A\u307E\u3059\u3002<br />\u56FD\u8A9E\u30FB\u6570\u5B66\u30FB\u82F1\u8A9E\u306B\u7279\u306B\u6CE8\u529B\u3057\u57FA\u790E\u5B66\u529B\u3092\u5C0F\u5B66\u751F\u306E\u3046\u3061\u304B\u3089\u990A\u3044\u307E\u3059\u3002 \u56FD\u8A9E\u3067\u306F\u3001\u54F2\u5B66\u7684\u306A\u5185\u5BB9\u3092\u6271\u3046\u8B1B\u5EA7\u3084\u3001\u5C0F\u8AD6\u6587\u306E\u6388\u696D\u3092\u3054\u7528\u610F\u81F4\u3057\u3066\u304A\u308A\u307E\u3059\u3002"
      },
      {
        title: "\u82F1\u691C\u5BFE\u7B56",
        detail: "\u73FE\u5728\u3001\u9AD8\u6821\u5165\u8A66\u3084\u5927\u5B66\u5165\u8A66\u306B\u65BC\u3044\u3066\u69D8\u3005\u306A\u5B66\u6821\u304C\u82F1\u8A9E\u306E\u8A66\u9A13\u306E\u4EE3\u308F\u308A\u3068\u3057\u3066\u82F1\u691C\u306E\u30B9\u30B3\u30A2\u63D0\u51FA\u3092\u5C0E\u5165\u3057\u3066\u3044\u307E\u3059\u3002<br>\u5F53\u587E\u3067\u306F\u82F1\u691C\u5BFE\u7B56\u306B\u7CBE\u901A\u3057\u305F\u587E\u9577\u304C\u72EC\u81EA\u306B\u4F5C\u308A\u4E0A\u3052\u305F\u6307\u5C0E\u306B\u3088\u308A\u9AD8\u3044\u5408\u683C\u7387\u3092\u3042\u3052\u308B\u82F1\u691C\u5BFE\u7B56\u8B1B\u5EA7\u3092\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u30024\u6280\u80FD\u306E\u529B\u3092\u30A2\u30C3\u30D7\u3055\u305B\u308B\u3060\u3051\u3067\u306F\u306A\u304F\u3001\u82F1\u691C\u5408\u683C\u306F\u81EA\u5206\u81EA\u8EAB\u306E\u81EA\u4FE1\u306B\u3064\u306A\u304C\u308A\u307E\u3059\u3002"
      },
      {
        title: "\u54F2\u5B66\u5BFE\u8A71",
        detail: "\u9AD8\u6728\u587E\u3067\u306F\u3001\u958B\u6821\u5F53\u521D\u3088\u308A\u300C\u54F2\u5B66\u5BFE\u8A71\u300D\u3068\u3044\u3046\u6388\u696D\u3092\u5C0F\u5B66\u751F\u5411\u3051\u306B\u5B9F\u65BD\u3057\u3066\u304A\u308A\u307E\u3059\u3002\u587E\u3067\u54F2\u5B66\uFF1F\uFF01\u3068\u601D\u308F\u308C\u308B\u65B9\u3082\u3044\u3089\u3063\u3057\u3083\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u5B66\u529B\u304C\u4E0A\u304C\u308B\u306E\uFF1F\u3068\u601D\u3046\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u5B9F\u969B\u3001\u54F2\u5B66\u5BFE\u8A71\u3092\u901A\u3057\u3066\u300C\u6587\u7AE0\u3092\u66F8\u304F\u80FD\u529B\u304C\u4E0A\u304C\u3063\u305F\u300D\u300C\u5B66\u6821\u3067\u7A4D\u6975\u7684\u306B\u306A\u3063\u305F\u300D\u300C\u7269\u4E8B\u3092\u591A\u89D2\u7684\u306B\u3068\u3089\u3048\u308B\u529B\u304C\u8EAB\u306B\u3064\u3044\u305F\u300D\u3068\u3044\u3046\u559C\u3073\u306E\u58F0\u3082\u591A\u6570\u3044\u305F\u3060\u3044\u3066\u304A\u308A\u307E\u3059\u3002<br>\u54F2\u5B66\u5BFE\u8A71\u306E\u6388\u696D\u306F\u30C8\u30D4\u30C3\u30AF\u306B\u95A2\u3059\u308B\u304A\u984C\u3092\u8AAD\u307F\u3001\u305D\u3057\u3066\u587E\u9577\u304C\u4F5C\u6210\u3057\u305F\u30AA\u30EA\u30B8\u30CA\u30EB\u30EF\u30FC\u30AF\u30B7\u30FC\u30C8\u306B\u7B54\u3048\u3084\u81EA\u5206\u306E\u8003\u3048\u3092\u8A18\u5165\u3057\u3001\u6700\u5F8C\u306F\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002\u300C\u4EBA\u306F\u4F55\u306E\u305F\u3081\u306B\u751F\u304D\u3066\u3044\u308B\u306E\u304B\u300D\u300C\u306A\u305C\u52C9\u5F37\u3059\u308B\u306E\u304B\u300D\u300C\u5DEE\u5225\u3084\u5BFE\u7ACB\u306E\u539F\u56E0\u306F\u4F55\uFF1F\u300D\u306A\u306E\u65E5\u5E38\u306E\u3042\u3089\u3086\u308B\u7591\u554F\u306B\u57FA\u3065\u3044\u305F\u984C\u6750\u3092\u7528\u3044\u307E\u3059\u3002"
      }
    ];
    const middleLessons = [
      {
        title: "\u5B9A\u671F\u30C6\u30B9\u30C8\u5BFE\u7B56",
        detail: "\u4E2D\u9593\u30C6\u30B9\u30C8\u3001\u671F\u672B\u30C6\u30B9\u30C8\u3067\u6210\u679C\u3092\u51FA\u3059\u305F\u3081\u306B\u5F53\u587E\u3067\u306F\u6BCE\u56DE\u8B1B\u5E2B\u3068\u751F\u5F92\u304C\u8A71\u3057\u5408\u3044\u9069\u5207\u306A\u76EE\u6A19\u8A2D\u5B9A\u3092\u884C\u3044\u307E\u3059\u3002<br />\u4E2D\u5B66\u6821\u306E\u5185\u7533\u70B9\u306F\u9AD8\u6821\u53D7\u9A13\u306B\u5F71\u97FF\u3059\u308B\u305F\u3081\u306B\u5F53\u587E\u306B\u304A\u3044\u3066\u3082\u529B\u3092\u5165\u308C\u3066\u6307\u5C0E\u3057\u307E\u3059\u3002\u307E\u305F\u5177\u4F53\u7684\u306A\u8A08\u753B\u3092\u7ACB\u3066\u3001\u5B9F\u884C\u305D\u3057\u3066\u632F\u308A\u8FD4\u308A\u3092\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u751F\u5F92\u81EA\u3089\u52C9\u5F37\u3059\u308B\u529B\u3092\u8EAB\u306B\u3064\u3051\u307E\u3059\u3002"
      },
      {
        title: "\u9AD8\u6821\u53D7\u9A13\u5BFE\u7B56",
        detail: "\u9069\u5207\u306A\u5FD7\u671B\u6821\u306E\u8A2D\u5B9A\u3092\u884C\u3044\u76EE\u6A19\u306B\u5411\u304B\u3063\u3066\u904E\u53BB\u554F\u7B49\u3092\u4F7F\u7528\u3057\u306A\u304C\u3089\u5B66\u529B\u5411\u4E0A\u3092\u76EE\u6307\u3057\u307E\u3059\u3002<br>\u65E5\u9803\u306E\u5B9A\u671F\u30C6\u30B9\u30C8\u5BFE\u7B56\u306B\u52A0\u3048\u3066\u82E6\u624B\u306A\u5206\u91CE\u3092\u5FB9\u5E95\u7684\u306B\u5B66\u7FD2\u3059\u308B\u8B1B\u5EA7\u3001\u5FDC\u7528\u554F\u984C\u3092\u884C\u3046\u8B1B\u5EA7\u3092\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002"
      },
      {
        title: "\u82F1\u691C\u5BFE\u7B56",
        detail: "\u73FE\u5728\u3001\u9AD8\u6821\u5165\u8A66\u3084\u5927\u5B66\u5165\u8A66\u306B\u65BC\u3044\u3066\u69D8\u3005\u306A\u5B66\u6821\u304C\u82F1\u8A9E\u306E\u8A66\u9A13\u306E\u4EE3\u308F\u308A\u3068\u3057\u3066\u82F1\u691C\u306E\u30B9\u30B3\u30A2\u63D0\u51FA\u3092\u5C0E\u5165\u3057\u3066\u3044\u307E\u3059\u3002<br>\u5F53\u587E\u3067\u306F\u82F1\u691C\u5BFE\u7B56\u306B\u7CBE\u901A\u3057\u305F\u587E\u9577\u304C\u72EC\u81EA\u306B\u4F5C\u308A\u4E0A\u3052\u305F\u6307\u5C0E\u306B\u3088\u308A\u9AD8\u3044\u5408\u683C\u7387\u3092\u3042\u3052\u308B\u82F1\u691C\u5BFE\u7B56\u8B1B\u5EA7\u3092\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u30024\u6280\u80FD\u306E\u529B\u3092\u30A2\u30C3\u30D7\u3055\u305B\u308B\u3060\u3051\u3067\u306F\u306A\u304F\u3001\u82F1\u691C\u5408\u683C\u306F\u81EA\u5206\u81EA\u8EAB\u306E\u81EA\u4FE1\u306B\u3064\u306A\u304C\u308A\u307E\u3059\u3002"
      }
    ];
    const heightLessons = [
      {
        title: "\u96E3\u95A2\u5927\u5B66\u7A81\u7834\u30B3\u30FC\u30B9\uFF08\u6587\u7CFB\u30FB\u7406\u7CFB\uFF09",
        detail: "\u95A2\u95A2\u540C\u7ACB\u30FB\u65E9\u6176\u4E0A\u667A\u3001\u56FD\u516C\u7ACB\u5927\u5B66\u3092\u76EE\u6307\u3059\u30B3\u30FC\u30B9\u3068\u306A\u308A\u307E\u3059\u3002\u5B66\u7FD2\u6307\u5C0E\u304B\u3089\u3001\u5B66\u7FD2\u65B9\u6CD5\u306E\u63D0\u793A\u307E\u3067\u5305\u62EC\u7684\u306B\u5927\u5B66\u53D7\u9A13\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002"
      },
      {
        title: "\u5927\u5B66\u5165\u8A66\u57FA\u790E\u5BFE\u7B56\u30B3\u30FC\u30B9",
        detail: "\u5165\u8A66\u306B\u5411\u3051\u3066\u3001\u5404\u6559\u79D1\u306E\u57FA\u790E\u3092\u56FA\u3081\u308B\u30B3\u30FC\u30B9\u3068\u306A\u308A\u307E\u3059\u3002\u82F1\u8A9E\u3067\u3042\u308C\u3070\u3001\u57FA\u790E\u6587\u6CD5\u30FB\u57FA\u790E\u9577\u6587\u3001\u6570\u5B66\u3067\u3042\u308C\u3070I&A\u306A\u3069\u5165\u8A66\u306B\u5411\u3051\u3066\u5404\u6559\u79D1\u306E\u57FA\u790E\u3092\u5B66\u7FD2\u3057\u307E\u3059\u3002"
      },
      {
        title: "\u5B9A\u671F\u30C6\u30B9\u30C8\u5BFE\u7B56\u30B3\u30FC\u30B9",
        detail: "\u5B66\u6821\u3067\u306E\u5B66\u3073\u3092\u5B9A\u7740\u3055\u305B\u3001\u5B9A\u671F\u30C6\u30B9\u30C8\u3067\u306E\u9AD8\u5F97\u70B9\u3092\u76EE\u6307\u3057\u307E\u3059\u3002\u5148\u3005\u306E\u6307\u5B9A\u6821\u63A8\u85A6\u30FB\u7DCF\u5408\u578B\u9078\u629C\u306A\u3069\u3092\u898B\u636E\u3048\u307E\u3059\u3002"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Recommend = __nuxt_component_0;
      const _component_AppButton = __nuxt_component_1;
      const _component_AccordionLesson = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Recommend, null, null, _parent));
      _push(`<div class="concept" data-v-967fa277><div class="title" data-v-967fa277><h1 class="top" data-v-967fa277>\u9AD8\u6728\u587E\u306E\u6559\u80B2\u6982\u5FF5</h1><p class="detail" data-v-967fa277> \u52C9\u5F37\u306F\u4EBA\u751F\u3092\u8C4A\u304B\u306B\u751F\u304D\u308B\u305F\u3081\u306E\u9053\u5177\u306E\u4E00\u3064\u3067\u3059\u3002<br data-v-967fa277> \u6210\u7E3E\u30A2\u30C3\u30D7\u3084\u5FD7\u671B\u6821\u5408\u683C\u3092\u901A\u3058\u3066\u3001\u5B50\u3069\u3082\u305F\u3061\u306E<strong class="strong1" data-v-967fa277>\u300C\u81EA\u5DF1\u5B9F\u73FE\u300D</strong>\u3092\u53F6\u3048\u308B\u5834\u6240\u3067\u3042\u308A\u305F\u3044\u3068\u601D\u3063\u3066\u3044\u307E\u3059\u3002<br data-v-967fa277> \u304A\u5B50\u69D8\u306E\u9650\u308A\u306A\u3044\u53EF\u80FD\u6027\u3092\u4FE1\u3058\u3066\u3001\u4FE1\u983C\u95A2\u4FC2\u3092\u7BC9\u304D\u3001\u660E\u78BA\u306A\u76EE\u6A19\u8A2D\u5B9A\u3092\u884C\u3044\u3001<br data-v-967fa277> \u8CEA\u306E\u9AD8\u3044\u6388\u696D\u30FB\u30B3\u30FC\u30C1\u30F3\u30B0\u3092\u53D7\u3051\u308B\u3053\u3068\u3067\u3001\u304A\u5B50\u69D8\u306E\u6210\u7E3E\u30A2\u30C3\u30D7\u3001\u76EE\u6A19\u9054\u6210\u306B\u5C0E\u304D\u307E\u3059\uFF01\uFF01 </p></div><ul class="list" data-v-967fa277><li class="item" data-v-967fa277><img${ssrRenderAttr("src", unref(study))} data-v-967fa277><div class="text" data-v-967fa277><h2 class="title" data-v-967fa277>\u597D\u5947\u5FC3\u3084\u7A4D\u6975\u6027\u3092\u5F15\u304D\u51FA\u3059\u6307\u5C0E</h2><div class="explanation" data-v-967fa277><p data-v-967fa277> \u53D7\u3051\u8EAB\u3067\u306F\u306A\u304F\u81EA\u3089<strong class="strong2" data-v-967fa277>\u7A4D\u6975\u7684</strong>\u306B\u5B66\u307C\u3046\u3068\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002<br data-v-967fa277>\u7A4D\u6975\u7684\u306B\u60C5\u5831\u3092\u53CE\u96C6\u3059\u308B\u7656\u304C\u8EAB\u306B\u3064\u304F\u305F\u3081\u3001\u65B0\u305F\u306A\u5206\u91CE\u306B\u30C1\u30E3\u30EC\u30F3\u30B8\u3092\u3059\u308B\u306A\u3069\u3001\u9AD8\u6728\u587E\u306B\u901A\u3046\u751F\u5F92\u305F\u3061\u306F<strong class="strong2" data-v-967fa277>\u751F\u304D\u751F\u304D</strong>\u3068\u65E5\u3005\u3092\u904E\u3054\u3057\u3066\u3044\u307E\u3059\u3002 </p></div></div></li><li class="item" data-v-967fa277><div class="text" data-v-967fa277><h2 class="title" data-v-967fa277>\u81EA\u7ACB\u30FB\u81EA\u5F8B\u3057\u305F\u5B66\u7FD2\u8005\u3092\u80B2\u3066\u308B\u30AB\u30EA\u30AD\u30E5\u30E9\u30E0</h2><div class="explanation" data-v-967fa277><p data-v-967fa277><strong class="strong2" data-v-967fa277>\u81EA\u7ACB\u3057\u305F\u4EBA\u9593</strong>\u3092\u80B2\u3066\u305F\u3044\u3068\u3044\u3046\u601D\u3044\u3067\u6307\u5C0E\u3092\u3055\u305B\u3066\u3044\u305F\u3060\u3044\u3066\u304A\u308A\u307E\u3059\u3002<br data-v-967fa277>\u826F\u3044\u6210\u7E3E\u3092\u3068\u308B\u305F\u3081\u306B<strong class="strong2" data-v-967fa277>\u8A08\u753B</strong>\u3092\u7ACB\u3066\u3066\u52C9\u5F37\u3059\u308B\u7FD2\u6163\u304C\u3064\u304F\u3068\u3001\u4E00\u751F\u5F79\u306B\u7ACB\u3064\u7BA1\u7406\u30B9\u30AD\u30EB\u304C\u8EAB\u306B\u4ED8\u304D\u307E\u3059\u3002 </p></div></div><img${ssrRenderAttr("src", unref(study))} data-v-967fa277></li><li class="item" data-v-967fa277><img${ssrRenderAttr("src", unref(study))} data-v-967fa277><div class="text" data-v-967fa277><h2 class="title" data-v-967fa277>\u81EA\u4FE1\u3092\u3064\u3051\u308B\u6559\u80B2</h2><div class="explanation" data-v-967fa277><p data-v-967fa277><strong class="strong2" data-v-967fa277>\u5B66\u529B\u304C\u5411\u4E0A</strong>\u3059\u308B\u305F\u3081\u3001\u81EA\u4FE1\u3092\u3082\u3063\u3066\u65E5\u3005\u3092\u904E\u3054\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002<br data-v-967fa277><strong class="strong2" data-v-967fa277>\u6210\u529F\u4F53\u9A13</strong>\u3092\u52C9\u5F37\u3092\u901A\u3058\u3066\u7A4D\u307F\u91CD\u306D\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u5B66\u6821\u751F\u6D3B\u306F\u52FF\u8AD6\u3001\u4F55\u304B\u7269\u4E8B\u3092\u59CB\u3081\u308B\u3068\u304D\u306B\u81EA\u5206\u306A\u3089\u3067\u304D\u308B\uFF01\u3068\u3044\u3046\u611F\u899A\u3092\u6301\u3063\u3066\u751F\u6D3B\u3067\u304D\u307E\u3059\u3002 </p></div></div></li><li class="item" data-v-967fa277><div class="text" data-v-967fa277><h2 class="title" data-v-967fa277>\u5B66\u7FD2\u7FD2\u6163\u306E\u5B9A\u7740</h2><div class="explanation" data-v-967fa277><p data-v-967fa277> \u587E\u3067\u306F\u3001\u5168\u6559\u79D1\u57FA\u790E\u5185\u5BB9\u301C\u5FDC\u7528\u30FB\u767A\u5C55\u307E\u3067\u3092\u5B66\u7FD2\u3057\u307E\u3059\u3002<br data-v-967fa277>\u305D\u3057\u3066\u5BB6\u3067\u306F\u3001\u65E2\u7FD2\u4E8B\u9805\u306E\u78BA\u8A8D\u3084\u3001\u4E88\u7FD2\u3092\u884C\u3046\u3053\u3068\u306B\u3088\u3063\u3066\u3001<strong class="strong2" data-v-967fa277>\u587E\u3067\u306E\u5B66\u3073\xD7\u5BB6\u5EAD\u5B66\u7FD2</strong>\u304C\u30B5\u30A4\u30AF\u30EB\u3068\u5316\u3057\u307E\u3059\u3002\u826F\u3044\u30B5\u30A4\u30AF\u30EB\u3092\u751F\u307F\u51FA\u3057\u3001\u3055\u3089\u306A\u308B\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7\u3078\u3068\u3064\u306A\u304C\u308A\u307E\u3059\u3002 </p></div></div><img${ssrRenderAttr("src", unref(study))} data-v-967fa277></li></ul>`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: "button",
        title: "\u3082\u3063\u3068\u898B\u308B",
        to: ""
      }, null, _parent));
      _push(`</div><div class="strong-point" data-v-967fa277><h1 class="top" data-v-967fa277>\u5F37\u307F</h1><ul class="list" data-v-967fa277><li class="item" data-v-967fa277><div class="text" data-v-967fa277><h2 class="title" data-v-967fa277>\u304D\u3081\u7D30\u3084\u304B\u306A\u6307\u5C0E</h2><p class="title-detail" data-v-967fa277> \u751F\u5F92\u9054\u304C\u4F55\u3067\u8E93\u3044\u3066\u3044\u308B\u306E\u304B\uFF0C\u3069\u3053\u304C\u7406\u89E3\u3067\u304D\u3066\u3044\u306A\u3044\u306E\u304B\u3001\u306A\u3069\u3092\u7684\u78BA\u306B\u628A\u63E1\u3057\u3001\u500B\u4EBA\u306B\u5408\u3063\u305F\u6700\u9069\u306A\u6307\u5C0E\u3092\u884C\u3044\u307E\u3059\u3002\u500B\u5225\u6307\u5C0E\u306A\u3089\u3067\u306F\u306E\u500B\u5225\u6700\u9069\u5316\u3055\u308C\u305F\u6307\u5C0E\u3067\u3001\u52B9\u7387\u3088\u304F\u6210\u679C\u3092\u51FA\u3059\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002 </p></div></li><li class="item" data-v-967fa277><div class="text" data-v-967fa277><h2 class="title" data-v-967fa277>\u9AD8\u3044\u6307\u5C0E\u529B</h2><p class="title-detail" data-v-967fa277> \u9AD8\u6821\u3067\u5B66\u79D1\u8CAC\u4EFB\u8005\u3068\u3057\u3066\u52E4\u52D9\u3057\u3066\u3044\u305F\u4EE3\u8868\u3092\u59CB\u3081\u3001\u6559\u80B2\u306B\u71B1\u3044\u6C17\u6301\u3061\u3092\u6301\u3064\u8B1B\u5E2B\u9054\u304C\u6307\u5C0E\u3057\u307E\u3059\u3002\u307E\u305F\u3001\u9AD8\u5B66\u6B74\u8B1B\u5E2B\u3082\u591A\u6570\u5728\u7C4D\u3057\u3066\u304A\u308A\u3001\u5E45\u5E83\u3044\u30EC\u30D9\u30EB\u306E\u751F\u5F92\u306E\u6307\u5C0E\u304C\u53EF\u80FD\u3068\u306A\u308A\u307E\u3059\u3002 </p></div></li><li class="item" data-v-967fa277><div class="text" data-v-967fa277><h2 class="title" data-v-967fa277>\u81EA\u7ACB\u3092\u4FC3\u3059\u6307\u5C0E</h2><p class="title-detail" data-v-967fa277> \u5B66\u7FD2\u306E\u6700\u7D42\u76EE\u7684\u5730\u306F\u81EA\u7ACB\u5B66\u7FD2\u8005\u3092\u80B2\u6210\u3059\u308B\u3053\u3068\u3067\u3059\u3002\u81EA\u5206\u306E\u76EE\u6A19\u3092\u9054\u6210\u3059\u308B\u305F\u3081\u306B\u306F\u4F55\u3092\u3059\u308C\u3070\u826F\u3044\u306E\u304B\u3002\u4F55\u3092\u6211\u6162\u3057\u3066\u4F55\u306B\u6642\u9593\u3092\u5272\u304F\u3079\u304D\u306A\u306E\u304B\u3001\u3069\u306E\u3088\u3046\u306B\u3059\u308C\u3070\u52B9\u7387\u304C\u826F\u3044\u306E\u304B\u306A\u3069\u3092\u8003\u3048\u3089\u308C\u308B\u5B66\u7FD2\u8005\u306E\u80B2\u6210\u3092\u76EE\u6307\u3057\u307E\u3059\u3002 </p></div></li></ul></div><div class="lesson" data-v-967fa277><h1 class="top" data-v-967fa277>\u6388\u696D\u5185\u5BB9</h1><div class="details" data-v-967fa277>`);
      _push(ssrRenderComponent(_component_AccordionLesson, {
        title: "\u5C0F\u5B66\u751F\u8B1B\u5EA7",
        default: "\u57FA\u790E\u5B66\u529B\u5411\u4E0A\u8B1B\u5EA7",
        lessons: elementaryLessons
      }, null, _parent));
      _push(ssrRenderComponent(_component_AccordionLesson, {
        title: "\u4E2D\u5B66\u751F\u8B1B\u5EA7",
        default: "\u5B9A\u671F\u30C6\u30B9\u30C8\u5BFE\u7B56",
        lessons: middleLessons
      }, null, _parent));
      _push(ssrRenderComponent(_component_AccordionLesson, {
        title: "\u9AD8\u6821\u751F\u8B1B\u5EA7",
        default: "\u96E3\u95A2\u5927\u5B66\u7A81\u7834\u30B3\u30FC\u30B9\uFF08\u6587\u7CFB\u30FB\u7406\u7CFB\uFF09",
        lessons: heightLessons
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: "button",
        title: "\u6388\u696D\u6599\u4E00\u89A7\u306F\u3053\u3061\u3089",
        to: ""
      }, null, _parent));
      _push(`</div><div class="notice" data-v-967fa277><h1 class="top" data-v-967fa277>\u751F\u5F92\u306E\u58F0</h1><div class="detail" data-v-967fa277><img class="image"${ssrRenderAttr("src", unref(study))} data-v-967fa277><div class="contents" data-v-967fa277><h3 class="title" data-v-967fa277>\u671F\u672B\u30C6\u30B9\u30C8 \u70B9\u6570\u30A2\u30C3\u30D7\uFF01</h3><p data-v-967fa277> \u6570\u5B66\u306F60\u70B9\u53F0\u304B\u3089\u4ECA\u56DE\u306E\u671F\u672B\u30C6\u30B9\u30C8\u3067\u306F92\u70B9\u3092\u30DE\u30FC\u30AF\u3057\u307E\u3057\u305F\u3002\u82E6\u624B\u6559\u79D1\u306E\u82F1\u8A9E\u308260\u70B9\u53F0\u304B\u308980\u70B9\u307E\u3067\u4F38\u3073\u307E\u3057\u305F\uFF01\u300C\u9AD8\u6728\u587E\u3067\u306F\u57FA\u790E\u3092\u5FB9\u5E95\u3057\u3066\u6559\u3048\u3066\u304F\u308C\u308B\u3001\u5206\u304B\u3089\u306A\u3044\u3068\u3053\u308D\u3082\u308F\u304B\u308B\u307E\u3067\u6559\u3048\u3066\u304F\u308C\u308B\u306E\u3067\u52C9\u5F37\u3057\u3066\u3044\u3066\u697D\u3057\u3044\u3067\u3059\uFF01\u300D </p></div></div><div class="detail" data-v-967fa277><img class="image"${ssrRenderAttr("src", unref(study))} data-v-967fa277><div class="contents" data-v-967fa277><h3 class="title" data-v-967fa277>\u5165\u587E\u5F8C3\u304B\u6708\u30675\u6559\u79D1370\u2192400\u70B9\u30AA\u30FC\u30D0\u30FC\uFF01</h3><p data-v-967fa277> \u6570\u5B66\u306F60\u70B9\u53F0\u304B\u3089\u4ECA\u56DE\u306E\u671F\u672B\u30C6\u30B9\u30C8\u3067\u306F92\u70B9\u3092\u30DE\u30FC\u30AF\u3057\u307E\u3057\u305F\u3002\u82E6\u624B\u6559\u79D1\u306E\u82F1\u8A9E\u308260\u70B9\u53F0\u304B\u308980\u70B9\u307E\u3067\u4F38\u3073\u307E\u3057\u305F\uFF01\u300C\u9AD8\u6728\u587E\u3067\u306F\u57FA\u790E\u3092\u5FB9\u5E95\u3057\u3066\u6559\u3048\u3066\u304F\u308C\u308B\u3001\u5206\u304B\u3089\u306A\u3044\u3068\u3053\u308D\u3082\u308F\u304B\u308B\u307E\u3067\u6559\u3048\u3066\u304F\u308C\u308B\u306E\u3067\u52C9\u5F37\u3057\u3066\u3044\u3066\u697D\u3057\u3044\u3067\u3059\uFF01\u300D </p></div></div>`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: "button",
        title: "\u3082\u3063\u3068\u898B\u308B",
        to: ""
      }, null, _parent));
      _push(`</div><div class="introduce" data-v-967fa277><h1 class="top" data-v-967fa277>\u587E\u9577\u306E\u7D39\u4ECB</h1><div class="detail" data-v-967fa277><img class="image"${ssrRenderAttr("src", unref(boss))} data-v-967fa277><div class="contents" data-v-967fa277><p data-v-967fa277> 1995\u5E74\u751F\u307E\u308C\u3002\u5948\u826F\u770C\u51FA\u8EAB\u3002\u95A2\u897F\u5B66\u9662\u5927\u5B66\u6CD5\u5B66\u90E8\u653F\u6CBB\u79D1(\u6559\u8077\u8AB2\u7A0B\u306B\u3066\u82F1\u8A9E\u6559\u54E1\u514D\u8A31\u53D6\u5F97)\u5352\u696D\u3002\u5927\u962A\u5E9C\u5185\u306E\u9AD8\u6821\u6559\u8AED\u3092\u7D4C\u3066\u3001\u300C\u5B50\u4F9B\u305F\u3061\u304C\u5922\u3092\u3082\u3063\u3066\u524D\u3092\u5411\u3044\u3066\u751F\u304D\u3066\u3044\u304F\u793E\u4F1A\u3092\u5275\u308B\u300D\u305F\u3081\u30012021\u5E74\u306B\u9AD8\u6728\u587E\u3092\u5275\u7ACB\u3002\u52C9\u5F37\u82E6\u624B\u304B\u3089\u666E\u901A\u3078\u3001\u666E\u901A\u304B\u3089\u5F97\u610F\u3078\u3001\u6BB5\u968E\u3092\u7D4C\u3066\u5B50\u4F9B\u305F\u3061\u304C\u5B66\u529B\u3092\u30A2\u30C3\u30D7\u3055\u305B\u308B\u6307\u5C0E\u3092\u5F97\u610F\u3068\u3057\u3066\u304A\u308A\u3001\u3082\u3068\u3082\u3068\u52C9\u5F37\u304C\u82E6\u624B\u3060\u3063\u305F\u5B50\u4F9B\u305F\u3061\u304C\u5927\u5E45\u306B\u504F\u5DEE\u5024\u30A2\u30C3\u30D7\u3092\u9042\u3052\u308B\u3053\u3068\u3082\u5C11\u306A\u304F\u306A\u3044\u3002 </p><br data-v-967fa277><div class="lisence" data-v-967fa277><h4 data-v-967fa277>\u4FDD\u6709\u8CC7\u683C</h4><ul class="list" data-v-967fa277><li data-v-967fa277>\u5B9F\u7528\u82F1\u8A9E\u6280\u80FD\u691C\u5B9A\uFF11\u7D1A</li><li data-v-967fa277>TOEIC935</li><li data-v-967fa277>\u4E2D\u9AD8\u82F1\u8A9E\u6559\u54E1\u514D\u8A31\u72B6</li><li data-v-967fa277>\u5B66\u7FD2\u5FC3\u7406\u30AB\u30A6\u30F3\u30BB\u30E9\u30FC</li></ul></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/staff",
        class: "staff"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btnarrow4" data-v-967fa277${_scopeId}>\u305D\u306E\u4ED6\u30B9\u30BF\u30C3\u30D5</button>`);
          } else {
            return [
              createVNode("button", { class: "btnarrow4" }, "\u305D\u306E\u4ED6\u30B9\u30BF\u30C3\u30D5")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_Recommend, null, null, _parent));
      _push(`<div class="place" data-v-967fa277><h1 class="top" data-v-967fa277>\u30A2\u30AF\u30BB\u30B9</h1><div class="map" data-v-967fa277><div class="detail" data-v-967fa277><iframe class="map-image" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.5595460997824!2d135.8249267842885!3d34.716287712553104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013958f8272bc7%3A0xaf96b7315ec3be99!2z44CSNjE5LTAyMTYg5Lqs6YO95bqc5pyo5rSl5bed5biC5bee6KaL5Y-w77yU5LiB55uu77yR4oiS77ySIOaWsOiIiOODk-ODqw!5e0!3m2!1sja!2sjp!4v1698983667014!5m2!1sja!2sjp" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-967fa277></iframe><h3 data-v-967fa277>\u6728\u6D25\u5DDD\u5DDE\u898B\u53F0\u6559\u5BA4</h3><p class="address" data-v-967fa277> \u3012619\u20100216<br data-v-967fa277>\u4EAC\u90FD\u5E9C\u6728\u6D25\u5DDD\u5E02\u5DDE\u898B\u53F04-1-2<br data-v-967fa277>\u65B0\u8208\u30D3\u30EB203 </p></div><div class="detail" data-v-967fa277><iframe class="map-image" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.2744402002118!2d135.7831917756798!3d34.69825728334406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013b0d24abdc35%3A0x349bf7772edaee4f!2z44K744Oz44OB44Ol44Oq44O8MjHjg5Xjgqnjgrnjg4bjg7zjg6vlpYjoia_opb_lpKflr7rlupc!5e0!3m2!1sja!2sjp!4v1698984069321!5m2!1sja!2sjp" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-967fa277></iframe><h3 data-v-967fa277>\u5948\u826F\u5927\u548C\u897F\u5927\u5BFA\u6821</h3><p class="address" data-v-967fa277> \u3012631-0803<br data-v-967fa277>\u5948\u826F\u770C\u5948\u826F\u5E02\u5C71\u9675\u753A127-1<br data-v-967fa277>\u30D5\u30A9\u30FC\u30B9\u30C6\u30FC\u30EB\u5948\u826F\u897F\u5927\u5BFA\u5E97\u5185 </p></div></div></div><div class="request" data-v-967fa277>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/details",
        class: "contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text" data-v-967fa277${_scopeId}>\u8CC7\u6599\u8ACB\u6C42\u306F\u3053\u3061\u3089\uFF01</p>`);
          } else {
            return [
              createVNode("p", { class: "text" }, "\u8CC7\u6599\u8ACB\u6C42\u306F\u3053\u3061\u3089\uFF01")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-967fa277"]]);

export { index as default };
//# sourceMappingURL=index-454391ae.mjs.map
