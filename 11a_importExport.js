import { dataExport,add } from "./11_importExport.js";
console.log(dataExport);
let dataUpdate = dataExport;
dataUpdate.push(999);
console.log(`dataExport: ${dataExport} dan \ndataUpdate: ${dataUpdate}`)

// jangann lupa utk buat package.json di dalam root
// tambahkan "type": "module"

console.log(` hasil 1+99 : ${add(1,99)}`); // fungsi add dari file : 11_importExport.js