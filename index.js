const driver = {}

function updateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign({}, driverObject, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign(driverObject, {[key]: value})
}

function deleteFromDriverByKey(driverObject, key) {
    const newDriverObject = Object.assign({}, driverObject)

    delete newDriverObject[key]

    return newDriverObject
}

function destructivelyDeleteFromDriverByKey(driverObject, key) {
    delete driverObject[key]

    return driverObject
}
