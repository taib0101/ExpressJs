let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let checkbox = document.querySelectorAll(".check");
let form = document.querySelector("#form");

const postFetch = async (bodyObject) => {
    try {
        let url = "http://127.0.0.1:3001/json/info";
        await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bodyObject)
        });
        // let data = await response.text();
        // console.log(data);

        // it send get request
        window.location = "/json/info";
    } catch (error) {
        console.log(error);
    }
};

let bodyObject = {};
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(checkbox);

    bodyObject.firstName = firstName.value;
    bodyObject.lastName = lastName.value;
    bodyObject.vehicles = [];
    checkbox.forEach(value => {
        if (value.checked)
            bodyObject.vehicles.push(value.value);
    });

    console.log(bodyObject);
    postFetch(bodyObject);

    // to reset the elements
    form.reset();
});