# Nothing.tech Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts (Space Grotesk, Space Mono, Inter) |

## 2. Tailwind Configuration

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        'nothing-black': '#000000',
        'nothing-white': '#FFFFFF',
        'nothing-gray': '#666666',
        'nothing-border': '#E5E5E5',
        'nothing-accent': '#FF0000',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'dot-matrix': '0.15em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)
- Button (customized: rounded-full, mono font)
- Sheet (for mobile menu)
- Accordion (for FAQ)
- Input (for search)
- Separator

### Custom Components

#### Layout Components
| Component | Props | Description |
|-----------|-------|-------------|
| `Navbar` | `onMenuOpen: () => void` | Fixed header with logo and menu trigger |
| `FullScreenMenu` | `isOpen: boolean, onClose: () => void` | Overlay navigation menu |
| `DottedGrid` | `variant: 'light' \| 'dark'` | Background pattern component |
| `Footer` | - | Site footer with links |

#### Section Components
| Component | Props | Description |
|-----------|-------|-------------|
| `HeroSection` | - | Phone 4a Pro hero with floating card |
| `ProductSection` | `product: ProductData` | Reusable product showcase section |
| `Phone4aSection` | - | Phone 4a collection display |
| `Phone3aSection` | - | Phone 3a with dark background |
| `HeadphonesSection` | - | Headphones showcase |
| `Phone3aLiteSection` | - | Phone 3a Lite display |
| `SupportPage` | - | Full support page content |

#### UI Components
| Component | Props | Description |
|-----------|-------|-------------|
| `ProductCard` | `title, productName, cta, image, thumbnail` | Floating info card |
| `PixelText` | `children, className` | Dot-matrix style text |
| `AnimatedImage` | `src, alt, className, delay` | Image with scroll animation |

### Types
```typescript
interface ProductData {
  id: string;
  headline: string;
  productName: string;
  ctaText: string;
  ctaLink: string;
  mainImage: string;
  thumbnailImage?: string;
  bgVariant: 'light' | 'dark';
}

interface NavItem {
  label: string;
  href: string;
}

interface FAQItem {
  question: string;
  answer: string;
}
```

## 4. Animation Implementation Plan

| Interaction | Tech Choice | Implementation |
|-------------|-------------|----------------|
| Page Load Sequence | Framer Motion | `AnimatePresence` + staggered `motion.div` with initial/animate states |
| Hero Product Reveal | Framer Motion | `scale: 0.95 → 1`, `opacity: 0 → 1`, duration 0.8s, ease `[0.16, 1, 0.3, 1]` |
| Card Slide Up | Framer Motion | `y: 20 → 0`, `opacity: 0 → 1`, duration 0.6s, delay 0.4s |
| Menu Open/Close | Framer Motion + Sheet | Fade + scale animation, 300ms open, 200ms close |
| Menu Items Stagger | Framer Motion | `staggerChildren: 0.05`, each item slides up |
| Scroll Parallax | Framer Motion `useScroll` | `useTransform` to map scrollY to translateY with different multipliers |
| Section Reveal | Framer Motion `whileInView` | `opacity: 0 → 1`, `y: 40 → 0`, viewport once: true |
| Product Hover | Tailwind + Framer | `whileHover: { scale: 1.03 }`, transition 400ms |
| Button Hover | Tailwind | `hover:scale-[1.02]`, `transition-transform duration-150` |
| Card Hover | Tailwind | `hover:-translate-y-1 hover:shadow-lg`, `transition-all duration-300` |
| Floating Animation | CSS Keyframes | `animate-float` class for headphones |
| Dotted Grid | CSS | Background pattern using radial-gradient |
| Link Hover | Tailwind | `hover:opacity-70 transition-opacity duration-200` |

### Animation Timing Reference
```typescript
const ANIMATION_CONFIG = {
  easing: {
    smooth: [0.16, 1, 0.3, 1],
    bounce: [0.34, 1.56, 0.64, 1],
    out: [0, 0, 0.2, 1],
  },
  duration: {
    micro: 0.15,
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  stagger: {
    menu: 0.05,
    sections: 0.1,
    products: 0.1,
  },
};
```

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/
│       ├── hero-phones.jpg
│       ├── phones-collection.jpg
│       ├── phone-3a.jpg
│       ├── headphones.jpg
│       ├── phones-floating.jpg
│       └── phone-black.jpg
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── FullScreenMenu.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── DottedGrid.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Phone4aSection.tsx
│   │   │   ├── Phone3aSection.tsx
│   │   │   ├── HeadphonesSection.tsx
│   │   │   └── Phone3aLiteSection.tsx
│   │   └── shared/
│   │       ├── ProductCard.tsx
│   │       ├── PixelText.tsx
│   │       └── AnimatedImage.tsx
│   ├── hooks/
│   │   └── useScrollProgress.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── animations.ts
│   ├── types/
│   │   └── index.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Support.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 6. Package Installation

```bash
# Initialize project
bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "Nothing.tech"

# Install animation library
npm install framer-motion

# Install fonts (via Google Fonts in index.html)
# Space Grotesk, Space Mono, Inter
```

## 7. Key Implementation Notes

### Dotted Grid Background
```css
.dotted-grid-light {
  background-image: radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px);
  background-size: 40px 40px;
}

.dotted-grid-dark {
  background-image: radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

### Pixel Text Effect
```css
.pixel-text {
  font-family: 'Space Mono', monospace;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  /* Optional: add text-shadow for glow effect */
}
```

### Product Card Glassmorphism
```css
.product-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}
```

### Scroll-linked Animation Pattern
```typescript
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"]
});

const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
```

## 8. Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | < 640px | Single column, stacked layout, smaller text |
| Tablet | 640-1024px | Two columns where applicable |
| Desktop | > 1024px | Full layout as designed |

## 9. Performance Considerations

1. **Images**: Use `loading="lazy"` for below-fold images
2. **Animations**: Use `transform` and `opacity` only
3. **Will-change**: Apply to elements with complex animations
4. **Reduced Motion**: Respect `prefers-reduced-motion` media query
5. **Font Loading**: Use `font-display: swap` for custom fonts
