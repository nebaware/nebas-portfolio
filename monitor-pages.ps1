$apiUrl = "https://api.github.com/repos/nebaware/nebas-portfolio/actions/workflows/deploy-pages.yml/runs?per_page=5"
$timeout=120
$delay=6
$runId = $null
for ($i=0; $i -lt $timeout; $i++) {
  try {
    $resp = Invoke-RestMethod -Uri $apiUrl -UseBasicParsing -Headers @{ 'User-Agent' = 'powershell' }
  } catch {
    Write-Host "Query failed: $($_.Exception.Message)"
    Start-Sleep -Seconds $delay
    continue
  }
  if ($resp.workflow_runs -and $resp.workflow_runs.Count -gt 0) {
    $latest = $resp.workflow_runs[0]
    $runId = $latest.id
    Write-Host ((Get-Date).ToString('o') + " Found run id: $runId | status: $($latest.status) | conclusion: $($latest.conclusion) | event: $($latest.event)")
    break
  } else {
    Write-Host "No workflow runs found yet"
  }
  Start-Sleep -Seconds $delay
}

if (-not $runId) { Write-Host "No workflow run found after polling"; exit 2 }

$runApi = "https://api.github.com/repos/nebaware/nebas-portfolio/actions/runs/$runId"
for ($i=0; $i -lt $timeout; $i++) {
  $run = Invoke-RestMethod -Uri $runApi -UseBasicParsing -Headers @{ 'User-Agent' = 'powershell' }
  Write-Host ((Get-Date).ToString('o') + " Run status: $($run.status) | conclusion: $($run.conclusion)")
  if ($run.status -eq 'completed') { break }
  Start-Sleep -Seconds $delay
}

$jobsApi = "https://api.github.com/repos/nebaware/nebas-portfolio/actions/runs/$runId/jobs"
$jobs = Invoke-RestMethod -Uri $jobsApi -UseBasicParsing -Headers @{ 'User-Agent' = 'powershell' }
if ($jobs.jobs) {
  foreach ($job in $jobs.jobs) {
    Write-Host "Job: $($job.name) | Status: $($job.status) | Conclusion: $($job.conclusion)"
    foreach ($step in $job.steps) {
      Write-Host "  - Step: $($step.name) | Status: $($step.status) | Conclusion: $($step.conclusion)"
    }
  }
} else {
  Write-Host "No jobs info available"
}

if ($run.conclusion -eq 'success') {
  Write-Host "Workflow run succeeded. View run: $($run.html_url)"
} else {
  Write-Host "Workflow run finished with conclusion: $($run.conclusion). View run: $($run.html_url)"
}
