async function printCard(){
    this.db = firebase.firestore();
    var userName, job, location, contact, about, education, twitter, instagram
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    await firebase.auth().onAuthStateChanged(user =>{
        if(user){
            firebase.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
                
                $('#image').attr("src",imgUrl)
            })
            this.db.collection("cards").doc(user.uid).get()
            .then((docRef) => {
                const snapshot = docRef.data();
                userName = snapshot["name"]
                job = snapshot["job"]
                location = snapshot["location"]
                contact = snapshot["contact"]
                about = snapshot["about"]
                education = snapshot["education"]
                twitter = snapshot["twitter"]
                instagram = snapshot["instagram"]
               
                $("#name").text("name: "+userName)
                $("#job").text("job: "+job)
                $("#education").text("education: "+education)
                $("#about").text("about: "+about)
                $("#contact").text("contact: "+contact)
                $("#location").text("location: " +location)
                $("#social").text("social: " + twitter)
            })
        }
    })
}