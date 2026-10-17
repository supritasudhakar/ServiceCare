const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("contactName").value.trim();

    const email =
        document.getElementById("contactEmail").value.trim();

    const message =
        document.getElementById("contactMessage").value.trim();


    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

        return;
    }


    document.getElementById("contactSuccess").style.display =
        "block";


    contactForm.reset();

});