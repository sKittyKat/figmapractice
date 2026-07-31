Add-Type -AssemblyName System.Windows.Forms
$browser = New-Object System.Windows.Forms.WebBrowser
$browser.ScriptErrorsSuppressed = $true
$browser.Navigate("file:///f:/BRIEF/test.html")
while ($browser.ReadyState -ne 4) { [System.Windows.Forms.Application]::DoEvents() }
Start-Sleep -Milliseconds 500
Write-Host "Title:" $browser.DocumentTitle