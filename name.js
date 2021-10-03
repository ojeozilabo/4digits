const generateOtp = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
const generateNewOtp = generateOtp(1000, 10000);

console.log(generateNewOtp);