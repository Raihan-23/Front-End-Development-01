document.addEventListener("DOMContentLoaded", () => {
    const packageCards = document.querySelectorAll(".package-card");

    packageCards.forEach(card => {
        const minusBtn = card.querySelector(".minus");
        const plusBtn = card.querySelector(".plus");
        const roomCountElem = card.querySelector(".room-count");
        const totalPriceElem = card.querySelector(".total-price");
        const signUpBtn = card.querySelector(".sign-up");
        const basePrice = parseInt(totalPriceElem.textContent);

        let roomCount = parseInt(roomCountElem.textContent);

        plusBtn.addEventListener("click", () => {
            roomCount++;
            updateUI();
        });

        minusBtn.addEventListener("click", () => {
            if (roomCount > 1) {
                roomCount--;
                updateUI();
            }
        });

        signUpBtn.addEventListener("click", () => {
            const thankYouMsg = document.querySelector(".thank-you");
            thankYouMsg.style.display = "block";
            thankYouMsg.querySelector(".chosen-rooms").textContent = roomCount;
        });

        function updateUI() {
            roomCountElem.textContent = roomCount;
            totalPriceElem.textContent = basePrice * roomCount;
        }
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert("All fields are required!");
        }
    });
});
