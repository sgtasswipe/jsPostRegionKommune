const urlPostRegion = "http://localhost:8080/postregions";
const reg1 = createRegion();


///////////////////////////  FUNCTIONS  ///////////////////////////
function createRegion () {
    const region = {}
    region.kode = "2323";
    region.navn = "YALLERUP";
    region.href = "google.com";
    return region;
}
async function postRegion (url, region) {
const objectAsJsonString = JSON.stringify(region);
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

 }
}


postRegion(urlPostRegion, reg1)

console.log(reg1);


