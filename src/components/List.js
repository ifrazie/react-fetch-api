import {useState, useEffect} from 'react';
import Character from './Character';

function List() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                'https://rickandmortyapi.com/api/character'
            )
            const {results} = await data.json();
            setCharacters(results)
            setLoading(false);
        }

        fetchData().then(r => {
            console.log(r);
        });
    }, [characters.length]);
    return (
        <div>
            <h2>Characters</h2>
            <div className="row">
                {
                    loading ? (
                        <div className="loading">Loading...</div>
                    ) : (
                        characters.map((character) => (
                            <Character
                                key={character.id}
                                name={character.name}
                                origin={character.origin}
                                image={character.image}
                            />
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default List;