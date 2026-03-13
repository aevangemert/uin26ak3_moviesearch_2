//prøv å lage en useState som skal vise 1 film istedet for useParams, definere i app??

export default function Movie({ selectedMovie }) {

   if (!selectedMovie) {
      return <p>Ingen film valgt</p>
   }
   return (
      <section>
         <h1>{selectedMovie.Title}</h1>
         <img src={selectedMovie.Poster} alt={selectedMovie.Title}></img>
         <p>Utgivelsesår: {selectedMovie.Year}</p>
      </section>
   )
}
