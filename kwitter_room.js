//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAPHys_FPc2e2YL2NhKUPTBF9Qn769mPNI",
    authDomain: "kwitter-home.firebaseapp.com",
    databaseURL: "https://kwitter-home.firebaseio.com",
    projectId: "kwitter-home",
    storageBucket: "kwitter-home.appspot.com",
    messagingSenderId: "595598106260",
    appId: "1:595598106260:web:7f8d297e06db7735305e81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name_2=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name_2 + "!";
function addclass(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose :"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room_name="+ Room_names);
    row="<div class='room_name' id="+ Room_names +" onclick='redirectToroomName(this.id)'>#"+ Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToroomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name, message:msg, like:0
    });
    document.getElementById("msg").value="";
}

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
}
//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPHys_FPc2e2YL2NhKUPTBF9Qn769mPNI",
    authDomain: "kwitter-home.firebaseapp.com",
    databaseURL: "https://kwitter-home.firebaseio.com",
    projectId: "kwitter-home",
    storageBucket: "kwitter-home.appspot.com",
    messagingSenderId: "595598106260",
    appId: "1:595598106260:web:7f8d297e06db7735305e81"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);