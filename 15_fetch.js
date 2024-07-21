// restful api - https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/posts/102')
.then((response)=>response.json())
.then((json)=>console.log(json));

// make post

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'juancokimak jokowee',
        body: 'juancok asu tenan jokontot luhut anyenk makan 7500',
        userId: 6969,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response)=>response.json())
.then((json)=>console.log(json));