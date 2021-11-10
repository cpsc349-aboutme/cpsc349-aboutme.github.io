(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    
    function CreateHandler(selector){
        this.$formElement = $(selector);
        CreateHandler.prototype.addSubmitHandler = function(fn){
            this.$formElement.on('submit', function(event) {
                event.preventDefault();
                var data = {
                    // name: this.elements.name.value,
                    // job: this.elements.job.value,
                    // location: this.elements.location.value,
                    // contact: this.elements.contact.value,
                    // about: this.elements.about.value,
                    // education: this.elements.education.value,
                    // social: this.elements.social.value
                };
                fn(data)
                    .then(function() {
                        this.reset();
                        this.elements[0].focus();
                    }.bind(this));
            });
        };

    }

    App.CreateHandler = CreateHandler;
    window.App = App;
})(window);