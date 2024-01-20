import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useTanks from '../../hooks/useTanks';
function Cards() {
  const {loading, error, vehicles} = useTanks()
  return (
    <div className="tanksBody">
      <h1 style={{padding: '20px', color: 'white'}} className='tanksTitle'> Tanks list</h1>
      <div className='tanksCardsContainer'>
        {loading ? (
          <h2>Loading data...</h2>
        ):error ? (
          <h2>Error: {error.message}</h2>
        ):(
          vehicles.map((vehicle)=>(
            <Card className='tankCardStyle'key={vehicle.tank_key} style={{ width: '18rem', color: 'white' }}>
              <Card.Img variant="top" src={vehicle.images.big_icon} />
              <Card.Body>
                <Card.Title className='tanksTitle'>{vehicle.name}</Card.Title>
                <Card.Text>{vehicle.nation}</Card.Text>
                <Card.Text>{vehicle.tier}</Card.Text>
                <Card.Text>{vehicle.type}</Card.Text>
                <Card.Text>
                  
                  
                </Card.Text>
                <Button variant="primary">More information</Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

export default Cards;