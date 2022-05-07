{
    const swapColors = (color, element) => {
        const colorList = document.querySelector(".js-color-list");
        const colorButtons = colorList.querySelectorAll(".design__list-circle");
        for ( const colorButton of colorButtons){ 
              colorButton.classList.remove("design__list-circle--active");
        }
        element.classList.add("design__list-circle--active");

        const imageList = document.querySelector(".js-grid");
        const images = imageList.querySelectorAll(".design__grid-item-image");
        for (const image of images){
            image.getSVGDocument().getElementById("changeColor").setAttribute("fill", color);
            console.log(image);
        }
    }

    const getColors = () => {
        const colorGreenElement = document.querySelector(".js-circle-green");
        const colorBlueElement = document.querySelector(".js-circle-blue");
        const colorLightblueElement = document.querySelector(".js-circle-lightblue");
        const colorGreyElement = document.querySelector(".js-circle-grey");

        const colorGreen = window.getComputedStyle(colorGreenElement).getPropertyValue('background-color');
        const colorBlue = window.getComputedStyle(colorBlueElement).getPropertyValue('background-color');
        const colorLightblue = window.getComputedStyle(colorLightblueElement).getPropertyValue('background-color');
        const colorGrey = window.getComputedStyle(colorGreyElement).getPropertyValue('background-color');

        colorGreenElement.addEventListener("click", () => swapColors(colorGreen, colorGreenElement));
        colorBlueElement.addEventListener("click", () => swapColors(colorBlue, colorBlueElement));
        colorLightblueElement.addEventListener("click", () => swapColors(colorLightblue, colorLightblueElement));
        colorGreyElement.addEventListener("click", () => swapColors(colorGrey, colorGreyElement));
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const emailAddress = document.querySelector(".js-form-input");

        console.log("e-mail address: " + emailAddress.value + " added to the newsletter!");

        emailAddress.value = "";
    }

    const init = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
        getColors();
    };

    init();
}