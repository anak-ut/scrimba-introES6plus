// restful api - https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/comments/2')
.then(response=>response.json())
.then(data=>console.log(data))

// make post

fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify({
        postId:1,
        name:'dylan',
        email: 'nobody@gmail.com',
        body: 'ancok matane cok'
    })
})
.then(response=>response.json())
.then(data=>console.log(data));