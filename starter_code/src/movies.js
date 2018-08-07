/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (objeto){
var conversion = objeto.map(function(time){
var arr_tiempo = time.duration.split(" ");
var horas = parseInt(arr_tiempo[0])*60;
var minutos = parseInt(arr_tiempo[1]);
return horas + minutos;
});
return conversion;
}
// Get the average of all rates with 2 decimals 
function ratesAverage (movies){
var suma = movies.reduce(function(sum, movie){
return sum + movie.rate;
}, 0);
return suma/movies.length;
console.log (suma);
}

// Get the average of Drama Movies
function dramaMoviesRate (movies){
var filtro = movies.filter(function(movie){
    return movie.genre = ["Drama"];
    });
var avgDrama = ratesAverage(filtro);
return avgDrama;
console.log (avgDrama);
}

// Order by time duration, in growing order
function orderByDuration(movies){
var duration = movies.sort(function(a,b){
    if (a.duration == b.duration) {
    return a.title-b.title;
    }
    else {
    return a.duration-b.duration;
    }
});
    return duration;
    console.log (duration);
}
// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
