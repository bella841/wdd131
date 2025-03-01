document.addEventListener("DOMContentLoaded", function () {
    const menubutton = document.querySelector(".button");
    const menu = document.querySelector(".menu");

    function toggleMenu() {
        if (window.innerWidth >= 700 && window.innerWidth < 1000) {
            menu.classList.toggle("hide");
        }
    }

    function handleResize() {
        if (window.innerWidth < 700) {
            menu.classList.remove("hide"); 
        } else if (window.innerWidth >= 700 && window.innerWidth < 1000) {
            menu.classList.add("hide");
        } else {
            menu.classList.remove("hide"); 
        }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    function viewHandler(event) {
        const clickedElement = event.target;
        
        if (!clickedElement.classList.contains("pic")) return;

        const srcArray = clickedElement.src.split("-");
        const fullImageSrc = srcArray[0] + "-norris-full.jpeg";

        const viewerTemplate = `
        <div id="image-viewer" class="viewer">
            <button id="close-btn" class="close-viewer">X</button>
            <img src="${fullImageSrc}" alt="Full Image" class="large-image">
        </div>`;

        document.body.insertAdjacentHTML("afterbegin", viewerTemplate);
    }

    function closeViewer() {
        const viewer = document.getElementById("image-viewer");
        if (viewer) {
            viewer.remove();
        }
    }

    document.querySelectorAll(".pic").forEach(img => {
        img.addEventListener("click", viewHandler);
    });


    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("close-viewer")) {
            closeViewer();
        }
    });
});
