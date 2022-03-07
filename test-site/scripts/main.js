let myImage = document.querySelector('img');
//The code below causes the image to change on click
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/maria-bracelet1.jpg') {
        myImage.setAttribute('src', 'images/bruce-bracelet1.jpg');
    } else {
        myImage.setAttribute('src', 'images/maria-bracelet1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome ' + myName;
    }
}
myButton.onclick = function() {
    setUserName();
}