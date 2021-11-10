(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    
    function SignUpHandler(selector){
        this.$formElement = $(selector);
        SignUpHandler.prototype.addSubmitHandler = function(fn){
            this.$formElement.on('submit', function(event) {
                event.preventDefault();
                var data = {
                    name: this.elements.name.value,
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

    App.SignUpHandler = SignUpHandler;
    window.App = App;
})(window);