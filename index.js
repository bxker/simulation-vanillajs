let billItems = [{}];
let total;
let name;
let amount;


document.querySelector('form > button').addEventListener("click", function(e){
    e.preventDefault();
    console.log('form submitted')
    name = document.getElementById('name-1'.value);
    console.log(name)
});




