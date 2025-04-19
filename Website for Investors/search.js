const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const database = {
    "barbara hill": "verifed.html", // Replace with the actual URL for "name and surname"
    // Add more entries as needed
};

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    if (database.hasOwnProperty(searchTerm)) {
        const url = database[searchTerm];
        window.open(url, "_blank");
    } else {
        searchResults.innerHTML = "No results found.";
    }
});
