import"./assets/header-Grs6xkDG.js";const e={email:"",message:"",setFormValue(a,t){this.email=a,this.message=t}},s=document.querySelector(".feedback-form"),l="feedback-form-state";s.addEventListener("input",o);s.addEventListener("submit",i);function m(){const a=JSON.parse(localStorage.getItem(l));a!==null&&(e.setFormValue(a.email,a.message),s.email.value=e.email,s.message.value=e.message)}function o(a){const t=a.target;switch(t.nodeName){case"INPUT":e.email=t.value.trim(),localStorage.setItem(l,JSON.stringify(e));break;case"TEXTAREA":e.message=t.value.trim(),localStorage.setItem(l,JSON.stringify(e));break}}function i(a){if(a.preventDefault(),e.email===""||e.message==="")return alert("Fill please all fields");console.table(e),localStorage.removeItem(l),s.reset()}m();
//# sourceMappingURL=commonHelpers2.js.map
