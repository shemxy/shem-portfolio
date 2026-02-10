
const projectData = {
    'vr-escape': {
        title: "VR Escape Room Game",
        description: "Developed an immersive VR escape room set inside a cursed ancient Egyptian tomb, where players must solve four environmental puzzles to break the forgotten Pharaoh Tutankhamun's curse before being trapped forever. Built interactive mechanics in Unity using C#, including trigger-based events such as pressure plates, object placement, and a physical keypad puzzle to control game progression. The project emphasized atmospheric world-building, spatial interaction, and player immersion while encouraging critical thinking through narrative-driven puzzle design.",
        tags: ["Unity", "C#"],
        overview: "A fully immersive VR escape room game featuring puzzle-solving mechanics, interactive objects, and atmospheric environments. Players must work together to solve clues and escape before time runs out.",
        tech: "Unity 3D, C#, VR SDK",
        screenshots: [
            "images/vr-escape-1.png",
            "images/vr-escape-2.png",
            "images/vr-escape-3.png"
        ]
    },
    'fashion-wireframe': {
        title: "Sustainable Fashion Website Wireframe",
        description: "E-commerce wireframe design for a sustainable fashion platform.",
        tags: ["Figma", "E-commerce"],
        overview: "Created a high-fidelity wireframe for a sustainable fashion e-commerce platform, focusing on clear user flows, product discovery, and ethical brand storytelling. Emphasised usability, accessibility, and conversion-oriented layouts.",
        tech: "Figma, Prototyping",
        screenshots: [
            "images/fashion-wireframe-1.png",
            "images/fashion-wireframe-2.png",
            "images/fashion-wireframe-3.png",
            "images/fashion-wireframe-4.png",
            "images/fashion-wireframe-5.png",
            "images/fashion-wireframe-6.png"
        ]
    },
    'rc-events': {
        title: "RC Events Hub",
        description: "Built a full-stack events management platform with CRUD functionality using Node.js and Express. Implemented RESTful routes, server-side validation, and SQL database integration to manage events, users, and protected admin actions.",
        tags: ["Node.js", "Express", "SQL"],
        overview: "A comprehensive events management system allowing users to create, manage, and RSVP to events. Features include user authentication, real-time updates, and admin dashboard.",
        tech: "Node.js, Express.js, SQL Database, REST API, JWT Authentication",
        screenshots: [
            "images/rc-events-1.png",
            "images/rc-events-2.png",
            "images/rc-events-3.png",
            "images/rc-events-4.png",
            "images/rc-events-5.png"
        ]
    },
    'sgc-instagram': {
        title: "SGC Instagram Feedpost",
        description: "Designed branded Instagram feed visuals aligned with Republic Polytechnic's hip-hop dance interest group Style Groovaz Crew's visual identity. Used Illustrator for vector assets and Photoshop for layout, colour grading, and final composition optimised for social media engagement.",
        tags: ["Photoshop", "Illustrator"],
        overview: "A series of engaging Instagram feed posts designed for social media marketing. Focus on brand consistency, visual appeal, and audience engagement.",
        tech: "Adobe Photoshop, Adobe Illustrator, Social Media Design",
        screenshots: [
            "images/sgc-instagram-1.png",
            "images/sgc-instagram-2.png",
            "images/sgc-instagram-3.png",
            "images/sgc-instagram-4.png"
        ]
    },
    'calorie-tracker': {
        title: "Calorie Tracker App",
        description: "Developed a mobile calorie tracking app using React Native, focusing on clean UI and intuitive data entry. Implemented state management for tracking meals and quantities.",
        tags: ["React Native", "CSS", "JSX"],
        overview: "A user-friendly mobile app that helps users track their daily calorie intake, set nutrition goals, and monitor their progress. Features include barcode scanning, meal logging, and progress visualization.",
        tech: "React Native, CSS, JSX, AsyncStorage, Chart Library",
        screenshots: [
            "images/calorie-tracker-1.png",
            "images/calorie-tracker-2.png",
            "images/calorie-tracker-3.png",
            "images/calorie-tracker-4.png"
        ]
    },
    'eco-tracker': {
        title: "Eco Tracker App",
        description: "Created a sustainability-focused mobile app that helps users track eco-friendly habits and daily impact. Designed reusable components and simple user flows to encourage consistent engagement and behaviour change.",
        tags: ["React Native", "CSS", "JSX"],
        overview: "An environmental awareness app that helps users track their carbon footprint, monitor daily habits, and receive personalized tips for reducing environmental impact.",
        tech: "React Native, CSS, JSX, Environmental APIs, Data Visualization",
        screenshots: [
            "images/eco-tracker-1.png",
            "images/eco-tracker-2.png",
            "images/eco-tracker-3.png",
            "images/eco-tracker-4.png"
        ]
    },
    'avatar-design': {
        title: "5 Avatar Design",
        description: "Designed a set of five custom avatars using vector illustration techniques. Focused on visual consistency, character expression, and adaptability across digital platforms",
        tags: ["Illustrator"],
        overview: "A collection of five unique character avatars designed with distinct personalities and styles. Created using vector graphics for scalability and versatility across different platforms.",
        tech: "Adobe Illustrator, Vector Graphics, Character Design",
        screenshots: [
            "images/avatar-design-1.png",
            "images/avatar-design-2.png",
            "images/avatar-design-3.png",
            "images/avatar-design-4.png"
        ]
    }
};


