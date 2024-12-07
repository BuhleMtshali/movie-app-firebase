//function for navbar
document.getElementById('menu-bar').addEventListener('click', () => {
    console.log('button clicked')
    let rightNavElement = document.querySelector('.right-logo')
    let leftNavElement = document.querySelector('.left-logo')
    let menuNav = document.querySelector('#menu-bar')
    if(rightNavElement.classList.contains('responsive')){
        rightNavElement.classList.remove('responsive');
    } else {
        rightNavElement.classList.add('responsive')
    }

    if(leftNavElement.classList.contains('responsive')){
        leftNavElement.classList.remove('responsive');
    } else {
        leftNavElement.classList.add('responsive')
    }
 
    if(menuNav.classList.contains('responsive')){
        menuNav.classList.remove('responsive')
    } else {
        menuNav.classList.add('responsive')
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



//function for movie searches
document.getElementById('search-btn').addEventListener('click', () => {
    let inputValue = document.getElementById('search-input');
    findMovie(inputValue.value);
    inputValue.value = ''
})


function findMovie(value){
    const options = {
        method: 'GET',
        params: {
          s: `${value}`,
          m: `${value}`
        },
        headers: {
          'x-rapidapi-key': 'eea6a34f4dmsh296963a5654d19ep13d93ajsn94fa453c501f',
          'x-rapidapi-host': 'mdblist.p.rapidapi.com'
        }
      };
      let apiURL = 'https://mdblist.p.rapidapi.com/'
      axios.get(apiURL, options).then(response => renderSearch(response.data)).catch(error => console.error(`Error fetching ${value}`, error))
}