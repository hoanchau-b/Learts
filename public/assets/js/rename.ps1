Get-ChildItem -Path "$PSScriptRoot" -Filter "*.tải xuống" | ForEach-Object {
    $newName = $_.Name -replace '\.tải xuống$', ''
    Rename-Item -Path $_.FullName -NewName $newName
    Write-Host "Renamed: $($_.Name) -> $newName"
}
