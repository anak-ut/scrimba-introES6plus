// ------------------------------------------
const buyFlight = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const succes = false;
            if (succes){
                resolve('payment berhasil');
            } else {
                reject('payment gagal');
            }
        },3500)
    })
}

buyFlight().then((succes)=>console.log(succes)).catch((error)=>console.log(error));
// --------------------------------------------
const myPromise = new Promise((resolve,reject)=>{
    let success = true;
    setTimeout(()=>{
        if (success){
            resolve('promise berhasil');
        } else {
            reject('promise gagal ndan');
        }
    },4000)
})

myPromise.then((success)=>console.log(success)).catch((error)=>console.log(error));
// --------------------------------------------------
// challenges
console.log('----- challenge -----');
const userData = new Promise((resolve,reject)=>{
    const error = false;
    setTimeout(()=>{
        if (error){
            reject('data error bruh ..')
        } else {
            resolve({
                firstNama: 'jokon ntol',
                age: 69
            });
            }
    },5000)
})

userData.then((data)=>console.log(data)).catch((error)=>console.log(error));
// --------------------------------------------