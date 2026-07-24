# SwiftGo MotorHub - Marketing Website

Welcome to the SwiftGo MotorHub marketing website! This is a professional, fully responsive website for a car sales, financing, trade-in, and hire business.

## 🎯 Project Overview

**Company**: SwiftGo MotorHub  
**Tagline**: Drive Your Passion, We Deliver Excellence  
**Services**: Buy | Sell | Trade-In | Finance | Car Hire | Sell on Commission (1%)

### Contact Information
- **Phone/WhatsApp**: +254 728 615 795
- **Email**: swiftgomotorhome@gmail.com
- **TikTok**: @swiftgomotorhome
- **Facebook**: swiftgomotorhome

## 📁 File Structure

```
swiftgo-motorhub/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling and responsive design
├── script.js           # JavaScript for interactivity and forms
├── README.md           # This file
└── <img width="1254" height="1254" alt="c61f9ccf-eaa8-4964-b7a1-95b996cb719b" src="https://github.com/user-attachments/assets/9a180f5e-4ed5-40f0-8b87-b7ada2a5f3cc" />
            # <img width="1254" height="1254" alt="c61f9ccf-eaa8-4964-b7a1-95b996cb719b" src="https://github.com/user-attachments/assets/ba46bb3d-4419-4659-8c52-8115e58ab3c8" />

```

## 🚀 Features

### 1. **<img width="1254" height="1254" alt="c61f9ccf-eaa8-4964-b7a1-95b996cb719b" src="https://github.com/user-attachments/assets/e6209158-dca1-4ee1-9116-9c794e326650" />
**
- Sticky navigation with smooth scrolling
- Mobile hamburger menu
- Active section indicator
- <img width="1254" height="1254" alt="c61f9ccf-eaa8-4964-b7a1-95b996cb719b" src="https://github.com/user-attachments/assets/e23bb436-a6e9-4301-b59c-831de54f70e4" />


### 2. **Hero Section**
- Compelling headline: "Drive Your Passion"
- Tagline: "We Deliver Excellence"
- Call-to-action buttons
- Responsive design

### 3. **Corporate Introduction**
- Welcome message
- Company mission statement
- Statistics showcase (100+ vehicles, 1000+ customers, 24/7 support)
- Professional company overview

### 4. **Services Section**
- 6 service cards with icons:
  - Buy
  - Sell
  - Trade-In
  - Finance
  - Car Hire
  - Sell on Commission (1%)
- Hover animations
- Clear descriptions

### 5. **Featured Vehicles**
- Dynamic car display grid
- <img width="960" height="584" alt="WhatsApp Image 2026-07-22 at 11 37 59 AM (1)" src="https://github.com/user-attachments/assets/30bb656b-65bf-43e2-b234-cbc8d4c0c5cc" />

- Car details (Honda, vezel, 2021, 48,000, automatic, 4,199,999ksh)
- Inquire and Wishlist buttons
- WhatsApp integration for inquiries

### 6. **List Your Vehicle**
- Comprehensive car upload form for owners
- Form fields:
  - Vehicle Make & Model
  - Year & Price
  - Description
  - Image upload (drag & drop support)
  - Owner information
- Direct WhatsApp submission
- Benefits list

### 7. **Contact Section**
- Contact information cards
- Phone, Email, Hours, Social media
- Contact form with WhatsApp integration
- nairobi,kenya and availability

### 8. **Footer**
- Quick links
- Company information
- Services listing
- Contact details
- Copyright information

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (Vanilla)**: No dependencies
- **Font Awesome**: Icons
- **WhatsApp Integration**: Direct messaging links

## 📱 Responsive Design

The website is fully responsive and works perfectly on:
- Desktop (1920px and above)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🔧 Setup Instructions

### Option 1: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/swiftgomotorhome-byte/swiftgo-motorhub.git
   cd swiftgo-motorhub
   ```

2. **Add your logo**
   - Replace or add `logo.png` in the root directory
   - Update the logo reference in `index.html` if needed

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # or
     python -m SimpleHTTPServer 8000
     ```

