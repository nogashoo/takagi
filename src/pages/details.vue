<script setup lang="ts">
import { useForm, useField } from "vee-validate/dist/vee-validate";
import { object, string } from "yup";
import { GradeType } from "~/composables/gradeType";

const { contactState, setContact } = useContact();
const router = useRouter();

const validationSchema = object({
  parentName: string()
    .required("入力必須項目です")
    .nullable("入力必須項目です")
    .transform((curr, orig) => (orig.length > 0 ? null : curr)),
  parentNameKana: string().required("入力必須項目です"),
  childName: string().required("入力必須項目です"),
  childNameKana: string().required("入力必須項目です"),
  phoneNumber: string()
    .matches(/^[0-9]{10,11}$/, "有効な電話番号を入力してください")
    .required("入力必須項目です"),
  email: string()
    .required("入力必須項目です")
    .email("有効なメールアドレスを入力してください"),
  schoolName: string().required("入力必須項目です"),
  messagAssignment: string(),
  messageDocument: string(),
});

const { errors } = useForm({
  validationSchema: validationSchema,
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
    initialValue: contactState.value.parentName,
  }
);
const { value: parentNameKana, errorMessage: parentNameKanaError } = useField(
  "parentNameKana",
  undefined,
  {
    initialValue: contactState.value.parentNameKana,
  }
);
const { value: childName, errorMessage: childNameError } = useField(
  "childName",
  undefined,
  {
    initialValue: contactState.value.childName,
  }
);
const { value: childNameKana, errorMessage: childNameKanaError } = useField(
  "childNameKana",
  undefined,
  {
    initialValue: contactState.value.childNameKana,
  }
);
const { value: phoneNumber, errorMessage: phoneNumberError } = useField(
  "phoneNumber",
  undefined,
  {
    initialValue: contactState.value.phoneNumber,
  }
);
const { value: email, errorMessage: emailError } = useField(
  "email",
  undefined,
  {
    initialValue: contactState.value.email,
  }
);
const { value: schoolName, errorMessage: schoolNameError } = useField(
  "schoolName",
  undefined,
  {
    initialValue: contactState.value.schoolName,
  }
);
const { value: grade, errorMessage: gradeError } = useField(
  "grade",
  undefined,
  {
    initialValue: contactState.value.grade,
  }
);
const { value: messagAssignment } = useField("messagAssignment", undefined, {
  initialValue: contactState.value.messagAssignment,
});
const { value: messageDocument } = useField("messageDocument", undefined, {
  initialValue: contactState.value.messageDocument,
});

