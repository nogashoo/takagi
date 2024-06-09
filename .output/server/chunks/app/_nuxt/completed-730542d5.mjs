import { _ as __nuxt_component_0 } from './Navigate-73fd9b8c.mjs';
import { _ as __nuxt_component_1 } from './AppButton-5a60c7e3.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './image-384ef720.mjs';
import '../../handlers/renderer.mjs';
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
import './nuxt-link-37d54afa.mjs';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navigate = __nuxt_component_0;
  const _component_AppButton = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Navigate, { from: "completed" }, null, _parent));
  _push(`<div class="contents" data-v-9304ae38><div class="text" data-v-9304ae38><p class="main" data-v-9304ae38>\u7533\u3057\u8FBC\u307F\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\uFF01</p><br data-v-9304ae38><p data-v-9304ae38> \u5F8C\u65E5\u3053\u3061\u3089\u304B\u3089\u30E1\u30FC\u30EB\u307E\u305F\u306F\u304A\u96FB\u8A71\u306B\u3066\u3054\u8FD4\u4FE1\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u306E\u3067\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\uFF01 </p></div></div>`);
  _push(ssrRenderComponent(_component_AppButton, {
    class: "button",
    title: "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u306B\u623B\u308B",
    to: "hoge"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/completed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const completed = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9304ae38"]]);

export { completed as default };
//# sourceMappingURL=completed-730542d5.mjs.map
