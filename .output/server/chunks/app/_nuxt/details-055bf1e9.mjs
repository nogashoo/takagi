import { _ as __nuxt_component_0 } from './Navigate-73fd9b8c.mjs';
import { _ as __nuxt_component_1 } from './AppButton-5a60c7e3.mjs';
import { u as useContact } from './useContact-098503cc.mjs';
import { _ as _export_sfc, u as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, computed, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { useForm, useField } from 'vee-validate/dist/vee-validate.js';
import { object, string } from 'yup';
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

const GradeType = {
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "details",
  __ssrInlineRender: true,
  setup(__props) {
    const { contactState, setContact } = useContact();
    const router = useRouter();
    const validationSchema = object({
      parentName: string().required("\u5165\u529B\u5FC5\u9808\u9805\u76EE\u3067\u3059").nullable("\u5165\u529B\u5FC5\u9808\u9805\u76EE\u3067\u3059").transform((curr, orig) => orig.length > 0 ? null : curr),
      parentNameKana: string().required("\u5165\u529B\u5FC5\u9808\u9805\u76EE\u3067\u3059"),
      childName: string().required("\u5165\u529B\u5FC5\u9808\u9805\u76EE\u3067\u3059"),
      childNameKana: string().required("\u5165\u529B\u5FC5\u9808\u9805\u76EE\u3067\u3059"),
      phoneNumber: string().matches(/^[0-9]{10,11}$/, "\u6709\u52B9\u306A\u96FB\u8A71\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044").required("\u5165\u529B\u5FC5\u9808\u9805\u76EE\u3067\u3059"),
      email: string().required("\u5165\u529B\u5FC5\u9808\u9805\u76EE\u3067\u3059").email("\u6709\u52B9\u306A\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"),
      schoolName: string().required("\u5165\u529B\u5FC5\u9808\u9805\u76EE\u3067\u3059"),
      messagAssignment: string(),
      messageDocument: string()
    });
    const { errors } = useForm({
      validationSchema
    });
    const { value: parentName, errorMessage: parentNameError } = useField(
      "parentName",
      (value) => {
        if (!value) {
          return "this field is required";
        }
        return true;
      },
      {
        initialValue: contactState.value.parentName
      }
    );
    const { value: parentNameKana, errorMessage: parentNameKanaError } = useField(
      "parentNameKana",
      void 0,
      {
        initialValue: contactState.value.parentNameKana
      }
    );
    const { value: childName, errorMessage: childNameError } = useField(
      "childName",
      void 0,
      {
        initialValue: contactState.value.childName
      }
    );
    const { value: childNameKana, errorMessage: childNameKanaError } = useField(
      "childNameKana",
      void 0,
      {
        initialValue: contactState.value.childNameKana
      }
    );
    const { value: phoneNumber, errorMessage: phoneNumberError } = useField(
      "phoneNumber",
      void 0,
      {
        initialValue: contactState.value.phoneNumber
      }
    );
    const { value: email, errorMessage: emailError } = useField(
      "email",
      void 0,
      {
        initialValue: contactState.value.email
      }
    );
    const { value: schoolName, errorMessage: schoolNameError } = useField(
      "schoolName",
      void 0,
      {
        initialValue: contactState.value.schoolName
      }
    );
    const { value: grade, errorMessage: gradeError } = useField(
      "grade",
      void 0,
      {
        initialValue: contactState.value.grade
      }
    );
    const { value: messagAssignment } = useField("messagAssignment", void 0, {
      initialValue: contactState.value.messagAssignment
    });
    const { value: messageDocument } = useField("messageDocument", void 0, {
      initialValue: contactState.value.messageDocument
    });
    const isDisable = computed(() => {
      return !Boolean(
        parentName.value && parentNameKana.value && childName.value && childNameKana.value && phoneNumber.value && email.value && schoolName.value && grade.value
      );
    });
    const save = async () => {
      const applyValues = {
        parentName: parentName.value,
        parentNameKana: parentNameKana.value,
        childName: childName.value,
        childNameKana: childNameKana.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        schoolName: schoolName.value,
        grade: grade.value,
        messagAssignment: messagAssignment.value,
        messageDocument: messageDocument.value
      };
      setContact(applyValues);
      router.push("/confirm");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navigate = __nuxt_component_0;
      const _component_AppButton = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Navigate, { from: "details" }, null, _parent));
      _push(`<form class="contents" data-v-07797568><dl class="form-area" data-v-07797568><dt class="item" data-v-07797568><span class="title" data-v-07797568>\u304A\u540D\u524D(\u4FDD\u8B77\u8005\u69D8)</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(parentName))} class="${ssrRenderClass([{ "-error": unref(errors).parentName }, "input-text"])}" type="text" name="parentName" placeholder="\u5C71\u7530 \u592A\u90CE" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).parentName)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>\u304A\u540D\u524D(\u30AB\u30BF\u30AB\u30CA)</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(parentNameKana))} class="${ssrRenderClass([{ "-error": unref(errors).parentNameKana }, "input-text"])}" type="text" name="parentNameKana" placeholder="\u30E4\u30DE\u30C0 \u30BF\u30ED\u30A6" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).parentNameKana)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>\u304A\u540D\u524D(\u304A\u5B50\u69D8)</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(childName))} class="${ssrRenderClass([{ "-error": unref(errors).childName }, "input-text"])}" type="text" name="childName" placeholder="\u5C71\u7530 \u82B1\u5B50" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).childName)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>\u304A\u540D\u524D(\u30AB\u30BF\u30AB\u30CA)</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(childNameKana))} class="${ssrRenderClass([{ "-error": unref(errors).childNameKana }, "input-text"])}" type="text" name="childNameKana" placeholder="\u30E4\u30DE\u30C0 \u30CF\u30CA\u30B3" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).childNameKana)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(email))} class="${ssrRenderClass([{ "-error": unref(errors).email }, "input-text"])}" type="email" name="email" placeholder="email@examlpe.com" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).email)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>\u96FB\u8A71\u756A\u53F7</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(phoneNumber))} class="${ssrRenderClass([{ "-error": unref(errors).phoneNumber }, "input-text"])}" type="tel" name="phoneNumber" placeholder="00000000000" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).phoneNumber)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>\u901A\u308F\u308C\u3066\u3044\u308B\u5B66\u6821</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(schoolName))} class="${ssrRenderClass([{ "-error": unref(errors).schoolName }, "input-text"])}" type="text" name="schoolName" placeholder="\u5B66\u6821\u540D" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).schoolName)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>\u5B66\u5E74</span></dt><dd class="label-list" data-v-07797568><label class="label" data-v-07797568><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(grade), unref(GradeType).ONE)) ? " checked" : ""}${ssrRenderAttr("value", unref(GradeType).ONE)} class="input" type="radio" name="grade" data-v-07797568>1\u5E74 </label><label class="label" data-v-07797568><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(grade), unref(GradeType).TWO)) ? " checked" : ""}${ssrRenderAttr("value", unref(GradeType).TWO)} class="input" type="radio" name="grade" data-v-07797568>2\u5E74 </label><label class="label" data-v-07797568><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(grade), unref(GradeType).THREE)) ? " checked" : ""}${ssrRenderAttr("value", unref(GradeType).THREE)} class="input" type="radio" name="grade" data-v-07797568>3\u5E74 </label><label class="label" data-v-07797568><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(grade), unref(GradeType).FOUR)) ? " checked" : ""}${ssrRenderAttr("value", unref(GradeType).FOUR)} class="input" type="radio" name="grade" data-v-07797568>4\u5E74 </label><label class="label" data-v-07797568><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(grade), unref(GradeType).FIVE)) ? " checked" : ""}${ssrRenderAttr("value", unref(GradeType).FIVE)} class="input" type="radio" name="grade" data-v-07797568>5\u5E74 </label><label class="label" data-v-07797568><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(grade), unref(GradeType).SIX)) ? " checked" : ""}${ssrRenderAttr("value", unref(GradeType).SIX)} class="input" type="radio" name="grade" data-v-07797568>6\u5E74 </label></dd></dl><dl class="form-other-area" data-v-07797568><dt class="item" data-v-07797568><span class="title" data-v-07797568>\u5B66\u7FD2\u72B6\u6CC1\u3084\u5B66\u7FD2\u4E0A\u306E\u8AB2\u984C</span></dt><dd class="input" data-v-07797568><textarea class="message" name="messagAssignment" data-v-07797568>${ssrInterpolate(unref(messagAssignment))}</textarea></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>\u8CC7\u6599\u8ACB\u6C42\u306B\u95A2\u3057\u3066</span></dt><dd class="input" data-v-07797568><textarea class="message" name="messageDocument" data-v-07797568>${ssrInterpolate(unref(messageDocument))}</textarea></dd></dl></form>`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: "button",
        title: "\u78BA\u8A8D\u753B\u9762\u3078",
        isDisable: unref(isDisable),
        onClick: save
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const details = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-07797568"]]);

export { details as default };
//# sourceMappingURL=details-055bf1e9.mjs.map
