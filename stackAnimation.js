const inputText = document.getElementById("write-text");
const pushBtn = document.getElementById("push");
const popBtn = document.getElementById("pop");
const searchBtn = document.getElementById("search");
const pushedContentContainer = document.getElementById("push-stack");
const resetBtn = document.getElementById("reset");
let pushedText;
let newSpanEle;
const poppedArray = [];
const pushedArray = [];
const pushedArrayValue = [];
const poppedArrayValue = [];
let lengthOfPushedArr;
let bottomValueForPush = 0;
let bottomValueForPop = 250;
pushBtn.addEventListener("click", pushContents);
popBtn.addEventListener("click", popContents);
searchBtn.addEventListener("click", searchContents);
resetBtn.addEventListener("click", resetContents);
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
function resetContents() {
  pushedArray.forEach((ele) => {
    ele.remove();
  });
  poppedArray.forEach((ele) => {
    ele.remove();
  });

  pushedArrayValue.splice(0, pushedArrayValue.length);
  pushedArrayValue.splice(0, pushedArray.length);
  bottomValueForPush = 0;
  bottomValueForPop = 250;
  poppedArray.splice(0, poppedArray.length);
  poppedArrayValue.splice(0, poppedArrayValue.length);
  bottomValueForPop = 250;

  // Re-enable the push button
  pushBtn.disabled = false;
}

let count = 0;


function pushContents() {
  pushedText = inputText.value;
  if (pushedText == "") {
    alert("Please, enter some content!!!");
  } else if (count == 10) {
    alert("Stack Overflow!!!");
    pushBtn.removeEventListener("click", pushContents);
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
    count++;
  }
}


// function popContents() {
//   let poppedEle;
//   popBtn.onclick = function () {
//     if (pushedArray == "") {
//       alert("Nothing to pop!!!");
//     } else {
//       lengthOfPushedArr = pushedArray.length;
//       poppedEle = pushedArray[lengthOfPushedArr - 1];
//       poppedEle.style =
//         "--bottom-value: " +
//         bottomValueForPush +
//         "px; --bottom-value-pop-start: " +
//         bottomValueForPush +
//         "px; --bottom-value-pop-end: " +
//         bottomValueForPop +
//         "px;";
//       poppedEle.style.animation = "popAnimation 3s forwards";
//       let poppedValue = parseInt(poppedEle.innerText);
//       pushedArray.pop();
//       pushedArrayValue.splice(pushedArrayValue.indexOf(poppedValue), 1); // remove the popped value from pushedArrayValue
//       bottomValueForPop += 40;
//       bottomValueForPush -= 40;
//       poppedArray.push(poppedEle);
//       poppedArrayValue.push(poppedValue);
//       count--;

//       // Re-enable the push button
//       pushBtn.disabled = false;
//     }
//   };
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
      poppedArray.push(poppedEle);
      poppedArrayValue.push(poppedValue);
      count--;
      
      // re-add the event listener for the push button
      pushBtn.addEventListener("click", pushContents);
    }
  };
}



// function searchContents() {
//   let searchEle;
//   searchBtn.onclick = function () {
//     searchEle = parseInt(inputText.value);
//     if (isNaN(searchEle)) {
//       alert("Please enter a valid number!");
//       return;
//     }
//     let position = pushedArrayValue.indexOf(searchEle);
//     if (position >= 0) {
//       let searchedEle = pushedArray[position];
//       searchedEle.classList.add("highlight");
//       searchedEle.classList.add("filter");
//       searchedEle.scrollIntoView();
//       let positionElement = document.createElement("div");
//       positionElement.classList.add("position");
//       positionElement.innerText = `Position: ${position + 1}`;
//       // searchedEle.parentElement.appendChild(positionElement);
//       // let searchedElePosition = searchedEle.getBoundingClientRect();
//       // let positionElePosition = positionElement.getBoundingClientRect();
//       // positionElement.style.right = searchedElePosition.left + -1 + "px";
//       // positionElement.style.top = searchedElePosition.top - positionElePosition.height + "px";
//       let searchEleId = `pushed-content${position + 1}`;
//       let positionEle = document.createElement("span");
//       positionEle.innerText = position;
//       positionEle.classList.add("position");
//       searchedEle.appendChild(positionEle);
//       setTimeout(function () {
//         searchedEle.classList.remove("highlight");
//         positionEle.remove();
//       }, 5000); // timeout of 5 seconds

//       inputText.value = "";
//     } else {
//       alert(`The element "${searchEle}" is not found in the stack!`);
//     }
//   }
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
      searchedEle.classList.add("filter");
      searchedEle.scrollIntoView();

      // generate random color
      let colorInterval = setInterval(function () {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        searchedEle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }, 10);

      let positionElement = document.createElement("div");
      positionElement.classList.add("position");
      positionElement.innerText = `Position: ${position + 1}`;
      let searchEleId = `pushed-content${position + 1}`;
      let positionEle = document.createElement("span");
      positionEle.innerText = position;
      positionEle.classList.add("position");
      searchedEle.appendChild(positionEle);

      setTimeout(function () {
        searchedEle.classList.remove("highlight");
        searchedEle.style.backgroundColor='';
        positionEle.remove();
        clearInterval(colorInterval); // stop changing color
      }, 5000); // timeout of 5 seconds

      inputText.value = "";
    } else {
      alert(`The element "${searchEle}" is not found in the stack!`);
    }
  }
}







