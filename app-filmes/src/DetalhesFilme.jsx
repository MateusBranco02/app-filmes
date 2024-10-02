import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './DetalhesFilme.css';

export default function DetalhesFilme() {
    const { idFilme } = useParams();
    const [filme, setFilme] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const detalhesFilme = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=28d0dee8&i=${idFilme}`);
                setFilme(response.data);
                setLoading(false);
                console.log(response.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes dos filme: ', error);
                setFilme(false);
            }
        }

        detalhesFilme();
    }, []);

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <>
            <div className="container-detalhes">
                <h1 className="header-detalhes">{filme.Title}</h1>

                <div className="filme-container">
                    <div className="filme-poster">
                        <img src={filme.Poster} alt={filme.Title} />
                    </div>

                    <div className="filme-info">
                        <p><strong>Sinopse:</strong> {filme.Plot}</p>
                        <p><strong>Gênero:</strong> {filme.Genre}</p>
                        <p><strong>Diretor:</strong> {filme.Director}</p>
                        <p><strong>Atores:</strong> {filme.Actors}</p>
                        <p><strong>Idioma:</strong> {filme.Language}</p>
                        <div className="sub-info">
                            <span><strong>Lançamento:</strong> {filme.Released}</span>
                            <span><strong>Duração:</strong> {filme.Runtime}</span>
                            <span><strong>Avaliação:</strong> {filme.imdbRating}</span>
                        </div>
                        <Link to="/" className="voltar">Voltar</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
