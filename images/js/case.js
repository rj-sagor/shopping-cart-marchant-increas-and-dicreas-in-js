function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-input-plus');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateTotalNumber(newCaseNumber){
    const totalprice=newCaseNumber*59;
    const totalElement=document.getElementById('case-value');
    totalElement.innerText=totalprice
}
document.getElementById('case-button-plus').addEventListener('click',function(){
   const newCaseNumber=updateCaseNumber(true);
    updateTotalNumber(newCaseNumber)
    SubtotalCalculetion();
});
document.getElementById('case-button-minus').addEventListener('click',function(){
    const newCaseNumber= updateCaseNumber(false);
   updateTotalNumber(newCaseNumber)
   SubtotalCalculetion();
});