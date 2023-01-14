 var isBlurred = false;

 document.getElementById('element-one').onclick = function () {
     isBlurred = !isBlurred;

     if (isBlurred) {
         document.getElementById('element-one').classList.add("blur");
     } else {
         document.getElementById('element-one').classList.remove("blur");

     }

 }
 var isHoverdOver = false;

 document.getElementById('element-two').onmouseover = function () {
     isHoverdOver = true;
     renderSecondBox();
 }
 document.getElementById('element-two').onmouseout = function () {
     isHoverdOver = false;
     renderSecondBox();
 }

 function renderSecondBox() {
     if (isHoverdOver) {
         document.getElementById('element-two').style.backgroundColor = 'red';
     } else {
         document.getElementById('element-two').style.backgroundColor = '';
     }
 }

 function getRandomArbitrary(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }

 console.log(getRandomArbitrary(1, 20));
 document.getElementById('element-three').ondblclick = function () {
     document.getElementById('element-three').firstElementChild.innerHTML = getRandomArbitrary(1, 20);
 }
 document.getElementById('element-four').onclick = function () {
     document.getElementById('element-four').classList.add('hidden');
     setTimeout(function () {
         document.getElementById('element-four').classList.remove('hidden');
     }, 1000);
 }
 document.getElementById('element-five').onclick = function () {
     var boxes = document.querySelectorAll('.shape');
     for (var box of boxes) {
         box.style.borderRadius = '50%';
     }
 }
 document.getElementById('box-6').onsubmit = function (event) {
     event.preventDefault();
     document.getElementById('element-six').firstElementChild.innerHTML = event.target.elements.boxNumber.value;
     console.log(event.target.elements.boxNumber.value)
 }
 document.getElementById('box7-input').onkeypress = function (event) {
     console.log(event);
     document.getElementById('element-seven').firstElementChild.innerHTML = event.key;
 }
 document.onmousemove = function (event) {
     var coordinates = "X: " + event.clientX + ", Y:" + event.clientY;
     document.getElementById('element-eight').firstElementChild.innerHTML = coordinates;

 }
 var state = 9;
 document.getElementById("box-9").onsubmit = function (event) {
     event.preventDefault();
     var operand = Number(event.target.elements.operand.value);
     var operator = event.target.elements.operator.value;
     console.log(operand);
     console.log(operator);

     switch (operator) {
         case "mult":
             state = state * operand;
             break;
         case "div":
             state = state / operand;
             break;
         case "add":
             state = state + operand;
             break;
         case "min":
             state = state - operand;
             break;

     }
     document.getElementById('element-nine').firstElementChild.innerHTML = state;
 }