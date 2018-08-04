/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (objeto){
//console.log(objeto[0].duration)
var conversion = objeto.map(function(time){
//console.log(time.duration);
var arr_tiempo = time.duration.split(" ")
var horas = parseInt(arr_tiempo[0].split("h"))*60
var minutos = parseInt(arr_tiempo[1].split("min"))
return horas+minutos+"min"
})
console.log (conversion);
}
// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
