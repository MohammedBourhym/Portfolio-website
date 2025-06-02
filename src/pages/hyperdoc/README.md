# Hyperdoc Page - Personal Link Directory

## Overview
The hyperdoc page is a modern bento-style grid layout that showcases your profile information and important links in one visually appealing page. It's designed to be accessed only via a direct URL.

## Features
- **Profile Card**: Displays your profile picture, name, role, and a brief description
- **Bento Grid Layout**: Modern card-based UI with cards of varying sizes and shapes
- **Tech Stack Display**: Shows your technical skills with icons
- **Responsive Design**: Adapts beautifully to different screen sizes
- **Interactive Cards**: Hover effects and smooth transitions

## How to Access
This page is designed to be private and only accessible via direct link:
```
https://yourdomain.com/hyperdoc
```

## Customization
You can easily customize the page by modifying `/src/pages/hyperdoc.astro`:

1. **Links**: Update the URLs for each card to point to your specific resources
2. **Card Content**: Modify the title, icon, and description for each card
3. **Card Layout**: Change the grid span values to adjust card sizes and positions
4. **Card Appearance**: Modify the gradient backgrounds and colors
5. **Add/Remove Cards**: Add new sections or remove existing ones based on your needs

## Card Configuration
Each card in the bento grid uses these properties:
- `col-span-X`: Controls the width (X columns)
- `row-span-X`: Controls the height (X rows)
- `from-[color]/10 to-[color]/10`: Sets the gradient background
- Icons are selected from your icons directory

## Adding New Cards
To add a new card, copy an existing card element and modify:
1. The URL (`href` attribute)
2. The column and row span values
3. The title and description
4. The icon
5. The background gradient colors
