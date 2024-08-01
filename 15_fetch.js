// restful api - https://jsonplaceholder.typicode.com/

// fetch('https://jsonplaceholder.typicode.com/posts/102')
// .then((response)=>response.json())
// .then((json)=>console.log(json));

const link = 'https://jsonplaceholder.typicode.com/todos/1' ;
async function tarikData(){
    try {
        const response = await fetch(link);
        if (!response.ok){
            throw new Error(`response status : ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

tarikData();

// make post

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'juancokimak jokowee',
//         body: 'juancok asu tenan jokontot luhut anyenk makan 7500',
//         userId: 6969,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
// })
// .then((response)=>response.json())
// .then((json)=>console.log(json));
