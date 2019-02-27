document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  // let database1 = firebase.database();
  // console.log(database1);
  let name = e.target.elements.name.value;
  let email = e.target.elements.email.value;
  let message = e.target.elements.message.value;
  let data = {
    name: name,
    email: email,
    message: message
  };
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("students").push().set(data);
  // var rootRef = firebase.database.ref();
});