  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBEfTV8VuuD-D2W-zCIpVHlAqKquDqy_kE",
    authDomain: "contactform-39ed7.firebaseapp.com",
    projectId: "contactform-39ed7",
    storageBucket: "contactform-39ed7.appspot.com",
    messagingSenderId: "706425957414",
    appId: "1:706425957414:web:c9b87fc5de2680d1d64ae7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}