import React, { useState, useEffect } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import './App.css'
import FeatureMovie from './components/FeatureMovie'
import Header from './components/Header' //./components/Header/index.jsx

function App() {

  //Salvar a list para ser exibida
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  //Monitorar o hander da página 
  const [blackHeander, setBlackHeader] = useState(false)

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


  //Monitorar o scroll
  useEffect(() => {
    const scrollLister = () => {
      if(window.scrollY > 15){
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    //Add o scrollLister quando tiver alguma ação de scroll
    window.addEventListener('scroll', scrollLister)

    //Remover o scrollLister quando o scroll parar
    return () => {
      window.removeEventListener("scroll", scrollLister)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeander}/>

      { featuredData && 
        <FeatureMovie item={featuredData}/>
      }

      <section className='lists'>

        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}

      </section>

      <footer>
        Made with <span role="img" aria-label="coração">❤️</span>by Miqueias Belfort <br />
        Netflix Clone <br />
        <a href="https://www.instagram.com/miqueiasbelfort/">Instagram</a> <br />
        <a href="https://www.linkedin.com/in/miqueias-belfort-6209ba209/">Linkedin</a>
      </footer>

      {movieList.length <= 0 &&
        <div className='loading'>
            <img src="//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.demilked.com%2Fwp-content%2Fuploads%2F2016%2F06%2Fgif-animations-replace-loading-screen-10.gif&f=1&nofb=1" alt="Loading Netflix" />
        </div>
      }
    </div>
  )
}

export default App
