(function (window){
    'use strict';
    var SIGN_SELECTOR = '[data-signin="form"]';
    var UP_SELECTOR = '[data-signup="form"]';
    var CREATE_SELECTOR = '[data-create="form"]';
    var OUT_SELECTOR = '[data-signout="form"]';
    var FIREBASE_SERVER_URL = 'http://aboutme-8a62e.firebaseapp.com';
    var App = window.App;
    var Session = App.Session;
    var SignInHandler = App.SignInHandler;
    var SignUpHandler = App.SignUpHandler;
    var CreateHandler = App.CreateHandler;
    var SignOutHandler = App.SignOutHandler;
    var firebasedatastore = App.firebasedatastore;
    var datastore = new firebasedatastore(FIREBASE_SERVER_URL);
    var session = new Session('anything',datastore);
    window.session = session;
    var signInHandler = new SignInHandler(SIGN_SELECTOR);
    var signUpHandler = new SignUpHandler(UP_SELECTOR);
    var createHandler = new CreateHandler(CREATE_SELECTOR);
    var signOutHandler = new SignOutHandler(OUT_SELECTOR); 
    signUpHandler.addSubmitHandler(function(data){
        return session.register.call(session,data)
    })
    signInHandler.addSubmitHandler(function(data) {
        return session.signIn.call(session,data)
    });
    createHandler.addSubmitHandler(function(data){
        return session.create.call(session,data)
    });
    signOutHandler.addSubmitHandler(function(data){
        return session.signOut.call(session,data)
    })
})(window);