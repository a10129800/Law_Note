[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptDir

$targets = @(
  'demo_part0_chapter1.html',
  'demo_part0_chapter1_section1.html',
  'demo_shiba_infographic.html',
  '柴柴學者版.md',
  'CRIMINAL_LAW_VISUAL_GUIDE.md',
  'push.ps1',
  '.agents\rules\case_study_and_courtroom_rules.md',
  '.agents\rules\navigation_and_ui_rules.md',
  '.agents\skills\NOTE_READER_SPECIFICATION.md',
  '.agents\skills\閱讀器與圖解製作規範.md',
  'docs\specs\柴柴學者版規範.md',
  '.agents\skills\note-3-column'
)

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "   正在為您清理《圖說刑法總則》專案冗餘檔案...     " -ForegroundColor Yellow
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

foreach ($item in $targets) {
  if (Test-Path $item) {
    Remove-Item -Path $item -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "[✔ 已刪除] $item" -ForegroundColor Green
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
Write-Host "   [成功] 所有冗餘檔案已徹底移除！專案已極致純淨！" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Green
Write-Host ""
Read-Host "按 Enter 鍵關閉視窗..."
