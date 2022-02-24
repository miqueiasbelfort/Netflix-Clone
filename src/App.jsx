import React, { useState, useEffect } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import './App.css'
import FeatureMovie from './components/FeatureMovie'

function App() {

  //Salvar a list para ser exibida
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  //Quando a tela for carregado vai ser execultado essa função
  useEffect(() => {
    
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList()
      //console.log(list)
      setMovieList(list) //Mandando para o useState (movieList)

      //Pegando o Featured
      let originals = list.filter(i => i.slug === "originals") //Pegando apenas os da Netflix

      //Criando um número aleatorio
      let randomChose = Math.floor(Math.random() * (originals[0].items.results.length))

      //Pegando um elemento especifico com o randomChose (Número aleátorio)
      let chosen = originals[0].items.results[randomChose]

      //console.log(chosen)

      //Pegar as informações adcionais do filme escolhido
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)

      //console.log(chosenInfo)

    }

    loadAll() //Rodando a função
  }, []);

  return (
    <div className="page">

      { featuredData && 
        <FeatureMovie item={featuredData}/>
      }

      <section className='lists'>

        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}

      </section>
    </div>
  )
}

export default App
