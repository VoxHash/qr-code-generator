# Troubleshooting

Common issues and solutions for QR Code Generator.

## Database Connection Issues

### Problem: Cannot connect to database

**Solution:**
1. Verify PostgreSQL is running:
   ```bash
   docker ps  # If using Docker
   # or
   pg_isready  # If installed locally
   ```

2. Check DATABASE_URL in `.env`:
   ```env
   DATABASE_URL=postgresql://postgres:password@localhost:5432/qrcode_db
   ```

3. Ensure database exists:
   ```bash
   npm run db:push
   ```

## Port Already in Use

### Problem: Port 3000 or 3001 is already in use

**Solution:**
1. Find the process using the port:
   ```bash
   lsof -i :3000
   lsof -i :3001
   ```

2. Kill the process or change the port in configuration

3. For frontend, change port:
   ```bash
   npm run dev -- -p 3002
   ```

4. For backend, set PORT environment variable:
   ```bash
   PORT=3002 npm run dev
   ```

## Prisma Client Issues

### Problem: Prisma client not generated

**Solution:**
```bash
cd backend
npm run db:generate
```

### Problem: Schema out of sync

**Solution:**
```bash
cd backend
npm run db:push
```

## Build Errors

### Problem: Next.js build fails

**Solution:**
1. Clear Next.js cache:
   ```bash
   rm -rf .next
   ```

2. Reinstall dependencies:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Rebuild:
   ```bash
   npm run build
   ```

## API Errors

### Problem: CORS errors

**Solution:**
Ensure `NEXT_PUBLIC_API_URL` matches the backend URL in frontend `.env.local`

### Problem: 404 errors on API endpoints

**Solution:**
1. Verify backend is running
2. Check API URL configuration
3. Verify endpoint paths match API documentation

## Docker Issues

### Problem: Docker containers won't start

**Solution:**
1. Check Docker is running:
   ```bash
   docker ps
   ```

2. Rebuild containers:
   ```bash
   docker-compose down
   docker-compose up --build
   ```

3. Check logs:
   ```bash
   docker-compose logs
   ```

## Environment Variables

### Problem: Environment variables not loading

**Solution:**
1. Ensure `.env` files are in correct locations:
   - Backend: `backend/.env`
   - Frontend: `frontend/.env.local`

2. Restart the development server after changing `.env` files

3. Verify variable names match exactly (case-sensitive)

## Still Having Issues?

- Check [FAQ](faq.md)
- Open an issue on [GitHub](https://github.com/VoxHash/qr-code-generator/issues)
- Contact support: contact@voxhash.dev
