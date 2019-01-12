const clickedButton = document.querySelectorAll('.btn-value');
const calcResults = document.querySelector('#calcResults');
const resetButton = document.querySelector('#reset');

function doCalc() {
    let resultsText = document.querySelector('#calcResults');
    const getValue = this.getAttribute('data-val');
    
    if (resultsText.value == 0) {
        resultsText.value = getValue;
    } else {
        if (getValue == '=') {
            resultsText.value = eval(resultsText.value);
        } else if (getValue == '+/-') {
            if (resultsText.value < 0 ) { // Error here, check again here
                resultsText.value = '-' + resultsText.value;
            } else {
                resultsText.value = resultsText.value;
            }
            
        } else {
            resultsText.value = resultsText.value + getValue;
        }
    }
}

function reset() {
    calcResults.value = "0";
}

Array.from(clickedButton).forEach(function(e) {
    e.addEventListener("click", doCalc, false);
});

resetButton.addEventListener("click", reset, false);