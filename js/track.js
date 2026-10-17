const trackForm = document.getElementById("trackForm");

trackForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const serviceId = document.getElementById("serviceId").value.trim();

    if (serviceId === "") {
        return;
    }

    document.getElementById("resultId").textContent = serviceId;

    document.getElementById("resultStatus").textContent =
        "Under Diagnosis";

    document.getElementById("resultDevice").textContent =
        "Laptop";

    document.getElementById("trackResult").style.display = "block";
});