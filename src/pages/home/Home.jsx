import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeatureProperties from '../../components/featureProperties/FeatureProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
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
        <h1 className='homeTitle' style={{
          marginBottom : '-15px'
        }}>Nhà ở mà khách yêu thích</h1>
        <FeatureProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
