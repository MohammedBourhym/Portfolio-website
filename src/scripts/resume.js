// Add resume print functionality
document.addEventListener('DOMContentLoaded', function() {
  // Set up keyboard shortcut (Ctrl+P)
  document.addEventListener('keydown', function(e) {
    // If Ctrl+P is pressed
    if (e.ctrlKey && e.key === 'p') {
      // We don't need to do anything special here as the browser's print
      // functionality will handle this, but we could customize if needed
      console.log('Print shortcut detected');
    }
  });

  // Set up click handler for resume link
  const resumeLink = document.getElementById('resume-link');
  if (resumeLink) {
    resumeLink.addEventListener('click', function(e) {
      // If we want to trigger print instead of opening the PDF
      // e.preventDefault();
      // window.print();
      
      // But by default, we'll let it open the PDF in a new tab
      console.log('Resume link clicked');
    });
  }
});
