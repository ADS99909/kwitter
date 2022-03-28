//Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCPfnLkJGbD8Vua6P4YDYgCNZ4ShTPWX8Q",
  authDomain: "kwitter-444b1.firebaseapp.com",
  databaseURL: "https://kwitter-444b1-default-rtdb.firebaseio.com",
  projectId: "kwitter-444b1",
  storageBucket: "kwitter-444b1.appspot.com",
  messagingSenderId: "202272975382",
  appId: "1:202272975382:web:dadb0105bc37234389a337"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function add_room(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
   purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
 row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)' >#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML +=row;

 //End code
      });});}
getData();
function redirect(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
};

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}