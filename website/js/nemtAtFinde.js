let mnr = new Date().getMonth();

const months = [
  "Januar",
  "Februar",
  "Marts",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "December",
];

// console.log(mnr);

// console.log(months[mnr]);

document.querySelector(".h3Season").textContent = `${months[mnr]}`;

fetch("https://dsokyrsukcwokvaqfpmr.supabase.co/rest/v1/vildmad_data", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzb2t5cnN1a2N3b2t2YXFmcG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MTg1NTksImV4cCI6MjAwOTM5NDU1OX0.jRejMqwnT2Rn9EPXZU2A5fGtxabNC6MeJOi2Zm97xCk",
  },
})
  .then((res) => res.json())
  .then(vildData);

let i = 0;

function vildData(plant) {
  i = 0;
  plant.forEach(vildPlanter);
}

function vildPlanter(planter) {
  // console.table(planter);
  // console.log(i);

  const nemTemplate = document.querySelector("#nemtAtFindeTemplate").content;
  const copy = nemTemplate.cloneNode(true);

  if (planter.month.includes(mnr) && i < 4) {
    i++;
    console.log(i);

    copy.querySelector(".imgEFT").src = `${planter.image}`;

    copy.querySelector(".name").textContent = planter.name;

    copy.querySelector(
      ".category"
    ).textContent = `${planter.category} | ${planter.landscape}`;

    copy.querySelector(".season").textContent = `Sæsoner: ${planter.season}`;

    copy.querySelector(".description").textContent = `${planter.description}`;

    const titleCard = document.querySelector(".ETF");
    titleCard.appendChild(copy);
  }
}
