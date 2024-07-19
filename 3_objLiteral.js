function addressMaker(city,state){ //parameter bertindak sbg value
    const newAddress = { city, state}; //array dimana menjadi key,
    console.log(newAddress)
}
// key + value jadi object
addressMaker('austin','texas');

// remember string literals ?

// challenge

function addressGenerator(address){
    const {city, state} = address
    const newerAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(` # ini challenge: ${newerAddress.city}-${newerAddress.state}-${newerAddress.country}`);
}

addressGenerator({city: 'austin', state: 'texas'});