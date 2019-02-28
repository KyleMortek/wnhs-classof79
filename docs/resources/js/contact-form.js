document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let name = e.target.elements.name.value;
  let email = e.target.elements.email.value;
  let message = e.target.elements.message.value;

  let Tbury = e.target.elements.Tbury.value;
  let Irish = e.target.elements.Irishman.value;
  let BT = e.target.elements.BRHT.value;
  let Bisons = e.target.elements.Bisons.value;

  let data = {
    name: name,
    email: email,
    message: message,
    Tbury: Tbury,
    Irishman: Irish,
    BT: BT,
    Bisons:Bisons 
  };
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("students").push().set(data);

  // var rootRef = firebase.database.ref();
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
    Bisons:   ${child.val().Bisons}`
    );
  });
});