@echo off

cd /d %~dp0

rem Make sure we have the DocFX binaries downloaded
if not exist bin\ (
    echo Downloading zip...
    powershell -Command "(New-Object Net.WebClient).DownloadFile('https://github.com/dotnet/docfx/releases/download/v2.58.9/docfx.zip', 'package.zip')"
    powershell -Command "Expand-Archive -Force 'package.zip' 'bin/'"
    del /f package.zip
)

rem Run DocFX build and serve
bin\docfx.exe src\docfx.json --serve
