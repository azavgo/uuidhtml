## Utility to generate random based UUID-like strings 

### Features: 
1. True random UUID-like string is generated using the ANU QRNG service at https://qrng.anu.edu.au;
1. Generated UUID-like string is formatted to a low case string without dashes, *e.g.* 07090eefa6fed78fa444424b7f843bea;
1. If the ANU QRNG service is unavailable, javascript random numbers generator will generate a pseudo random UUID; 
1. This utility is available online at https://azavgo.github.io/uuidhtml/

***Note:*** Generated UUID-like random based strings are not fully compliant with RFC4122 version 4 random based UUIDs

