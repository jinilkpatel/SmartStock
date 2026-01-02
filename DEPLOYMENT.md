# 🚀 Deployment Guide for SmartStock

This guide will help you deploy SmartStock to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. A Gemini API key (get one from [Google AI Studio](https://makersuite.google.com/app/apikey))
3. Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Navigate to your project directory**:
   ```bash
   cd /Users/jinilpatel/Downloads/SmartStock-main
   ```

4. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   - Follow the prompts to link your project
   - When asked about environment variables, add: `VITE_GEMINI_API_KEY` with your Gemini API key

5. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Go to [vercel.com/new](https://vercel.com/new)**

3. **Import your repository**

4. **Configure the project**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Add Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add: `VITE_GEMINI_API_KEY` with your Gemini API key value
   - Make sure it's available for Production, Preview, and Development

6. **Deploy!**

## Environment Variables

The following environment variable is required:

- `VITE_GEMINI_API_KEY`: Your Google Gemini API key for the AI chat support feature

### Setting Environment Variables in Vercel

1. Go to your project on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add `VITE_GEMINI_API_KEY` with your API key
4. Select all environments (Production, Preview, Development)
5. Redeploy your application

## Post-Deployment

After deployment:

1. **Verify Firebase Configuration**: Ensure your Firebase project allows your Vercel domain in authorized domains
   - Go to Firebase Console → Authentication → Settings → Authorized domains
   - Add your Vercel domain (e.g., `your-project.vercel.app`)

2. **Test the Application**:
   - Visit your deployed URL
   - Test authentication (sign up/sign in)
   - Test the chat support feature (requires Gemini API key)

## Troubleshooting

### Build Fails
- Ensure all dependencies are in `package.json`
- Check that Node.js version is compatible (Vercel uses Node 18+ by default)

### Environment Variables Not Working
- Make sure variable names start with `VITE_` for Vite projects
- Redeploy after adding environment variables
- Check that variables are set for the correct environment

### Firebase Authentication Issues
- Verify your Vercel domain is added to Firebase authorized domains
- Check Firebase console for any error messages

## Custom Domain (Optional)

1. Go to your project on Vercel
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

---

**Note**: The `vercel.json` file is already configured for SPA routing, so all routes will be handled by your React app.

