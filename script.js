
// document.addEventListener("DOMContentLoaded", function () {
//     const apiKeyInput = document.getElementById("apiKey");
//     const movieTitleInput = document.getElementById("movieTitle");
//     const searchButton = document.getElementById("searchButton");
//     const loader = document.getElementById("loader");
//     const movieResults = document.getElementById("movieResults");

//     searchButton.addEventListener("click", function () {
//         const apiKey = apiKeyInput.value.trim();
//         const movieTitle = movieTitleInput.value.trim();

//         if (!apiKey || !movieTitle) {
//             alert("Please enter API Key and Movie Title");
//             return;
//         }

//         loader.style.display = "block";
//         movieResults.innerHTML = "";

//         fetch(`https://www.omdbapi.com/?s=${movieTitle}&apikey=${apiKey}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 loader.style.display = "none";

//                 if (data.Response === "True") {
//                     const movies = data.Search;

//                     movies.forEach((movie) => {
//                         const movieCard = document.createElement("div");
//                         movieCard.classList.add("movie-card");
//                         movieCard.innerHTML = `
//                             <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">
//                                 <img src="${movie.Poster}" alt="${movie.Title}">
//                             </a>
//                             <h3>${movie.Title}</h3>
//                             <p>Movie Number:${index +1}</p>
//                         `;
//                         movieResults.appendChild(movieCard);
//                     });
//                 } else {
//                     alert(data.Error);
//                 }
//             })
//             .catch((error) => {
//                 loader.style.display = "none";
//                 alert("An error occurred. Please try again.");
//             });
//     });
// });













// document.addEventListener("DOMContentLoaded", function () {
//     const apiKeyInput = document.getElementById("apiKey");
//     const searchButton = document.getElementById("searchButton");
//     const loader = document.getElementById("loader");
//     const movieResults = document.getElementById("movieResults");

//     searchButton.addEventListener("click", function () {
//         const apiKey = apiKeyInput.value.trim();

//         if (!apiKey) {
//             alert("Please enter API Key");
//             return;
//         }

//         loader.style.display = "block";
//         movieResults.innerHTML = "";

//         fetch(`https://www.omdbapi.com/?s=Avengers&apikey=${apiKey}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 loader.style.display = "none";

//                 if (data.Response === "True") {
//                     const movies = data.Search;

//                     movies.forEach((movie, index) => {
//                         const movieCard = document.createElement("div");
//                         movieCard.classList.add("movie-card");
//                         movieCard.innerHTML = `
//                             <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">
//                                 <img src="${movie.Poster}" alt="${movie.Title}">
//                             </a>
//                             <h2 style="color: rgba(36, 42, 50, 1); text-shadow: 1px 0 0 rgba(2, 150, 229, 1), 0 1px 0 rgba(2, 150, 229, 1), -1px 0 0 rgba(2, 150, 229, 1), 0 -1px 0 rgba(2, 150, 229, 1);">
//                                 ${index + 1}. ${movie.Title}
//                             </h2>
//                         `;
//                         movieResults.appendChild(movieCard);
//                     });
//                 } else {
//                     alert(data.Error);
//                 }
//             })
//             .catch((error) => {
//                 loader.style.display = "none";
//                 alert("An error occurred. Please try again.");
//             });
//     });
// });

















document.addEventListener("DOMContentLoaded", function () {
    const apiKeyInput = document.getElementById("apiKey");
    const movieTitleInput = document.getElementById("movieTitle");
    const searchButton = document.getElementById("searchButton");
    const loader = document.getElementById("loader");
    const movieResults = document.getElementById("movieResults");

    searchButton.addEventListener("click", function () {
        const apiKey = apiKeyInput.value.trim();
        const movieTitle = movieTitleInput.value.trim();

        if (!apiKey || !movieTitle) {
            alert("Please enter API Key and Movie Title");
            return;
        }

        loader.style.display = "block";
        movieResults.innerHTML = "";

        fetch(`https://www.omdbapi.com/?s=${movieTitle}&apikey=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                loader.style.display = "none";

                if (data.Response === "True") {
                    const movies = data.Search;

                    movies.forEach((movie, index) => { // Add index parameter
                        const movieCard = document.createElement("div");
                        movieCard.classList.add("movie-card");
                        movieCard.innerHTML = `
                            <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">
                                <img src="${movie.Poster}" alt="${movie.Title}">
                            </a>
                            <h3>${movie.Title}</h3>
                            <p> ${index + 1}</p> <!-- Add this line for automatic numbering -->
                        `;
                        movieResults.appendChild(movieCard);
                    });
                } else {
                    alert(data.Error);
                }
            })
            .catch((error) => {
                loader.style.display = "none";
                alert("An error occurred. Please try again.");
            });
    });
});