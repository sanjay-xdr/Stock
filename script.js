
var initialPrice = document.querySelector("#initialprice");
var stocks = document.querySelector("#stocks");
var currentPrice = document.querySelector("#currentprice");
var submitBtn = document.querySelector("#submit");
var outputEl = document.querySelector("#output-el");
var body=document.querySelector("#body");


submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var initp = Number(initialPrice.value);
  var no = Number(stocks.value);
  var currnt = Number(currentPrice.value);

  calculateProfitAndLoss(initp, no, currnt);
}


function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}% ⬇️`
    );

    if(lossPercentage>=50){
      console.log(Math.trunc(lossPercentage));
      body.style.backgroundColor="#374151";
    }

  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}% ⬆️`
    );
  } else {
    showOutput(`No Risks`);
  }
}

function showOutput(message) {
  outputEl.innerHTML = message;
}