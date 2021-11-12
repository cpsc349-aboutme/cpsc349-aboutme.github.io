function getAll(){
    this.db = firebase.firestore();
    var userName, job, location, contact, about, education, twitter, instagram, uid
            this.db.collection("cards").get().then((querySnapshot) =>{
                querySnapshot.forEach((doc)=>{
                    const snapshot = doc.data();
                    uid = snapshot["uid"]
                    firebase.storage().ref('users/' + uid + '/profile.jpg').getDownloadURL().then(function(imgUrl) {
                        userName = snapshot["name"]
                        job = snapshot["job"]
                        location = snapshot["location"]
                        contact = snapshot["contact"]
                        about = snapshot["about"]
                        education = snapshot["education"]
                        twitter = snapshot["twitter"]
                        instagram = snapshot["instagram"]
                        $("#primary-container").append(
                            $('<div class="row mt-5">').append(
                                $('<div class="col">').append(
                                    $('<div class="cardGroup">').append(
                                        $('<div class="card">').append(
                                            $('<div class="card-body">').append(
                                                $('<h5 class="card-title">').text(userName),
                                                $('<h6 class="card-subtitle mb-2 text-muted">').text(job),
                                                $('<div class="row">').append(
                                                   $('<div class="col-md-4 col-12">').append(
                                                       $('<img class="img-thumbnail"/>').attr("src", imgUrl)
                                                   ),
                                                   $('<div class="col-md-8 col-12">').append(
                                                       $('<div class="row h-75">').append(
                                                           $('<p class="lead">').text(about)
                                                       ),
                                                       $('<div class="row h-25">').append(
                                                           $('<div class="col">').append(
                                                               $('<span class="text-muted">Education</span>'),
                                                               $('<p>').text(education)
                                                           ),
                                                           $('<div class="col">').append(
                                                               $('<span class="text-muted">Contact</span>'),
                                                               $('<p>').text(contact)
                                                           ),
                                                           $('<div class="col">').append(
                                                              $('<span class="text-muted">Location</span>'),
                                                              $('<p>').text(location)
                                                           )
    
                                                       )
                                                   )
                                                )
                                            ),
                                            $('<div class="card-footer">').append(
                                                $('<div class="row">').append(
                                                    $('<div class="col" align="center">').append(
                                                        $('<a class="m-1" href="#"><img class="img-fluid" height="30px" width="30px" src="img/twittericon.png">').attr("href",twitter),
                                                        $('<a class="m-1" href="#"><img class="img-fluid" height="30px" width="30px" src="img/igIcon.png">').attr("href",instagram)
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        );

                    });

        
                });               
            });
}    