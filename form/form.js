let validateForm = function(e) {
    e.preventDefault();
    let check = false;
    const form = new FormData(e.target);
    let messageError = 'This field is required';
    if (form.get('firstName') === "") {
        document.getElementById("firstName").setAttribute("class", "error");
        document.getElementById("fistNameError").innerHTML = messageError;
        check = true;
    };
    if (form.get("lastName") === "") {
        document.getElementById("lastName").setAttribute("class", "error")
        document.getElementById("lastNameError").innerHTML = messageError;
        check = true;

    };
    if (form.get("email") === "") {
        document.getElementById("email").setAttribute("class", "error");
        document.getElementById("emailError").innerHTML = messageError;
        check = true;
    };
    if (!check) {
        alert(`name: ${form.get('firstName')}, last name: ${form.get("lastName")}, email: ${form.get("email")}`)
    }
};

let handleSubmitForm = function() {
    document.getElementsByClassName("form")[0].addEventListener("submit", validateForm);
}
let main = function() {
    handleSubmitForm();
}
main();