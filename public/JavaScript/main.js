var bt1 = document.querySelectorAll("btn1");
var bt2 = document.querySelectorAll("btn2");

btn1.addEventListener("click", function () {
    document.querySelector("#div1").classList.toggle("p_invisible");
})

btn2.addEventListener("click", function () {
    document.querySelector("#div2").classList.toggle("p_invisible");
})