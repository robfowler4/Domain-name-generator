/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Robert from the console!");
  let domain = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net"];
  var htmlElement = document.getElementById("list");

  for (let i = 0; i < pronoun.length; i++) {
    for (let m = 0; m < adj.length; m++) {
      for (let o = 0; o < noun.length; o++) {
        for (let p = 0; p < extensions.length; p++) {
          domain.push(pronoun[i] + adj[m] + noun[o] + extensions[p]);
        }
      }
    }
  }
  console.log(domain);
  for (let s = 0; s < domain.length; s++) {
    htmlElement.innerHTML += "<li>" + domain[s] + "</li>";
  }
};
