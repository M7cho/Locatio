import React, { useState } from 'react';
import './Properties.css';

const propertiesData = [
  {
    address: '1903 Riven St, Ottawa, ON',
    price: '$140',
    bedrooms: 2,
    rating: 4.6,
  },
  {
    address: '1738 Hecarim St, Gatineau, QC',
    price: '$190',
    bedrooms: 3,
    rating: 4.8,
  },
  {
    address: '49 Graves St, Gatineau, QC',
    price: '$80',
    bedrooms: 1,
    rating: 4.2,
  },
  {
    address: '2073 Mundo Ave, Ottawa, ON',
    price: '$250',
    bedrooms: 4,
    rating: 4.9,
  },
  {
    address: '992 Udyr Rd, Gatineau, QC',
    price: '$105',
    bedrooms: 2,
    rating: 4.0,
  },
  {
    address: '616 Teemo Dr, Gatineau, QC',
    price: '$175',
    bedrooms: 3,
    rating: 4.6,
  },
  {
    address: '25 Gragas Ln, Ottawa, ON',
    price: '$95',
    bedrooms: 2,
    rating: 3.8,
  },
  {
    address: '613 Kayn St, Ottawa, ON',
    price: '$220',
    bedrooms: 4,
    rating: 4.7,
  },
];

