(function (window){
    'use strict';
    var FIREBASE_SERVER_URL = 'http://aboutme-8a62e.firebaseapp.com'
    var App = window.App;
    var firebasedatastore = App.firebasedatastore;
    var datastore = new firebasedatastore(FIREBASE_SERVER_URL);
})