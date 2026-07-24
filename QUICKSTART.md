# 🚀 SwiftGo MotorHub - Quick Start Guide

Get your marketing website live in minutes!

## ⚡ 5-Minute Quick Start

### Step 1: Add Your Logo (1 min)
1. Save your logo as `logo.png`
2. Place it in the root directory of the project
3. The logo will automatically appear in the navigation bar

### Step 2: Update Contact Information (2 min)

**Edit `index.html`:**

Search for and replace:
- Line 520: Replace phone number `+254728615795` with your WhatsApp number
- Line 530: Replace email `swiftgomotorhome@gmail.com` with your email
- Line 549: Update TikTok URL
- Line 551: Update Facebook URL

**Edit `script.js`:**

Search for line ~80 and replace the WhatsApp number:
```javascript
const whatsappLink = `https://wa.me/YOUR_NUMBER_HERE?text=...`;
```

### Step 3: Deploy to the Web (2 min)

Choose one of these options:

#### Option A: GitHub Pages (Fastest - Free)
1. Your code is already on GitHub
2. Go to **Settings** → **Pages**
3. Select **Deploy from a branch**
4. Choose `main` branch
5. Your site will be live at: `https://swiftgomotorhome-byte.github.io/swiftgo-motorhub/`

#### Option B: Netlify (Easy - Free)
1. Go to [netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Connect your GitHub repository
4. Click **Deploy**
5. Your site will be live in 1 minute

#### Option C: Vercel (Fast - Free)
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository
4. Click **Deploy**
5. Your site will be live instantly

#### Option D: Traditional Web Hosting
1. Download all files from GitHub
2. Upload to your web hosting via FTP
3. Set `index.html` as the home page

---

## 📋 What's Included

✅ Professional home page with hero section  
✅ Corporate introduction  
✅ 6 services showcased  
✅ Featured vehicles gallery (6 sample cars)  
✅ Car upload form for owners  
✅ Contact form  
✅ WhatsApp integration  
✅ Mobile-responsive design  
✅ Social media links  
✅ Complete documentation  

---

## 🎨 Customization

### Change Colors
Edit `styles.css` lines 6-13:
```css
:root {
    --primary-color: #dc2626;      /* Your brand red */
    --secondary-color: #000000;    /* Your brand black */
    --accent-color: #1f2937;
    /* ... more colors ... */
}
```

### Update Company Info
Edit `config.json`:
```json
{
  "company": {
    "name": "SwiftGo MotorHub",
    "tagline": "Your tagline here",
    "description": "Your description here"
  },
  "contact": {
    "phone": "+254XXXXXXXXX",
    "email": "your@email.com"
  }
}
```

### Add/Remove Services
Edit `config.json` in the `services` array:
```json
{
  "id": "new-service",
  "name": "Service Name",
  "icon": "fa-icon-name",
  "description": "Service description"
}
```

### Update Sample Cars
Edit `config.json` in the `sampleCars` array or edit `script.js` lines 30-65.

---

## 📱 Testing

### Test on Desktop
1. Open `index.html` in your browser
2. Click through all sections
3. Test forms and WhatsApp links

### Test on Mobile
1. Use Chrome DevTools (F12)
2. Click device toggle (mobile view)
3. Test mobile menu
4. Test form submission

### Test WhatsApp
1. Click "Inquire" on any car
2. Should open WhatsApp with pre-filled message
3. Verify the message format

---

## 🔧 Common Customizations

### Change Logo Position
Edit `index.html` line 11:
```html
<img src="logo.png" alt="Your Logo" class="logo-img">
```

### Add Your Address
Edit `index.html` around line 520:
```html
<h4>Address</h4>
<p>Your Street, Your City, Kenya</p>
```

### Change Working Hours
Edit `index.html` line 541:
```html
<p>Monday - Sunday: 8:00 AM - 8:00 PM</p>
```

### Add More Cars
Edit `script.js` lines 30-65:
```javascript
{
    id: 7,
    make: 'Your Make',
    model: 'Your Model',
    year: 2024,
    price: 3000000,
    mileage: 5000,
    transmission: 'Automatic'
}
```

---

## 🌐 Domain Setup

### Connect Your Own Domain

**For GitHub Pages:**
1. Buy domain from GoDaddy, Namecheap, etc.
2. Go to GitHub repository **Settings** → **Pages**
3. Under "Custom domain", enter your domain
4. Follow DNS setup instructions

**For Netlify:**
1. Buy domain
2. Go to Netlify Site Settings → Domain Management
3. Add custom domain
4. Update DNS settings at registrar

**For Vercel:**
1. Buy domain
2. Go to Vercel Project Settings → Domains
3. Add domain
4. Update DNS at registrar

---

## 📊 Analytics Setup

Add Google Analytics to track visitors:

1. Sign up at [analytics.google.com](https://analytics.google.com)
2. Create a new property
3. Get your Measurement ID (looks like: `G-XXXXXXXXXX`)
4. Add this to `index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔐 Security Tips

✅ Use HTTPS (all hosting options provide this)  
✅ Keep backups of your files  
✅ Monitor WhatsApp messages for inquiries  
✅ Validate form submissions  
✅ Never store passwords in the code  

---

## 🆘 Troubleshooting

### Issue: Logo not showing
**Solution:**
- Make sure `logo.png` is in the root directory
- Use a PNG or JPG format
- File size should be under 500KB

### Issue: WhatsApp links not working
**Solution:**
- Verify phone number includes country code (+254)
- Test on a device with WhatsApp installed
- Try WhatsApp Web on desktop

### Issue: Mobile menu not working
**Solution:**
- Clear browser cache
- Try a different browser
- Check JavaScript console for errors

### Issue: Forms not submitting
**Solution:**
- Check all required fields are filled
- Verify WhatsApp is accessible
- Try on a different device

### Issue: Website looks broken on mobile
**Solution:**
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Clear cache and cookies
- Try a different browser

---

## 📈 Next Steps (After Launch)

1. **Share on Social Media**
   - Post the link on TikTok
   - Share on Facebook
   - Tell customers to visit

2. **Add More Features**
   - Car comparison tool
   - Financing calculator
   - Customer testimonials
   - Blog section

3. **Get More Traffic**
   - SEO optimization
   - Google Ads
   - Social media marketing
   - Local business listings

4. **Setup Backend (Optional)**
   - Database for car listings
   - User authentication
   - Admin dashboard
   - Email notifications

---

## 📞 Support

Need help?
- **WhatsApp**: +254 728 615 795
- **Email**: swiftgomotorhome@gmail.com
- **Check README.md** for detailed documentation

---

## ✨ Pro Tips

💡 **Update car listings frequently** - Fresh content keeps visitors coming back  
💡 **Monitor WhatsApp messages** - Respond quickly to inquiries  
💡 **Post on social media** - Share your website link with your TikTok & Facebook followers  
💡 **Keep contact info updated** - Ensure customers can reach you  
💡 **Add customer testimonials** - Build trust with social proof  
💡 **Use high-quality car images** - Good photos increase inquiries  

---

## 🎉 You're Ready!

Your professional car sales website is ready to go live. 

**Next action:** Deploy to the web using one of the methods above.

**Questions?** Check the README.md file for detailed information.

---

**Drive Your Passion, We Deliver Excellence** 🚗  
© SwiftGo MotorHub
