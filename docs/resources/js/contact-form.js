document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let name = e.target.elements.name.value;
  let email = e.target.elements.email.value;
  let message = e.target.elements.message.value;

  let Tbury = e.target.elements.Tbury.value;
  let Irish = e.target.elements.Irishman.value;
  let BT = e.target.elements.BRHT.value;
  let Bisons = e.target.elements.Bisons.value;
  let OHD = e.target.elements.OHD.value;

  let data = {
    name: name,
    email: email,
    message: message,
    Tbury: Tbury,
    Irishman: Irish,
    BT: BT,
    Bisons: Bisons,
    OHD: OHD
  };
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("students").push().set(data);
  // firebaseRef.child(email).set(data);

  // var rootRef = firebase.database.ref();
  // document.getElementById('submitBtn').addEventListener('click',function(e){
  document.getElementById('contact-form').remove();
  let sub = document.createElement('p');
  sub.id = "address";
  sub.textContent = 'SUBMISSION RECIEVED';
  document.getElementById('Recieved').appendChild(sub);

  // });
});

var firebaseRef = firebase.database().ref();
var urlRef = firebaseRef.child("students");
urlRef.once("value", function (snapshot) {
  snapshot.forEach(function (child) {
    console.log(
      ` ${child.key}: 
    Name:     ${child.val().name}
    Email:    ${child.val().email}
    Message:  ${child.val().message}
    ~~~~~~~~~~~~~Going to~~~~~~~~~~~ 
    Tewksbury:${child.val().Tbury}
    Irishman: ${child.val().Irishman}
    BRHT:     ${child.val().BT}
    Bisons:   ${child.val().Bisons}
    OHD:      ${child.val().OHD}`
    );
  }); 
});

document.getElementById('BRHT').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  console.log(e.target.checked);
});
document.getElementById('Tbury').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  console.log(e.target.checked);
});
document.getElementById('Irishman').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  console.log(e.target.checked);
});
document.getElementById('BisonsGame').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  console.log(e.target.checked);
});
document.getElementById('OHD').addEventListener('change', function (e) {
  e.preventDefault();
  e.target.checked;
  console.log(e.target.checked);
});
document.getElementById('check').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById("cashimg").remove();
  let newElem = document.createElement('p');
  let newE2 = document.createElement('p');
  newE2.id = "address";
  newE2.textContent = 'PO BOX 545';
  let newE3 = document.createElement('p');
  newE3.id = "address1";
  newE3.textContent = 'Clarence, NY 14032';
  newElem.id = 'sendmoney';
  newElem.textContent = "Please send cash and check to this address";
  document.getElementById('check').appendChild(newElem);
  document.getElementById('check').appendChild(newE2);
  document.getElementById('check').appendChild(newE3);

  console.log(e.target.value);
  // e.target.value = ''; 
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