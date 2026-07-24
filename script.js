// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
    });
});

// Sample car data - This would normally come from a backend
const carDatabase = [
    {
        id: 1,
        make: 'Toyota',
        model: 'Camry',
        year: 2023,
        price: 2500000,
        mileage: 15000,
        transmission: 'Automatic'
    },
    {
        id: 2,
        make: 'BMW',
        model: 'X5',
        year: 2022,
        price: 4200000,
        mileage: 25000,
        transmission: 'Automatic'
    },
    {
        id: 3,
        make: 'Honda',
        model: 'Civic',
        year: 2023,
        price: 1800000,
        mileage: 8000,
        transmission: 'Manual'
    },
    {
        id: 4,
        make: 'Mercedes-Benz',
        model: 'C-Class',
        year: 2022,
        price: 3500000,
        mileage: 30000,
        transmission: 'Automatic'
    },
    {
        id: 5,
        make: 'Nissan',
        model: 'Qashqai',
        year: 2023,
        price: 2200000,
        mileage: 12000,
        transmission: 'Automatic'
    },
    {
        id: 6,
        make: 'Volkswagen',
        model: 'Golf',
        year: 2021,
        price: 1600000,
        mileage: 45000,
        transmission: 'Manual'
    }
];

// Load cars on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCars();
    setupFormHandlers();
});

// Function to load and display cars
function loadCars() {
    const carsGrid = document.getElementById('carsGrid');
    
    if (!carsGrid) return;
    
    carsGrid.innerHTML = '';
    
    carDatabase.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <div class="car-image">
                <i class="fas fa-car"></i>
            </div>
            <div class="car-info">
                <h3 class="car-title">${car.year} ${car.make} ${car.model}</h3>
                <div class="car-details">
                    <p><i class="fas fa-tachometer-alt"></i> ${car.mileage.toLocaleString()} km</p>
                    <p><i class="fas fa-cog"></i> ${car.transmission}</p>
                </div>
                <div class="car-price">KES ${car.price.toLocaleString()}</div>
                <div class="car-actions">
                    <button class="btn btn-primary" onclick="contactAboutCar('${car.make} ${car.model}')">Inquire</button>
                    <button class="btn btn-secondary" onclick="addToWishlist(${car.id})">Wishlist</button>
                </div>
            </div>
        `;
        carsGrid.appendChild(carCard);
    });
}

// Contact about a car
function contactAboutCar(carModel) {
    const message = `I'm interested in the ${carModel}. Please provide more details.`;
    const whatsappLink = `https://wa.me/254728615795?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}

// Add to wishlist (stores in localStorage)
function addToWishlist(carId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (!wishlist.includes(carId)) {
        wishlist.push(carId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert('Car added to wishlist!');
    } else {
        alert('Car already in your wishlist!');
    }
}

// Setup form handlers
function setupFormHandlers() {
    // Upload Form
    const uploadForm = document.getElementById('uploadForm');
    if (uploadForm) {
        uploadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleCarUpload();
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleContactForm();
        });
    }

    // File upload drag and drop
    const fileUpload = document.querySelector('.file-upload');
    if (fileUpload) {
        const input = fileUpload.querySelector('input');
        
        fileUpload.addEventListener('click', () => input.click());
        
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            fileUpload.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            fileUpload.addEventListener(eventName, () => {
                fileUpload.style.borderColor = '#dc2626';
                fileUpload.style.backgroundColor = 'rgba(220, 38, 38, 0.05)';
            });
        });

        ['dragleave', 'drop'].forEach(eventName => {
            fileUpload.addEventListener(eventName, () => {
                fileUpload.style.borderColor = '#d1d5db';
                fileUpload.style.backgroundColor = 'transparent';
            });
        });

        fileUpload.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            input.files = files;
        });

        input.addEventListener('change', function() {
            if (this.files.length > 0) {
                fileUpload.querySelector('span').textContent = `${this.files.length} image(s) selected`;
            }
        });
    }
}

// Handle car upload
function handleCarUpload() {
    const formData = {
        make: document.getElementById('carMake').value,
        model: document.getElementById('carModel').value,
        year: document.getElementById('carYear').value,
        price: document.getElementById('carPrice').value,
        mileage: document.getElementById('carMileage').value,
        transmission: document.getElementById('carTransmission').value,
        description: document.getElementById('carDescription').value,
        ownerName: document.getElementById('ownerName').value,
        ownerPhone: document.getElementById('ownerPhone').value,
        ownerEmail: document.getElementById('ownerEmail').value
    };

    // Validate form
    if (!formData.make || !formData.model || !formData.year || !formData.price) {
        alert('Please fill in all required fields');
        return;
    }

    // Send to WhatsApp
    const message = `
New Car Listing:
Make: ${formData.make}
Model: ${formData.model}
Year: ${formData.year}
Price: KES ${formData.price}
Mileage: ${formData.mileage} km
Transmission: ${formData.transmission}
Description: ${formData.description}

Owner: ${formData.ownerName}
Phone: ${formData.ownerPhone}
Email: ${formData.ownerEmail}
    `.trim();

    const whatsappLink = `https://wa.me/254728615795?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');

    // Reset form
    document.getElementById('uploadForm').reset();
    document.querySelector('.file-upload span').textContent = 'Click to upload or drag images here';
    
    alert('Car listing submitted! We will contact you shortly.');
}

// Handle contact form
function handleContactForm() {
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value,
        message: document.getElementById('contactMessage').value
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
        alert('Please fill in all fields');
        return;
    }

    // Send to WhatsApp
    const message = `
Contact Request from ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `.trim();

    const whatsappLink = `https://wa.me/254728615795?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');

    // Reset form
    document.getElementById('contactForm').reset();
    
    alert('Message sent! We will get back to you shortly.');
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active state styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #dc2626;
        border-bottom: 2px solid #dc2626;
        padding-bottom: 0.5rem;
    }
`;
document.head.appendChild(style);

// Initialize tooltips for file upload
document.addEventListener('DOMContentLoaded', () => {
    console.log('SwiftGo MotorHub website loaded successfully!');
});
