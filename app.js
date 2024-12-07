//function for navbar
document.getElementById('menu-bar').addEventListener('click', () => {
    console.log('button clicked')
    let rightNavElement = document.querySelector('.search-menu')
    if(rightNavElement.className === 'right-logo'){
        rightNavElement.className += 'responsive';
    } else {
        rightNavElement.className = 'right-logo'
    }
})



//function for the movie feed 
let movieFeedElement = document.getElementById('movie-feed');
//function for reloading the window
document.addEventListener('DOMContentLoaded', () => {
    getMovies()
})

function getMovies(movies){
    const options = {
        headers: {
          'x-rapidapi-key': 'eea6a34f4dmsh296963a5654d19ep13d93ajsn94fa453c501f',
          'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      };

      const url = "https://imdb-top-100-movies.p.rapidapi.com/";

      axios.get(url, options)
      .then(response => renderMovies(response.data))
      .catch(error => console.error('Error fetching movies', error));
      
}

function renderMovies(movies){
    movieFeedElement.innerHTML = '';
    console.log(movies)
    movies.forEach((movie) => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
                                <h2>${movie.title}</h2>
                                <img src="${movie.image}" class="img-movie"/>
                                `;
        movieFeedElement.appendChild(movieItem)
    })

}