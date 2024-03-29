import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../Compenents/Layout";
import statesData from "../statesData.json";

const Car = () => {
  const navigate = useNavigate();
  const [car, setCar] = useState([]);
  const [state, setState] = useState([]);
  const [districts, setDistricts] = useState([]);
  const params = useParams();
  const { carId } = params;
  const states = statesData.states;

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/cars/car/${carId}`);
        console.log(result.data);
        setCar(result.data);
      } catch (err) {
        console.log("error!");
      }
    };
    fetchData();
  }, [carId, navigate]);
  const handleClick=(e)=>{
    toast.success("Thanks for your conformation!");
    navigate('/')
  }

  const handleState = (e) => {
    setState(e.target.value);
    const getDist = states.find((x) => x.state === state);
    console.log(state);
    setDistricts(getDist);
    console.log(districts, state);
  };

  return (
    <Layout>
      <div className="car-container">
        <h3 className="car-booktitle">Book a Car</h3>
        <div className="car-row">
          <div className="car-col">
            <div className="car-groups">
              <div className="car-group">
                <h2 className="car-subtitle">Car Info</h2>
                <div className="car-info">
                  <span>{car.name}</span>
                  <span>Price: RS.{car.price}L</span>
                  <span>Fuel Type: {car.fuelType}</span>
                  <span>Max Persons: {car.capacity}</span>
                </div>
              </div>
              <div className="car-group">
                <h2 className="car-subtitle">Book a Car</h2>
                <div className="avail">
                  <h3 className="">Check Availability:</h3>
                  <div>
                    <select
                      name="state"
                      className="form-control"
                      onChange={handleState}
                    >
                      <option value="">--Select State--</option>
                      {states.map((x) => {
                        return <option>{x.state}</option>;
                      })}
                    </select>
                  </div>
                  <div>
                    <select name="district" className="form-control">
                      <option value="">--Select District--</option>
                      {/* {
                            districts.map((x)=>{
                              console.log(x)
                              return <option>{x}</option>
                            })
                          } */}
                    </select>
                  </div>
                </div>
                  <div className="btn">
                    <button className="book-now" onClick={handleClick}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="car-col">
            <div className="car-image">
              <img src={car.image} className="car-img" alt={car.name} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Car;
