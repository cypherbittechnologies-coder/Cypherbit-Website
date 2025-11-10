# Cypherbit Website

This is the website codebase for Cypherbit Technologies.

## Project Structure

- `src/` - Source code
  - `components/` - Reusable React components
  - `pages/` - Page components
  - `assets/` - Images and other static assets

## Image Assets

The project currently uses Figma-hosted images via their asset API. These are defined as constants in the respective components:

- `Home.jsx` - Hero images, project screenshots, and testimonial photos
- `About.jsx` - Team member photos and section backgrounds
- `Footer.jsx` - Logo and other UI elements

### Moving Images to Local Assets

To move Figma-hosted images to local assets:

1. Download the images from Figma
2. Place them in `src/assets/`
3. Update the image constants in components to use local imports:

```jsx
// Before
const imgTestimonial1 = 'https://www.figma.com/api/mcp/asset/...';

// After
import testimonial1 from '../assets/testimonial1.jpg';
const imgTestimonial1 = testimonial1;
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## License

Copyright © 2025 Cypherbit Technologies. All rights reserved.