// https://dsokyrsukcwokvaqfpmr.supabase.co

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzb2t5cnN1a2N3b2t2YXFmcG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MTg1NTksImV4cCI6MjAwOTM5NDU1OX0.jRejMqwnT2Rn9EPXZU2A5fGtxabNC6MeJOi2Zm97xCk


fetch("https://dsokyrsukcwokvaqfpmr.supabase.co", {
    method: "GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzb2t5cnN1a2N3b2t2YXFmcG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MTg1NTksImV4cCI6MjAwOTM5NDU1OX0.jRejMqwnT2Rn9EPXZU2A5fGtxabNC6MeJOi2Zm97xCk"
    }
})
    .then(res => res.json);
    .then(showData)


    function showData(items){
        // items.forEach()
        console.log(items);

    }

