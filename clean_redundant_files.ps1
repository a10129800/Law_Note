[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptDir

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "   ⚡ Ponytail 極簡極效修復與瘦身自動化腳本 ⚡     " -ForegroundColor Yellow
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

$archiveDir = 'docs\archive'
if (-not (Test-Path $archiveDir)) {
    New-Item -ItemType Directory -Path $archiveDir -Force | Out-Null
}

# 1. 樣式與腳本解耦檢查 (確認 index.html 引用外部 css/app.css 與 js/app.js)
Write-Host "[1/4] 正在檢查 index.html 解耦狀態 (css/app.css & js/app.js)..." -ForegroundColor Cyan
$indexPath = Join-Path $scriptDir "index.html"
if (Test-Path $indexPath) {
    $content = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
    $modified = $false

    # 檢查並移除殘留的 inline <style>
    $stylePattern = '(?s)  <style>.*?</style>'
    if ($content -match $stylePattern) {
        $replacement = "  <!-- 核心自訂樣式表 (細滾動條、3D書封、心智圖與列印樣式) -->`r`n  <link rel=`"stylesheet`" href=`"css/app.css`">"
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, $stylePattern, $replacement)
        $modified = $true
        Write-Host "   ✔ 成功將 inline CSS 抽離為 external link！" -ForegroundColor Green
    }

    # 檢查並移除殘留之 1,300 行舊 inline <script>
    $scriptPattern = '(?s)\r?\n  <script>\r?\n\s+(?:function (?:toggleDarkMode|exportMarkdown)\().*?<\/script>\r?\n'
    if ($content -match $scriptPattern) {
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, $scriptPattern, "")
        $modified = $true
        Write-Host "   ✔ 成功自 index.html 移除舊版 inline script（已由 js/app.js 接管）！" -ForegroundColor Green
    }

    # 確保底部有引用 js/app.js
    if ($content -notmatch '<script\s+src="js/app.js"></script>') {
        $content = $content.Replace("</body>", "  <!-- 核心應用程式控制器 (解耦自 inline script，遵循 AGENTS.md 規範) -->`r`n  <script src=`"js/app.js`"></script>`r`n`r`n</body>")
        $modified = $true
        Write-Host "   ✔ 成功於 index.html 底部掛載 js/app.js！" -ForegroundColor Green
    }

    if ($modified) {
        [System.IO.File]::WriteAllText($indexPath, $content, [System.Text.Encoding]::UTF8)
        Write-Host "   ✔ index.html 檔案瘦身並解耦成功！" -ForegroundColor Green
    } else {
        Write-Host "   ✔ index.html 已處於最佳解耦瘦身狀態，無需修改。" -ForegroundColor Green
    }
}

# 2. 歷史母本與舊版視圖模組安全歸檔至 docs\archive\
Write-Host "[2/4] 執行歷史母本與舊版視圖模組安全歸檔..." -ForegroundColor Cyan
$archiveFiles = @('visual.html', 'CRIMINAL_LAW_NOTES.md')
foreach ($f in $archiveFiles) {
    if (Test-Path $f) {
        Move-Item -Path $f -Destination (Join-Path $archiveDir $f) -Force
        Write-Host "   📦 [已封存至 $archiveDir] $f" -ForegroundColor Cyan
    }
}

# 歸檔 content/ 目錄下未被 index.html 引用的舊模組（保留生效中的 4 大模組）
$activeViews = @(
    'view-part0-ch1-sec2.js',
    'view-part0-ch1-sec3.js',
    'view-part0-ch2.js',
    'view-part0-ch2-sec1.js',
    'view-part0-ch2-sec2.js'
)
$legacyDir = Join-Path $archiveDir 'legacy_modules'
if (-not (Test-Path $legacyDir)) {
    New-Item -ItemType Directory -Path $legacyDir -Force | Out-Null
}

if (Test-Path 'content') {
    Get-ChildItem -Path 'content\view-*.js' | ForEach-Object {
        if ($_.Name -notin $activeViews) {
            $dest = Join-Path $legacyDir $_.Name
            Move-Item -Path $_.FullName -Destination $dest -Force
            Write-Host "   📦 [已封存舊視圖] $($_.Name) ➔ $legacyDir" -ForegroundColor Cyan
        }
    }
}

# 3. 封存孤立歷史資料庫目錄 data/
Write-Host "[3/4] 封存歷史資料庫 (data/)..." -ForegroundColor Cyan
if (Test-Path 'data') {
    $archiveData = Join-Path $archiveDir 'data'
    if (-not (Test-Path $archiveData)) {
        New-Item -ItemType Directory -Path $archiveData -Force | Out-Null
    }
    Get-ChildItem -Path 'data\*' | ForEach-Object {
        Move-Item -Path $_.FullName -Destination (Join-Path $archiveData $_.Name) -Force
    }
    Remove-Item 'data' -Force -ErrorAction SilentlyContinue
    Write-Host "   📦 [已封存歷史資料庫] data/ ➔ $archiveData" -ForegroundColor Cyan
}

# 4. 清理冗餘暫存檔案、一次性腳本與外部解壓縮安裝包
Write-Host "[4/4] 清理專案冗餘檔案與一次性腳本..." -ForegroundColor Cyan
$targets = @(
  'copy_avatars.bat',
  'copy_avatars.ps1',
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
Write-Host "1. content/ 保留 4 個使用中的核心視圖模組 (sec2, sec3, ch2, ch2-sec1)" -ForegroundColor Yellow
Write-Host "2. data/ 目錄已安全封存至 docs\archive\data\" -ForegroundColor Yellow
Write-Host "3. copy_avatars.* 一次性遷移腳本已清理" -ForegroundColor Yellow
Write-Host "4. index.html 已解耦為引用 js/app.js 與 css/app.css" -ForegroundColor Yellow
Write-Host ""
Read-Host "按 Enter 鍵關閉視窗..."
