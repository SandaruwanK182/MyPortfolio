# Portfolio Website - M.A.G. Sandaruwan

A modern, responsive portfolio website for M.A.G. Sandaruwan, a Backend Developer specializing in Java, Spring Boot, REST APIs, and databases.

## 🌟 Features

- **Modern Design**: Glassmorphism UI with dark theme and gradient accents
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Navigation**: Fixed navigation with active section highlighting
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Detailed project cards with tech stack badges
- **Skills Visualization**: Progress bars and categorized skill display
- **Timeline**: Education and experience timeline

## 🚀 Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite 7.1.2
- **Package Manager**: npm

## 📋 Sections

### 🏠 Hero Section
- Personal introduction with animated background
- Profile image with neon glow effect
- Call-to-action buttons (Download CV, View Projects)
- Smooth scroll indicators

### 👤 About Me
- Personal story and background
- Personal information cards
- Professional goals and motivations

### ⚙️ Skills
- Categorized technical skills:
  - Languages & Frameworks (Java, Spring Boot, Spring Security, REST APIs)
  - Databases (MySQL, MongoDB, PostgreSQL, Redis)
  - Tools & DevOps (Git, Docker, GitHub Actions, AWS/Azure)
  - Computer Science (Data Structures, Algorithms, Problem Solving)
- Progress bars with percentage indicators
- Additional technologies tags

### 📂 Projects
- Featured project showcase:
  - Binary Options Trading Bot (Deriv)
  - VidyaConnect - Online School Management System
  - Solid Waste Management Research Website
- 3D glassmorphism cards with hover effects
- Tech stack badges and project links

### 🎓 Experience/Education
- Timeline layout with:
  - Bachelor of Software Engineering (Honours) - Open University of Sri Lanka
  - Backend Development Specialization
  - Open Source Contributions
- Current goals and aspirations

### 📬 Contact
- Contact form with validation
- Direct contact information
- Social media links
- Availability status

### ⚡ Footer
- Copyright information
- Social media icons
- Back to top functionality

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Fixed navigation with mobile menu
│   ├── Hero.jsx         # Hero section with introduction
│   ├── About.jsx        # About me section
│   ├── Skills.jsx       # Skills showcase
│   ├── Projects.jsx     # Project portfolio
│   ├── Experience.jsx   # Education & experience timeline
│   ├── Contact.jsx      # Contact form and information
│   └── Footer.jsx       # Footer with social links
├── App.jsx              # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The design uses a dark theme with cyan/blue accents. Main colors:
- Background: `bg-gradient-to-b from-gray-900 via-black to-gray-950`
- Accent: `from-cyan-500 to-blue-600`
- Cards: `bg-gray-900/60 backdrop-blur-lg`

### Fonts
- Primary: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700

### Animations
- Entry animations with staggered delays
- Hover effects on cards and buttons
- Smooth scroll behavior
- Background particle animations

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Responsive layout for tablets (768px+)
- **Desktop**: Full featured desktop experience (1024px+)
- **Large screens**: Enhanced spacing and layout (1280px+)

## 🔧 Configuration

### Environment Variables
No environment variables required for basic setup.

### Customizing Content
Update the following files to customize content:
- Personal information in `About.jsx`
- Skills and percentages in `Skills.jsx`
- Project details in `Projects.jsx`
- Education/experience in `Experience.jsx`
- Contact information in `Contact.jsx`

### Adding Your CV
Replace the placeholder file at `public/cv.pdf` with your actual CV.

### Profile Images
Add your profile image to the `public` folder and update the image paths in:
- `Hero.jsx`
- `About.jsx`

## 🚀 Deployment

The project can be deployed on various platforms:

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect Vite and deploy

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add deploy script to `package.json`
3. Run: `npm run deploy`

## 📧 Contact Form Setup

The contact form currently shows a demo alert. To make it functional:

1. **Using EmailJS**:
   - Install: `npm install emailjs-com`
   - Set up EmailJS service
   - Update the form submission handler

2. **Using Netlify Forms**:
   - Add `data-netlify="true"` to the form
   - Deploy to Netlify

3. **Custom Backend**:
   - Create an API endpoint
   - Update the form submission handler

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**M.A.G. Sandaruwan**
- Email: sandaruwank182@gmail.com
- GitHub: [github.com/sandaruwan](https://github.com)
- LinkedIn: [linkedin.com/in/sandaruwan](https://linkedin.com)

---

Made with ❤️ using React, Tailwind CSS, and Framer Motion+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
