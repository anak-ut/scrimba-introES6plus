// chuck norris API : "https://api.chucknorris.io/jokes/random";

const chuckLink = 'https://api.chucknorris.io/jokes/random' ;

async function chuckJoke(){
    try{
       let response = await fetch(chuckLink);
       let result = await response.json();
       console.log(result.value);
    }
    catch (error){
        console.log(`error : ${error}`)
    }
}

chuckJoke();