document.getElementById("menu-icon").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});

// form control
/*
const myForm = document.getElementById("appointment_form");

        // Add an event listener to the form's submit event
        myForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission behavior
            console.log("kgcgvgv")
            // You can customize the popup message here
            const confirmation = confirm("Do you want to submit this form?");
            if (confirmation) {
                alert("Form submitted successfully!");
                location.href="../index.html"; // Reset the form after submission
            }
        });
*/



function myFunction() {
    
    const confirmation = confirm("Do you want to submit this form?");
            if (confirmation) {
                alert("Form submitted successfully!");
                location.href="../index.html"; 
                           }               ;
}
//date
function dateControl(dateInput){
let date = new Date(dateInput.value);
if(date.getDay()=== 1){
    alert("monday off")
    dateInput.value=""
}


}