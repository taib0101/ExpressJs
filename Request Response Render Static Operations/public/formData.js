let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let checkbox = document.querySelectorAll(".check");
let form = document.querySelector("#form");

// style
firstName.style.borderColor = "red";

const postFetch = async (formData) => {
    try {
        let url = "http://127.0.0.1:3001/formData/info";
        await fetch(url, {
            method: "POST",
            // for formData no need to send header
            body: formData
        });
        // let data = await response.text();
        // console.log(data);

        // it send get request
        window.location = "/formData/info";
    } catch (error) {
        console.log(error);
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(checkbox);


    let formData = new FormData(); 
    formData.append("firstName", firstName.value);
    formData.append("lastName", lastName.value);
    checkbox.forEach(value => {
        if (value.checked)
            formData.append("vehicles[]", value.value);
    });
    formData.append("image", image.files[0]);

    console.log(formData);
    console.log(image);
    postFetch(formData);

    // to reset the elements
    form.reset();
});