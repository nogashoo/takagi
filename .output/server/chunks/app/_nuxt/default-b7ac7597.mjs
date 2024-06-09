import { _ as __nuxt_component_0$1 } from './nuxt-link-37d54afa.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { I as IMAGE } from './image-384ef720.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-6720485a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="logo"${ssrRenderAttr("src", unref(IMAGE).logo)} data-v-6720485a${_scopeId}><img class="takagi"${ssrRenderAttr("src", unref(IMAGE).takagi)} data-v-6720485a${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "logo",
                src: unref(IMAGE).logo
              }, null, 8, ["src"]),
              createVNode("img", {
                class: "takagi",
                src: unref(IMAGE).takagi
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="contents" data-v-6720485a><ul class="list" data-v-6720485a><li class="gnavi__list" data-v-6720485a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u9AD8\u6728\u587E\u306B\u3064\u3044\u3066`);
          } else {
            return [
              createTextVNode("\u9AD8\u6728\u587E\u306B\u3064\u3044\u3066")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="dropdown__lists" data-v-6720485a><li class="dropdown__list" data-v-6720485a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4F1A\u793E\u6982\u8981`);
          } else {
            return [
              createTextVNode("\u4F1A\u793E\u6982\u8981")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="dropdown__list" data-v-6720485a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6388\u696D\u6599\u4E00\u89A7`);
          } else {
            return [
              createTextVNode("\u6388\u696D\u6599\u4E00\u89A7")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="dropdown__list" data-v-6720485a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/staff"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u30B9\u30BF\u30C3\u30D5\u7D39\u4ECB`);
          } else {
            return [
              createTextVNode("\u30B9\u30BF\u30C3\u30D5\u7D39\u4ECB")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="gnavi__list" data-v-6720485a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u587E\u751F\u306E\u58F0`);
          } else {
            return [
              createTextVNode("\u587E\u751F\u306E\u58F0")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="gnavi__list" data-v-6720485a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u587E\u9577\u306E\u30D6\u30ED\u30B0`);
          } else {
            return [
              createTextVNode("\u587E\u9577\u306E\u30D6\u30ED\u30B0")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="gnavi__list" data-v-6720485a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u304A\u554F\u3044\u5408\u308F\u305B`);
          } else {
            return [
              createTextVNode("\u304A\u554F\u3044\u5408\u308F\u305B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="dropdown__lists" data-v-6720485a><li class="dropdown__list" data-v-6720485a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u8CC7\u6599\u8ACB\u6C42`);
          } else {
            return [
              createTextVNode("\u8CC7\u6599\u8ACB\u6C42")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="dropdown__list" data-v-6720485a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u63A1\u7528\u60C5\u5831`);
          } else {
            return [
              createTextVNode("\u63A1\u7528\u60C5\u5831")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="dropdown__list" data-v-6720485a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u3088\u304F\u3042\u308B\u8CEA\u554F`);
          } else {
            return [
              createTextVNode("\u3088\u304F\u3042\u308B\u8CEA\u554F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li></ul></nav><div class="sns" data-v-6720485a><a class="link" href="https://instagram.com/oyayubidesu?igshid=OGQ5ZDc2ODk2ZA%3D%3D&amp;utm_source=qr" data-v-6720485a><img class="instagram"${ssrRenderAttr("src", unref(IMAGE).instagram)} data-v-6720485a></a><a class="link" href="https://youtube.com/@user-rw3ds2wf1b?si=uyQzKbwl2cC4nsKY" data-v-6720485a><img class="youtube"${ssrRenderAttr("src", unref(IMAGE).youtube)} data-v-6720485a></a></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6720485a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-ac02e453><div class="main" data-v-ac02e453><nav class="contents" data-v-ac02e453><p class="title" data-v-ac02e453>\u76EE\u6B21</p><ul class="list" data-v-ac02e453><li data-v-ac02e453>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u9AD8\u6728\u587E\u306B\u3064\u3044\u3066`);
          } else {
            return [
              createTextVNode("\u9AD8\u6728\u587E\u306B\u3064\u3044\u3066")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-ac02e453>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u587E\u751F\u306E\u58F0`);
          } else {
            return [
              createTextVNode("\u587E\u751F\u306E\u58F0")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-ac02e453>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u587E\u9577\u306E\u30D6\u30ED\u30B0`);
          } else {
            return [
              createTextVNode("\u587E\u9577\u306E\u30D6\u30ED\u30B0")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-ac02e453>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u304A\u554F\u3044\u5408\u308F\u305B`);
          } else {
            return [
              createTextVNode("\u304A\u554F\u3044\u5408\u308F\u305B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-ac02e453>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u8CC7\u6599\u8ACB\u6C42`);
          } else {
            return [
              createTextVNode("\u8CC7\u6599\u8ACB\u6C42")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav><div data-v-ac02e453><p class="title" data-v-ac02e453>\u305D\u306E\u4ED6</p><address class="address" data-v-ac02e453> \u96FB\u8A71\uFF1A<a href="tel:00000000000" data-v-ac02e453>00000000000</a> <br data-v-ac02e453> \u30E1\u30FC\u30EB\uFF1A<a href="mailto:example@gmail.com" data-v-ac02e453>example@gmail.com</a></address></div><div class="sns" data-v-ac02e453><a class="link" href="https://instagram.com/oyayubidesu?igshid=OGQ5ZDc2ODk2ZA%3D%3D&amp;utm_source=qr" data-v-ac02e453><img class="instagram"${ssrRenderAttr("src", unref(IMAGE).instagram)} data-v-ac02e453></a><a class="link" href="https://youtube.com/@user-rw3ds2wf1b?si=uyQzKbwl2cC4nsKY" data-v-ac02e453><img class="youtube"${ssrRenderAttr("src", unref(IMAGE).youtube)} data-v-ac02e453></a></div><small class="copy-right" data-v-ac02e453>\xA9 YYYY \u9AD8\u6728\u587E</small></div><div class="logo" data-v-ac02e453><img class="logo-mark"${ssrRenderAttr("src", unref(IMAGE).logo)} data-v-ac02e453></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ac02e453"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main class="main" data-v-6d65195e>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6d65195e"]]);

export { _default as default };
//# sourceMappingURL=default-b7ac7597.mjs.map
