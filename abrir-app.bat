@echo off
cd /d "C:\Users\carfe\OneDrive\Documentos\Professora da Gabi"
set "PATH=C:\Users\carfe\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;%PATH%"
"C:\Users\carfe\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" "C:\Users\carfe\OneDrive\Documentos\Professora da Gabi\node_modules\next\dist\bin\next" dev -p 3000 --hostname 127.0.0.1
pause
