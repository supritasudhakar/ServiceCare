const serviceForm = document.getElementById("serviceForm");

serviceForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const customerName =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const deviceType =
        document.getElementById("deviceType").value;

    const deviceModel =
        document.getElementById("deviceModel").value.trim();

    const problem =
        document.getElementById("problem").value.trim();


    if (
        customerName === "" ||
        phone === "" ||
        deviceType === "" ||
        deviceModel === "" ||
        problem === ""
    ) {
        alert("Please fill in all required fields.");
        return;
    }


    // Generate a simple Service ID
    const serviceId =
        "SC" + Math.floor(1000 + Math.random() * 9000);


    document.getElementById("generatedServiceId").textContent =
        serviceId;


    document.getElementById("requestSuccess").style.display =
        "block";


    // Clear the form
    serviceForm.reset();

});