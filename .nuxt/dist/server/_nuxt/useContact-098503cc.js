import { toRef, isRef, readonly } from "vue";
import { a as useNuxtApp } from "../server.mjs";
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useContact = () => {
  const contactState = useState("contact", () => {
    return {
      parentName: "",
      parentNameKana: "",
      childName: "",
      childNameKana: "",
      email: "",
      phoneNumber: "",
      schoolName: "",
      grade: "",
      messagAssignment: "",
      messageDocument: ""
    };
  });
  const setContact = (contact) => {
    contactState.value = contact;
  };
  const send = async () => {
    const formData = new FormData();
    Object.entries(contactState.value).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await fetch("https://nogami-test.form.newt.so/v1/0teHx56Yc", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });
  };
  return {
    contactState: readonly(contactState),
    setContact,
    send
  };
};
export {
  useContact as u
};
//# sourceMappingURL=useContact-098503cc.js.map
