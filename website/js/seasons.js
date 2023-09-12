window.addEventListener("load", start);


// https://dsokyrsukcwokvaqfpmr.supabase.co

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzb2t5cnN1a2N3b2t2YXFmcG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MTg1NTksImV4cCI6MjAwOTM5NDU1OX0.jRejMqwnT2Rn9EPXZU2A5fGtxabNC6MeJOi2Zm97xCk


// -------------Fetching----------------------------->>>>>

fetch("https://dsokyrsukcwokvaqfpmr.supabase.co/rest/v1/vildmad_data", {
    method: "GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzb2t5cnN1a2N3b2t2YXFmcG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MTg1NTksImV4cCI6MjAwOTM5NDU1OX0.jRejMqwnT2Rn9EPXZU2A5fGtxabNC6MeJOi2Zm97xCk"
    }
})
    .then(res => res.json())
    .then(showData);


function showData(item){
    item.forEach(altInfo);

   


}   

function altInfo (items){
    console.log(items);

    // Grapping---------
    const seasonTemp = document.querySelector(".seasonTemp").content;

    // Cloning---------
    const copyseasonForår = seasonTemp.cloneNode(true); 
    const copyseasonSommer = seasonTemp.cloneNode(true); 
    const copyseasonEfterår = seasonTemp.cloneNode(true); 
    const copyseasonVinter = seasonTemp.cloneNode(true); 

    // Adding---------
    if(items.season.includes("spring")){
        copyseasonForår.querySelector(".imgTemp").src = items.image;
        copyseasonForår.querySelector(".flowerName").textContent = "Navn: " + items.name;
        copyseasonForår.querySelector(".categorySeason").textContent = "Category: " + items.category;
        copyseasonForår.querySelector(".descriptionSeason").textContent = "Description " + items.description;
    }
    if(items.season.includes("summer")){
        copyseasonSommer.querySelector(".imgTemp").src = items.image;
        copyseasonSommer.querySelector(".flowerName").textContent = "Navn: " + items.name;
        copyseasonSommer.querySelector(".categorySeason").textContent = "Category: " + items.category;
        copyseasonSommer.querySelector(".descriptionSeason").textContent = "Description " + items.description;
    }
    if(items.season.includes("fall")){
        copyseasonEfterår.querySelector(".imgTemp").src = items.image;
        copyseasonEfterår.querySelector(".flowerName").textContent = "Navn: " + items.name;
        copyseasonEfterår.querySelector(".categorySeason").textContent = "Category: " + items.category;
        copyseasonEfterår.querySelector(".descriptionSeason").textContent = "Description " + items.description;
    }
    if(items.season.includes("winter")){
        copyseasonVinter.querySelector(".imgTemp").src = items.image;
        copyseasonVinter.querySelector(".flowerName").textContent = "Navn: " + items.name;
        copyseasonVinter.querySelector(".categorySeason").textContent = "Category: " + items.category;
        copyseasonVinter.querySelector(".descriptionSeason").textContent = "Description " + items.description;
        
    }
    
    // Appending---------
    document.querySelector("#forår").appendChild(copyseasonForår);
    document.querySelector("#sommer").appendChild(copyseasonSommer);
    document.querySelector("#efterår").appendChild(copyseasonEfterår);
    document.querySelector("#vinter").appendChild(copyseasonVinter);


}

// -------------Fetching-----------------------------<<<<




const forårBtn = document.querySelector("#forårBtn");
const efterårBtn = document.querySelector("#efterårBtn");
const sommerBtn = document.querySelector("#sommerBtn");
const vinterBtn = document.querySelector("#vinterBtn");


function start(){
    // forår.classList.add("displayNone");
    sommer.classList.add("displayNone");
    vinter.classList.add("displayNone");
    efterår.classList.add("displayNone");
}

