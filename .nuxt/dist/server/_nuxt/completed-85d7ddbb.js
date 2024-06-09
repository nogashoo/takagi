import { _ as __nuxt_component_0 } from "./Navigate-73fd9b8c.js";
import { _ as __nuxt_component_1 } from "./AppButton-5a60c7e3.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./image-384ef720.js";
import "./nuxt-link-37d54afa.js";
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
const completed_vue_vue_type_style_index_0_scoped_630e1ff8_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navigate = __nuxt_component_0;
  const _component_AppButton = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Navigate, { from: "completed" }, null, _parent));
  _push(`<div class="contents" data-v-630e1ff8><div class="text" data-v-630e1ff8><p class="main" data-v-630e1ff8>申し込みが完了しました！</p><br data-v-630e1ff8><p data-v-630e1ff8> 後日こちらからメールまたはお電話にてご返信させていただきますのでお待ちください！ </p></div></div>`);
  _push(ssrRenderComponent(_component_AppButton, {
    class: "button",
    title: "トップページに戻る",
    to: ""
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/completed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const completed = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-630e1ff8"]]);
export {
  completed as default
};
//# sourceMappingURL=completed-85d7ddbb.js.map
