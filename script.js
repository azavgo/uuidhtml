//uuid v4 format c69436a1975fe2ebb0a6b09163031397 - 32 hex numbers, or 16 double hex numbers
//call: https://qrng.anu.edu.au/API/jsonI.php?length=16&type=hex16&size=1
//{"type":"string","length":16,"size":1,"data":["f1","65","6e","95","77","5e","5d","3c","36","13","34","63","27","8d","81","83"],"success":true}

async function newUUID() {
    let data = await fetch("https://qrng.anu.edu.au/API/jsonI.php?length=16&type=hex16&size=1") 
                    .then(response => response.json())                
                    .then(json => { return json.data; });
    
    
    // If the 1st digit has to be > 0, uncomment the following code
    /*
    let data_0 = parseInt("0x" + data[0]);
    while (data_0 < 16) {
        data = await fetch("https://qrng.anu.edu.au/API/jsonI.php?length=16&type=hex16&size=1") 
        .then(response => response.json())                
        .then(json => { return json.data; });

        data_0 = parseInt("0x" + data[0]);   
    } 
    */
    document.getElementById("uuidOutput").innerHTML = data.join('');
} 


    



