gsap.from(".left-person", { x: -200, opacity: 0, duration: 1, ease: "power2.out" });
gsap.from(".right-person", { x: 200, opacity: 0, duration: 1, ease: "power2.out" });
gsap.from(".center-title h1", { y: 50, opacity: 0, duration: 1, delay: 0.5, stagger: 0.3 });
gsap.from(".See", { y: 30, opacity: 0, duration: 1, delay: 1 });
gsap.from(".enquiry-btn", { scale: 0.8, opacity: 0, duration: 1, delay: 1.5 });

function toggleMenu() {
    alert("Menu Clicked");
}

function showInfo(person) {
    let name = "";
    let details = "";

    if (person === "saksham") {
        name = "Saksham Jain";
        details = "Full Stack Developer, Designer, Founder of Nexus.";
    } 
    else if (person === "shubham") {
        name = "Shubham Sharma";
        details = "Backend Expert, UI Specialist, Founder of Nexus.";
    }

    document.getElementById("popup-name").textContent = name;
    document.getElementById("popup-details").textContent = details;

    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}



