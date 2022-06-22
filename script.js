"use strict";
// TO DO list
// takes input from user and once user clicks submit, it adds to the list
const submitBtn = document.querySelector(".submit");
const clearBtn = document.querySelector(".clear");
const listContainer = document.querySelector(".listContainer");
let inputField = document.querySelector(".text");

submitBtn.addEventListener("click", function () {
  var listItem = inputField.value;
  if (listItem == "") {
    alert("Please enter a task.");
  } else {
    // create new element for current list item
    const tag = document.createElement("p");
    tag.classList.add("item");
    tag.innerHTML = listItem + " ";

    // create button element
    const xBtn = document.createElement("button");
    xBtn.innerHTML = "X";

    // append button to tag
    tag.appendChild(xBtn);

    // append tag to div
    listContainer.appendChild(tag);

    // set value of textbox to ''
    document.querySelector(".text").value = "";

    //delete function
    xBtn.addEventListener("click", function () {
      listContainer.removeChild(tag);
    });
  }
});

clearBtn.addEventListener("click", function () {
  const list = document.querySelectorAll(".item");
  for (let i = 0; i < list.length; i++) {
    list[i].parentElement.removeChild(list[i]);
  }
});
