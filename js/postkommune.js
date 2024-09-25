const urlPostKommune = "http://localhost:8080/kommuner";
const kom1 = createKommune();


///////////////////////////  FUNCTIONS  ///////////////////////////
function createKommune () {
    const kommune = {}
    kommune.kode = "2323";
    kommune.navn = "YALLERUP";
    kommune.href = "google.com";
    kommune.region = {};
    kommune.region.kode = "1081"
    return kommune;
}
async function postKommune (url, kommune) {
    const objectAsJsonString = JSON.stringify(kommune);
    console.log(objectAsJsonString);
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json" ,
        },
        body: objectAsJsonString,
    };
    const repsonse = await fetch(url, fetchOptions);
    if(!repsonse.ok) {
        const errorMessage = await repsonse.text();
        console.log(errorMessage);
    } else
    {
        console.log(repsonse.json())
    }
}

async function awaitpromise () {
    const nogetjson = await postKommune(urlPostKommune, kom1)
    console.log(nogetjson)

}


postKommune(urlPostKommune, kom1)

console.log(kom1);


