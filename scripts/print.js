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
                $("#name").text(userName)
                $("#job").text(job)
                $("#education").text(education)
                $("#about").text(about)
                $("#contact").text(contact)
                $("#location").text(location)
                $("#twitter").attr("href" ,twitter)
                $("#instagram").attr("href",instagram)
            })
        }
    })
}