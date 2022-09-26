// aqui exportaras las funciones que necesites

import { printPost } from "./fireStore.js";

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const prueba = () => {
  printPost().then((pagePost) => {
    let viewHtml = "";
    console.log(pagePost);
    pagePost.forEach((e) => {
      if (e.profileImg === "") {
        viewHtml += `<div id="containerPost">
        <div id="userInfo">
          <img id="userPhoto" src="images/noPhoto.png">
          <h1 id="userName">${e.name}</h1>
        </div>
        <h2 id="titleP">${e.title}</h2>
        <p id="descriptionPost">${e.description}</p>
        <p id="linkP">${e.link}</p>
        <button id="buttonLike"><img id="imgBtnLike" src="images/LogoManos.png"/></button>
        </div>
        `;
      }
      else {
        viewHtml += `<div id="containerPost">
        <div id="userInfo">
          <img id="userPhoto" src="${e.profileImg}">
          <h1 id="userName">${e.name}</h1>
        </div>
        <h2 id="titleP">${e.title}</h2>
        <p id="descriptionPost">${e.description}</p>
        <p id="linkP">${e.link}</p>
        <button id="buttonLike"><img id="imgBtnLike" src="images/LogoManos.png"/></button>
        </div>
        `;
      }
    });
    const divPrintPost = document.createElement("div");
    divPrintPost.id = "divPrintPost";
    divPrintPost.innerHTML = viewHtml;
    document.querySelector(".divPosts").appendChild(divPrintPost);
  });
}