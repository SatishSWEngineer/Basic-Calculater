"use strict";
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num_delete = document.querySelector(".num_delete");
let result;
const num_divide = document.querySelector(".num_divide");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num_multiply = document.querySelector(".num_multiply");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num0 = document.querySelector(".num0");
const num_add = document.querySelector(".num_add");
const num_equal = document.querySelector(".num_equal");
const num_clear = document.querySelector(".num_clear");

const show_num = document.querySelector(".show_num");
let str = "";
let z = "";
let number = 0;
show_num.value = "0";

num1.addEventListener("click", function () {
  str = str + num1.textContent;
  show_num.value = str;
});
num2.addEventListener("click", function () {
  str = str + num2.textContent;
  show_num.value = str;
});
num3.addEventListener("click", function () {
  str = str + num3.textContent;
  show_num.value = str;
});
num_delete.addEventListener("click", function () {
  str = str.slice(0, -1);
  if (result) {
    show_num.value = "0";
    console.log("if");
    console.log(result);
  } else {
    show_num.value = str;
    console.log("else");
  }
  result = undefined;
});

num_clear.addEventListener("click", function () {
  str = "";
  show_num.value = 0;
});

num4.addEventListener("click", function () {
  str = str + num4.textContent;
  show_num.value = str;
});
num5.addEventListener("click", function () {
  str = str + num5.textContent;
  show_num.value = str;
});
num6.addEventListener("click", function () {
  str = str + num6.textContent;
  show_num.value = str;
});
num_multiply.addEventListener("click", function () {
  str = str + num_multiply.textContent;
  show_num.value = str;
});
num7.addEventListener("click", function () {
  str = str + num7.textContent;
  show_num.value = str;
});
num8.addEventListener("click", function () {
  str = str + num8.textContent;
  show_num.value = str;
});
num9.addEventListener("click", function () {
  str = str + num9.textContent;
  show_num.value = str;
});
num_add.addEventListener("click", function () {
  str = str + num_add.textContent;
  show_num.value = str;
});

num0.addEventListener("click", function () {
  str = str + num0.textContent;
  show_num.value = str;
});

num_divide.addEventListener("click", function () {
  str = str + num_divide.textContent;
  show_num.value = str;
});

num_equal.addEventListener("click", function () {
  let i = 0;

  while (
    str[i] == num_add.textContent ||
    i < str.length ||
    str[i] == num_multiply.textContent ||
    str[i] == num_divide.textContent
  ) {
    let x = str.replace("➕", "+");
    str = x;
    let y = str.replace("✖", "*");
    str = y;
    let z = str.replace("➗", "/");
    str = z;

    i++;
  }
  let get = str;
  str = "";
  result = eval(get);

  if (typeof result === "number") {
    show_num.value = result;
  }

  // if(typeof(result)==Number){
  //   console.log(result);
  // }

  // if(str[i]===num_add_sub.textContent){
  //    str.replace("9","+");
  //    console.log(str);
  // }
});
