# Charlie Trotter Photography

A modern, visually appealing Next.js website for a professional photography business.

## Features

- **Modern Design**: Clean, responsive design using Tailwind CSS
- **Hero Section**: Eye-catching landing with call-to-action buttons
- **Services Section**: Comprehensive photography services showcase
- **Gallery**: Interactive photo gallery with lightbox and category filtering
- **About Section**: Professional bio and statistics
- **Contact Form**: Functional contact form with validation
- **Responsive Navigation**: Mobile-friendly navigation with smooth scrolling
- **SEO Optimized**: Proper meta tags and semantic HTML

## Technology Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Next.js Image**: Optimized image handling
- **Resend**: Email delivery service for contact form
- **Zod**: Schema validation for form data
- **ImageKit**: Image optimization and delivery

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key_here
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key_here
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Homepage component
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services showcase
│   ├── Gallery.tsx      # Photo gallery with lightbox
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
└── lib/                 # Utility functions
```

## Customization

### Colors
The primary color scheme is defined in `tailwind.config.js`. You can customize the colors by modifying the `primary` color palette.

### Images
Replace the placeholder images in the components with your actual photography work. Update the image URLs in:
- `Hero.tsx` - Background hero image
- `About.tsx` - Professional portrait
- `Gallery.tsx` - Portfolio images

### Contact Information
Update your contact details in `Contact.tsx` and `Footer.tsx`:
- Email address
- Phone number
- Social media links
- Business address

### Services
Modify the services array in `Services.tsx` to match your specific photography offerings.

## Features Included

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions

### Interactive Elements
- Smooth scroll navigation
- Hover effects and transitions
- Lightbox gallery with navigation
- Form validation and submission feedback

### Performance
- Next.js Image optimization
- Lazy loading for images
- Minimal JavaScript bundle
- SEO-friendly structure

## Deployment

This website can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean**

## License

This project is open source and available under the [MIT License](LICENSE).
