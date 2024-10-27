let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let form = document.querySelector("#form");

const postFetch = async (params) => {
    try {
        let url = "http://127.0.0.1:3001/urlEncoded/info";
        await fetch(url, {
            method: "POST",
            headers: {
               "content-type": "application/x-www-form-urlencoded"
            }, 
            body: params.toString()
        });
        // let data = await response.text();
        // console.log(data);

        // it send get request
        window.location = "/urlEncoded/info";
    } catch (error) {
        console.log(error);
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(firstName.value);
    console.log(lastName.value);


    let params = new URLSearchParams(); 
    params.append("firstName", firstName.value);
    params.append("lastName", lastName.value);
    postFetch(params);

    // to reset the elements
    form.reset();
});