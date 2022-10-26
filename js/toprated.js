/*----------- botones de navegacion-------------- */
let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina <1000){
		pagina += 1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPeliculas();
	}
});
/* ---------------------funcio fetch y cargar peliculas en contenedor---------- */
const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=4f86ee75c68b3ebf17bee9a9a1f48a6f&languaje=es-ES&page=${pagina}` 
    );
    console.log(respuesta);

    /* --------------respuestas------------ */                       /* backticks */
    if (respuesta.status === 200){
    const datos = await respuesta.json();

    let peliculas =" " ;
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">    
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">   
						<h3 class="titulo">${pelicula.title}</h3>
						<h4 class="object">Calificacion: ${pelicula.vote_average}</h4>
					</div>
				`;
			});
  document.getElementById("contenedor").innerHTML = peliculas
}else {
    console.log ("error ")
}

  } catch (error) {
    console.log(error);
  }
};
cargarPeliculas();