console.log("jeg er i formkommune")

document.addEventListener('DOMContentLoaded', createFormEventListener);
const formKommune = document.getElementById("formKommune");

function createFormEventListener() {
    formKommune.addEventListener("submit", handleFormSubmit);
}


async function handleFormSubmit(event) {
    event.preventDefault();
    //Vi handler submitten her i stedet for default html behaviour
    const form = event.currentTarget;  // event er i denne forbindelse "submit"
    const url = form.action;   // action er specificeret i vores html
    console.log(form);
    console.log(url);

    try {
        const formData = new FormData(form);
        console.log(formData);
        const responseData = await postFormDataAsJson(url, formData);
    } catch (error) {
        alert(error.message);
        console.error(error);
    }

}

async function postFormDataAsJson(url, formData) {
    const plainFormData = Object.fromEntries(formData.entries()); //fra chat: FormData to Plain Object: Object.fromEntries(formData.entries())
                                                                                // converts the FormData object into a plain JavaScript object.
                                                                                 // This is crucial because the FormData object cannot be directly converted to JSON.
    plainFormData.region = { kode: plainFormData.region };   // region bliver lavet til et object, da vi i vores kommune-array har en region, der er et object
    console.log(plainFormData + "plainformdata");
    const objectAsJsonString = JSON.stringify(plainFormData);
    console.log(objectAsJsonString + "objectasjsonstring");

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json" ,
        },
        body: objectAsJsonString,
    };
    const response = await fetch(url, fetchOptions);
    if(!response.ok) {
        const errorMessage = await response.text();
        console.log(errorMessage);
    } else
    {
          console.log(await response.json() + "repsponse.json() ")  // await needed?
    }
}



