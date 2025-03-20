document.addEventListener("DOMContentLoaded", function () {
    // Example 1: DOM Interaction
    const welcomeMessage = document.querySelector('h1');
    welcomeMessage.textContent = "Welcome to my Travel Blog - Updated!";
    
    // Example 2: Event listener
    const logo = document.getElementById("logo_link");
    logo.addEventListener("click", function (event) {
        alert("You clicked the logo!");
    });

    // Example 3: Objects and Arrays
    const travels = [
        {
            country: "Bulgaria",
            city: "Sofia",
            image: "bulgariainfo.jpg",
            description: "The capital city of Bulgaria with a rich history."
        },
        {
            country: "Ecuador",
            city: "Quito",
            image: "ecuadorinfo.jpg",
            description: "A beautiful country in South America with stunning landscapes."
        }
    ];

    // Example 4: Using forEach to display travel data dynamically
    const travelContainer = document.querySelector('.gridcontainer1');
    travels.forEach(function (travel) {
        const travelCard = document.createElement("div");
        travelCard.classList.add("travel-card");

        const travelImage = document.createElement("img");
        travelImage.src = travel.image;
        travelImage.alt = `${travel.country} image`;

        const travelDescription = document.createElement("p");
        travelDescription.textContent = travel.description;

        const travelLink = document.createElement("a");
        travelLink.href = `${travel.country.toLowerCase()}.html`;
        travelLink.textContent = `Read more about ${travel.city}`;

        travelCard.appendChild(travelImage);
        travelCard.appendChild(travelDescription);
        travelCard.appendChild(travelLink);

        travelContainer.appendChild(travelCard);
    });

    // Example 5: Array method - filter, for showing some places dynamically
    const filteredTravels = travels.filter(function (travel) {
        return travel.country === "Bulgaria";  // Filter for Bulgaria
    });

    console.log(filteredTravels);  // This will log the filtered travels for Bulgaria
});
