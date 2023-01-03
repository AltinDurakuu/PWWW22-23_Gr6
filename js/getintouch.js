var form = document.getElementById("getintouch_form");
const closeBtn = document.getElementById("close");
const modalForm = document.querySelector(".errors");

console.log("hello");

form.addEventListener('submit', validateForm);
closeBtn.addEventListener('click', removeModalForm);

function validateForm(e) {
    e.preventDefault();
    let email1 = document.getElementById("getintouch_email");
    let email2 = document.getElementById("getintouch_email2");
    var p = document.getElementById('getintouch_password1').value;
    var p2 = document.getElementById('getintouch_password2').value;
    let validation = true;
    if(email1.value !== email2.value){
        addParagraph("Your emails do not match");
        validation = false;
    }
    if(p !== p2){
        addParagraph("Your passwords do not match");
        validation = false;
    }
    if (p.length < 8) {
        addParagraph("Your password must be at least 8 characters"); 
        validation = false;
    }
    if (p.search(/[a-z]/i) < 0) {
        addParagraph("Your password must contain at least one letter.");
        validation = false;
    }
    if (p.search(/[0-9]/) < 0) {
        addParagraph("Your password must contain at least one digit."); 
        validation = false;
    }
    if (!(/[^a-zA-Z0-9]/.test(p))) {
        addParagraph("Your password must contain at least one special character.");
        validation = false;
      }
      
    if(!validation){
        modalForm.classList.remove("remove-modal");
    }else{
        form.reset();
    }
}
function removeModalForm(){
    modalForm.classList.add('remove-modal');
    var last = modalForm.lastElementChild;
    while (last) {
        if(!last.classList.contains("closeBtn")){
            last.remove();
        }else{
            break;
        }
        last = modalForm.lastElementChild;
    }
}

function addParagraph(text){
    const p = document.createElement("p");
    const node = document.createTextNode(text);
    p.appendChild(node);

    modalForm.appendChild(p);
}

//Calculating the total charges of hiring an attorney
var button = document.getElementById("calculate");
button.addEventListener("click", function getCharges(){
    var hours_field = document.querySelector("#hours_field");
    var total = document.querySelector("#total");

    var hours = parseFloat(hours_field.value);
    var fee = calculateCharges(hours);

    total.innerHTML = "Total: " + fee.toFixed(2).toString();
});

function calculateCharges(hours){
    if (hours < Number.MAX_VALUE && !Number.isNaN(hours)){
        var charge = hours * 150;
        return charge;
    }
}