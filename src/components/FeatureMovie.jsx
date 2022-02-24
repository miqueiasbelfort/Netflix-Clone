import React from "react"
import "./FeatureMovie.css"

export default ({item}) => {

    //Trasformar a data no item em Data da funcão incluida no JS
    const firtDate = new Date(item.first_air_date)

    //Criando array vazia para colocar os nomes dos objs genres 
    let genres = []

    //Percorendo o obj com laço for e adicionando no array vazio os nomes
    for(let i in item.genres){
        genres.push( item.genres[i].name)
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured-info">

                        <div className="featured-points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firtDate.getFullYear()}</div>
                        <div className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''} </div>

                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a className="featured-wacthbutton" href={`/watch/${item.id}`}>► Assistir</a>
                        <a className="featured-mylistbutton" href={`/list/add/${item.id}`}>+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}