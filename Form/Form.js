document.getElementsByClassName("form")[0].addEventListener("submit", function(e) {
    e.preventDefault();
    let check = false;
    const form = new FormData(e.target);
    if (form.get('firstName') === "") {
        document.getElementById("firstName").setAttribute("class", "error");
        document.getElementById("fistNameError").innerHTML = "This field is required";
        check = true;
    };
    if (form.get("lastName") === "") {
        document.getElementById("lastName").setAttribute("class", "error")
        document.getElementById("lastNameError").innerHTML = "This field is required";
        check = true;

    };
    if (form.get("email") === "") {
        document.getElementById("email").setAttribute("class", "error");
        document.getElementById("emailError").innerHTML = "This field is required";
        check = true;
    };
    if (!check) {
        alert(`name: ${form.get('firstName')}, last name: ${form.get("lastName")}, email: ${form.get("email")}`)
    }

})