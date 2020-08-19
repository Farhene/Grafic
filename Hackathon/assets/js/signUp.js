
// connects to firebase auth
var firebaseConfig = {
	apiKey: "AIzaSyATo5OWN647oFLsTn6aSb849poV3Ey9ZRM",
	authDomain: "fir-19449.firebaseapp.com",
	databaseURL: "https://fir-19449.firebaseio.com",
	projectId: "fir-19449",
	storageBucket: "fir-19449.appspot.com",
	messagingSenderId: "889290454127",
	appId: "1:889290454127:web:0d3816d95e81bd36b5099a",
	measurementId: "G-6MGGEH9J9T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  // when sign up button clicked
	  $("#btnSignUp").click(function(event){
			  //get email and pass
		const textEmail = document.getElementById('txtEmail');
		  const textPassword = document.getElementById('txtPassword');
		  

		const email = textEmail.value;
		  const pass = txtPassword.value;
		  const auth = firebase.auth();


		  // sign up
		  const promise = auth.createUserWithEmailAndPassword(email,pass);
		  promise.catch(event => alert(event.message));

		  // clear fields
		  $("#txtEmail").val("");
		  $("#txtPassword").val("");
	  });
