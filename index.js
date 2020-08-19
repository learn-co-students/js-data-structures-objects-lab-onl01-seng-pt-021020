// Write your solution in this file!
let driver = {}; 

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriverObject = { ...driver }; 
  newDriverObject[key] = value;
  return newDriverObject;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriverObject = { ...driver }; 
  delete newDriverObject[key];  
  return newDriverObject; 
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]; 
  return driver;
}