const config = {
    apiKey: "AIzaSyAu5wEKU2F8zL1g6_19VzcaEI8_TqzrBrE",
    authDomain: "kwitter-webapp-b2f90.firebaseapp.com",
    databaseURL: "https://kwitter-webapp-b2f90-default-rtdb.firebaseio.com",
    projectId: "kwitter-webapp-b2f90",
    storageBucket: "kwitter-webapp-b2f90.appspot.com",
    messagingSenderId: "470565008798",
    appId: "1:470565008798:web:801b59e5f46ab2f91f128f",
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
             
                //End code
          });
    });
}
getData();