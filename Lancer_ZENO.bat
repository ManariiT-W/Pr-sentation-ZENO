@echo off
rem Ouvre la présentation en plein écran (Chrome ou Edge). Aucune connexion internet requise.
set "P=%~dp0index.html"
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" ( start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --start-fullscreen "%P%" & exit /b )
if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" ( start "" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" --start-fullscreen "%P%" & exit /b )
start "" msedge --start-fullscreen "%P%"