const isDisable = computed(() => {
  return !Boolean(
    parentName.value &&
      parentNameKana.value &&
      childName.value &&
      childNameKana.value &&
      phoneNumber.value &&
      email.value &&
      schoolName.value &&
      grade.value
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
    messageDocument: messageDocument.value,
  };

  setContact(applyValues);

  router.push("/confirm");
};
</script>

<template>
  <Navigate from="details" />
  <form class="contents">
    <dl class="form-area">
      <dt class="item"><span class="title">お名前(保護者様)</span></dt>
      <dd class="input">
        <input
          v-model="parentName"
          class="input-text"
          :class="{ '-error': errors.parentName }"
          type="text"
          name="parentName"
          placeholder="山田 太郎"
          required
        />
        <p class="error">{{ errors.parentName }}</p>
      </dd>
      <dt class="item"><span class="title">お名前(カタカナ)</span></dt>
      <dd class="input">
        <input
          v-model="parentNameKana"
          class="input-text"
          :class="{ '-error': errors.parentNameKana }"
          type="text"
          name="parentNameKana"
          placeholder="ヤマダ タロウ"
          required
        />
        <p class="error">{{ errors.parentNameKana }}</p>
      </dd>
      <dt class="item"><span class="title">お名前(お子様)</span></dt>
      <dd class="input">
        <input
          v-model="childName"
          class="input-text"
          :class="{ '-error': errors.childName }"
          type="text"
          name="childName"
          placeholder="山田 花子"
          required
        />
        <p class="error">{{ errors.childName }}</p>
      </dd>
      <dt class="item"><span class="title">お名前(カタカナ)</span></dt>
      <dd class="input">
        <input
          v-model="childNameKana"
          class="input-text"
          :class="{ '-error': errors.childNameKana }"
          type="text"
          name="childNameKana"
          placeholder="ヤマダ ハナコ"
          required
        />
        <p class="error">{{ errors.childNameKana }}</p>
      </dd>
      <dt class="item"><span class="title">メールアドレス</span></dt>
      <dd class="input">
        <input
          v-model="email"
          class="input-text"
          :class="{ '-error': errors.email }"
          type="email"
          name="email"
          placeholder="email@examlpe.com"
          required
        />
        <p class="error">{{ errors.email }}</p>
      </dd>
      <dt class="item"><span class="title">電話番号</span></dt>
      <dd class="input">
        <input
          v-model="phoneNumber"
          class="input-text"
          :class="{ '-error': errors.phoneNumber }"
          type="tel"
          name="phoneNumber"
          placeholder="00000000000"
          required
        />
        <p class="error">{{ errors.phoneNumber }}</p>
      </dd>
      <dt class="item"><span class="title">通われている学校</span></dt>
      <dd class="input">
        <input
          v-model="schoolName"
          class="input-text"
          :class="{ '-error': errors.schoolName }"
          type="text"
          name="schoolName"
          placeholder="学校名"
          required
        />
        <p class="error">{{ errors.schoolName }}</p>
      </dd>
      <dt class="item"><span class="title">学年</span></dt>
      <dd class="label-list">
        <label class="label">
          <input
            v-model="grade"
            :value="GradeType.ONE"
            class="input"
            type="radio"
            name="grade"
          />1年
        </label>
        <label class="label">
          <input
            v-model="grade"
            :value="GradeType.TWO"
            class="input"
            type="radio"
            name="grade"
          />2年
        </label>
        <label class="label">
          <input
            v-model="grade"
            :value="GradeType.THREE"
            class="input"
            type="radio"
            name="grade"
          />3年
        </label>
        <label class="label">
          <input
            v-model="grade"
            :value="GradeType.FOUR"
            class="input"
            type="radio"
            name="grade"
          />4年
        </label>
        <label class="label">
          <input
            v-model="grade"
            :value="GradeType.FIVE"
            class="input"
            type="radio"
            name="grade"
          />5年
        </label>
        <label class="label">
          <input
            v-model="grade"
            :value="GradeType.SIX"
            class="input"
            type="radio"
            name="grade"
          />6年
        </label>
      </dd>
    </dl>
    <dl class="form-other-area">
      <dt class="item"><span class="title">学習状況や学習上の課題</span></dt>
      <dd class="input">
        <textarea
          v-model="messagAssignment"
          class="message"
          name="messagAssignment"
        ></textarea>
      </dd>
      <dt class="item"><span class="title">資料請求に関して</span></dt>
      <dd class="input">
        <textarea
          v-model="messageDocument"
          class="message"
          name="messageDocument"
        ></textarea>
      </dd>
    </dl>
  </form>
  <AppButton
    class="button"
    title="確認画面へ"
    :isDisable="isDisable"
    @click="save"
  />
</template>

<style lang="scss" scoped>
.contents {
  margin: 40px auto 0;
  max-width: 800px;
  border-style: solid;
  border-color: $white-blue;
  border-width: 2px;
  border-radius: 10px;
}

.form-area {
  display: grid;
  grid-template-columns: repeat(1, 1fr 2fr);
  margin: 80px 30px 50px 100px;
  gap: 50px;

  > .item {
    display: flex;
    align-items: center;

    &::after {
      content: "※必須";
      font-size: 10px;
      font-weight: bold;
      color: $red;
      margin: 5px 0 0 5px;
    }
  }

  > .input {
    margin-left: 20px;

    > .input-text {
      padding: 2px;
      min-width: 250px;
      height: 30px;
      font-size: 16px;

      &.-error {
        background-color: $lite-red;
        border-color: $lite-red;
        border-radius: 2px;
      }
    }

    > .error {
      position: absolute;
      font-size: 12px;
      font-weight: bold;
      color: $red;
    }
  }

  > .label-list {
    display: flex;
    margin-left: 20px;
    gap: 10px;

    > .label > .input {
      margin-right: 2px;
    }
  }
}

.form-other-area {
  margin-left: 100px;

  > .item {
    margin-bottom: 10px;
  }

  > .input {
    margin: 0 0 50px 30px;

    > .message {
      font-family: inherit;
      min-width: 520px;
      height: 200px;
      padding: 3px;
      font-size: 16px;
    }
  }
}

.button {
  display: block;
  margin: 30px auto 100px;
}
</style>
