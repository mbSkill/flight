
const requiredKeysList = 
        ["flightNumber","departDate","departAirport","arriveDate","arriveAirport","occupantCapacity"];

const validateFlightInput = (_input) => {
    let input = Object.entries(_input);
    let _keys = Object.keys(_input);
    //fail fast
    input? console.log("input detected"): console.log("Placeholder for termination")
    return hasRequiredKeys(_keys);

};

const hasRequiredKeys = (_keys) => { 
    let keys = _keys;
    requiredKeysList.every(k => {
        console.log(`Keys: ${k}`)
        if(!keys.includes(k)){
            console.log(`Not in JSON: ${k}`)
            return false;
        }
    });
};

module.exports = validateFlightInput;