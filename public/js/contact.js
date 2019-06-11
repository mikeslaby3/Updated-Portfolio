$(document).ready(function () {
    
    setVisibility('#form-error', 'hide');
    setVisibility('#form-confirmation', 'hide');

    $(document).on("click", '#contact-submit', handleContactInput);

    function setVisibility(id, showOrHide) {
        if (showOrHide === 'show') {
            $(id).show();
        } else if (showOrHide === 'hide') {
            $(id).hide();
        } else {
            console.log('setVisibility: second arg must be show or hide');
        }
    }

    function handleContactInput(event) {
        event.preventDefault();

        let contactName = $('#name').val().trim();
        let contactLastName = $('#last_name').val().trim();
        let contactEmail = $('#email').val().trim();
        let contactSubject = $('#subject').val().trim();
        let contactMessage = $('#message').val().trim();

        if (contactName === '' ||
            contactLastName === '' ||
            contactEmail === '' ||
            contactSubject === '' ||
            contactMessage === '') {
                setVisibility('#form-error', 'show');
            } else {
                setVisibility('#form-error', 'hide');
                let contact = {
                    name: contactName,
                    last_name: contactLastName,
                    email: contactEmail,
                    subject: contactSubject,
                    message: contactMessage
                };
    
                $.post("/api/contact", contact)
                    .then(function(contact) {
                        $('#contact-form').trigger('reset');
                        setVisibility('#form-confirmation', 'show');
                    });
            }

    };

});