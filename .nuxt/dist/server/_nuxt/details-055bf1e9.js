import { _ as __nuxt_component_0 } from "./Navigate-73fd9b8c.js";
import { _ as __nuxt_component_1 } from "./AppButton-5a60c7e3.js";
import { u as useContact } from "./useContact-098503cc.js";
import { u as useRouter, _ as _export_sfc } from "../server.mjs";
import { defineComponent, computed, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { useForm, useField } from "vee-validate/dist/vee-validate.js";
import { object, string } from "yup";
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
      parentName: string().required("入力必須項目です").nullable("入力必須項目です").transform((curr, orig) => orig.length > 0 ? null : curr),
      parentNameKana: string().required("入力必須項目です"),
      childName: string().required("入力必須項目です"),
      childNameKana: string().required("入力必須項目です"),
      phoneNumber: string().matches(/^[0-9]{10,11}$/, "有効な電話番号を入力してください").required("入力必須項目です"),
      email: string().required("入力必須項目です").email("有効なメールアドレスを入力してください"),
      schoolName: string().required("入力必須項目です"),
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
      _push(`<form class="contents" data-v-07797568><dl class="form-area" data-v-07797568><dt class="item" data-v-07797568><span class="title" data-v-07797568>お名前(保護者様)</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(parentName))} class="${ssrRenderClass([{ "-error": unref(errors).parentName }, "input-text"])}" type="text" name="parentName" placeholder="山田 太郎" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).parentName)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>お名前(カタカナ)</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(parentNameKana))} class="${ssrRenderClass([{ "-error": unref(errors).parentNameKana }, "input-text"])}" type="text" name="parentNameKana" placeholder="ヤマダ タロウ" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).parentNameKana)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>お名前(お子様)</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(childName))} class="${ssrRenderClass([{ "-error": unref(errors).childName }, "input-text"])}" type="text" name="childName" placeholder="山田 花子" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).childName)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>お名前(カタカナ)</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(childNameKana))} class="${ssrRenderClass([{ "-error": unref(errors).childNameKana }, "input-text"])}" type="text" name="childNameKana" placeholder="ヤマダ ハナコ" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).childNameKana)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>メールアドレス</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(email))} class="${ssrRenderClass([{ "-error": unref(errors).email }, "input-text"])}" type="email" name="email" placeholder="email@examlpe.com" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).email)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>電話番号</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(phoneNumber))} class="${ssrRenderClass([{ "-error": unref(errors).phoneNumber }, "input-text"])}" type="tel" name="phoneNumber" placeholder="00000000000" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).phoneNumber)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>通われている学校</span></dt><dd class="input" data-v-07797568><input${ssrRenderAttr("value", unref(schoolName))} class="${ssrRenderClass([{ "-error": unref(errors).schoolName }, "input-text"])}" type="text" name="schoolName" placeholder="学校名" required data-v-07797568><p class="error" data-v-07797568>${ssrInterpolate(unref(errors).schoolName)}</p></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>学年</span></dt><dd class="label-list" data-v-07797568><label class="label" data-v-07797568><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(grade), unref(GradeType).ONE)) ? " checked" : ""}${ssrRenderAttr("value", unref(GradeType).ONE)} class="input" type="radio" name="grade" data-v-07797568>1年 </label><label class="label" data-v-07797568><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(grade), unref(GradeType).TWO)) ? " checked" : ""}${ssrRenderAttr("value", unref(GradeType).TWO)} class="input" type="radio" name="grade" data-v-07797568>2年 </label><label class="label" data-v-07797568><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(grade), unref(GradeType).THREE)) ? " checked" : ""}${ssrRenderAttr("value", unref(GradeType).THREE)} class="input" type="radio" name="grade" data-v-07797568>3年 </label><label class="label" data-v-07797568><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(grade), unref(GradeType).FOUR)) ? " checked" : ""}${ssrRenderAttr("value", unref(GradeType).FOUR)} class="input" type="radio" name="grade" data-v-07797568>4年 </label><label class="label" data-v-07797568><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(grade), unref(GradeType).FIVE)) ? " checked" : ""}${ssrRenderAttr("value", unref(GradeType).FIVE)} class="input" type="radio" name="grade" data-v-07797568>5年 </label><label class="label" data-v-07797568><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(grade), unref(GradeType).SIX)) ? " checked" : ""}${ssrRenderAttr("value", unref(GradeType).SIX)} class="input" type="radio" name="grade" data-v-07797568>6年 </label></dd></dl><dl class="form-other-area" data-v-07797568><dt class="item" data-v-07797568><span class="title" data-v-07797568>学習状況や学習上の課題</span></dt><dd class="input" data-v-07797568><textarea class="message" name="messagAssignment" data-v-07797568>${ssrInterpolate(unref(messagAssignment))}</textarea></dd><dt class="item" data-v-07797568><span class="title" data-v-07797568>資料請求に関して</span></dt><dd class="input" data-v-07797568><textarea class="message" name="messageDocument" data-v-07797568>${ssrInterpolate(unref(messageDocument))}</textarea></dd></dl></form>`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: "button",
        title: "確認画面へ",
        isDisable: unref(isDisable),
        onClick: save
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const details_vue_vue_type_style_index_0_scoped_07797568_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const details = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-07797568"]]);
export {
  details as default
};
//# sourceMappingURL=details-055bf1e9.js.map
