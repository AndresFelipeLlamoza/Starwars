import { useEffect, useState } from 'react';

function useTanks() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const getData = async () => {
        try {
            const data = await fetch('https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=0a73e26eebefadd6f7177cca408680c9&language=en&page_no=1');
            if(!data.ok){
                throw new Error('Failed to fetch data')
            }
            const tanksList = await data.json();
            setVehicles(Object.values(tanksList.data));
            setLoading(false);
        }
        catch (error){
            console.error('Error while fetching data:', error)
        }
    }
    
    useEffect(()=>{
        getData()
    },[])
    return{
        vehicles,
        loading,
        error,
    };
}

export default useTanks;