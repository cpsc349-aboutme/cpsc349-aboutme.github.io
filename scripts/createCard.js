// async function printCard(){
//     this.db = firebase.firestore();
//     firebase.auth().onAuthStateChanged(user =>{
//         if(user){
//             const snapshot = this.db.collection("card").get()
//             const docSnap = snapshot.docs.map(doc => doc.data());
//             if(docSnap.exists()) {
//                 console.log("doc data: ", docSnap.data());
//             }
//             else{
//                 console.log("no data");
//             }
//         }
//     })
// }