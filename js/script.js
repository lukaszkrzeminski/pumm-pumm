{
    const onFormSubmit = (e) => {
        e.preventDefault();

        const emailAddress = document.querySelector(".js-form-input");

        console.log("e-mail address: "+ emailAddress.value + " added to the newsletter!");
        
        emailAddress.value = "";
    }

    const init = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}