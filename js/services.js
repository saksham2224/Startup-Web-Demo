// services.js

gsap.registerPlugin(ScrollTrigger);

// Scroll animation for services boxes
gsap.from('.services-home .service-box', {
    scrollTrigger: {
        trigger: '.services-home',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
});

// Service popup details
const serviceDetails = {
    webdev: {
        title: "Web Development for Businesses",
        desc: "We create professional, responsive and high-performance websites designed to grow your business online with modern UI/UX and scalable architecture."
    },
    projects: {
        title: "Minor & Major Projects for Students",
        desc: "We provide custom-made academic projects with clean UI, proper documentation, and deployable solutions tailored for students."
    },
    portfolio: {
        title: "Portfolio Websites",
        desc: "Showcase your skills professionally with sleek, modern portfolio websites designed for maximum impact."
    }
};

function showServiceInfo(key){
    document.getElementById('service-popup-title').innerText = serviceDetails[key].title;
    document.getElementById('service-popup-desc').innerText = serviceDetails[key].desc;
    document.getElementById('service-popup').style.display = 'flex';
}

function closeServicePopup(){
    document.getElementById('service-popup').style.display = 'none';
}