let currentCarouselImages = [];
let currentCarouselIndex = 0;

function openModal(projectId) {
    const project = projectData[projectId];
    const modal = document.getElementById('projectModal');
    
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalOverview').textContent = project.overview;
    document.getElementById('modalTech').textContent = project.tech;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
    
    const screenshotsContainer = document.getElementById('modalScreenshots');
    screenshotsContainer.innerHTML = '';
    project.screenshots.forEach((screenshot, index) => {
        const screenshotDiv = document.createElement('div');
        screenshotDiv.className = 'screenshot';
        screenshotDiv.innerHTML = `<img src="${screenshot}" alt="Project screenshot ${index + 1}">`;
        screenshotDiv.addEventListener('click', () => openCarousel(project.screenshots, index));
        screenshotsContainer.appendChild(screenshotDiv);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openCarousel(images, startIndex = 0) {
    currentCarouselImages = images;
    currentCarouselIndex = startIndex;
    
    const carousel = document.getElementById('imageCarousel');
    const carouselImage = document.getElementById('carouselImage');
    const currentImageNumber = document.getElementById('currentImageNumber');
    const totalImages = document.getElementById('totalImages');
    
    carouselImage.src = currentCarouselImages[currentCarouselIndex];
    currentImageNumber.textContent = currentCarouselIndex + 1;
    totalImages.textContent = currentCarouselImages.length;
    
    carousel.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCarousel() {
    const carousel = document.getElementById('imageCarousel');
    carousel.classList.remove('active');
    document.body.style.overflow = 'hidden'; 
}

function previousImage() {
    currentCarouselIndex = (currentCarouselIndex - 1 + currentCarouselImages.length) % currentCarouselImages.length;
    updateCarouselImage();
}

function nextImage() {
    currentCarouselIndex = (currentCarouselIndex + 1) % currentCarouselImages.length;
    updateCarouselImage();
}

function updateCarouselImage() {
    const carouselImage = document.getElementById('carouselImage');
    const currentImageNumber = document.getElementById('currentImageNumber');
    
    carouselImage.src = currentCarouselImages[currentCarouselIndex];
    currentImageNumber.textContent = currentCarouselIndex + 1;
}

document.addEventListener('keydown', (e) => {
    const carousel = document.getElementById('imageCarousel');
    if (carousel.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            previousImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'Escape') {
            closeCarousel();
        }
    }
    
    const modal = document.getElementById('projectModal');
    if (modal.classList.contains('active') && e.key === 'Escape' && !carousel.classList.contains('active')) {
        closeModal();
    }
});

document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

document.getElementById('imageCarousel').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCarousel();
    }
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        openModal(projectId);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = 0.2 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
