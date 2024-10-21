// Regular expression that matches binary inputs that are multiple of 3
const multipleOf3Regex = new RegExp(/^(0|(1(01*0)*1))*$/);

console.log(multipleOf3Regex.test("11"));
