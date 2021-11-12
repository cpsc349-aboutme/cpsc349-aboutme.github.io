(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    
    function SignInHandler(selector){
        this.$formElement = $(selector);
        SignInHandler.prototype.addSubmitHandler = function(fn){
            this.$formElement.on('submit', function(event) {
                event.preventDefault();
                var data = {
                    email: this.elements.email.value,
                    password: this.elements.password.value
                };
                fn(data)
                    .then(function() {
                        this.reset();
                        this.elements[0].focus();
                    }.bind(this));
            });
        };

    }


    App.SignInHandler = SignInHandler;
    window.App = App;
})(window);