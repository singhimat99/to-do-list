"use strict";
// TO DO list
// takes input from user and once user clicks submit, it adds to the list
const submitBtn = document.querySelector(".submit");
const clearBtn = document.querySelector(".clear");
const p = document.querySelector(".p");
submitBtn.addEventListener("click", function () {
  var listItem = document.querySelector(".text").value;
  if (listItem == "") {
    alert("Please enter a task.");
  } else {
    // create new element for current list item
    const tag = document.createElement("p");
    tag.setAttribute("class", "item");
    tag.textContent = listItem + " ";
    // const text = document.createTextNode(listItem + " "); // creating text node

    // create button element
    const xBtn = document.createElement("button");
    // xBtn.setAttribute("class", "delete");
    // xBtn.classList.add('delete');
    xBtn.innerHTML = "X";

    // append text to new item + button
    // tag.appendChild(text);
    tag.appendChild(xBtn);

    // select div and append new tag to it
    p.appendChild(tag);

    // set value of textbox to ''
    document.querySelector(".text").value = "";

    //
    xBtn.addEventListener("click", function () {
      p.removeChild(tag);
      // xBtn.parentElement.style.display = "none";
    });
  }
});

clearBtn.addEventListener("click", function () {
  const list = document.querySelectorAll(".item");
  for (let i = 0; i < list.length; i++) {
    // sets display of each parent for the xbtn which is list item to none
    // list[i].parentElement.style.display = "none";
    list[i].parentElement.removeChild(list[i]);
  }
});
