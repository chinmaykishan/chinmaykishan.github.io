# How to Upload Nothing.tech Website to GitHub

## Option 1: Upload Source Code (Recommended for Development)

This uploads the full React project so you can continue developing.

### Step 1: Create a GitHub Repository
1. Go to https://github.com and sign in
2. Click the "+" button in the top right → "New repository"
3. Name it: `nothing-tech-website` (or any name you prefer)
4. Choose "Public" or "Private"
5. Click "Create repository"

### Step 2: Initialize Git and Push

Open terminal/command prompt and run these commands:

```bash
# Navigate to the project folder
cd /mnt/okcomputer/output/app

# Initialize git
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit - Nothing.tech website clone"

# Connect to your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/nothing-tech-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Option 2: Upload Only the Built Website (For GitHub Pages)

This uploads only the `dist` folder for hosting on GitHub Pages.

### Step 1: Create a GitHub Repository
1. Go to https://github.com and sign in
2. Create a new repository named: `nothing-tech-website`
3. Make it "Public"
4. Click "Create repository"

### Step 2: Push Only the Dist Folder

```bash
# Navigate to the dist folder
cd /mnt/okcomputer/output/app/dist

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Deploy Nothing.tech website"

# Connect to GitHub
git remote add origin https://github.com/YOUR_USERNAME/nothing-tech-website.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait a few minutes for the site to deploy
8. Your site will be at: `https://YOUR_USERNAME.github.io/nothing-tech-website`

---

## Option 3: Using GitHub Desktop (Easiest for Beginners)

1. Download GitHub Desktop from https://desktop.github.com
2. Install and sign in with your GitHub account
3. Click "File" → "Add local repository"
4. Browse to `/mnt/okcomputer/output/app`
5. Click "Add repository"
6. Click "Publish repository"
7. Name it and click "Publish"

---

## Option 4: Drag & Drop (No Command Line)

### For Source Code:
1. Go to https://github.com/new
2. Create a new repository
3. On the repository page, click "Add file" → "Upload files"
4. Drag and drop the ENTIRE contents of `/mnt/okcomputer/output/app` (except node_modules)
5. Click "Commit changes"

### For Deployed Website:
1. Create a new repository
2. Click "Add file" → "Upload files"
3. Drag and drop the ENTIRE contents of `/mnt/okcomputer/output/app/dist`
4. Enable GitHub Pages in Settings

---

## Files to Include/Exclude

### ✅ Include These:
- `src/` folder (all your React code)
- `public/` folder (images and static files)
- `index.html`
- `package.json`
- `tailwind.config.js`
- `vite.config.ts`
- `tsconfig.json` files
- `README.md`

### ❌ Exclude These:
- `node_modules/` folder (very large, will be recreated)
- `.git/` folder (if exists)
- `dist/` folder (only if uploading source code)

---

## Quick Reference Commands

```bash
# Check git status
git status

# See what files are tracked
git ls-files

# Remove a file from git
git rm --cached filename

# Add a .gitignore file
echo "node_modules/" > .gitignore
git add .gitignore
git commit -m "Add gitignore"

# Update your code and push changes
git add .
git commit -m "Update website"
git push
```

---

## Need Help?

If you get stuck:
1. GitHub's guide: https://docs.github.com/en/get-started/quickstart/hello-world
2. Git cheat sheet: https://education.github.com/git-cheat-sheet-education.pdf
