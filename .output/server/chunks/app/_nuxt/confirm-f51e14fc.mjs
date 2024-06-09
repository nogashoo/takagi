import { _ as __nuxt_component_0 } from './Navigate-73fd9b8c.mjs';
import { _ as __nuxt_component_1 } from './AppButton-5a60c7e3.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-37d54afa.mjs';
import { u as useContact } from './useContact-098503cc.mjs';
import { _ as _export_sfc, u as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, unref, withCtx, createVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { I as IMAGE } from './image-384ef720.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "confirm",
  __ssrInlineRender: true,
  setup(__props) {
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navigate = __nuxt_component_0;
      const _component_AppButton = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Navigate, { from: "confirm" }, null, _parent));
      _push(`<div class="contents" data-v-687e8ebd><dl class="form-area" data-v-687e8ebd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>\u304A\u540D\u524D(\u4FDD\u8B77\u8005\u69D8)</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).parentName)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>\u304A\u540D\u524D(\u30AB\u30BF\u30AB\u30CA)</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).parentNameKana)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>\u304A\u540D\u524D(\u304A\u5B50\u69D8)</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).childName)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>\u304A\u540D\u524D(\u30AB\u30BF\u30AB\u30CA)</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).childNameKana)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).email)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>\u96FB\u8A71\u756A\u53F7</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).phoneNumber)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>\u901A\u308F\u308C\u3066\u3044\u308B\u5B66\u6821</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).schoolName)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>\u5B66\u5E74</span></dt><dd class="label-list" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).grade)} \u5E74</p></dd></dl><dl class="form-other-area" data-v-687e8ebd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>\u5B66\u7FD2\u72B6\u6CC1\u3084\u5B66\u7FD2\u4E0A\u306E\u8AB2\u984C</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).messagAssignment)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>\u8CC7\u6599\u8ACB\u6C42\u306B\u95A2\u3057\u3066</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).messageDocument)}</p></dd></dl></div><div class="button-area" data-v-687e8ebd>`);
      _push(ssrRenderComponent(_component_AppButton, {
        title: "\u9001\u4FE1\u3059\u308B",
        onClick: clickSend
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "back",
        to: "/details"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text" data-v-687e8ebd${_scopeId}>\u623B\u308B</p><img class="arrow"${ssrRenderAttr("src", unref(IMAGE).arrow)} data-v-687e8ebd${_scopeId}>`);
          } else {
            return [
              createVNode("p", { class: "text" }, "\u623B\u308B"),
              createVNode("img", {
                class: "arrow",
                src: unref(IMAGE).arrow
              }, null, 8, ["src"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/confirm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const confirm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-687e8ebd"]]);

export { confirm as default };
//# sourceMappingURL=confirm-f51e14fc.mjs.map
