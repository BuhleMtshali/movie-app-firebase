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

//function for finding a movie
function findMovie(value){
    const options = {
        method: 'GET',
        params: {
            s: `${value}`
          
        },
        headers: {
          'x-rapidapi-key': 'eea6a34f4dmsh296963a5654d19ep13d93ajsn94fa453c501f',
          'x-rapidapi-host': 'movie-database-by-based-api.p.rapidapi.com'
        }
      };
      let apiURL = 'https://movie-database-by-based-api.p.rapidapi.com/v1/movies/'

      axios.get(apiURL, options).then(response => renderSearch(response.data.Search)).catch(error => console.error(`Error fetching ${value}`, error))
}

//function for rendering the search
function renderSearch(data) {
    console.log(data)
movieFeedElement.innerHTML = '';
console.log(data)
data.forEach((item) => {
    if(item){
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
                                <h2>${item.Title}</h2>
                        <img src="${item.Poster}" class="img-movie"/>
                                `;
        movieFeedElement.appendChild(movieItem)
    } else {
        alert(`Unfortunately the ${item} does not exist`)
    }
    })

}

