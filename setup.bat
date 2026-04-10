@echo off
echo ============================================
echo    Robin Mahanta Portfolio Setup Script
echo ============================================
echo.

echo Step 1: Checking Node.js installation...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo.
echo Step 2: Checking npm installation...
npm --version
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo.
echo Step 3: Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies!
    pause
    exit /b 1
)

echo.
echo Step 4: Starting development server...
echo The portfolio will open at http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
npm run dev

pause
