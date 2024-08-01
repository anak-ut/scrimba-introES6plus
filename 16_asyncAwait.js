let potos = [];

// function fotoUp(){
//     let uploadStat = new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             potos.push(' gambar xx');
//             resolve(' status: foto terupload ✌️')
//         },4000)
//     })
//     let result  = uploadStat
//     console.log(result);
//     console.log(potos.length);
//     console.log(potos)

// }
// output : result = Pending, length =0; potos = kosong
// karna func fotoUp tetap menjalankan kode ke bawah walopun ada fungsi uploadStat
// yang masih berjalan 4000ms.
// makanya fungsi didalam uploadStat tidak terjalankan.karna JS melewati dan
// menjalankan fungsi2 dibawahnya

async function fotoUp(){
    try{
        let uploadStat = new Promise((resolve, reject)=> {
            setTimeout(()=>{
                potos.push(' gambar xx');
                resolve(' status: foto terupload ✌️')
            },4000)
        });
        let result  = await uploadStat
        console.log(result);
        console.log(potos.length);
        console.log(potos);
    }
    catch (error){
        console.log(`error: ${error}`)
    }
}

fotoUp();
// make promise a sync await