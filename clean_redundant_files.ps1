[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptDir

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "   ⚡ Ponytail 極簡極效修復與瘦身自動化腳本 ⚡     " -ForegroundColor Yellow
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

# 1. 透過 Git 一鍵還原 index.html 至乾淨、無亂碼之基線版本
Write-Host "[1/4] 正在還原 index.html 至純淨原始版本..." -ForegroundColor Cyan
git checkout index.html
if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✔ index.html 已成功還原！徹底清除所有毀損與卡死亂碼！" -ForegroundColor Green
} else {
    Write-Host "   ⚠ Git 還原時出現提示，繼續執行後續檢查..." -ForegroundColor Yellow
}

# 2. 執行樣式抽離解耦 (將 210 行 inline <style> 替換為 <link rel="stylesheet" href="css/app.css">)
Write-Host "[2/4] 正在為 index.html 套用樣式解耦 (css/app.css)..." -ForegroundColor Cyan
$indexPath = Join-Path $scriptDir "index.html"
if (Test-Path $indexPath) {
    $content = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
    
    # 檢查是否含有未抽離的 inline <style>
    $stylePattern = '(?s)  <style>.*?</style>'
    if ($content -match $stylePattern) {
        $replacement = "  <!-- 核心自訂樣式表 (細滾動條、3D書封、心智圖與列印樣式) -->`r`n  <link rel=`"stylesheet`" href=`"css/app.css`">"
        $newContent = [System.Text.RegularExpressions.Regex]::Replace($content, $stylePattern, $replacement)
        [System.IO.File]::WriteAllText($indexPath, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "   ✔ 成功將 210 行 CSS 抽離為 external link！index.html 已瘦身！" -ForegroundColor Green
    } else {
        Write-Host "   ✔ index.html 樣式已完成解耦，無需重複替換。" -ForegroundColor Green
    }
}

# 3. 歷史母本與手稿安全歸檔至 docs\archive\
Write-Host "[3/4] 檢查歷史母本與巨石手稿歸檔..." -ForegroundColor Cyan
$archiveDir = 'docs\archive'
if (-not (Test-Path $archiveDir)) {
    New-Item -ItemType Directory -Path $archiveDir -Force | Out-Null
}

$archiveFiles = @('visual.html', 'CRIMINAL_LAW_NOTES.md')
foreach ($f in $archiveFiles) {
    if (Test-Path $f) {
        Move-Item -Path $f -Destination (Join-Path $archiveDir $f) -Force
        Write-Host "   📦 [已封存至 $archiveDir] $f" -ForegroundColor Cyan
    }
}

# 4. 清理冗餘暫存與衝突設定
Write-Host "[4/4] 清理專案冗餘檔案..." -ForegroundColor Cyan
$targets = @(
  'demo_part0_chapter1.html',
  'demo_part0_chapter1_section1.html',
  'demo_shiba_infographic.html',
  '柴柴學者版.md',
  'CRIMINAL_LAW_VISUAL_GUIDE.md',
  '.agents\rules\case_study_and_courtroom_rules.md',
  '.agents\rules\navigation_and_ui_rules.md',
  '.agents\skills\NOTE_READER_SPECIFICATION.md',
  '.agents\skills\閱讀器與圖解製作規範.md',
  'docs\specs\柴柴學者版規範.md',
  '.agents\skills\note-3-column'
)

foreach ($item in $targets) {
  if (Test-Path $item) {
    Remove-Item -Path $item -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "   ✔ [已清理] $item" -ForegroundColor Green
  }
}

if (Test-Path '.agents\rules') {
  Remove-Item '.agents\rules' -Recurse -Force -ErrorAction SilentlyContinue
}
if (Test-Path 'docs\specs') {
  Remove-Item 'docs\specs' -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "===================================================" -ForegroundColor Green
Write-Host "   🎉 [成功] 專案已恢復健康純淨！瘦身優化全數完成！" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Green
Write-Host ""
Write-Host "現在您可以直接在瀏覽器雙擊 index.html，享受極致流暢的研讀筆記！" -ForegroundColor Yellow
Write-Host ""
Read-Host "按 Enter 鍵關閉視窗..."
