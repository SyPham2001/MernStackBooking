import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faHouse,
  faKitchenSet,
  faLocationDot,
  faWifi,
  faPersonSnowboarding,
  faFan,
  faBath,
  faVolumeXmark,
  faCircleCheck,
  faPersonBiking,
  faSquareParking,
  faWineGlass,
  faCarSide
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/489027208.jpg?k=324860d915ef18193e8333712a18e5fdd6e254a20c1da647807be0af06a8fe2f&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/488894004.jpg?k=8c097369d85068d73cd7d7186a3ca58ac397d24aab28a5cd77a962545f57cad5&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/488893291.jpg?k=e4d239a9dd4bc3b88982e3bc21878fed3d9c9c0e8dd1fb617fc714e7f7e8a815&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/488901856.jpg?k=6f62dfe34a3f935f8e6b3b8290f285aea06e74cfa524bef5fb13825028cf187c&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/488901853.jpg?k=6161088f69638649cfea739eed3305fc00af9a38f7011e87b684192eae124a34&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/488901854.jpg?k=05a5d62ce16fd17b3206fcb84ae5502531543f2dd102920b5c5dcf02223bd31f&o=&hp=1'
    }
  ]

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='hotelContainer'>
        {open && (
          <div className='slider'>
            <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
            <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('l')} />
            <div className='sliderWrapper'>
              <img src={photos[slideNumber].src} alt='' className='sliderImg' />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('r')} />
          </div>
        )}
        <div className='hotelWrapper'>
          <button className='bookNow'>Đặt căn hộ của bạn!</button>
          <h1 className='hotelTitle'>Chung Cư Melody Vũng Tàu</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>149 Võ Thị Sáu, Vũng Tàu, Việt Nam </span>
          </div>
          <span className='hotelDistance'>Cách trung tâm 1,2km</span>
          <span className='hotelPriceHighlight'>Không cần thanh toán trước – thanh toán tại chỗ nghỉ!</span>
          <div className='hotelImages'>
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper' key={i}>
                <img onClick={() => handleOpen(i)} src={photo.src} alt='' className='hotelImg' />
              </div>
            ))}
          </div>
          <div className='hotelDescIcon'>
            <div className='hotelDescIconItem'>
              <div className='hotelDesciItem'>
                <FontAwesomeIcon icon={faHouse} />
                <span>Căn hộ</span>
              </div>
              <div className='hotelDesciItem'>
                <FontAwesomeIcon icon={faKitchenSet} />
                <span>Bếp</span>
              </div>
              <div className='hotelDesciItem'>
                <FontAwesomeIcon icon={faBuilding} />
                <span>Nhìn ra thành phố</span>
              </div>
              <div className='hotelDesciItem'>
                <FontAwesomeIcon icon={faWifi} />
                <span>Wifi miễn phí</span>
              </div>
              <div className='hotelDesciItem'>
                <FontAwesomeIcon icon={faPersonSnowboarding} />
                <span>Sân hiên</span>
              </div>
              <div className='hotelDesciItem'>
                <FontAwesomeIcon icon={faHouse} />
                <span>Ban công</span>
              </div>
              <div className='hotelDesciItem'>
                <FontAwesomeIcon icon={faFan} />
                <span>Điều hòa</span>
              </div>
              <div className='hotelDesciItem'>
                <FontAwesomeIcon icon={faBath} />
                <span>Phòng tắm riêng</span>
              </div>
            </div>
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Ở trong trung tâm thành phố Vũng Tàu</h1>
              <div className='hotelDesc'>
                <span>
                  Nằm cách Bãi Sau chưa đầy 1 km, Chung Cư Melody Vũng Tàu có quầy bar, sảnh khách chung cũng như chỗ
                  nghỉ gắn máy điều hòa với ban công và WiFi miễn phí.
                </span>
                <span>
                  Căn hộ có sân hiên, tầm nhìn ra biển, khu vực ghế ngồi, truyền hình cáp màn hình phẳng, bếp đầy đủ
                  tiện nghi với lò nướng và lò vi sóng cũng như phòng tắm riêng với góc tắm vòi sen mở và áo choàng tắm.
                  Tủ lạnh, bếp nấu, đồ dùng nhà bếp cũng như máy pha cà phê và ấm đun nước cũng được cung cấp.
                </span>
                <span>Chung Cư Melody Vũng Tàu offers a children's playground.</span>
                <span>Chỗ nghỉ cung cấp cả dịch vụ cho thuê xe đạp và xe hơi.</span>
                <span>
                  Bãi Trước cách Chung Cư Melody Vũng Tàu 1,7 km trong khi Bãi Dứa cách đó 2,7 km. Sân bay gần nhất là
                  sân bay Vũng Tàu, cách căn hộ 5 km.
                </span>
              </div>
              <h2 className='hotelTitle2'>Các tiện nghi được ưa chuộng nhất</h2>
              <div className='hotelDesc2'>
                <div className='hotelDescTrend'>
                  <div className='hotelDescTrendIcon'>
                    <FontAwesomeIcon icon={faVolumeXmark} />
                    <span>Phòng cách âm</span>
                  </div>
                  <div className='hotelDescTrendIcon'>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <span>Toilet dành cho người khuyết tật</span>
                  </div>
                  <div className='hotelDescTrendIcon'>
                    <FontAwesomeIcon icon={faPersonBiking} />
                    <span>Cho thuê xe đạp</span>
                  </div>
                </div>
                <div className='hotelDescTrend'>
                  <div className='hotelDescTrendIcon'>
                    <FontAwesomeIcon icon={faSquareParking} />
                    <span>Bãi đỗ xe trong khuôn viên</span>
                  </div>
                  <div className='hotelDescTrendIcon'>
                    <FontAwesomeIcon icon={faWineGlass} />
                    <span>Quầy bar</span>
                  </div>
                  <div className='hotelDescTrendIcon'>
                    <FontAwesomeIcon icon={faBuilding} />
                    <span>Ban công</span>
                  </div>
                  <div className='hotelDescTrendIcon'>
                    <FontAwesomeIcon icon={faWifi} />
                    <span>Wifi miễn phí</span>
                  </div>
                </div>
                <div className='hotelDescTrend'>
                  <div className='hotelDescTrendIcon'>
                    <FontAwesomeIcon icon={faFan} />
                    <span>Điều hòa miễn phí</span>
                  </div>
                  <div className='hotelDescTrendIcon'>
                    <FontAwesomeIcon icon={faBuilding} />
                    <span>Sân hiên</span>
                  </div>
                  <div className='hotelDescTrendIcon'>
                    <FontAwesomeIcon icon={faCarSide} />
                    <span>Dịch vụ đưa đón</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Điểm nổi bật của chỗ nghỉ</h1>
              <h1>Hoàn hảo cho kỳ nghỉ trong 1 tuần!</h1>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <FontAwesomeIcon icon={faLocationDot} />
                Địa điểm hàng đầu: Được khách gần đây đánh giá cao (10,0 điểm)
              </span>
              <h2>
                <b>VND 4.147.700</b> (7 đêm)
              </h2>
              <button>Đặt ngay!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
