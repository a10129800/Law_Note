[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "       Git 自動推送到 GitHub (Law_Note)            " -ForegroundColor Yellow
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

# 檢查 Git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "[錯誤] 系統找不到 Git 指令，請確認已安裝 Git。" -ForegroundColor Red
    Read-Host "請按 Enter 鍵結束..."
    exit
}

# 切換到腳本所在目錄
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptDir

# 設定目標 Repo
$targetRepo = "https://github.com/a10129800/Law_Note.git"
Write-Host "[1/4] 設定遠端儲存庫為: $targetRepo" -ForegroundColor Green

$remotes = git remote
if ($remotes -contains "origin") {
    git remote set-url origin $targetRepo
} else {
    git remote add origin $targetRepo
}

Write-Host "目前遠端配置:" -ForegroundColor Gray
git remote -v
Write-Host ""

# 輸入 Commit 訊息
Write-Host "[2/4] 請輸入本次更新說明 (直接按 Enter 使用預設說明):" -ForegroundColor Green
$userMsg = Read-Host "> "
if ([string]::IsNullOrWhiteSpace($userMsg)) {
    $now = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $userMsg = "更新筆記與資料庫架構 - $now"
}

# [自動同步] 複製 AI 角色頭像圖到 images/ 目錄以利 GitHub 部署
$imgBrainDir = "C:\Users\mice\.gemini\antigravity-ide\brain\4df2d29d-6b0a-446b-b06f-c051f8946b4c"
$imgTargetDir = Join-Path $scriptDir "images"
if (Test-Path $imgBrainDir) {
    if (-not (Test-Path $imgTargetDir)) { New-Item -ItemType Directory -Path $imgTargetDir -Force | Out-Null }
    Copy-Item "$imgBrainDir\shiba_law_professor_1790657544044.jpg" (Join-Path $imgTargetDir "shiba_law_professor.jpg") -Force -ErrorAction SilentlyContinue
    Copy-Item "$imgBrainDir\shepherd_law_inspector_1790658889114.jpg" (Join-Path $imgTargetDir "shepherd_law_inspector.jpg") -Force -ErrorAction SilentlyContinue
    Copy-Item "$imgBrainDir\golden_case_attorney_1790659096990.jpg" (Join-Path $imgTargetDir "golden_case_attorney.jpg") -Force -ErrorAction SilentlyContinue
    Write-Host "[圖片同步] ✔ 已自動將 3 大法學犬系角色圖片複製至 images/ 目錄" -ForegroundColor Cyan
}

# 加入檔案與 Commit
Write-Host ""
Write-Host "[3/4] 加入檔案並提交變更..." -ForegroundColor Green
git add .
$status = git status --porcelain
if ($status) {
    git commit -m $userMsg
} else {
    Write-Host "目前沒有新變更需要 Commit，直接執行推送..." -ForegroundColor Yellow
}

# 切換分支為 main 並推送
Write-Host ""
Write-Host "[4/4] 正在推送到 GitHub (origin/main)..." -ForegroundColor Green
git branch -M main

$pushResult = git push -u origin main 2>&1
$pushResult | ForEach-Object { Write-Host $_ }

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "===================================================" -ForegroundColor Green
    Write-Host "  [成功] 已成功推送到 https://github.com/a10129800/Law_Note !" -ForegroundColor Green
    Write-Host "===================================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "===================================================" -ForegroundColor Yellow
    Write-Host "  [提示] 推送遇到衝突或拒絕 (常見原因: 線上倉庫已有初始 README 等檔案)" -ForegroundColor Yellow
    Write-Host "===================================================" -ForegroundColor Yellow
    Write-Host ""
    $force = Read-Host "是否要以本地專案【強制覆蓋】線上倉庫？(輸入 Y 覆蓋，其他鍵取消)"
    if ($force -eq "Y" -or $force -eq "y") {
        Write-Host "正在執行強制推送 (git push -u origin main --force)..." -ForegroundColor Magenta
        git push -u origin main --force
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "===================================================" -ForegroundColor Green
            Write-Host "  [成功] 強制推送完成！專案已成功同步至 GitHub！" -ForegroundColor Green
            Write-Host "===================================================" -ForegroundColor Green
        } else {
            Write-Host "[錯誤] 推送失敗，請確認是否已在瀏覽器登入 GitHub 並授權 Git。" -ForegroundColor Red
        }
    } else {
        Write-Host "已取消強制推送。" -ForegroundColor Gray
    }
}

Write-Host ""
Read-Host "按 Enter 鍵關閉視窗..."
