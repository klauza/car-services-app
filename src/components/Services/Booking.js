import React, { useEffect, useState } from 'react';

// Media
import { Engine, Heart } from '../../Icons';

// CSS
import { BookingWrapper } from './BookingCSS';
import { Button } from '../Reusable/Button';

const Booking = () => {
  const [newBooking, setNewBooking] = React.useState({
    reg: null,
    location: null,
    service: null,
    price: null,
  });

  useEffect(() => {
    // Create booking obj if doesnt exist
    if (localStorage.getItem('booking') === null) {
      localStorage.setItem('booking', JSON.stringify(newBooking));
    }

    // Get booking
    const boo = JSON.parse(localStorage.getItem('booking')) || [];
    setNewBooking(boo);
  }, []);

  // Save booking from useState
  const submitBooking = () => {
    localStorage.setItem('booking', JSON.stringify(newBooking));
  };

  // Update booking
  const updateNewItem = (e) => {
    let current = e.target.name;
    let value = e.target.value;
    setNewBooking((prevState) => ({ ...prevState, [current]: value }));

    if (current === 'service') {
      calculatePrice(value); // value = service name
    }
  };

  // Calculate total price
  const calculatePrice = (val) => {
    let current = 'price';
    let cena;
    switch (val) {
      case 'MOT':
        cena = '15';
        break;
      case 'full_service':
        cena = '149,99';
        break;
      case 'aircon':
        cena = '25';
        break;
    }

    setNewBooking((prevState) => ({ ...prevState, [current]: cena }));
  };

  return (
    <BookingWrapper>
      {/* Registration Number */}
      <div className="grid">
        <div className="grid-1">
          <div className="icon-box">
            <Heart />
          </div>
          <div className="name-box">Registration number</div>
        </div>

        <div className="grid-2">
          <div className="input-box">
            <input
              type="text"
              name="reg"
              id="reg"
              value={newBooking.reg !== null ? newBooking.reg : ''}
              onChange={(e) => updateNewItem(e)}
            />
          </div>
        </div>
      </div>

      {/* Logistics */}
      <div className="grid">
        <div className="grid-1">
          <div className="icon-box">
            <Heart />
          </div>
          <div className="name-box">Logistics</div>
        </div>

        <div className="grid-2">
          <div className="input-box">
            <label htmlFor="location1">
              My Location
              <input
                checked={newBooking.location === 'my_location' ? true : ''}
                type="radio"
                name="location"
                id="location1"
                value="my_location"
                onChange={(e) => updateNewItem(e)}
              />
            </label>
            <label htmlFor="location2">
              Your location
              <input
                checked={newBooking.location === 'your_location' ? true : ''}
                type="radio"
                name="location"
                id="location2"
                value="your_location"
                onChange={(e) => updateNewItem(e)}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Service */}
      <div className="grid">
        <div className="grid-1">
          <div className="icon-box">
            <Heart />
          </div>
          <div className="name-box">Service type</div>
        </div>

        <div className="grid-2">
          <div className="input-box">
            <select
              name="service"
              className="select-type"
              onChange={(e) => updateNewItem(e)}
              value={
                newBooking.service !== null ? newBooking.service : 'default'
              }
            >
              <option name="service" disabled={true} value="default">
                Select service:
              </option>
              <option name="service" value="MOT">
                MOT
              </option>
              <option name="service" value="full_service">
                Full Service
              </option>
              <option name="service" value="aircon">
                Aircon
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Add a service */}
      {/* <div className="grid">
        <div className="grid-1">
          <div className="icon-box">
            <Heart />
          </div>
          <div className="name-box">Add a service</div>
        </div>

        <div className="grid-2">
          <div className="input-box"></div>
        </div>
      </div> */}

      {/* total Price */}
      <div className="grid">
        <div className="grid-1">
          <div className="icon-box">
            <Heart />
          </div>
          <div className="name-box">Total price</div>
        </div>

        <div className="grid-2">
          <div className="input-box">
            $ {newBooking.price !== null ? newBooking.price : '0'}
          </div>
        </div>
      </div>

      <Button onClick={submitBooking} innerText="Book and Pay" />
    </BookingWrapper>
  );
};

export default Booking;
