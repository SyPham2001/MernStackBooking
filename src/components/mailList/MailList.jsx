import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
      <h2 className='mailTitle'>Tiết kiệm thời gian và tiền bạc!</h2>
      <span className='mailDescription'>Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn</span>
      <div className='mailInputContainer'>
        <input type='text' placeholder='Email của bạn' />
        <button>Đăng ký</button>
      </div>
    </div>
  )
}

export default MailList