function Properties() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    card: '',
    startDate: '',
    endDate: ''
  });

  const handleBookingButtonClick = () => {
    setShowBookingModal(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingInfo((prevBookingInfo) => ({
      ...prevBookingInfo,
      [name]: value
    }));
  };

  const handleBookingSubmit = () => {
    if (Object.values(bookingInfo).some((value) => value.trim() === '')) {
      alert('Please fill in all the booking fields.');
      return;
    }

    if (parseInt(bookingInfo.age) < 18) {
      alert('You must be 18 years or older to book a property.');
      return;
    }

    const verificationNumber = Math.floor(Math.random() * 1000000);

    alert(
      `Thank you, ${bookingInfo.name}, for booking with Locatio Incorporation!\n\n` +
      `Your booking has been confirmed for ${bookingInfo.startDate} to ${bookingInfo.endDate}.\n\n` +
      `Verification number: ${verificationNumber}\n\n` +
      `If you need any assistance, please contact Locatio Incorporation via E-mail or Phone.`
    );

    setShowBookingModal(false);
  };

  const [priceFilter, setPriceFilter] = useState([0, 250]);
  const [bedroomsFilter, setBedroomsFilter] = useState([0, 4]);

  const handlePriceFilterChange = (event) => {
    const minPrice = parseInt(event.target.value[0]);
    const maxPrice = Math.min(parseInt(event.target.value[1]), 250); 
    setPriceFilter([Math.max(minPrice, 0), maxPrice]); 
  };

  const handleBedroomsFilterChange = (event) => {
    const minBedrooms = parseInt(event.target.value[0]);
    const maxBedrooms = Math.min(parseInt(event.target.value[1]), 4);
    setBedroomsFilter([Math.max(minBedrooms, 0), maxBedrooms]); 
  };

  const filteredProperties = propertiesData.filter((property) => {
    const price = parseInt(property.price.slice(1)); 
    const bedrooms = property.bedrooms;
    return (
      price >= priceFilter[0] &&
      price <= priceFilter[1] &&
      bedrooms >= bedroomsFilter[0] &&
      bedrooms <= bedroomsFilter[1]
    );
  });

  return (
    <div className="properties-container">
      <h2>Properties</h2>

      <div className="filter-box">
        <h2>Filter Properties</h2>
        <div className="filter-item">
          <label htmlFor="minPrice">Min Price ($):</label>
          <input
            type="number"
            id="minPrice"
            value={priceFilter[0]}
            onChange={(e) => setPriceFilter([parseInt(e.target.value), priceFilter[1]])}
            min="0"
            max="250"
          />
        </div>
        <div className="filter-item">
          <label htmlFor="maxPrice">Max Price ($):</label>
          <input
            type="number"
            id="maxPrice"
            value={priceFilter[1]}
            onChange={(e) => setPriceFilter([priceFilter[0], parseInt(e.target.value)])}
            min="0"
            max="250"
          />
        </div>
        <div className="filter-item">
          <label htmlFor="minBedrooms">Min Bedrooms:</label>
          <input
            type="number"
            id="minBedrooms"
            value={bedroomsFilter[0]}
            onChange={(e) => setBedroomsFilter([parseInt(e.target.value), bedroomsFilter[1]])}
            min="0"
            max="4"
          />
        </div>
        <div className="filter-item">
          <label htmlFor="maxBedrooms">Max Bedrooms:</label>
          <input
            type="number"
            id="maxBedrooms"
            value={bedroomsFilter[1]}
            onChange={(e) => setBedroomsFilter([bedroomsFilter[0], parseInt(e.target.value)])}
            min="0"
            max="4"
          />
        </div>
      </div>

      <div className="properties-list">
        {filteredProperties.map((property, index) => (
          <div key={index} className="property-item">
            <img src="https://images.coolhouseplans.com/plans/80523/80523-b440.jpg" alt={`Property ${index}`} />
            <h3>Address: {property.address}</h3>
            <p>Price: {property.price}/night</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Rating: {property.rating}/5</p>
            <button onClick={handleBookingButtonClick}>Book Now</button>
          </div>
        ))}
      </div>
      <div className="amenities-section">
        <h2>Amenities (All Properties):</h2>
        <ul>
          <p>Bathroom: Hair dryer, Cleaning products, Shampoo, Conditioner, Body soap, Hot water</p>
          <p>Bedroom and Laundry: Free washer, Free dryer, Essentials (Towels, Bed sheets, Soap, Toilet paper), Hangers, Bed linens, Extra pillows and blankets, Room-darkening shades, Iron, Clothing storage</p>
          <p>Entertainment: Ethernet connection, TV</p>
          <p>Heating and Cooling: Air conditioning, Ceiling fan, Portable fans, Central heating, Radiant heating</p>
          <p>Home Safety: Security cameras on property, Smoke alarm, Carbon monoxide alarm, Fire extinguisher, First aid kit</p>
          <p>Internet and Office: Wifi, Dedicated workspace</p>
          <p>Kitchen and Dining: Kitchen, Refrigerator, Microwave, Cooking basics, Dishes and silverware, Freezer, Electric stove, Oven, Hot water kettle, Coffee maker, Toaster, Baking sheet, Dining table</p>
        </ul>
      </div>

      <div className="disclaimer-section">
        <h2>Disclaimer</h2>
        <p>During your stay: You can contact Locatio by text, call, or e-mail.</p>
        <p>
          Liability: You are liable for all damages that are done to the property and will be charged if deemed major
          enough. Guests assume all responsibility for their personal safety and the safety of their belongings. We
          strive to provide a secure environment, guests are advised to keep their valuables secure and lock all doors and
          windows when leaving the property.
        </p>
      </div>

      {showBookingModal && (
        <div className="booking-modal">
          <h2>Booking Information</h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={bookingInfo.name}
            onChange={handleInputChange}
          />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={bookingInfo.age}
            onChange={handleInputChange}
          />
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={bookingInfo.email}
            onChange={handleInputChange}
          />
          <label htmlFor="phone">Phone-Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={bookingInfo.phone}
            onChange={handleInputChange}
          />
          <label htmlFor="card">Debit/Credit:</label>
          <input
            type="text"
            id="card"
            name="card"
            value={bookingInfo.card}
            onChange={handleInputChange}
          />
          <label htmlFor="startDate">Check-in Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={bookingInfo.startDate}
            onChange={handleInputChange}
          />
          <label htmlFor="endDate">Check-out Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={bookingInfo.endDate}
            onChange={handleInputChange}
          />
          <button onClick={handleBookingSubmit}>Submit</button>
          <button onClick={() => setShowBookingModal(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Properties;
