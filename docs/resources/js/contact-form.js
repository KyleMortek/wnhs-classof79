let totalCost = 0; // * document.getElementById('ticketVal').value;/document.getElementById('js--total');
let totalCostG = 0;
let finalCost = totalCost +totalCostG;
// gets refrence to head Count
var rootRef = firebase.database().ref();
rootRef.child('headCount').once("value")
.then(function (headCountVal) {
  document.getElementById('headCount').textContent= `head Count = ${headCountVal.val()}`;
});


// let newtotal = document.getElementById('js--total').textContent;
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let name = e.target.elements.name.value;
  let email = e.target.elements.email.value;
  let message = e.target.elements.message.value;

  let Tbury = e.target.elements.Tbury.checked;
  let T3 = e.target.elements.T3.checked;
  let Irish = e.target.elements.Irishman.checked;
  // let BT = e.target.elements.BRHT.checked;
  let Bisons = e.target.elements.Bisons.checked;
  let OHD = e.target.elements.OHD.checked;
  let tickVal = e.target.elements.tickVal.value;
  let total = document.getElementById('js--total').textContent;
  let otherNames = e.target.elements.otherNames.value;


  // guest
  let TburyG = e.target.elements.TburyG.checked;
  let T3G = e.target.elements.T3G.checked;
  let IrishG = e.target.elements.IrishmanG.checked;
  // let BT = e.target.elements.BRHT.checked;
  let BisonsG = e.target.elements.BisonsG.checked;
  let OHDG = e.target.elements.OHDG.checked;


  let data = {
    name: name,
    email: email,
    message: message,
    T3: T3,
    Tbury: Tbury, // T2 river and tbury
    Irishman: Irish,
    // BT: BT,
    Bisons: Bisons, //tbury and bisons
    OHD: OHD,
    tickVal: tickVal,//mem or mem & guest

    //guest
    TburyG: TburyG, //t2
    T3G: T3G,       //t3
    BisonsG:BisonsG,//tburyg bisong
    IrishG:IrishG,
    OHDG:OHDG,

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
  document.getElementById('Recieved').appendChild(sub);

  document.getElementById('Recieved').appendChild(subt);
  
  
  // create child named headcount
  // var firebaseHeadCount = firebase.database().ref()
  var rootRef = firebase.database().ref();
  rootRef.child('headCount').once("value")
  .then(function (headCountVal) {
    let headNum = headCountVal.val()+parseInt(tickVal);
    rootRef.child("headCount").set(headNum);
    document.getElementById('headCount').textContent= `head Count = ${headNum}`;
  });
    
  
  document.getElementById('contact-form').remove();
  // let headCount = 
  // let hd = {
  //   headCount: headCount+1
  // }
  // firebaseRef.child("headCount").set(hd);

 
});

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////CHECKBOXES 
////////////////////////////////////////////////////////////////BELOW
// document.getElementById('BRHT').addEventListener('change', function (e) {
//   e.preventDefault();
//   e.target.checked;
//   let price = 35;
//   getCost(e,price);
//   console.log(e.target.checked);
// });
document.getElementById('Tbury').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  document.getElementById('BisonsGame').checked= false;
  document.getElementById('T3').checked = false;
  let price = 55;
  getCost(e, price);
  console.log(e.target.checked);
});
document.getElementById('T3').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  document.getElementById('Tbury').checked= false;
  document.getElementById('BisonsGame').checked= false;
  let price = 70;
  getCost(e, price);
  console.log(e.target.checked);
});
document.getElementById('BisonsGame').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  document.getElementById('T3').checked = false;
  document.getElementById('Tbury').checked= false;
  let price = 45;
  getCost(e, price);
  console.log(e.target.checked);
});

