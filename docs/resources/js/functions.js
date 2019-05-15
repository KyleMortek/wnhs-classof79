let totalCost = 0; 
let totalCostG = 0;

function onChanger(id){
  document.getElementById(id).addEventListener('change', function (e) {
    e.preventDefault();
    // console.log(document.getElementById('js--total').textContent)
    if (document.getElementById('js--total').textContent === ''){
      let price = 0;
      getCost(e, price);
    }
  });
}

function onChangeGroup(id, price,elem1,elem2){
  document.getElementById(id).addEventListener('change', function (e){
    e.preventDefault();
    if(id !== 'ticketVal'){
      document.getElementById(elem1).checked = false;
      document.getElementById(elem2).checked = false;
      if(id[id.length-1] === 'G'){// guest
        getCostG(e, price);
      }else{//member
        getCost(e, price);
      }
    }else{
      ///////////////ticketVal///////////////////////
      if (e.target.value === "2") {
        $('.guestG').css('display', 'inline-block');
        $('#guest').css('display', 'block');
        $('#gg').css('display', 'block');
        document.getElementById('opt1').textContent = `For 2 Individuals`;
      } else {
        // make sure secodn row of checkboxes are gone. 
        document.getElementById('opt1').textContent = `For 1 Individual`;
        $('.js-guest').css('display', 'none');
      }
    }
  });
}

////////////////////////////////////////////////////////////////
///////////////////tickVal and getcost//////////////////////////
////////////////////////////////////////////////////////////////
function getCost(e, price) {
  if (e.target.checked === true) {
    totalCost = price;
    document.getElementById('js--total').textContent = totalCost + totalCostG;
  } else {
    // if (totalCost !== 0)
    totalCost = price - price;
    document.getElementById('js--total').textContent = totalCost + totalCostG; 
  }
  document.getElementById('pp').textContent= "SEND AS FRIENDS AND FAMILY TO AVOID FEES, IF YOU STILL WISH TO SEND THROUGH GOODS AND SERVICES PLEASE ADD !) DOLLARS TO TOTAL COST"
  document.getElementById('pp').href = `https://paypal.me/wnhs79/${document.getElementById('js--total').textContent}`;

}

function getCostG(e, price) {
  if (e.target.checked === true) {
    totalCostG = price;
    document.getElementById('js--total').textContent = totalCost + totalCostG;
  } else {
    // if (totalCost !== 0)
    totalCostG = price - price;
    document.getElementById('js--total').textContent = totalCost + totalCostG;
  }
  document.getElementById('pp').href = 
  `https://paypal.me/wnhs79/${document.getElementById('js--total').textContent}`;
}

function saveFire(e){
  let name = e.target.elements.name.value;
  let email = e.target.elements.email.value;
  let message = e.target.elements.message.value;
  let Tbury = e.target.elements.Tbury.checked;
  let T3 = e.target.elements.T3.checked;
  let Irish = e.target.elements.Irishman.checked;
  let Bisons = e.target.elements.Bisons.checked;
  let OHD = e.target.elements.OHD.checked;
  let tickVal = e.target.elements.tickVal.value;
  let total = document.getElementById('js--total').textContent;
  let otherNames = e.target.elements.otherNames.value;
  // // guest
  let TburyG = e.target.elements.TburyG.checked;
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
    Tbury: Tbury, // T2 river and tbury
    Irishman: Irish,
    Bisons: Bisons, //tbury and bisons
    OHD: OHD,
    tickVal: tickVal, //mem or mem & guest
    //guest
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

}

function getHeadCount(){

  var rootRef = firebase.database().ref();
  
  rootRef.child('headCount').once("value")
    .then(function (headCountVal) {
      document.getElementById('headCount').textContent = 
      `head Count = ${headCountVal.val()}`;
    });
} 

function updateHeadCount(e){
  let tickVal = e.target.elements.tickVal.value;

  var rootRef = firebase.database().ref();
  rootRef.child('headCount').once("value")
    .then(function (headCountVal) {

      let headNum = headCountVal.val() + parseInt(tickVal);
      
      rootRef.child("headCount").set(headNum);
      document.getElementById('headCount').textContent = `head Count = ${headNum}`;
    });
}

function saveSubmission(){
  let total = document.getElementById('js--total').textContent;

  let sub = document.createElement('p');

  sub.id = "address";
  sub.textContent = 'SUBMISSION RECIEVED';
  document.getElementById('Recieved').appendChild(sub);
  
  let subt = document.createElement('p');
  
  subt.id = "subt";
  subt.textContent = `Total $${total}, Now Choose payment option`;
  document.getElementById('Recieved').appendChild(subt);
  
  document.getElementById('contact-form').remove();
}




// //old code


// let totalCost = 0;
// let totalCostG = 0;
// let finalCost = totalCost + totalCostG;
// // gets refrence to head Count
// getHeadCount();
// document.getElementById('contact-form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   //savedata
//   saveFire(e);

//   //submission rec
//   saveSubmission();

//   //updates headcount value
//   updateHeadCount(e);

// });




// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////CHECKBOXES 
// ////////////////////////////////////////////////////////////////BELOW
// // member
// document.getElementById('Tbury').addEventListener('change', function (e) {
//   e.preventDefault();
//   document.getElementById('BisonsGame').checked = false;
//   document.getElementById('T3').checked = false;
//   let price = 55;
//   getCost(e, price);
// });
// document.getElementById('T3').addEventListener('change', function (e) {
//   e.preventDefault();
//   document.getElementById('Tbury').checked = false;
//   document.getElementById('BisonsGame').checked = false;
//   let price = 70;
//   getCost(e, price);
// });
// document.getElementById('BisonsGame').addEventListener('change', function (e) {
//   e.preventDefault();
//   document.getElementById('T3').checked = false;
//   document.getElementById('Tbury').checked = false;
//   let price = 45;
//   getCost(e, price);
// });

// // guest
// document.getElementById('TburyG').addEventListener('change', function (e) {
//   e.preventDefault();
//   document.getElementById('BisonsGameG').checked = false;
//   document.getElementById('T3G').checked = false;
//   let price = 55;
//   getCostG(e, price);
// });
// document.getElementById('T3G').addEventListener('change', function (e) {
//   e.preventDefault();
//   document.getElementById('TburyG').checked = false;
//   document.getElementById('BisonsGameG').checked = false;
//   let price = 70;
//   getCostG(e, price);
// });
// document.getElementById('BisonsGameG').addEventListener('change', function (e) {
//   e.preventDefault();
//   document.getElementById('T3G').checked = false;
//   document.getElementById('TburyG').checked = false;
//   let price = 45;
//   getCostG(e, price);
// });
// /// grouped above
// //////////////////////////////
// //////////////////////////////
// ////////////////////////////// member
// // might not need these listeners below. 
// document.getElementById('Irishman').addEventListener('change', function (e) {
//   e.preventDefault();
//   let price = 0;
//   getCost(e, price);
// });
// document.getElementById('OHD').addEventListener('change', function (e) {
//   e.preventDefault();
//   let price = 0;
//   getCost(e, price);
// });
// //////////////////////////// guest
// document.getElementById('IrishmanG').addEventListener('change', function (e) {
//   e.preventDefault();
//   let price = 0;
//   getCost(e, price);
// });
// document.getElementById('OHDG').addEventListener('change', function (e) {
//   e.preventDefault();
//   let price = 0;
//   getCost(e, price);
// });


// //////////////////////////////////////////////////////////////// CASH POBOX
// //////////////////////////////////////////////////////////////// ON CLICK
// document.getElementById('check').addEventListener('click', function (e) {
//   e.preventDefault();
//   document.getElementById("cashimg").remove();
  
//   let newElem = document.createElement('p');
  
//   newElem.id = 'sendmoney';
//   newElem.textContent = 
//   "Please send cash and check to this address BY April 15th";
//   document.getElementById('check').appendChild(newElem);

//   let newE4 = document.createElement('p');
  
//   newE4.id = "accountHolder";
//   newE4.textContent = 'Elaine Townsend';
//   document.getElementById('check').appendChild(newE4);
  
//   let newE2 = document.createElement('p');
  
//   newE2.id = "address";
//   newE2.textContent = 'PO BOX 545';
//   document.getElementById('check').appendChild(newE2);
  
  
//   let newE3 = document.createElement('p');
  
//   newE3.id = "address1";
//   newE3.textContent = 'Clarence, NY 14032';
//   document.getElementById('check').appendChild(newE3);
// });














// ////////////////////////////////////////////////////////////////
// ///////////////////tickVal and getcost//////////////////////////
// ////////////////////////////////////////////////////////////////
// document.getElementById('ticketVal').addEventListener('change', function (e) {
//   e.preventDefault();
//   if (e.target.value === "2") {
//     $('.guestG').css('display', 'inline-block');
//     $('#guest').css('display', 'block');
//     $('#gg').css('display', 'block');
//     document.getElementById('opt1').textContent = `For 2 Individuals`;
//   } else {
//     // make sure secodn row of checkboxes are gone. 
//     document.getElementById('opt1').textContent = `For 1 Individual`;
//     $('.js-guest').css('display', 'none');
//   }
// });

// function getCost(e, price) {
//   if (e.target.checked === true) {
//     totalCost = price;
//     document.getElementById('js--total').textContent = totalCost + totalCostG;
//   } else {
//     // if (totalCost !== 0)
//     totalCost = price - price;
//     document.getElementById('js--total').textContent = totalCost + totalCostG;
//   }
//   document.getElementById('pp').href = `https://paypal.me/wnhs79/${document.getElementById('js--total').textContent}`;

// }

// //////////////////////////////////////
// //////////////////////////////////////
// //////////////get Cost for guest and/or member 
// //////////////////////////////////////
// //////////////////////////////////////
// function getCostG(e, price) {
//   if (e.target.checked === true) {
//     totalCostG = price;
//     document.getElementById('js--total').textContent = totalCost + totalCostG;
//   } else {
//     // if (totalCost !== 0)
//     totalCostG = price - price;
//     document.getElementById('js--total').textContent = totalCost + totalCostG;
//   }
//   document.getElementById('pp').href = `https://paypal.me/wnhs79/${document.getElementById('js--total').textContent}`;

// }