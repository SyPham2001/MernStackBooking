import React from 'react'
import './featureProperties.css'
const FeatureProperties = () => {
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o='
          alt=''
          className='fpImg'
        />
        <span className='fpName'>Aparthotel Stare Miasto</span>
        <span className='fpCity'>Old Town, Ba Lan, Kraków</span>
        <span className='fpPrice'>Bắt đầu từ $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Tuyệt vời</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o='
          alt=''
          className='fpImg'
        />
        <span className='fpName'>7Seasons Apartments Budapest</span>
        <span className='fpCity'>06. Terézváros, Hungary, Budapest</span>
        <span className='fpPrice'>Bắt đầu từ $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Tuyệt vời</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/229265869.webp?k=5a68bc45bd2a7fdf582cccf4e9dcc1678d148d381f859e8f3d4ff163ad2e29e2&o='
          alt=''
          className='fpImg'
        />
        <span className='fpName'>Rue du Château</span>
        <span className='fpCity'>Pháp, Tarascon</span>
        <span className='fpPrice'>Bắt đầu từ $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Tuyệt vời</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o='
          alt=''
          className='fpImg'
        />
        <span className='fpName'>Oriente Palace Apartments</span>
        <span className='fpCity'>Centro, Tây Ban Nha, Madrid</span>
        <span className='fpPrice'>Bắt đầu từ $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Tuyệt vời</span>
        </div>
      </div>
    </div>
  )
}

export default FeatureProperties
