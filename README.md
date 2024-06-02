# First-Vite-React

## Portfolio : https://mainehahu.github.io/Portfolio/ 

## Live link: 
```
npm create vite@latest
npm i
git init 
git add.
git commit -m "first"
git branch -M main
git add remote origin 
git push -u origin main
```

# vite.config.js 

> export default defineConfig({
> plugins: [react()],
> base :"/First-Vite-React"
> })

# package.json

> "scripts": {
>   "dev": "vite",
>    "build": "vite build",
>    "preview": "vite preview",
>    "deploy": "gh-pages -d dist"
>  },

```
npm i gh-pages --save
git add .
git commit
git push
```
```
npm run build
npm run deploy
git push
```

> if not working create gh-pages branch in github and deploy pages 
