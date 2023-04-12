const inputText = document.getElementById("write-text");
const pushBtn = document.getElementById("push");
const popBtn = document.getElementById("pop");
const searchBtn = document.getElementById("search");
const pushedContentContainer = document.getElementById("push-stack");
let pushedText;
let newSpanEle;
const pushedArray = [];
const pushedArrayValue = [];
let lengthOfPushedArr;
let bottomValueForPush = 0;
let bottomValueForPop = 0;
pushBtn.addEventListener("click", pushContents);
popBtn.addEventListener("click", popContents);
searchBtn.addEventListener("click", searchContents);
// function pushContents()
// {
//     let i = 1;
//     pushBtn.addEventListener("click",()=>{
//         pushedText= inputText.value;
//         if(pushedText=="")
//             alert("Please, enter some content!!!");
//         else
//         {
//             inputText.value = "";
//             newSpanEle = document.createElement("span");
//             newSpanEle.innerText = pushedText;
//             newSpanEle.classList.add("pushed-content");
//             newSpanEle.setAttribute("id",`pushed-content${i}`);
//             newSpanEle.style="--bottom-value: " + bottomValueForPush +"px; --bottom-value-pop-start: " + bottomValueForPush + "px; --bottom-value-pop-end: " + bottomValueForPop +"px;";
//             newSpanEle.style.animation="pushAnimation 1s forwards";
//             pushedArray.push(newSpanEle);
//             pushedArrayValue.push(parseInt(newSpanEle.innerText));
//             pushedContentContainer.appendChild(newSpanEle);
//             bottomValueForPush+=40;
//             i++;
//         }
//     });
// }
function pushContents() {
  pushedText = inputText.value;
  if (pushedText == "") {
    alert("Please, enter some content!!!");
  } else {
    inputText.value = "";
    newSpanEle = document.createElement("span");
    newSpanEle.innerText = pushedText;
    newSpanEle.classList.add("pushed-content");
    newSpanEle.setAttribute("id", `pushed-content${pushedArray.length}`);
    newSpanEle.style =
      "--bottom-value: " +
      bottomValueForPush +
      "px; --bottom-value-pop-start: " +
      bottomValueForPush +
      "px; --bottom-value-pop-end: " +
      bottomValueForPop +
      "px;";
    newSpanEle.style.animation = "pushAnimation 1s forwards";
    pushedArray.push(newSpanEle);
    pushedArrayValue.push(parseInt(newSpanEle.innerText));
    pushedContentContainer.appendChild(newSpanEle);
    bottomValueForPush += 40;
  }
}


// function popContents()
// {
//     let poppedEle;
//     popBtn.onclick = function()
//     {
//         if(pushedArray == "")
//             alert("Nothing to pop!!!");
//         else
//         {
//             lengthOfPushedArr = pushedArray.length;
//             poppedEle = pushedArray[lengthOfPushedArr - 1];
//             // console.log(poppedEle);
//             poppedEle.style="--bottom-value: " + bottomValueForPush +"px; --bottom-value-pop-start: " + bottomValueForPush + "px; --bottom-value-pop-end: " + bottomValueForPop +"px;";
//             poppedEle.style.animation = "popAnimation 3s forwards";
//             pushedArray.pop();
//             bottomValueForPop+= 40;
//             bottomValueForPush-= 40;
//         }
//     }
// }
function popContents() {
  let poppedEle;
  popBtn.onclick = function () {
    if (pushedArray == "") {
      alert("Nothing to pop!!!");
    } else {
      lengthOfPushedArr = pushedArray.length;
      poppedEle = pushedArray[lengthOfPushedArr - 1];
      poppedEle.style =
        "--bottom-value: " +
        bottomValueForPush +
        "px; --bottom-value-pop-start: " +
        bottomValueForPush +
        "px; --bottom-value-pop-end: " +
        bottomValueForPop +
        "px;";
      poppedEle.style.animation = "popAnimation 3s forwards";
      let poppedValue = parseInt(poppedEle.innerText);
      pushedArray.pop();
      pushedArrayValue.splice(pushedArrayValue.indexOf(poppedValue), 1); // remove the popped value from pushedArrayValue
      bottomValueForPop += 40;
      bottomValueForPush -= 40;
    }
  };
}

