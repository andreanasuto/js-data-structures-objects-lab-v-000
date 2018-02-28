// Write your solution in this file!
const driver = {

}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newdriver = {...driver}
  driver[key] = value
  console.log('this is a value added:',value)
  return driver
}
