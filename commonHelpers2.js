import"./assets/header-B_JN8KHj.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";o.settings({timeout:2500,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"center",titleSize:25,messageSize:25,backgroundColor:"rgba(26, 255, 128, 0.8)"});const i=document.querySelector(".counter"),e=document.querySelector(".timer-input");i.addEventListener("click",n=>{let t=e.value===""?0:parseInt(e.value);n.target.textContent==="+"?(console.log("+"),t+=1,e.value=t):n.target.textContent==="-"&&(t=t===0?0:t-=1,e.value=t)});
//# sourceMappingURL=commonHelpers2.js.map
