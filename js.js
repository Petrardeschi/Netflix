/* let movieTrend = document.getElementById('movie-trend');
let movieAgain = document.getElementById('movie-again');
let movieReleases = document.getElementById('movie-releases');

window.onload = () => {
    movieTrend.classList.add("open");
    movieAgain.classList.add("open");
    movieReleases.classList.add("open");
} */

let movieRow = document.getElementsByClassName("movie-row")

window.onload = () => {
    for (let i = 0; i<movieRow.length; i++) {
        movieRow[i].classList.add("open");
    }
}