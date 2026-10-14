# Algorithm Website

A two-page mobile-first website faithfully coded from a Figma design.

## Pages

- **Home** (`#page-home`) — B&W pixelated satellite-map texture background with `UPGRADE HUMAN` headline and `PRAY` CTA button
- **Deity_1** (`#page-deity`) — Dark neon-red glitch art page with skeleton/street art imagery, red rectangle block, rotating quote card, live green ticker, and `PRAY` link back

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JS — no frameworks, zero dependencies
- Scroll-snap between pages
- CSS animations: glitch scan lines, diagonal neon-red overlays, flicker on PRAY images
- Live JS ticker counter on Deity page

## GitHub Pages Deployment

### Option A — GitHub CLI (recommended)

```bash
cd /Users/patrickhebbel/.gemini/antigravity/scratch/algorithm-website
git init
git add .
git commit -m "Initial commit: Algorithm website from Figma"
gh repo create algorithm-website --public --source=. --remote=origin --push
# Then in GitHub repo Settings → Pages → Branch: main, folder: / (root)
```

### Option B — Manual

1. Create a new repo at https://github.com/new (name it `algorithm-website`)
2. Run:
   ```bash
   cd /Users/patrickhebbel/.gemini/antigravity/scratch/algorithm-website
   git init
   git remote add origin https://github.com/YOUR_USERNAME/algorithm-website.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```
3. Go to **Settings → Pages** → set source to `main` branch, root folder
4. Your site will be live at `https://YOUR_USERNAME.github.io/algorithm-website/`

## Project Structure

```
algorithm-website/
├── index.html          ← Main HTML (both pages)
├── style.css           ← All styles + animations
├── script.js           ← Interactivity (ticker, nav dots, glitch)
└── images/             ← All assets from Figma (16 images)
    ├── deity1_bg.png
    ├── deity1_overlay.png
    ├── pixels2.png
    ├── glitch2.png
    ├── asterisk.png
    ├── pray_text.png
    ├── insta_icon.png
    ├── menu_icon.png
    ├── inversion_life.png
    └── ...
```