document.getElementById('TburyG').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  document.getElementById('BisonsGameG').checked= false;
  document.getElementById('T3G').checked = false;
  let price = 55;
  getCostG(e, price);
  console.log(e.target.checked);
});
document.getElementById('T3G').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  document.getElementById('TburyG').checked= false;
  document.getElementById('BisonsGameG').checked= false;
  let price = 70;
  getCostG(e, price);
  console.log(e.target.checked);
});
document.getElementById('BisonsGameG').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  document.getElementById('T3G').checked = false;
  document.getElementById('TburyG').checked= false;
  let price = 45;
  getCostG(e, price);
  console.log(e.target.checked);
});
/// grouped above
//////////////////////////////
//////////////////////////////
document.getElementById('Irishman').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  let price = 0;
  getCost(e, price);
  console.log(e.target.checked);
});
document.getElementById('OHD').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  let price = 0;
  getCost(e, price);
  console.log(e.target.checked);
});

document.getElementById('IrishmanG').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  let price = 0;
  getCost(e, price);
  console.log(e.target.checked);
});
document.getElementById('OHDG').addEventListener('change', function (e) {
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
  newElem.textContent = "Please send cash and check to this address BY April 15th";
  document.getElementById('check').appendChild(newElem);
  document.getElementById('check').appendChild(newE4);

  document.getElementById('check').appendChild(newE2);
  document.getElementById('check').appendChild(newE3);

  console.log(e.target.value);
  // e.target.value = ''; 
});
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////for 1 or 2 individuals
// 
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
///////////////////////////////////////////////PAYPAL ONCLICK
// document.getElementById('ticketVal').addEventListener('change', function (e) {
//   ticketVal = e.target.value;
//   document.getElementById('js--total').textContent = totalCost * ticketVal;
//   console.log(e.target.value);
//   document.getElementById('pp').href = `https://paypal.me/wnhs79/${totalCost}`;
// });
////////////////////////////////////////////////////////////////
document.getElementById('ticketVal').addEventListener('change', function (e) {
  e.preventDefault();
  // document.getElementById('BisonsGameG').
  // document.getElementById('T3G').
  // document.getElementById('TburyG').

  // document.getElementById('OHDG').
  // document.getElementById('IrishmanG').
  if(e.target.value === "2"){
    console.log('i am here');
    // document.getElementById('opt1').textContent='';
    $('.guestG').css('display','inline-block');
    $('#guest').css('display','block');
    $('#gg').css('display', 'block');
    document.getElementById('opt1').textContent= `For 2 Individuals`;
  }else{
    // make sure secodn row of checkboxes are gone. 
    document.getElementById('opt1').textContent= `For 1 Individual`;
    $('.guestG').css('display','none');
    $('#guest').css('display','none');
    $('#gg').css('display', 'none');

  }
});

function getCost(e, price) {
  // price = price ;
  if (e.target.checked === true) {
    // add cost to total 
    totalCost = price;//totalCost + price; // *document.getElementById('ticketVal').value;
    
    document.getElementById('js--total').textContent = totalCost+totalCostG;// * document.getElementById('ticketVal').value;
  } else {
    if (totalCost !== 0)
      totalCost = price-price;//totalCost - price;
    document.getElementById('js--total').textContent = totalCost+totalCostG;// * document.getElementById('ticketVal').value;
  }
  document.getElementById('pp').href = `https://paypal.me/wnhs79/${document.getElementById('js--total').textContent}`;

}
function getCostG(e, price) {
  // price = price ;
  if (e.target.checked === true) {
    // add cost to total 
    totalCostG = price;//totalCost + price; // *document.getElementById('ticketVal').value;
    
    document.getElementById('js--total').textContent = totalCost +totalCostG;// * document.getElementById('ticketVal').value;
  } else {
    if (totalCost !== 0)
      totalCostG = price-price;//totalCost - price;
    document.getElementById('js--total').textContent = totalCost+totalCostG;// * document.getElementById('ticketVal').value;
  }
  document.getElementById('pp').href = `https://paypal.me/wnhs79/${document.getElementById('js--total').textContent}`;

}

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////