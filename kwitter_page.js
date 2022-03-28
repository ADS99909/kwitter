//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_with_tag="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='likes(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_with_tag+span_with_tag;
document.getElementById("output").innerHTML+=row;


//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}function back(){
      window.location="kwitter_room.html";
}
