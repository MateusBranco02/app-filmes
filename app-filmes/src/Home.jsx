import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';

export default function Home() {
  const [buscar, setBuscar] = useState('');
  const [filmes, setFilmes] = useState([]);

  const carregarFilme = async () => {
    try {
      const url = `http://www.omdbapi.com/?apikey=28d0dee8&s=${buscar}`;
      const response = await axios.get(url);
      setFilmes(response.data.Search);
      localStorage.setItem('filmes', JSON.stringify(response.data.Search));
      setBuscar('');
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const filmesCarregados = localStorage.getItem('filmes');
    if (filmesCarregados) {
      setFilmes(JSON.parse(filmesCarregados));
    }
  }, []);

  return (
    <>
      <header>OMDB API</header>

      <div className='container-buscar'>
        <input
          type="text"
          placeholder='Digite um título'
          value={buscar}
          onChange={(event) => setBuscar(event.target.value)}
        />
        <button onClick={carregarFilme}>Buscar</button>
      </div>

      <ul className='filmes-container'>
        {filmes && filmes.length > 0 ? (
          filmes.map((filme, key) =>
            <div key={filme.imdbID} className='card'>
              <Link to={`/filme/${filme.imdbID}`} key={key}>
                <li>
                  <img src={filme.Poster} alt={filme.Title} />
                  <h2>{filme.Title}</h2>
                </li>
              </Link>
            </div>
          ))
          : (
            <p>Nenhum filme encontrado!</p>
          )}
      </ul>
    </>
  );
}
