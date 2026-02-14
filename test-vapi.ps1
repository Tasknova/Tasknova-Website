# Test Vapi API Script
# This script will test the Vapi API and show you what data is available

Write-Host "🔍 Vapi API Testing Script" -ForegroundColor Cyan
Write-Host ("=" * 80)
Write-Host ""

# Check if .env file exists
if (-not (Test-Path ".env")) {
    Write-Host "❌ .env file not found!" -ForegroundColor Red
    Write-Host "Please make sure you are running this from the project root directory." -ForegroundColor Yellow
    exit 1
}

# Check if private key is configured
$envContent = Get-Content ".env" -Raw
if ($envContent -notmatch "VITE_VAPI_PRIVATE_KEY=(?!your_private_key_here)(.+)") {
    Write-Host "❌ VAPI_PRIVATE_KEY not configured!" -ForegroundColor Red
    Write-Host ""
    Write-Host "📝 To get your private key:" -ForegroundColor Yellow
    Write-Host "1. Go to https://dashboard.vapi.ai" -ForegroundColor White
    Write-Host "2. Navigate to Settings -> API Keys" -ForegroundColor White
    Write-Host "3. Copy your Private Key" -ForegroundColor White
    Write-Host "4. Add to .env file as: VITE_VAPI_PRIVATE_KEY=your_actual_key" -ForegroundColor White
    Write-Host ""
    Write-Host "Opening .env file for you..." -ForegroundColor Cyan
    Start-Process notepad ".env"
    exit 1
}

Write-Host "✅ Configuration found!" -ForegroundColor Green
Write-Host "Running API test..." -ForegroundColor Cyan
Write-Host ""

# Run the test script
node test-vapi-api.mjs

Write-Host ""
Write-Host ("=" * 80)
Write-Host "Test completed. Check the output above." -ForegroundColor Cyan
