var firebaseConfig = {
  apiKey: "AIzaSyCYodqxkGaVCXZGyWTbCMpgxVjAvAAwbzU",
  authDomain: "webdevelopment-c76d3.firebaseapp.com",
  databaseURL: "https://webdevelopment-c76d3-default-rtdb.firebaseio.com",
  projectId: "webdevelopment-c76d3",
  storageBucket: "webdevelopment-c76d3.appspot.com",
  messagingSenderId: "912341930842",
  appId: "1:912341930842:web:605bab2035d8811b281963"
};

// Initialize Firebase
 var app =firebase. initializeApp(firebaseConfig);


 function getttt(){
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var text = document.getElementById("text");
  var number = document.getElementById("number");
  var sell = document.getElementById("sell");
  var location = document.getElementById("location");



  //  console.log(name.value);
  //  console.log(email.value);
  //  console.log(text.value);

  var userobj={
    name:name.value,
    email:email.value,
    text:text.value,
    number:number.value,
    sell:sell.value,
    location:location.value
  }

  

 

  var key = Math.random()*334455666;


firebase.database().ref("Arehman/Users/"+ Math.round(key)).set(userobj)
 }

  
  
  
   
  function getitem(){
      var eml = document.getElementById("email");
    var pass = document.getElementById("password");
  
  
  
  
 firebase.auth()
        .createUserWithEmailAndPassword(eml.value, pass.value)
        .then((userCredential) => {
         // Signed in
         var user = userCredential.user;
          console.log(user);
          firebase
            .auth()     
                   .currentUser.sendEmailVerification()
                              .then(() => {
             alert("Email Sent Sucsessfully!")
               });
          
        })
                .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);    
            });
    
  

  
  
 }


  // console.log(name.value)
  // console.log(email.value)
  // console.log(text.value)
 
  
  function signwithgoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }
 

