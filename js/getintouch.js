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
    if(email1.value !== email2.value){
        addParagraph("Your emails do not match")
    }
    if(p !== p2){
        addParagraph("Your passwords do not match");
    }
    if (p.length < 8) {
        addParagraph("Your password must be at least 8 characters"); 
    }
    if (p.search(/[a-z]/i) < 0) {
        addParagraph("Your password must contain at least one letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        addParagraph("Your password must contain at least one digit."); 
    }
    if(modalForm.hasChildNodes()){
        modalForm.classList.remove("remove-modal");
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