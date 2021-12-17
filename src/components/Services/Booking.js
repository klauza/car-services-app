import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import history from '../../history';

// Media
import { MechanicalEngineer, Engine, Pin, PoundSterling } from '../../Icons';

// CSS
import { BookingWrapper, PayWrapper } from './BookingCSS';
import { Button } from '../Reusable/Button';

const Booking = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [newBooking, setNewBooking] = React.useState({
    reg: null,
    location: null,
    service: null,
    price: null,
    paid: false,
  });

  useEffect(() => {
    if (newBooking.paid) {
      localStorage.setItem('booking', JSON.stringify(newBooking));
    }

    // Create booking obj if doesnt exist
    if (localStorage.getItem('booking') === null) {
      localStorage.setItem('booking', JSON.stringify(newBooking));
    } else {
      // Get booking
      const boo = JSON.parse(localStorage.getItem('booking')) || [];
      setNewBooking(boo);
    }
  }, [newBooking.paid]);

  // Update booking
  const updateNewItem = (e) => {
    let current = e.target.name;
    let value = e.target.value;
    setNewBooking((prevState) => ({ ...prevState, [current]: value }));

    if (current === 'service') {
      calculatePrice(value); // value = service name
    }
  };

  // Pay
  const payForBook = () => {
    setNewBooking((prevState) => ({ ...prevState, paid: true }));
    setTimeout(() => {
      history.push('/booking-summary');
    }, 750);
  };

  // Calculate total price
  const calculatePrice = (val) => {
    let current = 'price';
    let cena;
    switch (val) {
      case 'full_service':
        cena = '149,99';
        break;
      case 'MOT':
        cena = '24,99';
        break;
      case 'hho1':
        cena = '59,99';
        break;
      case 'hho2':
        cena = '89,98';
        break;
      case 'hho3':
        cena = '119,97';
        break;
      case 'eco':
        cena = '99,99';
        break;
      case 'performance':
        cena = '99,99';
        break;
      case 'hybrid':
        cena = '129,99';
        break;
      case 'replacement':
        cena = '399,99';
        break;
      case 'regeneration':
        cena = '99,99';
        break;
      case 'tyre1':
        cena = '49,99';
        break;
      case 'tyre4':
        cena = '149,99';
        break;
      case 'brake1':
        cena = '19,99';
        break;
      case 'brake4':
        cena = '69,99';
        break;
      case 'padbrake1':
        cena = '14,99';
        break;
      case 'padbrake4':
        cena = '44,99';
        break;
      case 'normalcar':
        cena = '19,99';
        break;
      case 'suvcar':
        cena = '29,99';
        break;
      case 'transportercar':
        cena = '39,99';
        break;

      case 'aircon':
        cena = '25';
        break;
    }

    setNewBooking((prevState) => ({ ...prevState, [current]: cena }));
  };

  // Save booking from useState
  const submitBooking = () => {
    localStorage.setItem('booking', JSON.stringify(newBooking));
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="position-relative">
      <BookingWrapper pose={isOpen ? 'open' : 'closed'}>
        {/* Registration Number */}
        <div className="grid">
          <div className="grid-1">
            <div className="icon-box">
              <MechanicalEngineer />
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
              <Pin />
            </div>
            <div className="name-box">Logistics</div>
          </div>

          <div className="grid-2">
            <div className="input-box input-radio-parent">
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
              <Engine />
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
                <option name="service" value="full_service">
                  Full Service
                </option>
                <option name="service" value="MOT">
                  MOT
                </option>

                <option className="greyed" disabled>
                  Carbon cleaning
                </option>
                <option name="service" value="hho1">
                  HHO - 1 car
                </option>
                <option name="service" value="hho2">
                  HHO - 2 cars
                </option>
                <option name="service" value="hho3">
                  HHO - 3 cars
                </option>

                <option className="greyed" disabled>
                  Remapping
                </option>
                <option name="service" value="eco">
                  Economic Remap
                </option>
                <option name="service" value="performance">
                  Performance Remap
                </option>
                <option name="service" value="hybrid">
                  Hybrid Remap
                </option>

                <option className="greyed" disabled>
                  DPF
                </option>
                <option name="service" value="replacement">
                  DPF Replacement
                </option>
                <option name="service" value="regeneration">
                  DPF Regeneration
                </option>

                <option className="greyed" disabled>
                  Wheels
                </option>
                <option name="service" value="tyre1">
                  1 tyre replacement
                </option>
                <option name="service" value="tyre4">
                  4 tyres replacement
                </option>
                <option name="service" value="brake1">
                  1 brake replacement
                </option>
                <option name="service" value="brake4">
                  4 brakes replacement
                </option>
                <option name="service" value="padbrake1">
                  1 pad brake replacement
                </option>
                <option name="service" value="padbrake4">
                  4 pad brakes replacement
                </option>

                <option className="greyed" disabled>
                  Aircon recharge
                </option>
                <option name="service" value="normalcar">
                  Normal Vehicle
                </option>
                <option name="service" value="suvcar">
                  SUV Vehicle
                </option>
                <option name="service" value="transportercar">
                  Transporter Vehicle
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
              <PoundSterling />
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
      <PayWrapper
        style={
          !isOpen
            ? { opacity: '1', transform: 'translateY(0px) translateX(-50%)' }
            : { opacity: '0', transform: 'translateY(-500px) translateX(-50%)' }
        }
      >
        <Button
          className="back-pay-btn"
          onClick={() => setIsOpen((prevState) => !prevState)}
          innerText="Back"
        />

        <div className="pay-description">
          <p>
            <b>$ {newBooking.price} </b>is due to be paid
          </p>
        </div>
        {/* /booking-summary */}
        <NavLink exact to="#">
          <Button onClick={() => payForBook()} innerText="Pay" />
        </NavLink>
      </PayWrapper>
    </div>
  );
};

export default Booking;
