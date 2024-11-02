function validateForm() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("pnumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name) {
        alert("Please enter your name.");
        return false;
    }

    const phonePattern = /^[0-9]{2}-[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number in the format 91-XXXXXXXXXX.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!message) {
        alert("Please enter your message.");
        return false;
    }

    return true;
}


