import { _ as __nuxt_component_0 } from "./Navigate-73fd9b8c.js";
import { _ as __nuxt_component_1 } from "./AppButton-5a60c7e3.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-37d54afa.js";
import { u as useContact } from "./useContact-098503cc.js";
import { u as useRouter, _ as _export_sfc } from "../server.mjs";
import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { I as IMAGE } from "./image-384ef720.js";
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
      _push(`<div class="contents" data-v-687e8ebd><dl class="form-area" data-v-687e8ebd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>お名前(保護者様)</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).parentName)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>お名前(カタカナ)</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).parentNameKana)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>お名前(お子様)</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).childName)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>お名前(カタカナ)</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).childNameKana)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>メールアドレス</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).email)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>電話番号</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).phoneNumber)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>通われている学校</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).schoolName)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>学年</span></dt><dd class="label-list" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).grade)} 年</p></dd></dl><dl class="form-other-area" data-v-687e8ebd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>学習状況や学習上の課題</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).messagAssignment)}</p></dd><dt class="item" data-v-687e8ebd><span class="title" data-v-687e8ebd>資料請求に関して</span></dt><dd class="input" data-v-687e8ebd><p data-v-687e8ebd>${ssrInterpolate(unref(contactState).messageDocument)}</p></dd></dl></div><div class="button-area" data-v-687e8ebd>`);
      _push(ssrRenderComponent(_component_AppButton, {
        title: "送信する",
        onClick: clickSend
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "back",
        to: "/details"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text" data-v-687e8ebd${_scopeId}>戻る</p><img class="arrow"${ssrRenderAttr("src", unref(IMAGE).arrow)} data-v-687e8ebd${_scopeId}>`);
          } else {
            return [
              createVNode("p", { class: "text" }, "戻る"),
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
const confirm_vue_vue_type_style_index_0_scoped_687e8ebd_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/confirm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const confirm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-687e8ebd"]]);
export {
  confirm as default
};
//# sourceMappingURL=confirm-f51e14fc.js.map
