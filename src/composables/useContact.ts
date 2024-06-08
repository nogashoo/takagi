export const useContact = () => {
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
      messageDocument: "",
    };
  });

  const setContact = (contact: any) => {
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
        Accept: "application/json",
      },
    });
  };

  return {
    contactState: readonly(contactState),
    setContact,
    send,
  };
};
