// when the Post submit button is pressed
$("#post").click(function(event){
	// take in the message title and the message
	let title= $("#ptitle").val();
	let message=$("#message").val();


	
		// clear the textbox
		$("#ptitle").val("");
		$("#message").val("");

		// get the current date and time
		let today= new Date();
		let date = (`${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`);
		var time = (`${today.getHours()-12}:${today.getMinutes()}:${today.getSeconds()}`);


		//format date and time
	var hours = today.getHours()%12;
 		var PM;
 		if(hours > 12)
 		{
 			PM = true;
 		}
 		if(hours === 0 && PM === true)
 		{
 			var time = (`12:${today.getMinutes()}:${today.getSeconds()}:AM`);
 		}
 		else if(PM === true)
 		{
 			var time = (`${hours}:${today.getMinutes()}:${today.getSeconds()} PM`);
 		}
 		else{
 			var time = (`${hours}:${today.getMinutes()}:${today.getSeconds()} AM`);
 		}



 		// if the title or message field was empty
 		// alert a message
	if(title==="" || message===""){
		alert("a field is missing")
		

		// else 
	}else{
		// add a new card to the front of the list
		$(".posts").prepend( 
			// containing the message and date
		`

		<li class="thought">
  			<div class="card-body">
				<h5 class="card-title"><span class="delete"><i class="fas fa-trash"></i></span>${title}</h5>
    			<h6 class="card-subtitle mb-2 text-muted">${date}-${time}</h6>
    			<p class="card-text">${message}</p>
  			</div>
  		</li>`
  		
  			);


	}

	// remove the post after 10 seconds
	setTimeout(rmvpost ,10000);
				
});

// function used to remove the post
function rmvpost(){
	$(".posts li").last().remove();
}



// when the trash can is clicked
$("ul").on("click",".delete", function(event){
	// delete the card pertaining
	$(this).parent().parent().parent().remove();
});




// when profile is clicked
// $("#btnSignUp").click(function(event){
// 	// if you are logged in
	
// 		alert("Hello");
// 		// redirect to profile html
// 		location.href ="signUp.html";
	
// })



// connection to firebase for log-in Auth
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


		  // when the log in button is clicked
		   $("#btnLogin").click(function(event){
		  	// get email and pass
		  	const textEmail = document.getElementById('txtEmail');
		  	const textPassword = document.getElementById('txtPassword');
		  		

		  		// get email and pass
				const email = textEmail.value;
		  		const pass = txtPassword.value;
		  		const auth = firebase.auth();




		  		//sign-In
		  		const promise = auth.signInWithEmailAndPassword(email,pass);
		  		// alert any errors
		  		promise.catch(event => alert(event.message));

		  		// clear email and password fields
		  		$("#txtEmail").val("");
		  		$("#txtPassword").val("");

		  });

		   // when log out is clicked
		   $("#btnLogout").click(function(event){
		   		// log the user out
		  		firebase.auth().signOut();
		  		// hide the log out button
		  		$("#btnLogout").toggle();
		  		// show the log in form
		  		$("#loginForm").toggle();

		  		});

		   //continually checks the authentication state
		   // determines if the user is logged in or not
		  	firebase.auth().onAuthStateChanged(firebaseUser =>{
		  		// if the user is active
				if(firebaseUser){
					// log the user info
					console.log(firebaseUser);
					// hide the log in form
					 $("#loginForm").toggle();
					 // show the log out button
					 $("#btnLogout").toggle();
					  
					// else if not logged in
				}else{

					// let user know theyre not logged in
					console.log('not logged in');
					
				}

			});


