$node = "C:\Users\carfe\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$nodeDir = "C:\Users\carfe\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
$next = "C:\Users\carfe\OneDrive\Documentos\Professora da Gabi\node_modules\next\dist\bin\next"

Set-Location "C:\Users\carfe\OneDrive\Documentos\Professora da Gabi"
$env:Path = "$nodeDir;$env:Path"
& $node $next dev -p 3000 --hostname 127.0.0.1
