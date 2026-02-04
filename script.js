const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("statusMessage");

const API_URL = "https://ojk4llwef1.execute-api.ap-south-1.amazonaws.com/prod/submit";

form.addEventListener("submit", async function (e) {
    e.preventDefault(); 

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            statusMessage.style.color = "green";
            statusMessage.textContent = "Form submitted successfully! 🚀";
            form.reset();
        } else {
            throw new Error("Submission failed");
        }
    } catch (error) {
        statusMessage.style.color = "red";
        statusMessage.textContent = "Error submitting form ❌";
        console.error(error);
    }
});
