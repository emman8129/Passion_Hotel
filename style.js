document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let room = document.getElementById("room").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;

    if (name && email && room && checkin && checkout) {
        alert("Thank you for booking! We will get back to you soon.");
    } else {
        alert("Please fill out all fields.");
    }
});