//to search the number in stack and if not found then alert
//to search the number in stack and if not found then alert
// function searchContents()
// {
//     let searchEle;
//     searchBtn.onclick = function()
//     {
//         searchEle = parseInt(inputText.value);
//         if(searchEle == "")
//             alert("Please, enter some content!!!");
//         else
//         {
//             console.log(searchEle)
//             console.log(pushedArrayValue)
//             // inputText.value = "";
//             if(pushedArrayValue.includes(searchEle)) {
//                 let position = pushedArrayValue.indexOf(searchEle) + 1; // add 1 to get 1-based index
//                 alert(`The element "${searchEle}" is found at position ${position} in the stack!`);
//             }
//             else
//                 alert(`The element "${searchEle}" is not found in the stack!`);
//         }
//     }
// }
// function searchContents() {
//   let searchEle;
//   searchBtn.onclick = function() {
//     searchEle = parseInt(inputText.value);
//     if (searchEle == "") {
//       alert("Please enter some content!!!");
//     } else {
//       console.log(searchEle);
//       console.log(pushedArrayValue);
//       if (pushedArrayValue.includes(searchEle)) {
//         let position = pushedArrayValue.indexOf(searchEle) + 1;
//         let searchedEle = document.getElementById(`pushed-content${position}`);
//         searchedEle.classList.add("highlight");
//         searchedEle.scrollIntoView();
//         let positionElement = document.createElement("div");
//         positionElement.classList.add("position");
//         positionElement.innerText = `Position: ${position}`;
//         searchedEle.parentElement.appendChild(positionElement);
//         setTimeout(function() {
//           searchedEle.classList.remove("highlight");
//           positionElement.remove();
//         }, 10000); // timeout of 5 seconds
//         inputText.value = "";
//       } else {
//         alert(`The element "${searchEle}" is not found in the stack!`);
//         inputText.value = "";
//       }
//     }
//   };
// }
// function searchContents() {
//   let searchEle;
//   searchBtn.onclick = function() {
//     searchEle = parseInt(inputText.value);
//     if (searchEle == "") {
//       alert("Please enter some content!!!");
//     } else {
//       console.log(searchEle);
//       console.log(pushedArrayValue.length);
//       if (pushedArrayValue.includes(searchEle)) {
//         let position = pushedArrayValue.indexOf(searchEle) + 1;
//         let searchedEle = document.getElementById(`pushed-content${position}`);
//         searchedEle.classList.add("highlight");
//         searchedEle.scrollIntoView();
//         let positionElement = document.createElement("div");
//         positionElement.classList.add("position");
//         positionElement.innerText = `Position: ${position}`;
//         searchedEle.parentElement.appendChild(positionElement);
//         setTimeout(function() {
//           searchedEle.classList.remove("highlight");
//           positionElement.remove();
//         }, 10000); // timeout of 5 seconds
//         inputText.value = "";
//       } else {
//         alert(`The element "${searchEle}" is not found in the stack!`);
//         inputText.value = "";
//       }
//     }
//   };
// }

// function searchContents() {
//   let searchEle;
//   searchBtn.onclick = function() {
//     searchEle = parseInt(inputText.value);
//     if (isNaN(searchEle)) {
//       alert("Please enter a valid number!");
//       return;
//     }
//     let position = pushedArrayValue.indexOf(searchEle);
//     if (position >= 0) {
//       let searchedEle = pushedArray[position];
//       searchedEle.classList.add("highlight");
//       searchedEle.scrollIntoView();
//       let positionElement = document.createElement("div");
//       positionElement.classList.add("position");
//       positionElement.innerText = `Position: ${position + 1}`;
//       searchedEle.parentElement.appendChild(positionElement);
//       let searchedElePosition = searchedEle.getBoundingClientRect();
//       let positionElePosition = positionElement.getBoundingClientRect();
//       positionElement.style.left = searchedElePosition.right + 5 + "px";
//       positionElement.style.top = searchedElePosition.top - positionElePosition.height + "px";
//       setTimeout(function() {
//         searchedEle.classList.remove("highlight");
//         positionElement.remove();
//       }, 2345678); // timeout of 5 seconds
//       inputText.value = "";
//     } else {
//       alert(`The element "${searchEle}" is not found in the stack!`);
//     }
//   };
// }
function searchContents() {
  let searchEle;
  searchBtn.onclick = function () {
    searchEle = parseInt(inputText.value);
    if (isNaN(searchEle)) {
      alert("Please enter a valid number!");
      return;
    }
    let position = pushedArrayValue.indexOf(searchEle);
    if (position >= 0) {
      let searchedEle = pushedArray[position];
      searchedEle.classList.add("highlight");
      searchedEle.scrollIntoView();
      let positionElement = document.createElement("div");
      positionElement.classList.add("position");
      positionElement.innerText = `Position: ${position + 1}`;
      // searchedEle.parentElement.appendChild(positionElement);
      // let searchedElePosition = searchedEle.getBoundingClientRect();
      // let positionElePosition = positionElement.getBoundingClientRect();
      // positionElement.style.right = searchedElePosition.left + -1 + "px";
      // positionElement.style.top = searchedElePosition.top - positionElePosition.height + "px";
      let searchEleId = `pushed-content${pushedArrayValue.indexOf(searchEle)}`;
      let searchEleSpan = document.getElementById(searchEleId);
      let positionEle = document.createElement("span");
      positionEle.innerText = position;
      positionEle.classList.add("position");
      searchEleSpan.appendChild(positionEle);
      setTimeout(function () {
        searchedEle.classList.remove("highlight");
        positionEle.remove();
      }, 5000); // timeout of 5 seconds

      inputText.value = "";
    } else {
      alert(`The element "${searchEle}" is not found in the stack!`);
    }
  }
}






// pushContents();
// popContents();
// searchContents();
