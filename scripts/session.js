(function(window){
    'use strict';
    var App = window.App || {}

    function Session(sessionId,db){
        this.sessionId = sessionId;
        this.db = db;
    }
    Session.prototype.register = function(data){
        return this.db.signUp(data);
    }
    Session.prototype.signIn = function(data){
        return this.db.signIn(data);
    };
    Session.prototype.create = function(data){
        return this.db.createCard(data);
    }

    App.Session = Session;
    window.App = App;
})(window);