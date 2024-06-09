import { _ as __nuxt_component_0 } from './nuxt-link-37d54afa.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppButton",
  __ssrInlineRender: true,
  props: {
    title: {},
    to: {},
    isDisable: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: ["button", { "is-disabled": _ctx.isDisable }],
        to: _ctx.to
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="title" data-v-434c5216${_scopeId}>${ssrInterpolate(_ctx.title)}</p>`);
          } else {
            return [
              createVNode("p", { class: "title" }, toDisplayString(_ctx.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-434c5216"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=AppButton-5a60c7e3.mjs.map
