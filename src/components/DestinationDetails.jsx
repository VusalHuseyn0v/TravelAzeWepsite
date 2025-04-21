import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Data from './Cards';
import NoPage from '../Pages/NoPage';

const DestinationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [validDestination, setValidDestination] = useState(true);
    const [destination, setDestination] = useState(null);

    useEffect(() => {

        const validIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

        if (!validIds.includes(id)) {
            setValidDestination(false);
            navigate('/noPage');
        } else {
            const destinationData = Data.find(item => item.id.toString() === id);
            if (destinationData) {
                setDestination(destinationData);
            } else {
                setValidDestination(false);
            }
        }
    }, [id, navigate]);

    if (!validDestination || !destination) {
        return <NoPage />;
    }

    return (
        <div>
            <h2>{destination.destTitle}</h2>
            <img src={destination.imgSrc} alt={destination.destTitle} />
            <p>{destination.description}</p>
            <h3>{destination.fees}</h3>
            <span>{destination.location}</span>
        </div>
    );
};

export default DestinationDetails;
