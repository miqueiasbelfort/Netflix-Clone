import React, { useState, useEffect } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import './App.css'

function App() {

  //Salvar a list para ser exibida
  const [movieList, setMovieList] = useState([])

  //Quando a tela for carregado vai ser execultado essa função
  useEffect(() => {
    
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList()
      //console.log(list)
      setMovieList(list) //Mandando para o useState (movieList)
    }

    loadAll() //Rodando a função
  }, []);

  return (
    <div className="page">
      <section className='lists'>

        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}

      </section>
    </div>
  )
}

export default App
