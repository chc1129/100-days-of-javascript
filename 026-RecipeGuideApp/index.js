const resultContainer = document.getElementById("result");
const searchBtn = document.getElementById("serach-button");
const serachInput = document.getElementById("serach-input");
const searchContainer = document.querySelector(".serach-box");

// Api url to fetch meal data
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Event listeners for serach and input (when press enter)
searchBtn.addEventListener("click", searchMeal);
searchInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        searchMeal();
    }
});

// Handle meal function
function searchMeal() {
    const userInput = searchInput.value.trim();
    if (!userInput) {
        resultContainer.innerHTML = `<h3>Input Field Cannot be Empty</h3>`;
        return;
    }
    // Fetch meal data using api with user input
    fetch(apiUrl + userInput).then((response) => response.json()).then((data) => {
        const meal = data.meals[0];
        // Handle where no meal found
        if (!meal) {
            resultContainer.innerHTML = `<h3>No Meal Found, Please Try Again</h3>`;
            return;
        }
    })
}
