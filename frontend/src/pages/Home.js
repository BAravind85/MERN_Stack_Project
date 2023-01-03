import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Compenents/Layout";
import Loading from "../Compenents/Loading";
import { getAllCars } from "../redux/actions/actions";


const Home = () => {
  const navigate=useNavigate();
  const { cars } = useSelector((state) => state.reducer);
  const {loading}=useSelector((state)=>state.loading);
  console.log(cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  useEffect(()=>{
    if(!localStorage.getItem('userInfo')){
      navigate('/login');
    }
  })

  return (
    <Layout>
      <div className="slider">
        <div className="left">
          <h1 className="title">TATA NEXON</h1>
        </div>
        <div className="right">
          <img src="./images/sliders/nexon.png" alt="" />
        </div>
      </div>
      <div className="content">
        <div className="content-row">
          <h1 className="big-title">Top cars for purchase</h1>
        </div>
        <div className="content-row">

        </div>
    
        <div className="content-row">
            {loading ? (<Loading/>) : (                
                <div className="content-groups">
                    {cars.map((car) => {
                    return (
                        <div className="card" key={car._id}>
                        <div className="card-body">
                            <img className="img-cars" src={car.image} alt={car.name} />
                        </div>
                        <div className="card-footer">
                            <div className="card-footer-top">
                            <h3 className="car-title">{car.name}</h3>
                            <p className="price">
                                Price{" "}
                                <span className="bold-price">RS.{car.price}L</span>
                            </p>
                            </div>
                            <div className="card-footer-bottom">
                            <button className="book-now"><Link to={`/car/${car._id}`} className='book-link'>Book Now</Link></button>
                            </div>
                        </div>
                        </div>
                    );
                    })}
                </div>
            )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
