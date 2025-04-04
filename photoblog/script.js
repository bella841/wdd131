
const images = [
    {
        src: "france1.jpg",
        alt: "Le Louvre, Paris",
        tags: ["museum", "art", "paris"],
        rating: 5,
        link: "france.html"
    },
    {
        src: "bulgaria1.jpg",
        alt: "Nevesky Cathedral, Sofia",
        tags: ["bulgaria", "cathedral", "sofia"],
        rating: 4,
        link: "bulgaria.html"
    },
    {
        src: "bulgaria2.jpg",
        alt: "The Snail House, Sofia",
        tags: ["snail", "rainbow", "bulgaria"],
        rating: 4,
        link: "bulgaria.html",
    },
    {
        src: "bulgaria3.jpg",
        alt: "Ravadinovo Castle, Sozopol",
        tags: ["castle", "old", "bulgaria"],
        rating: 2,
        link: "bulgaria.html",
    },
    {
        src: "bulgariablog4.jpg",
        alt: "Plovdiv, Bulgaria",
        tags: ["egg", "bulgaria", "plovdiv"],
        rating: 5,
        link: "bulgaria.html",
    },
    {
        src: "bulgariablog5.jpg",
        alt: "Stadium of Philippopolis, Plovdiv",
        tags: ["old", "stadium", "bulgaria", "plovdiv"],
        rating: 1,
        link: "bulgaria.html",
    },
    {
        src: "bulgariablog6.jpg",
        alt: "Plovdiv, Bulgaria",
        tags: ["city", "plovdiv", "bulgaria"],
        rating: 2,
        link: "bulgaria.html",
    },
    {
        src: "bulgariablog7.jpg",
        alt: "Downtown Sofia, Bulgaria",
        tags: ["church", "downtown", "bulgaria"],
        rating: 4,
        link: "bulgaria.html",
    },
    {
        src: "bulgariablog8.jpg",
        alt: "Saint Alexander Nevsky Cathedral, Sofia",
        tags: ["cathedral", "downtown", "bulgaria", "sofia"],
        rating: 2,
        link: "bulgaria.html",
    },
    {
        src: "bulgariablog9.jpg",
        alt: "The mill restaurant, Sofia",
        tags: ["food", "bulgaria","sofia"],
        rating: 2,
        link: "bulgaria.html",
    },
    {
        src: "bulgariablog10.jpg",
        alt: "Lake Atanasovsko, Burgas",
        tags: ["lake", "burgas", "bulgaria"],
        rating: 5,
        link: "bulgaria.html",
    },
    {
        src: "bulgariablog11.jpg",
        alt: "Ravadinovo Castle, Sozopol",
        tags: ["fountain", "monument", "sozopol", "bulgaria"],
        rating: 4,
        link: "bulgaria.html",
    },
    {
        src: "bulgariablog12.jpg",
        alt: "Surva Festival, Pernik",
        tags: ["tradition", "mask", "pernik", "bulgaria"],
        rating: 2,
        link: "bulgaria.html",
    },
    {
        src: "bulgariablog13.jpg",
        alt: "Saeva Dupka Cave, Bulgaria",
        tags: ["cave", "spikes", "bulgaria"],
        rating: 1,
        link: "bulgaria.html",
    },
    {
        src: "bulgariablog14.jpg",
        alt: "Rila Monastery, Bulgaria",
        tags: ["art", "bulgaria"],
        rating: 4,
        link: "bulgaria.html",
    },
    {
        src: "bulgariablog15.jpg",
        alt: "God's Eye Cave, Bulgaria",
        tags: ["cave", "bulgaria"],
        rating: 3,
        link: "bulgaria.html",
    },
    {
        src: "bulgariahero.jpg",
        alt: "City in Bulgaria",
        tags: ["city", "bulgaria"],
        rating: 3,
        link: "bulgaria.html",
    },
    {
        src: "bulgariainfo.jpg",
        alt: "Church in Bulgaria",
        tags: ["church", "bulgaria"],
        rating: 4,
        link: "info.html",
    },
    {
        src: "ecuador1.jpg",
        alt: "Mitad Del Mundo",
        tags: ["monument", "ecuador", "quito"],
        rating: 3,
        link: "index.html",
    },
    {
        src: "ecuador2.jpg",
        alt: "Quito Ecuador",
        tags: ["waterfall", "ecuador", "quito"],
        rating: 3,
        link: "index.html",
    },
    {
        src: "ecuadorinfo.jpg",
        alt: "Waterfall in Ecuador",
        tags: ["waterfall", "ecuador"],
        rating: 3,
        link: "info.html",
    },
    {
        src: "france1.jpg",
        alt: "Le Louvre, Paris",
        tags: ["monument", "art", "paris", "france"],
        rating: 3,
        link: "index.html",
    },
    {
        src: "franceinfo.jpg",
        alt: "Eiffel Tower",
        tags: ["monument", "tower", "paris", "france"],
        rating: 5,
        link: "info.html",
    },
    {
        src: "greece1.png",
        alt: "Greece Plants",
        tags: ["plants", "ocean", "greece"],
        rating: 5,
        link: "info.html",
    },
    {
        src: "italyinfo.jpg",
        alt: "Italy",
        tags: ["monument", "italy"],
        rating: 5,
        link: "info.html",
    }
];

function displayimg(imagesdisplay) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ''; 

    if (imagesdisplay.length == 0) 
        { gallery.innerHTML = "No images were found. To get results search for tag or rating";

    }

    imagesdisplay.forEach(image => {
        const imagediv = document.createElement("div");
        imagediv.classList.add("image-container");



        const img = document.createElement("img");
        img.src = image.src; 
        img.alt = image.alt; 

        

        const caption = document.createElement("div");

        caption.classList.add("image-info");

        caption.innerText = image.alt;



        const tags = document.createElement("div");

        tags.classList.add("image-tags");

        tags.innerHTML = `Tags: ${image.tags.join(", ")}`;



        const rating = document.createElement("div");

        
        rating.classList.add("image-rating");

        rating.innerHTML = `Rating: ${"⭐".repeat(image.rating)}${"☆".repeat(5 - image.rating)}`;


        const link = document.createElement("a");

        link.href = image.link;

        link.innerText = "See Page";

        imagediv.appendChild(img);
        imagediv.appendChild(rating);
        imagediv.appendChild(caption);
        imagediv.appendChild(tags);
        imagediv.appendChild(link);
        gallery.appendChild(imagediv);


    });
}



function filterImages() {
    const searchQuery = document.getElementById("searchbox").value;

    const filterimage = images.filter(image => {
        return image.tags.some(tag => tag.toLowerCase().includes(searchQuery))|| 
        
            
        image.rating.toString().includes(searchQuery);
    });

    displayimg(filterimage);
}

window.onload = function() 
{displayimg(images); 
    const searchbox = document.getElementById("searchbox");
    searchbox.addEventListener("input", filterImages); 
};