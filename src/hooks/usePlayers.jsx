import React from 'react';
import { useEffect, useState } from 'react';
function usePlayers() {
    const {player, setPlayer} = useState([]);
    const {loading, setLoading} = useState(true);
    const {error, setError} = useState(null);

    const getData = async () => {
        const data = await fetch('')
    }

    return (
        <div>
            
        </div>
    );
}

export default usePlayers;