const inputValue = document.getElementById("input");
const number = document.querySelectorAll(".num").forEach(function (maxi) {
  maxi.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN") {
      inputValue.innerText = "";
    }
    if (inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});
const calculate = document.querySelectorAll(".itemfxn").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const mynum= document.getElementById("input").value;
    let lastValue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length - 1);
    if (!isNaN(lastValue) && e.target.innerHTML === "=") {
      inputValue.innerText = eval(inputValue.innerText);
    }
    else if (e.target.innerHTML === "x²") {
      inputValue.innerText = eval((inputValue.innerText)*(inputValue.innerText));
    }
    else if (e.target.innerHTML === "clear") {
      inputValue.innerText = '';
    }
    else if (e.target.innerHTML === "√") {
      inputValue.innerText = eval(Math.sqrt(inputValue.innerText));
    }
    else if (e.target.innerHTML === "log()") {
      inputValue.innerText = eval(Math.log10(inputValue.innerText))
    }
    else if (e.target.innerHTML === "exp()") {
      inputValue.innerText = eval(Math.exp(inputValue.innerText))
    }
    else if(e.target.innerHTML === "+/-")
    {
      inputValue.innerText += '-'
    }
    else if (e.target.innerHTML === "del") {
      inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
      if (inputValue.innerText.length == 0) {
        inputValue.innerText = '';
      }
    } else {
      if (!isNaN(lastValue)) {
        inputValue.innerText += e.target.innerHTML;
      }
    }
  });
});