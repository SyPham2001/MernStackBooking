import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <div
          style={{
            marginBottom: '-20px'
          }}
        >
          <h1 className='homeTitle'>
            Khám phá Việt Nam
            <p className='homeTilteDes'>Các điểm đến phổ biến này có nhiều điều chờ đón bạn</p>
          </h1>
        </div>
        <PropertyList />
        <h1 className='homeTitle'>Nhà ở mà khách yêu thích</h1>
      </div>
    </div>
  )
}

export default Home
