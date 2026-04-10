@echo off
echo ============================================
echo    Portfolio Deployment Script
echo ============================================
echo.

echo Building production version...
npm run build

if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo Build completed successfully!
echo The 'dist' folder contains your production files.
echo.
echo To deploy to GitHub Pages:
echo 1. Push this project to GitHub
echo 2. Go to repository Settings ^> Pages
echo 3. Select 'Deploy from a branch'
echo 4. Choose 'gh-pages' branch and '/ (root)' folder
echo 5. Push the 'dist' folder contents to gh-pages branch
echo.
echo Alternative: Use GitHub Actions for automatic deployment
echo.

pause
