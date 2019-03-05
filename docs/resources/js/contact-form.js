let totalCost = 0;// * document.getElementById('ticketVal').value;//document.getElementById('js--total');
// let newtotal = document.getElementById('js--total').textContent;
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let name = e.target.elements.name.value;
  let email = e.target.elements.email.value;
  let message = e.target.elements.message.value;

  let Tbury = e.target.elements.Tbury.checked;
  let Irish = e.target.elements.Irishman.checked;
  let BT = e.target.elements.BRHT.checked;
  let Bisons = e.target.elements.Bisons.checked;
  let OHD = e.target.elements.OHD.checked;
  let tickVal = e.target.elements.tickVal.value;
  let total = document.getElementById('js--total').textContent;
  let otherNames = e.target.elements.otherNames.value;
  let data = {
    name: name,
    email: email,
    message: message,
    Tbury: Tbury,
    Irishman: Irish, 
    BT: BT,  
    Bisons: Bisons,
    OHD: OHD,
    tickVal: tickVal,
    COST: total,
    otherNames: otherNames
  };
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("students").push().set(data);
  let sub = document.createElement('p');
  sub.id = "address";
  sub.textContent = 'SUBMISSION RECIEVED';
  let subt = document.createElement('p');
  subt.id = "subt";
  subt.textContent = `Total $${total}, Now Choose payment option`;
  document.getElementById('Recieved').appendChild(subt);
  document.getElementById('contact-form').remove();
}); 
  
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////CHECKBOXES 
////////////////////////////////////////////////////////////////BELOW
document.getElementById('BRHT').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  let price = 35;
  getCost(e,price);
  console.log(e.target.checked);
});
document.getElementById('Tbury').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  let price = 10;
  getCost(e,price);
  console.log(e.target.checked);
});
document.getElementById('Irishman').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  let price = 0;
  getCost(e, price);
  console.log(e.target.checked);
});
document.getElementById('BisonsGame').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  let price = 7.50;
  getCost(e,price);
  console.log(e.target.checked);
});
document.getElementById('OHD').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  let price = 0;
  getCost(e, price);
  console.log(e.target.checked);
});
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////// CASH POBOX
//////////////////////////////////////////////////////////////// ON CLICK
document.getElementById('check').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById("cashimg").remove();
  let newElem = document.createElement('p');
  let newE2 = document.createElement('p');
  newE2.id = "address";
  newE2.textContent = 'PO BOX 545';
  let newE4 = document.createElement('p');
  newE4.id = "accountHolder";
  newE4.textContent = 'Elaine Townsend';
  let newE3 = document.createElement('p');
  newE3.id = "address1";
  newE3.textContent = 'Clarence, NY 14032';
  newElem.id = 'sendmoney';
  newElem.textContent = "Please send cash and check to this address";
  document.getElementById('check').appendChild(newElem);
  document.getElementById('check').appendChild(newE4);

  document.getElementById('check').appendChild(newE2);
  document.getElementById('check').appendChild(newE3);

  console.log(e.target.value);
  // e.target.value = ''; 
});

///////////////////////////////////////////////PAYPAL ONCLICK
document.getElementById('ticketVal').addEventListener('change',function(e){
  ticketVal = e.target.value;
  document.getElementById('js--total').textContent = totalCost*ticketVal;
  console.log(e.target.value);
  document.getElementById('pp').href = `https://paypal.me/wnhs79/${totalCost}`; 
});
////////////////////////////////////////////////////////////////


function getCost(e, price){
  // price = price ;
  if(e.target.checked === true){
    // add cost to total 
    totalCost = totalCost +price ;// *document.getElementById('ticketVal').value;
    document.getElementById('js--total').textContent = totalCost*document.getElementById('ticketVal').value; 
  }else{
    if(totalCost !==0)
    totalCost = totalCost - price;
    document.getElementById('js--total').textContent = totalCost*document.getElementById('ticketVal').value;
  }
  document.getElementById('pp').href = `https://paypal.me/wnhs79/${document.getElementById('js--total').textContent}`; 
 
}

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
