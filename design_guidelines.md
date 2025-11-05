# Personal Portfolio Design Guidelines

## Design Approach
**Reference-Based**: Inspired by Brittany Chiang's portfolio and GitHub's interface - characterized by developer-focused aesthetics, minimalist layouts, monospace typography accents, and sophisticated scroll animations.

## Color Palette
- **Primary**: #0A192F (Navy) - Main background sections
- **Background**: #020C1B (Dark Navy) - Deeper background areas
- **Secondary/Accent**: #64FFDA (Teal) - CTAs, links, highlights
- **Text Primary**: #CCD6F6 (Light Slate) - Headings, primary content
- **Text Secondary**: #8892B0 (Slate) - Body text, descriptions
- **Highlight**: #FFFFFF (White) - Emphasis text, hover states

## Typography System
**Font Stack**:
- Headings: Inter (600-700 weight)
- Body: Inter (400-500 weight)  
- Code/Tech Labels: SF Mono or Fira Code (monospace accent)

**Hierarchy**:
- Hero Title: 4xl-6xl, font-bold, tracking-tight
- Section Headings: 3xl-4xl, font-semibold
- Project Titles: xl-2xl, font-semibold
- Body Text: base-lg, font-normal, leading-relaxed
- Labels/Tags: sm-base, monospace font

## Layout System
**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
**Container**: max-w-6xl centered with px-6 to px-8 padding
**Section Padding**: py-20 to py-32 on desktop, py-12 to py-16 on mobile

## Core Sections

### Hero Section
Full viewport height (min-h-screen) with left-aligned content, no background image. Features animated text introduction with typing effect or fade-in sequence. Include professional tagline, brief one-liner, and prominent CTA button. Numbered prefix style (e.g., "01. Hi, my name is...") for Brittany Chiang aesthetic.

### About Section
Two-column layout (desktop): Left side with professional summary paragraph, right side with headshot image (rounded or subtle border). Below: Skills showcase using pill-shaped tags grouped by category (Languages, Frameworks, Tools). Monospace font for tech stack items.

### Projects Gallery
Grid layout: 1 column mobile, 2 columns tablet, 2-3 columns desktop. Each project card features:
- Thumbnail image (16:9 ratio)
- Featured badge for key projects
- Project title with teal accent on hover
- 2-3 line description
- Tech stack tags (monospace, small size)
- Links to GitHub + Live Demo (icon buttons)
- Subtle border with hover elevation effect

Featured projects can use alternate layout: Image on one side, content overlay or adjacent.

### Contact Section
Centered layout with heading "Get In Touch" and paragraph encouraging outreach. Large primary CTA button for email. Below: horizontal row of social icons (LinkedIn, GitHub, Twitter) with hover teal color transition. Simple, minimal - no complex form initially.

## Component Library

**Buttons**: 
- Primary: Teal border (2px), teal text, transparent background, px-8 py-4, hover: teal background with navy text
- Text Links: Slate color, teal underline on hover, smooth transition

**Cards**: 
- Background: Slightly lighter navy (#112240)
- Border: 1px slate with low opacity
- Hover: Subtle lift (translate-y-1) + glow effect
- Padding: p-6 to p-8

**Navigation**:
Fixed header with logo/name left, nav links right. Blur background on scroll. Mobile: Hamburger menu with slide-in drawer. Nav links numbered (01. About, 02. Work, 03. Contact). Resume button with border style.

**Section Numbers**: Small monospace teal numbers preceding section headings (aesthetic from Brittany Chiang's design)

## Animations
**Scroll Animations**: Fade-up on scroll for sections and project cards (stagger children)
**Hover Effects**: 
- Project cards: Translate up + shadow increase
- Links: Color shift to teal with smooth transition
- Tech tags: Subtle scale on hover

**Cursor**: Custom teal dot follower cursor (optional enhancement)

Keep animations subtle - duration 300-500ms, easing "ease-out"

## Images
**Hero**: No image - text-focused introduction
**About**: Professional headshot (400x400px, rounded or subtle border)
**Projects**: Each project needs thumbnail (1200x675px recommended, 16:9 ratio)

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2 columns for projects)
- Desktop: > 1024px (full multi-column layouts)

Mobile-first approach: Design for mobile, enhance for larger screens.

## Accessibility
- Maintain 4.5:1 contrast ratio (light slate on navy backgrounds meets this)
- Focus states: Teal outline for keyboard navigation
- Semantic HTML with proper heading hierarchy
- Alt text for all images