import { defineComponent, computed, unref, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { I as IMAGE } from "./image-384ef720.js";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Navigate",
  __ssrInlineRender: true,
  props: {
    from: {}
  },
  setup(__props) {
    const props = __props;
    const fromDetails = computed(() => props.from === "details");
    const fromConfirm = computed(() => props.from === "confirm");
    const fromCompleted = computed(() => props.from === "completed");
    const one = fromDetails.value ? IMAGE.black_one : IMAGE.white_one;
    const two = fromConfirm.value ? IMAGE.black_two : IMAGE.white_two;
    const three = fromCompleted.value ? IMAGE.black_three : IMAGE.white_three;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="top" data-v-4382c15a>資料請求</h1><div class="nav" data-v-4382c15a><div class="number" data-v-4382c15a><img class="image"${ssrRenderAttr("src", unref(one))} data-v-4382c15a><div class="line1" data-v-4382c15a></div><img class="image -center"${ssrRenderAttr("src", unref(two))} data-v-4382c15a><div class="line2" data-v-4382c15a></div><img class="image"${ssrRenderAttr("src", unref(three))} data-v-4382c15a></div><div class="state" data-v-4382c15a><p class="${ssrRenderClass([{ "-active": fromDetails.value }, "text"])}" data-v-4382c15a>入力</p><p class="${ssrRenderClass([{ "-active": fromConfirm.value }, "text -center"])}" data-v-4382c15a>確認</p><p class="${ssrRenderClass([{ "-active": fromCompleted.value }, "text"])}" data-v-4382c15a>完了</p></div></div><!--]-->`);
    };
  }
});
const Navigate_vue_vue_type_style_index_0_scoped_4382c15a_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4382c15a"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Navigate-73fd9b8c.js.map
