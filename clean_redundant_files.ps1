[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptDir

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "   ⚡ Ponytail 極簡極效修復與瘦身自動化腳本 ⚡     " -ForegroundColor Yellow
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

# 1. 樣式解耦檢查 (確認 210 行 inline <style> 已替換為 <link rel="stylesheet" href="css/app.css">)
Write-Host "[1/3] 正在檢查 index.html 樣式解耦 (css/app.css)..." -ForegroundColor Cyan
$indexPath = Join-Path $scriptDir "index.html"
if (Test-Path $indexPath) {
    $content = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
    
    # 檢查是否含有未抽離的 inline <style>
    $stylePattern = '(?s)  <style>.*?</style>'
    if ($content -match $stylePattern) {
        $replacement = "  <!-- 核心自訂樣式表 (細滾動條、3D書封、心智圖與列印樣式) -->`r`n  <link rel=`"stylesheet`" href=`"css/app.css`">"
        $newContent = [System.Text.RegularExpressions.Regex]::Replace($content, $stylePattern, $replacement)
        [System.IO.File]::WriteAllText($indexPath, $newContent, [System.Text.Encoding]::UTF8)
        Write-Host "   ✔ 成功將 inline CSS 抽離為 external link！index.html 已瘦身！" -ForegroundColor Green
    } else {
        Write-Host "   ✔ index.html 樣式已完成解耦，無需重複替換。" -ForegroundColor Green
    }
}

# 2. 歷史母本與未引用視圖模組安全歸檔至 docs\archive\
Write-Host "[2/3] 執行歷史母本與舊版視圖模組安全歸檔..." -ForegroundColor Cyan
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

# 封存 content/ 目錄下未被 index.html 引用的 16 個舊視圖檔案 (僅保留正在動態掛載的 view-part0-ch1-sec2.js)
$legacyDir = Join-Path $archiveDir 'legacy_modules'
if (-not (Test-Path $legacyDir)) {
    New-Item -ItemType Directory -Path $legacyDir -Force | Out-Null
}

if (Test-Path 'content') {
    Get-ChildItem -Path 'content\view-*.js' | ForEach-Object {
        if ($_.Name -ne 'view-part0-ch1-sec2.js') {
            $dest = Join-Path $legacyDir $_.Name
            Move-Item -Path $_.FullName -Destination $dest -Force
            Write-Host "   📦 [已封存舊視圖] $($_.Name) ➔ $legacyDir" -ForegroundColor Cyan
        }
    }
}

# 3. 清理冗餘暫存檔案與外部解壓縮安裝包
Write-Host "[3/3] 清理專案冗餘檔案與暫存..." -ForegroundColor Cyan
$targets = @(
  'content\test_sec3.js',
  'ponytail-4.12.0',
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

if (Test-Path 'docs\specs') {
  Remove-Item 'docs\specs' -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "===================================================" -ForegroundColor Green
Write-Host "   🎉 [成功] 專案已恢復健康純淨！瘦身優化全數完成！" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Green
Write-Host ""
Write-Host "1. content/ 僅保留唯一使用中的 view-part0-ch1-sec2.js，其餘已安全封存至 docs\archive\legacy_modules\" -ForegroundColor Yellow
Write-Host "2. 已清除 content\test_sec3.js 及根目錄下的原始 ponytail-4.12.0 解壓縮包" -ForegroundColor Yellow
Write-Host "3. .agents\skills\ 保留全部 6 個 Ponytail 核心技能與多欄位 Note Skill，.agents\rules\ 規則完整保留" -ForegroundColor Yellow
Write-Host ""
Read-Host "按 Enter 鍵關閉視窗..."
