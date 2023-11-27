// Track download count
let downloadCount = 0;

// Function to increment the download count and update the display
function incrementDownloadCount() {
    downloadCount++;
    document.getElementById("download-count").textContent = downloadCount;
}

// Add a click event listener to the download button
document.getElementById("download-button").addEventListener("click", function () {
    // Simulate a download (you can replace this with the actual download logic)
    setTimeout(function () {
        // Increment the download count
        incrementDownloadCount();
    }, 1000); // Simulating a 1-second download delay
});
