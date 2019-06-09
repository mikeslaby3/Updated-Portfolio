$(document).ready(function(){

    let contactName = $('#name');
    let contactLastName = $('#last_name');
    let contactEmail = $('#email');
    let contactSubject = $('#subject');
    let contactMessage = $('#message');

    $(document).on("click", '#contact-submit', insertContactInfo);

    function insertContactInfo(event) {
        event.preventDefault();
        let contact = {
            name: contactName,
            last_name: contactLastName,
            email: contactEmail,
            subject: contactSubject,
            message: contactMessage
        };

        // $.post("api/contact", contact);
    }

});