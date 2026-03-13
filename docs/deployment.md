# Deployment Guide

This guide covers deployment options for QR Code Generator, a full-stack application with Next.js frontend, Express.js backend, and PostgreSQL database.

## Deployment Options

### ❌ GitHub Pages (Not Suitable)

GitHub Pages only serves static files and cannot run:
- Server-side rendering (Next.js)
- Backend APIs (Express.js)
- Databases (PostgreSQL)

**Not recommended for this project.**

### ✅ Recommended Platforms

#### 1. Railway (Recommended for Full-Stack)

**Best for:** Complete full-stack deployment with database

**Pros:**
- Free tier available ($5 credit/month)
- Automatic deployments from GitHub
- Built-in PostgreSQL database
- Simple configuration
- Supports Docker

**Setup:**
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Add PostgreSQL service
4. Add backend service (Express.js)
5. Add frontend service (Next.js)
6. Set environment variables
7. Deploy!

**Cost:** Free tier with $5 credit/month, then pay-as-you-go

---

#### 2. Render

**Best for:** Free tier with automatic deployments

**Pros:**
- Free tier available (with limitations)
- Automatic deployments from GitHub
- Built-in PostgreSQL (free tier available)
- Easy setup
- Supports Docker

**Setup:**
1. Go to [render.com](https://render.com)
2. Connect your GitHub repository
3. Create PostgreSQL database
4. Create Web Service for backend
5. Create Web Service for frontend
6. Set environment variables
7. Deploy!

**Cost:** Free tier available, then $7/month per service

---

#### 3. Vercel (Frontend Only)

**Best for:** Frontend deployment (backend needs separate hosting)

**Pros:**
- Excellent Next.js support
- Free tier
- Automatic deployments
- Global CDN
- Serverless functions

**Cons:**
- Backend must be deployed separately
- Database needs separate hosting

**Setup:**
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Select `frontend` folder
4. Set `NEXT_PUBLIC_API_URL` environment variable
5. Deploy backend separately (Railway/Render)

**Cost:** Free tier available

---

#### 4. Fly.io

**Best for:** Docker-based deployments

**Pros:**
- Free tier available
- Docker support
- Global deployment
- PostgreSQL support

**Setup:**
1. Install Fly CLI: `curl -L https://fly.io/install.sh | sh`
2. Run `fly launch` in project directory
3. Configure services
4. Deploy!

**Cost:** Free tier available

---

## Quick Deployment: Railway

### Step 1: Create Railway Account

1. Visit [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project

### Step 2: Add PostgreSQL Database

1. Click "New" → "Database" → "PostgreSQL"
2. Railway automatically creates database
3. Copy the `DATABASE_URL` from the database service

### Step 3: Deploy Backend

1. Click "New" → "GitHub Repo"
2. Select your repository
3. Select `backend` as root directory
4. Add environment variables:
   ```
   DATABASE_URL=<from PostgreSQL service>
   PORT=3001
   NODE_ENV=production
   ```
5. Railway will auto-detect Node.js and deploy

### Step 4: Deploy Frontend

1. Click "New" → "GitHub Repo" (same repo)
2. Select `frontend` as root directory
3. Add environment variables:
   ```
   NEXT_PUBLIC_API_URL=<backend service URL>
   ```
4. Railway will auto-detect Next.js and deploy

### Step 5: Run Database Migrations

1. Go to backend service
2. Open terminal
3. Run:
   ```bash
   npm run db:push
   ```

## Environment Variables

### Backend
```
DATABASE_URL=postgresql://...
PORT=3001
NODE_ENV=production
```

### Frontend
```
NEXT_PUBLIC_API_URL=https://your-backend.railway.app
```

## Deployment Checklist

- [ ] Database service created and running
- [ ] Backend service deployed with correct DATABASE_URL
- [ ] Frontend service deployed with correct NEXT_PUBLIC_API_URL
- [ ] Database migrations run (`npm run db:push`)
- [ ] Environment variables configured
- [ ] CORS configured for production domain
- [ ] HTTPS enabled (automatic on most platforms)

## Troubleshooting

### Database Connection Issues
- Verify DATABASE_URL is correct
- Check database service is running
- Ensure migrations have been run

### API Connection Issues
- Verify NEXT_PUBLIC_API_URL points to backend
- Check CORS configuration
- Verify backend service is running

### Build Failures
- Check Node.js version (should be 18+)
- Verify all dependencies are in package.json
- Check build logs for specific errors

## Production Considerations

- Use strong database passwords
- Enable HTTPS (automatic on most platforms)
- Set up monitoring and logging
- Configure rate limiting
- Set up backups for database
- Use environment variables for secrets
- Enable error tracking (Sentry, etc.)

## Next Steps

After deployment:
1. Test all functionality
2. Set up custom domain (optional)
3. Configure monitoring
4. Set up automated backups
5. Review security settings
