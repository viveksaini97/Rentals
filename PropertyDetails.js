import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/properties/${id}`)
      .then(response => {
        setProperty(response.data.property);
      })
      .catch(error => {
        console.error('Error fetching property details:', error);
      });
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <img src={property.media} alt={property.description} />
      <h2>{property.description}</h2>
      <p>Price: ${property.price}</p>
      <p>Address: {property.address}</p>
      <h3>Property Summary:</h3>
      <ul>
        <li>Building Type: {property.propertySummary.buildingType}</li>
        <li>Stories: {property.propertySummary.stories}</li>
        <li>Room Type: {property.propertySummary.roomType}</li>
        <li>Distance to College: {property.propertySummary.distanceToCollege}</li>
        <li>Nearest Bus Stop: {property.propertySummary.nearestBusStop}</li>
        <li>Utilities: {property.propertySummary.utilities ? 'Yes' : 'No'}</li>
        <li>Furnishing: {property.propertySummary.furnishing}</li>
        <li>Amenities: {property.propertySummary.amenities.join(', ')}</li>
      </ul>
      <h3>Seller Information:</h3>
      <p>Name: {property.sellerInformation.name}</p>
      <p>Email: {property.sellerInformation.email}</p>
      <p>Phone: {property.sellerInformation.phone}</p>
    </div>
  );
};

export default PropertyDetails;
