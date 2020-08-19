let driver = {};

//Without mutating driver, return a new driver with updated value for key passed in
function updateDriverWithKeyAndValue(driver, key, value){
    let updatedDriver = {...driver};

    updatedDriver[key] = value;

    return updatedDriver;
}

//Mutate driver and return updated with value for key passed in
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;

    return driver;
};

//Without mutating, delete the key/value pair for the key that was passed in
function deleteFromDriverByKey(driver, key){
    let updatedDriver = {...driver};

    delete updatedDriver[key];

    return updatedDriver;
};

//Mutate driver and delete the key/value pair for the key passed in
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    
    return driver;
};