import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Compenents/Layout';
import { getAllCars } from '../redux/actions/actions';

const Home = () => {
    const {cars} = useSelector(state => state.reducer);
    console.log(cars)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCars())
    },[dispatch]);

  return (
    <Layout>
        <div className="slider">
            <div className='left'>
            <h1 className='title'>TATA NEXON</h1>
            </div>
            <div className='right'>
                <img src='./images/sliders/nexon.png' alt=''/>
            </div>
        </div>
        <div className='content'>
            <div className='content-row'>

            </div>
            <div className='content-row'>
                <div className='content-groups'>
                    {cars.map((car)=>{
                        return <div className='cards'>
                            <div className='card-body'>
                                <img src={car.image} alt={car.name}/>
                            </div>
                            <div className='card-footer'>
                                <div className='card-footer-top'>
                                    <h3 className='car-title'>{car.name}</h3>
                                    <p className='price'>Price RS.{car.price}L</p>
                                </div>
                                <div className='card-footer-bottom'>
                                    <button className='book-now'>Book Now</button> 
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    </Layout>
  )
}

export default Home;