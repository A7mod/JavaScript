// this is a new type of thing
// there are arrow functions, yes I know that. 
// these are called concise body

/*
const plantNeedsWater = (day) => {
 return day === 'Wednesday' ? true : false;
};

plantNeedsWater();
*/

const plantNeedsWater = day => day === 'Wednesday' ? true : false;

// scope scopeeee

const city = 'New York City';

const logCitySkyline = () => {
    let skyscraper = 'Empire State';
    return 'the stars over the ' + skyscraper + ' in the ' + city;
};

console.log(logCitySkyline());
