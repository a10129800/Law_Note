$SourceDir = "C:\Users\mice\.gemini\antigravity-ide\brain\f1b4b667-641e-4f46-960f-5319e24f9e51"
$TargetDir = Join-Path $PSScriptRoot "images"

if (!(Test-Path $TargetDir)) {
    New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null
}

Copy-Item (Join-Path $SourceDir "border_collie_judge_1791095556108.jpg") (Join-Path $TargetDir "border_collie_chief_judge.jpg") -Force
Copy-Item (Join-Path $SourceDir "prosecutor_fox_1791095870366.jpg") (Join-Path $TargetDir "prosecutor_fox.jpg") -Force
$CourtroomBg = Join-Path $SourceDir "courtroom_stage_bg_1791096180357.jpg"
if (Test-Path $CourtroomBg) {
    Copy-Item $CourtroomBg (Join-Path $TargetDir "courtroom_stage_bg.jpg") -Force
}

Write-Host "✅ 角色圖片已成功複製至 images 目錄！" -ForegroundColor Green
Write-Host "1. images/border_collie_chief_judge.jpg (邊牧首席審判長)" -ForegroundColor Cyan
Write-Host "2. images/prosecutor_fox.jpg (公訴檢察官赤狐女律師)" -ForegroundColor Cyan
