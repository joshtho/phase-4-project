import React from 'react'
import LocationTile from './LocationTile'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function LocationsList({locations}) {
    console.log(locations)
  return (
    <div className='row'>
        { locations ?
        locations.map(location => (
            <LocationTile key={location.id} location={location} />
        ))
        : "Loading...."
        }
        <h1>Add a location you would like to visit!</h1>
        {/* <Link to="/locations/add">
            <Button>Add Location</Button>
    </Link> */}
    </div>
  )
}

export default LocationsList