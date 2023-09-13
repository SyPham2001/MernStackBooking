import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/491373522.webp?k=6c15e7be5e606c18cde47007777f575debb72d3c9cb7b9420bfc047b1ff9a4fe&o='
        alt=''
        className='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>Chung Cư Melody Vũng Tàu</h1>
        <span className='siDistance'>Cách trung tâm 1,2km</span>
        <span className='siTaxiOp'>Miễn phí taxi </span>
        <span className='siSubtitle'>Căn Hộ 1 Phòng Ngủ</span>
        <span className='siFeatures'>1 phòng khách • 1 phòng tắm • 1 phòng bếp • 55m²</span>
        <span className='siCancelOp'>Miễn phí hủy </span>
        <span className='siCancelOpSubtitle'>Không cần thanh toán trước – thanh toán tại chỗ nghỉ!</span>
      </div>
      <div className='siDetails'>
        <div className="siRating">
            <div className="siRatingDesc">
                <span>Xuất sắc</span>
                <small>3 đánh giá</small>
            </div>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">VND 4.147.700</span>
            <span className="siTaxOp">Đã bao gồm thuế và phí</span>
            <button className='siCheckButton'>Xem chỗ trống  </button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