4. **View the site**
   - Open `http://localhost:8000` in your browser

### Option 2: Deploy to GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "Deploy from a branch"
4. Choose the main branch
5. Your site will be live at: `https://swiftgomotorhome-byte.github.io/swiftgo-motorhub/`

### Option 3: Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Deploy

### Option 4: Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Deploy

## 📝 Configuration

### Update Contact Information
Edit these sections in `index.html`:

**WhatsApp Number** (Line ~520):
```html
<a href="tel:+254728615795">+254 728 615 795</a>
```

**Email** (Line ~530):
```html
<a href="mailto:swiftgomotorhome@gmail.com">swiftgomotorhome@gmail.com</a>
```

**Social Media Links** (Lines ~545-550):
```html
<a href="https://www.tiktok.com/@swiftgomotorhouse" target="_blank">
<a href="https://www.facebook.com/swiftgomotorhome" target="_blank">
```

### Update WhatsApp in JavaScript
Edit `script.js` to change the WhatsApp number:

Find this line (~80):
```javascript
const whatsappLink = `https://wa.me/254728615795?text=...`;
```

And replace `254728615795` with your WhatsApp number.

### Add Sample Cars
Edit the `carDatabase` array in `script.js` (Lines 30-65) to add or modify vehicles.

## 🎨 Customization

### Colors
The website uses CSS custom properties. Edit `:root` in `styles.css`:

```css
:root {
    --primary-color: #dc2626;      /* Red */
    --secondary-color: #000000;    /* Black */
    --accent-color: #1f2937;       /* Dark Gray */
    --light-gray: #f3f4f6;         /* Light Gray */
    --text-dark: #1f2937;
    --text-light: #6b7280;
}
```

### Fonts
Change font-family in `styles.css`:
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Content
All text content is in `index.html`. Simply edit the relevant sections.

## 🔌 Integration with Backend

To fully integrate this website with a backend:

### 1. Car Upload Form
Replace the WhatsApp submission in `script.js` with an API call:

```javascript
// Instead of WhatsApp, send to your backend
async function handleCarUpload() {
    const formData = new FormData(document.getElementById('uploadForm'));
    
    const response = await fetch('/api/cars/upload', {
        method: 'POST',
        body: formData
    });
    
    const data = await response.json();
    alert('Car uploaded successfully!');
}
```

### 2. Contact Form
Replace WhatsApp with email backend:

```javascript
async function handleContactForm() {
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value,
        message: document.getElementById('contactMessage').value
    };
    
    await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    
    alert('Message sent!');
}
```

### 3. Load Cars Dynamically
Replace the sample data with an API call:

```javascript
async function loadCars() {
    const response = await fetch('/api/cars');
    const cars = await response.json();
    // ... render cars
}
```

## 📊 Analytics & SEO

To add Google Analytics:

Add this to the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Images not loading
- Make sure `logo.png` is in the root directory
- Check file paths in `index.html`

### WhatsApp links not working
- Verify the phone number is correct
- Ensure it includes the country code (+254 for Kenya)
- Test on a device with WhatsApp installed

### Forms not submitting
- Check browser console for JavaScript errors
- Verify WhatsApp is installed or browser supports opening WhatsApp Web
- Test on different browsers

### Mobile menu not working
- Clear browser cache
- Check if JavaScript is enabled
- Verify `script.js` is loaded correctly

## 📞 Support

For questions or issues:
- **WhatsApp**: +254 728 615 795
- **Email**: swiftgomotorhome@gmail.com
- **TikTok**: @swiftgomotorhouse

## 📄 License

This project is proprietary to SwiftGo MotorHub. All rights reserved.

## 🚀 Future Enhancements

- Backend API integration
- User authentication
- Admin dashboard
- Car inventory management
- Financing calculator
- Testimonials section
- Blog section
- Advanced search filters
- Email notifications
- Payment gateway integration

---

**Created**: July 2026  
**Tagline**: Drive Your Passion, We Deliver Excellence  
**© SwiftGo MotorHub. All rights reserved.**
