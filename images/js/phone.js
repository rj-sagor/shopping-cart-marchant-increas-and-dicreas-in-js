 function UpadatePhone(isIncrease){
    const PhoneNumber=document.getElementById('phone-input-plus');
    const PhoneNumberString=PhoneNumber.value;
    const NewPhoneNumber=parseInt(PhoneNumberString);
    let NewIncrease;
    if(isIncrease==true){
        NewIncrease=NewPhoneNumber+1
    }
    else{
        NewIncrease=NewPhoneNumber-1;
    } 
    PhoneNumber.value=NewIncrease
    return NewIncrease;
 }
function PhoneNumberUpdate(NewIncrease){
    const totalNumber=NewIncrease*1212
    const totalElement=document.getElementById('phone-price');
    totalElement.innerText=totalNumber
}
 document.getElementById('phone-button-plus').addEventListener('click',function(){
 const NewIncrease= UpadatePhone(true)
 PhoneNumberUpdate(NewIncrease)
 SubtotalCalculetion()
})
document.getElementById('phone-button-minus').addEventListener('click',function(){
  const NewIncrease= UpadatePhone(false)
   PhoneNumberUpdate(NewIncrease)
   SubtotalCalculetion()
})