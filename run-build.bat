@echo off
echo ===== SET NODE PATH =====
SET PATH=C:\Program Files\Nodejs;%PATH%

echo ===== BUILD PROJECT =====
npm run build
IF %ERRORLEVEL% NEQ 0 (
  echo Build failed!
  pause
  exit /b %ERRORLEVEL%
)

echo ===== COPY STATIC =====
xcopy .next\static .next\standalone\.next\static /E /I /Y

echo ===== COPY PUBLIC =====
xcopy public .next\standalone\public /E /I /Y

echo ===== START SERVER =====
node .next/standalone/server.js

pause
