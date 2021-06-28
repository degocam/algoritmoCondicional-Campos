//El fin es que el usuario ingrese su edad y un alert le indica a que generación corresponde

var age = prompt('Ingresa tu edad');
var birthYear = parseInt(2021) - parseInt(age);

if(birthYear > 1999){
    alert('Eres de la Generación Alpha')
}else if(birthYear > 1984){
    alert('Eres un Millenial')
}else if(birthYear > 1969){
    alert('Eres de la Generación X')
}else if(birthYear > 1940){
    alert('Eres un Boomer')
}else{
    alert('Eres un anciano')
}