forårBtn.addEventListener("click",buttonForår);
sommerBtn.addEventListener("click",buttonSommer);
efterårBtn.addEventListener("click",buttonEfterår);
vinterBtn.addEventListener("click",buttonVinter);
// NAV ------------------
function buttonForår() {
    console.log("forår")
    forår.classList.remove("displayNone");
    sommer.classList.add("displayNone");
    vinter.classList.add("displayNone");
    efterår.classList.add("displayNone"); 
}
function buttonSommer() {
    console.log("sommer")
    sommer.classList.remove("displayNone");
    forår.classList.add("displayNone");
    vinter.classList.add("displayNone");
    efterår.classList.add("displayNone");
}
function buttonEfterår() {
    console.log("efterår")
    efterår.classList.remove("displayNone");
    forår.classList.add("displayNone");
    sommer.classList.add("displayNone");
    vinter.classList.add("displayNone");
}
function buttonVinter() {
    console.log("vinter")
    vinter.classList.remove("displayNone");
    efterår.classList.add("displayNone");
    forår.classList.add("displayNone");
    sommer.classList.add("displayNone");
}































// død ide--------------------------------------

// const forår = document.querySelector("#forår");
// const sommer = document.querySelector("#sommer");
// const vinter = document.querySelector("#vinter");
// const efterår = document.querySelector("#efterår");


// // ----------------Info---------------------------
// const forår_info1 = document.querySelector("#forår_info1");
// const forår_info2 = document.querySelector("#forår_info2");
// const forår_info3 = document.querySelector("#forår_info3");
// const sommer_info1 = document.querySelector("#sommer_info1");
// const sommer_info2 = document.querySelector("#sommer_info2");
// const sommer_info3 = document.querySelector("#sommer_info3");
// const efterår_info1 = document.querySelector("#efterår_info1");
// const efterår_info2 = document.querySelector("#efterår_info2");
// const efterår_info3 = document.querySelector("#efterår_info3");
// const vinter_info1 = document.querySelector("#vinter_info1");
// const vinter_info2 = document.querySelector("#vinter_info2");
// const vinter_info3 = document.querySelector("#vinter_info3");
// // ----------------Info---------------------------


// function start(){
//     // forår.classList.add("displayNone");
//     sommer.classList.add("displayNone");
//     vinter.classList.add("displayNone");
//     efterår.classList.add("displayNone");

//     forår_info1.classList.add("displayNone");
//     forår_info2.classList.add("displayNone");
//     forår_info3.classList.add("displayNone");
//     sommer_info1.classList.add("displayNone");
//     sommer_info2.classList.add("displayNone");
//     sommer_info3.classList.add("displayNone");
//     efterår_info1.classList.add("displayNone");
//     efterår_info2.classList.add("displayNone");
//     efterår_info3.classList.add("displayNone");
//     vinter_info1.classList.add("displayNone");
//     vinter_info2.classList.add("displayNone");
//     vinter_info3.classList.add("displayNone");
    
// }

// forårBtn.addEventListener("click",buttonForår);
// sommerBtn.addEventListener("click",buttonSommer);
// efterårBtn.addEventListener("click",buttonEfterår);
// vinterBtn.addEventListener("click",buttonVinter);
// // NAV ------------------
// function buttonForår() {
//     console.log("forår")
//     forår.classList.remove("displayNone");
//     sommer.classList.add("displayNone");
//     vinter.classList.add("displayNone");
//     efterår.classList.add("displayNone");
    
// }
// function buttonSommer() {
//     console.log("sommer")
//     sommer.classList.remove("displayNone");
//     forår.classList.add("displayNone");
//     vinter.classList.add("displayNone");
//     efterår.classList.add("displayNone");
// }
// function buttonEfterår() {
//     console.log("efterår")
//     efterår.classList.remove("displayNone");
//     forår.classList.add("displayNone");
//     sommer.classList.add("displayNone");
//     vinter.classList.add("displayNone");
// }
// function buttonVinter() {
//     console.log("vinter")
//     vinter.classList.remove("displayNone");
//     efterår.classList.add("displayNone");
//     forår.classList.add("displayNone");
//     sommer.classList.add("displayNone");
// }

// // NAV ---------------------

// const forår_billede1 = document.querySelector("#forår_billede1");


// forår_billede1.addEventListener("click", forår_billede1Btn);

// function forår_billede1Btn(){
//     forår_info1.classList.toggle("displayNone");
//     forår_info1.classList.toggle("trans");

//     // forår_billede1.addEventListener("click", ()=> forår_info1.classList.add("displayNone")); {

//     };






