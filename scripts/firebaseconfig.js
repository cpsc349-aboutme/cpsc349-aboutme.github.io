(function (window) {
    'use strict';
     var App = window.App || {};
    
      var FirebaseConfig = {
        apiKey: "AIzaSyCI763tTepCgvqnnnWM9YpPEuTxlMtAlns",
        authDomain: "aboutme-8a62e.firebaseapp.com",
        projectId: "aboutme-8a62e",
        storageBucket: "aboutme-8a62e.appspot.com",
        messagingSenderId: "303530026856",
        appId: "1:303530026856:web:e2ea4d1075a4d9ab4dd8dd",
        measurementId: "G-X2WR2EJ8NV"
      };

      App.FirebaseConfig = FirebaseConfig
      firebase.initializeApp(App.FirebaseConfig);
      window.App = App;
  
  })(window);