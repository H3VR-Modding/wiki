@echo off

set relpath=%~dp0

set ziploc=%relpath%package.zip

set binloc=%relpath%../bin/

echo Downloading zip...

powershell -Command "(New-Object Net.WebClient).DownloadFile('https://github.com/dotnet/docfx/releases/download/v2.58.9/docfx.zip', '%ziploc%')"

powershell -command "Expand-Archive -Force '%ziploc%' '%binloc%'"

del /f %ziploc%
