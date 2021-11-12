(function(window) {
    'use strict';
    var App = window.App || {}
    var $ = window.jQuery;

    function SignOutHandler(selector){
        this.$formElement = $(selector);
        SignOutHandler.prototype.addSubmitHandler = function(fn){
            this.$formElement.on('submit', function(event) {
                event.preventDefault();
                var data = {
 
                };
                fn(data)
                    .then(function() {
                        this.reset();
                        this.elements[0].focus();
                    }.bind(this));
            });
        };
    }


    App.SignOutHandler = SignOutHandler;
    window.App = App;
})(window);