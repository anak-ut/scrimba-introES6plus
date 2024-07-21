import { dataExport } from "./11_importExport.js";
console.log(dataExport);
let dataUpdate = dataExport;
dataUpdate.push(999);
console.log(`dataExport: ${dataExport} dan \ndataUpdate: ${dataUpdate}`)

// jangann lupa utk buat package.json di dalam root
// tambahkan "type": "module"
