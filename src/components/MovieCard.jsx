import { Link } from "react-router-dom"

export default function MovieCard({ imdbID, Title, Year, Poster, setSelectedMovie }) {

    const movie = {imdbID, Title, Year, Poster}

    return (

        //Link som gjør hele filmkortet klikkbart
        <Link to={`/movies/${imdbID}`}
            //anonym funksjon om console.log på movie
            onClick={() => {
                console.log("sjekk movie", movie)
                setSelectedMovie(movie)
            }}>
            <article>
                <h2>{Title}</h2>
                {/*noen filmer har ikke bilde.. finne løsning på det..*/}
                <img src={Poster} alt={Title} />
                <p>Utgivelsesår: {Year}</p>
            </article>
        </Link>

    )
}