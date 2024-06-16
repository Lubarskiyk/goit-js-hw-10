const formData = {
  email: "",
  message: "",

  setFormValue(newemail, newmessage) {
    this.email = newemail;
    this.message = newmessage;
  },
};

const formMessage = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";
formMessage.addEventListener("input", inputText);
formMessage.addEventListener("submit", onSubmit);

function getValueOfLocalstorage() {
  const localdata = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (localdata !== null) {
    formData.setFormValue(localdata.email, localdata.message);
    formMessage.email.value = formData.email;
    formMessage.message.value = formData.message;
  }
}

function inputText(event) {
  const eventName = event.target;
  switch (eventName.nodeName) {
    case "INPUT":
      formData.email = eventName.value.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      break;
    case "TEXTAREA":
      formData.message = eventName.value.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      break;
  }
}

function onSubmit(event) {
  event.preventDefault();
  if (formData.email === "" || formData.message === "") {
    return alert("Fill please all fields");
  }
  console.table(formData);
  localStorage.removeItem(STORAGE_KEY);
  formMessage.reset();
}
getValueOfLocalstorage();
