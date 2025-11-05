# 🌟 Sakshi Aryal - Professional Physiotherapist Portfolio

A stunning, modern, and responsive portfolio website for Sakshi Aryal, a professional physiotherapist with over 4 years of experience.

## ✨ Features

### Design
- **Premium Modern Design** - Clean, elegant, and professional aesthetic
- **Responsive Layout** - Perfect display on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Fade-in effects, scroll reveals, and typing animations
- **Professional Color Scheme** - Deep blue, soft purple, and white for a trustworthy vibe

### Sections
1. **Hero Section** - Full-screen introduction with animated typing effect
2. **About Section** - Detailed bio, qualifications, and core competencies
3. **Services Section** - 6 specialized service cards with hover effects
4. **Experience & Education** - Interactive timeline with tab navigation
5. **Testimonials** - Client feedback with ratings and photos
6. **Contact Section** - Functional form with validation + Google Maps
7. **Footer** - Social links and additional information

### Functionality
- ✅ Sticky navigation with scroll effect
- ✅ Smooth scrolling to sections
- ✅ Mobile-responsive hamburger menu
- ✅ Typing animation in hero section
- ✅ Animated statistics counters
- ✅ Form validation with error handling
- ✅ Scroll-to-top button
- ✅ Active navigation highlighting
- ✅ Parallax effects
- ✅ Download resume functionality

## 🚀 Quick Start

### Option 1: Open Locally
1. Open `index.html` in your web browser
2. That's it! The website is ready to use

### Option 2: Live Server (Recommended for Development)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. The website will open in your browser with hot reload

### Option 3: Deploy to GitHub Pages
1. Create a new repository on GitHub
2. Push these files to the repository:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "main" branch and save
5. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## 📁 File Structure

```
Sakshi Aryal/
│
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling
├── app.js             # JavaScript functionality
├── resume.pdf         # Downloadable resume (replace with actual)
└── README.md          # This file
```

## 🎨 Customization Guide

### Update Personal Information

#### 1. Hero Section (`index.html` line ~70)
```html
<h1 class="hero-title">
    <span class="name">Sakshi Aryal</span>
</h1>
```

#### 2. Contact Information (`index.html` line ~900)
```html
<a href="tel:+61412345678">+61 412 345 678</a>
<a href="mailto:sakshi.aryal@physio.com">sakshi.aryal@physio.com</a>
```

#### 3. Social Media Links (`index.html` line ~950)
```html
<a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank">
```

### Change Colors

Edit the CSS variables in `styles.css` (line ~10):
```css
:root {
    --primary-color: #4A5FBF;      /* Main brand color */
    --secondary-color: #8B5CF6;     /* Accent color */
    --accent-color: #EC4899;        /* Highlight color */
}
```

### Update Images

Replace placeholder image URLs in `index.html`:
- Hero section: Line ~100
- About section: Line ~200
- Testimonials: Lines ~700-800

### Modify Services

Edit service cards in `index.html` starting at line ~300:
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-YOUR-ICON"></i>
    </div>
    <h3 class="service-title">Your Service Name</h3>
    <p class="service-description">Your description</p>
</div>
```

### Add/Update Experience

Timeline items are in `index.html` starting at line ~500:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <!-- Your experience details -->
    </div>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Dependencies

- **Google Fonts** - Poppins font family
- **Font Awesome 6.4.0** - Icons throughout the site
- **No JavaScript frameworks** - Pure vanilla JS

All dependencies are loaded via CDN, so no installation required!

## ✅ Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📝 Form Integration

The contact form currently has client-side validation only. To make it functional:

### Option 1: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form in `index.html`:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their integration guide
3. Update the JavaScript in `app.js`

### Option 3: Backend Server
Create your own backend with Node.js, PHP, or Python to handle form submissions.

## 🎯 SEO Optimization

The website includes:
- ✅ Semantic HTML structure
- ✅ Meta descriptions
- ✅ Alt text for images
- ✅ Fast loading times
- ✅ Mobile-first responsive design

### Additional SEO Steps:
1. Add a `sitemap.xml`
2. Add a `robots.txt`
3. Set up Google Analytics
4. Submit to Google Search Console

## 🚀 Performance Tips

1. **Compress Images** - Use tools like TinyPNG before uploading
2. **Minify CSS/JS** - Use online tools for production
3. **Enable Caching** - Configure server headers
4. **Use CDN** - For faster global delivery

## 🔒 Security Considerations

- Replace placeholder contact information
- Use HTTPS for production
- Sanitize form inputs on server-side
- Keep dependencies updated

## 📞 Support & Contact

For questions or customization help:
- **Email**: sakshi.aryal@physio.com
- **LinkedIn**: [Sakshi Aryal](https://linkedin.com)

## 📄 License

This portfolio template is created for Sakshi Aryal. Feel free to use and modify as needed.

## 🙏 Credits

- **Design & Development**: Custom built for Sakshi Aryal
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)
- **Images**: Unsplash (placeholders - replace with your own)

---

**Made with ❤️ for better health and wellness**

*Last updated: November 2025*
