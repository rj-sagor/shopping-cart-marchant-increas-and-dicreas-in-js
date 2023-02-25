function getElementvalueById(elementId){
    const CaseElement=document.getElementById(elementId)
    const CaseElementString=CaseElement.innerText;
    const CaseTotal=parseInt(CaseElementString);
    return CaseTotal;
}
function TaxtElementVlaueByid(elementId,value){
    const SubTotalElement=document.getElementById(elementId);
    SubTotalElement.innerText=value
}
function SubtotalCalculetion(){
    const phonTotal=getElementvalueById('phone-price');
    const CaseTotalvalue=getElementvalueById('case-value');
    const subtotal=phonTotal+CaseTotalvalue
    // calculate subtotal
    TaxtElementVlaueByid('sub-total',subtotal);

    // calculet tax
    const taxtotalString= (subtotal*0.1).toFixed(2);
    const taxtotal=parseFloat(taxtotalString);
    TaxtElementVlaueByid('tax-total',taxtotal)
    
    // calculate final total
    const FinalTotal=subtotal+taxtotal;
    TaxtElementVlaueByid('final-total',FinalTotal)
   

}