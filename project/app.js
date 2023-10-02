let calculateFrom = document.getElementById("calculateFrom");
let calculateTo = document.getElementById("calculateTo");
let calculateInput = document.getElementById("calculateInput");
let output = document.getElementById("output");
let historyBody = document.getElementById("historyBody");
let count = 1;
console.log(data.rates);
let rates = data.rates;

// put data to select
for(let x in rates){
    //change string to num function
    let newValue = function (i){
                        let value = i.replace(",","");
                        return value;
                    }
    calculateFrom.innerHTML += `
         <option value="${newValue(rates[x])}">${x}</option>
    `;
    calculateTo.innerHTML += `
         <option value="${newValue(rates[x])}">${x}</option>
    `;
    count++;
}

//calculate function when click to btn
document.getElementById("calculate").addEventListener('click',(e)=>{
    e.preventDefault();
    // get value and set operation
    let inputValue = Number(calculateInput.value);
    let fromValue = Number(calculateFrom.value);
    let toValue = Number(calculateTo.value);
    // set alert if from's value and to's value has same or not
    if(toValue === fromValue){
        alert("Please choose another country to see their exchange rates with your country.");
    }else{
        let sum = (inputValue * fromValue) / toValue;
        let totalValue = sum.toFixed(2);

        // set value
        output.innerHTML = totalValue;

        // set table row in history body
        let d = new Date();
        let date = d.getDate();
        let month = d.getMonth();
        let year = d.getFullYear();
        let nameOfFrom = calculateFrom.options[calculateFrom.selectedIndex].innerHTML;
        let nameOfTo = calculateTo.options[calculateTo.selectedIndex].innerHTML;
        historyBody.innerHTML += `
        <tr class="fw-bold mb-3">
            <td>${date}/${month}/${year}</td>
            <td>${calculateFrom.value} ${nameOfFrom}</td>
            <td>${nameOfTo}</td>
            <td>${output.innerText} ${nameOfTo}</td>
        </tr>`;

        // clear value
        calculateInput.value = "";
        calculateFrom.value = "show";
        calculateTo.value = "1";
    }


});


