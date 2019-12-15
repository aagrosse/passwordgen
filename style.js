
//Generator functions

function getRandomLower() {
    return String.fromCharCode(97);
}

console.log(Math.floor(Math.random() * 26));





















































function copy() {
    let textarea = document.getElementById("password");
    textarea.select();
    document.execCommand("copy");
}