# Shivam Kumar - Portfolio Website

A modern, responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion. Features a clean design with dark/light mode, smooth animations, and a fully functional contact form.

![Portfolio Preview](./public/og-image.jpg)

## 🚀 Features

- **Modern Design**: Clean, professional UI with burnt orange accent color
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop
- **Contact Form**: Integrated with EmailJS for serverless email functionality
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards included
- **Performance**: Fast loading with Vite build system
- **Accessibility**: Semantic HTML and proper ARIA labels

## 📁 Project Structure

```
shivam_portfolio/
├── public/
│   ├── favicon.svg          # SK favicon
│   ├── Shivam_image.jpg     # Profile photo (add your own)
│   ├── Resume_SHIVAM KUMAR.pdf  # Resume (add your own)
│   └── og-image.jpg         # Social share image (add your own)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with dark mode toggle
│   │   ├── Hero.jsx         # Landing section with typing effect
│   │   ├── About.jsx        # About section with stats
│   │   ├── Experience.jsx   # Timeline with expandable cards
│   │   ├── Projects.jsx     # Project cards grid
│   │   ├── Skills.jsx       # Skills categories
│   │   ├── Awards.jsx       # Awards & certifications
│   │   ├── Contact.jsx      # Contact form with EmailJS
│   │   ├── Footer.jsx       # Footer with links
│   │   ├── LoadingScreen.jsx # Initial loading animation
│   │   └── NotFound.jsx     # 404 page
│   ├── styles/
│   │   └── globals.css      # Tailwind and custom styles
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
   ```powershell
   cd c:\shivam_portfolio
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Add your assets to the `public` folder:**
   - `Shivam_image.jpg` - Your profile photo
   - `Resume_SHIVAM KUMAR.pdf` - Your resume PDF
   - `og-image.jpg` - Social sharing image (1200x630px recommended)

4. **Start the development server:**
   ```powershell
   npm run dev
   ```

5. **Open your browser:**
   The site will be available at `http://localhost:3000`

## 📧 Setting Up EmailJS

To enable the contact form:

1. **Create an account** at [EmailJS](https://www.emailjs.com/)

2. **Create an Email Service:**
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Note your **Service ID**

3. **Create an Email Template:**
   - Go to Email Templates → Create New Template
   - Use these variables in your template:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Note your **Template ID**

4. **Get your Public Key:**
   - Go to Account → General
   - Copy your **Public Key**

5. **Update the Contact component:**
   Open `src/components/Contact.jsx` and replace:
   ```javascript
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID',     // Replace with your Service ID
     'YOUR_TEMPLATE_ID',    // Replace with your Template ID
     formRef.current,
     'YOUR_PUBLIC_KEY'      // Replace with your Public Key
   );
   ```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#C8521A',  // Main accent color
    // ... other shades
  },
  cream: {
    DEFAULT: '#F9F6F1',  // Light background
  },
  dark: {
    DEFAULT: '#1A1714',  // Dark background
  },
}
```

### Fonts

Fonts are loaded from Google Fonts in `index.html`:
- **Headings**: DM Serif Display
- **Body**: DM Sans

### Content

Update the content in each component file:
- Personal info in `Hero.jsx` and `About.jsx`
- Work history in `Experience.jsx`
- Projects in `Projects.jsx`
- Skills in `Skills.jsx`
- Awards/Certs in `Awards.jsx`

## 🏗️ Building for Production

```powershell
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```powershell
npm run preview
```

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```powershell
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```powershell
   vercel login
   ```

3. **Deploy:**
   ```powershell
   vercel
   ```
   Follow the prompts to complete deployment.

4. **Deploy to production:**
   ```powershell
   vercel --prod
   ```

### Option 2: Deploy via Vercel Website

1. **Push your code to GitHub:**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

3. **Import your repository:**
   - Click "Add New..." → "Project"
   - Select your repository
   - Vercel will auto-detect it as a Vite project

4. **Configure (optional):**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Deploy!**
   Click "Deploy" and wait for the build to complete.

### Connecting a Custom Domain

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `shivamkumar.dev`)
4. Follow Vercel's instructions to configure DNS:
   - **Option A**: Point your domain's nameservers to Vercel
   - **Option B**: Add a CNAME record pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (can take up to 48 hours)
6. SSL certificate is automatically provisioned

## 📱 Google Analytics Setup

1. Create a property in [Google Analytics](https://analytics.google.com)
2. Get your Measurement ID (starts with `GA_`)
3. Replace `GA_TRACKING_ID` in `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
   <script>
     gtag('config', 'YOUR_GA_ID');
   </script>
   ```

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading:**
   - Ensure images are in the `public` folder
   - Check file names match exactly (case-sensitive)

2. **EmailJS not working:**
   - Verify all three credentials are correct
   - Check browser console for errors
   - Ensure template variables match form field names

3. **Styles not applying:**
   - Clear browser cache
   - Run `npm run dev` to rebuild

4. **Build fails:**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Shivam Kumar**
- Email: shivamee1997@gmail.com
- LinkedIn: [shivam-kumar-ab53b4193](https://www.linkedin.com/in/shivam-kumar-ab53b4193/)
- Location: Gurugram, India

---

Built with ❤️ and AI
