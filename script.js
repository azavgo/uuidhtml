const newUUID = async () => {
    try {
        const res = await fetch(`https://qrng.anu.edu.au/API/jsonI.php?length=16&type=hex16&size=1`); 
        const data = await res.json(); 
        const uuid = data.data.join('');
        document.getElementById("uuidOutput").innerHTML = uuid;
    } catch (error) {
        //console.error(error);
        const genRanHex = (size) => [...Array(size)]
                            .map(() => Math.floor(Math.random() * 16)
                            .toString(16))
                            .join('');
        const uuid = genRanHex(32);
        document.getElementById("uuidOutput").innerHTML = uuid;
    }
}


    



