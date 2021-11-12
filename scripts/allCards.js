function getAll(){
    this.db = firebase.firestore();
    var userName, job, location, contact, about, education, twitter, instagram, uid
            this.db.collection("cards").get().then((querySnapshot) =>{
                querySnapshot.forEach((doc)=>{
                    const snapshot = doc.data();
                    userName = snapshot["name"]
                    job = snapshot["job"]
                    location = snapshot["location"]
                    contact = snapshot["contact"]
                    about = snapshot["about"]
                    education = snapshot["education"]
                    twitter = snapshot["twitter"]
                    instagram = snapshot["instagram"]
                    uid = snapshot["uid"]
                    var $clone = $('.cardGroup:last').clone()
                    $clone.data('name',"Name: " +userName);
                    $clone.find('h2').text($clone.data('name'))
                    $clone.data('job', "Job: " + job);
                    $clone.find("#job").text($clone.data('job'))
                    $clone.data('education',"Education: " + education)
                    $clone.find("#education").text($clone.data('education'))
                    $clone.data('about', "About: " +about);
                    $clone.find("#about").text($clone.data('about'))
                    $clone.data('contact', "Contact: " + contact)
                    $clone.find("#contact").text($clone.data('contact'))
                    $clone.data('location', "Location: " + location)
                    $clone.find("#location").text($clone.data('location'))
                    $clone.data('twitter', "Twitter: " + twitter)
                    $clone.find("#twitter").text($clone.data('twitter'))
                    $clone.data('instagram', "Instagram: " + instagram)
                    $clone.find("#instagram").text($clone.data('instagram'))
                    firebase.storage().ref('users/' + uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
                        $clone.find('#image').attr('src',imgUrl)

                    })
                    setTimeout(function(){
                        $clone.appendTo(".cardGroup:last")
                    },1000)
                    
                });               
            });
}    