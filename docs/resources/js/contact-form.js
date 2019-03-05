let totalCost = 0;// * document.getElementById('ticketVal').value;//document.getElementById('js--total');
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
  let otherNames = e.target.elements.OTHERN.value;
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
  document.getElementById('contact-form').remove();
  let sub = document.createElement('p');
  sub.id = "address";
  sub.textContent = 'SUBMISSION RECIEVED';
  document.getElementById('Recieved').appendChild(sub);
});
  
var firebaseRef = firebase.database().ref();
var urlRef = firebaseRef.child("students");
urlRef.once("value", function (snapshot) {
  snapshot.forEach(function (child) {
    console.log(
    `${child.key}: 
    Name:     ${child.val().name} 
    Email:    ${child.val().email}
    Message:  ${child.val().message}
    ~~~~~~~~~~~~~Going to~~~~~~~~~~~ 
    Tewksbury:${child.val().Tbury}
    Irishman: ${child.val().Irishman}
    BRHT:     ${child.val().BT}
    Bisons:   ${child.val().Bisons}
    OHD:      ${child.val().OHD}
    ~~~~~~~~~~~~~TOTAL PRICE~~~~~~~~~
    TickVal:  ${child.val().tickVal}
    COST:     ${child.val().COST}
    other Invites names: ${child.val().otherNames} `
    );
  }); 
});

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
  let price = 30;
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
  let price = 13;
  getCost(e, price);
  console.log(e.target.checked);
});
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
  document.getElementById('pp').href = `https://www.paypal.me/wnhs79/${document.getElementById('js--total').textContent}`; 
 
}
document.getElementById('ticketVal').addEventListener('change',function(e){
  ticketVal = e.target.value;
  document.getElementById('js--total').textContent = totalCost*ticketVal;
  console.log(e.target.value);
  document.getElementById('pp').href = `https://www.paypal.me/wnhs79/${totalCost}`; 
});
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
// for refreshing database BE CAREFUL WITH THAT 
// urlRef.remove();
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

// document.getElementById('submitBtn').addEventListener('click',function(e){
//   document.getElementById('contact-form').remove();
//   document.getElementById('Recieved').textContent="Submission Complete";
// });