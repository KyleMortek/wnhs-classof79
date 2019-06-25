// let totalCost = 0; 
// let totalCostG = 0;
let finalCost = totalCost + totalCostG;

// gets refrence to head Count
var rootRef = firebase.database().ref();
rootRef.child('headCount').once("value")
.then(function (headCountVal) {
  document.getElementById('headCount').textContent = `head Count = ${headCountVal.val()}`;
});


// const nodemailer = require('nodemailer');
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let name = e.target.elements.name.value;
  let email = e.target.elements.email.value;
  let message = e.target.elements.message.value;

  let Tbury = e.target.elements.Tbury.checked;
  let Tbury1 = e.target.elements.Tbury1.checked;
  let T3 = e.target.elements.T3.checked;
  let Irish = e.target.elements.Irishman.checked;
  let Bisons = e.target.elements.Bisons.checked;
  let OHD = e.target.elements.OHD.checked;
  let tickVal = e.target.elements.tickVal.value;
  let total = document.getElementById('js--total').textContent;
  let otherNames = e.target.elements.otherNames.value;


  // guest
  let TburyG = e.target.elements.TburyG.checked;
  let TburyG1 = e.target.elements.TburyG1.checked;
  let T3G = e.target.elements.T3G.checked;
  let IrishG = e.target.elements.IrishmanG.checked;
  let BisonsG = e.target.elements.BisonsG.checked;
  let OHDG = e.target.elements.OHDG.checked;


  let data = {
    name: name,
    email: email,
    message: message,
    // member
    T3: T3,
    Tbury1: Tbury1, // T2 river and tbury
    Tbury: Tbury, // T2 river and tbury
    Irishman: Irish,
    Bisons: Bisons, //tbury and bisons
    OHD: OHD,
    tickVal: tickVal, //mem or mem & guest
    //guest
    TburyG1: TburyG1, //t2
    TburyG: TburyG, //t2
    T3G: T3G, //t3
    BisonsG: BisonsG, //tburyg bisong
    IrishG: IrishG,
    OHDG: OHDG,
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
  // updates headcount value
  var rootRef = firebase.database().ref();
  rootRef.child('headCount').once("value")
    .then(function (headCountVal) {
      let headNum = headCountVal.val() + parseInt(tickVal);
      rootRef.child("headCount").set(headNum);
      document.getElementById('headCount').textContent = `head Count = ${headNum}`;
    });


    


  document.getElementById('contact-form').remove();
});

// const irish = 'Irishman';
// const irishG = 'IrishmanG';
// const ohd = 'OHD';
// const ohdG = 'OHDG';

// const bisons = 'BisonsGame';
// const bisonsG = 'BisonsGameG';
// const tbury = 'Tbury';
// const tburyG= 'TburyG';
// const t3 = 'T3';
// const t3G = 'T3G';
onChanger('Irishman');
onChanger('OHD');
onChanger('IrishmanG');
onChanger('OHDG');

onChangeGroup('TburyG1',35,'BisonsGameG','TburyG','T3G')
onChangeGroup('TburyG',60,'BisonsGameG','T3G','TburyG1');
onChangeGroup('BisonsGameG',50,'T3G','TburyG','TburyG1');
onChangeGroup('T3G',75,'BisonsGameG','TburyG','TburyG1');
onChangeGroup('Tbury1',35,'BisonsGame','T3','Tbury')
onChangeGroup('Tbury',60,'BisonsGame','T3','Tbury1');
onChangeGroup('BisonsGame',50,'T3','Tbury','Tbury1');
onChangeGroup('T3',75,'BisonsGame','Tbury','Tbury1');
onChangeGroup('ticketVal',0,'','');
//////////////////////////////////////////////////////////////// CASH POBOX
//////////////////////////////////////////////////////////////// ON CLICK
document.getElementById('check').addEventListener('click', function (e) {
  e.preventDefault();
  
  document.getElementById("cashimg").remove();
  
  let newElem = document.createElement('p');
  newElem.id = 'sendmoney';
  newElem.textContent = "Please send cash and check to this address BY JUNE 30th LAST DAY TO PAY AT THIS ADDRESS";
  
  let newE4 = document.createElement('p');
  newE4.id = "accountHolder";
  newE4.textContent = 'Elaine Townsend';
  
  let newE2 = document.createElement('p');
  newE2.id = "address";
  newE2.textContent = 'PO BOX 545';
  
  let newE3 = document.createElement('p');
  newE3.id = "address1";
  newE3.textContent = 'Clarence, NY 14032';
  
  document.getElementById('check').appendChild(newElem);
  document.getElementById('check').appendChild(newE4);
  document.getElementById('check').appendChild(newE2);
  document.getElementById('check').appendChild(newE3);
});

