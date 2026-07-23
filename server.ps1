$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
Write-Host "Server running at http://localhost:8080/"
$basePath = "c:\Users\Kiran R\OneDrive\Documents\dgma"
$mimeTypes = @{
    ".html" = "text/html"
    ".css"  = "text/css"
    ".js"   = "application/javascript"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".json" = "application/json"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
}
while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    $urlPath = $request.Url.LocalPath
    if ($urlPath -eq "/") { $urlPath = "/index.html" }
    $filePath = Join-Path $basePath ($urlPath -replace "/", "\")
    if (Test-Path $filePath -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($filePath)
        $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
        $response.ContentType = $contentType
        $response.StatusCode = 200
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $response.OutputStream.Write($msg, 0, $msg.Length)
    }
    $response.Close()
}
