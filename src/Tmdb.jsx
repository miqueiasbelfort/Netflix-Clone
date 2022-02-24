const API_KEY = "2a8443c651f24ef3a971ff5d07790dfd"
const API_BASE = "https://api.themoviedb.org/3"

/*
    O QUE VAMOS PEGAR
    -> Originais da Netflix
    -> Recomendados (trending)
    -> Em alta (top rated)
    -> Acão, comédia, terror, romance, documentários
*/

//Pegar o link e fazer a requisição para pegar os dados da API
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json() /* Só vai ir para o return
    quando chegar o resultado do awiat*/
    return json
}


export default {
    getHomeList: async () =>{
        return [
            // Lista de todas as requisições para pegar na API(back-end)
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`) //Seriado apenas da Netflix = 213
            },
            {
                slug: "trending",
                title: "Recomendados para Você",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}

        if (movieId){
            switch (type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                default:
                    info = ""
            }
        }

        return info
    }
}