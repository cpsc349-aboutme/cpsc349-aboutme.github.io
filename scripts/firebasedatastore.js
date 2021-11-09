(function (window) {
    'use strict';
    var App = window.App || {};
    let file = {};
    
    class firebasedatastore{
        constructor(){
            this.db = firebase.firestore();
  
        }

        chooseFile(e) {
            file = e.target.files[0];
        }

        async signUp(){
            var userName = document.getElementById("userName").value;
            var userEmail = document.getElementById("userEmail").value;
            var userPassword = document.getElementById("userPassword").value;
            firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
            .then((success) => {
            var user = firebase.auth().currentUser;
            var uid; 
            if(user != null)
            {
                uid = user.uid;
            }
            var docRef= this.db.collection("users").doc(uid);
            docRef.set({
                name: userName,
                email: userEmail,
                password: userPassword
            })
            setTimeout(function(){
                window.location.replace("../home.html");
            },1000)
            
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            });

        }

        async signIn(){
            var userEmail = document.getElementById("userSEmail").value;
            var userPassword = document.getElementById("userSPassword").value;
            firebase.auth().signInWithEmailAndPassword(userEmail,userPassword)
            .then((success) => {
            window.location.replace("../home.html");
            })
        }

        async createCard(){
            var userName = document.getElementById("userCName").value;
            var job = document.getElementById("userCJob").value;
            var location = document.getElementById("userCLocation").value;
            var contact = document.getElementById("userCContact").value;
            var about = document.getElementById("userCAbout").value;
            var education = document.getElementById("userCEducation").value;
            var twitter = document.getElementById("userCTwitter").value;
            var instagram = document.getElementById("userCInstagram").value;
            firebase.auth().onAuthStateChanged(user =>{
                if(user){
                    console.log(user.uid)
                    firebase.storage().ref('users/'+user.uid+'/profile.jpg').put(file).then(function (){
                        console.log('successfully uploaded')
                    })
                    var docRef = this.db.collection("cards").doc(user.uid);
                    docRef.set({
                        name: userName,
                        job: job,
                        location: location,
                        contact: contact,
                        about: about,
                        education: education,
                        twitter: "https://twitter.com"+ twitter,
                        instgram: "https://instgram.com"+ instagram
                    })
                    setTimeout(function(){
                        window.location.replace("../mycard.html");
                    },1000)
                }
            })
        }

        async uploadImage(){
            firebase.auth().onAuthStateChanged(user => {
                const ref = firebase.storage().ref();
                const file = document.querySelector('#photo').files[0]
                const name = (+new Date()) + '-' + file.name;
                const metadata = {
                  contentType: file.type
                };
                const task = ref.child(name).put(file, metadata);
            
                task
                  .then(snapshot => snapshot.ref.getDownloadURL())
                  .then((url) => {
                    console.log(url);
                    document.querySelector('#someImageTagID').src = url;
                  })
                  .catch(console.error);
            })
        
        }
    }

    App.firebasedatastore = firebasedatastore;
    window.App = App;


})(window);