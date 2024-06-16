import gallery from "../img/gallery.png";
import form from "../img/form.png";

document.querySelector("#app").innerHTML = `
<h1 class="home-title">Welcom to Homework 9</h1>
<ul class="home-ul">
      <li>
        <a class="home-link" href="./1-gallery.html"
          ><img class="home-img" src="${gallery}" alt="Gallery" width="400"
        /></a>
      </li>
      <li>
        <a class="home-link" href="./2-form.html"><img class="home-img"  src="${form}" alt="Form"  width="400"/></a>
      </li>
    </ul>
`;
