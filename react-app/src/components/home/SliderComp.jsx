
import Slider from 'react-slick'

const SliderComp = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className='!flex items-center bg-gray-100 px-6'>
            <div className=''>
              <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burda</div>
              <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos rerum aspernatur veritatis sit corrupti dolorem placeat! Dolor animi odit harum, obcaecati incidunt adipisci qui veritatis, nostrum facere, voluptas laudantium.</div>
              <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img className='w-6/12' src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-ayakkab%C4%B1s%C4%B1-BHxKnD.png' alt=""/>
          </div>
          <div className='!flex items-center bg-gray-100 px-6'>
            <div className=''>
              <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burda</div>
              <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos rerum aspernatur veritatis sit corrupti dolorem placeat! Dolor animi odit harum, obcaecati incidunt adipisci qui veritatis, nostrum facere, voluptas laudantium.</div>
              <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img className='w-6/12' src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b650c8c6-2cb8-43fb-8edc-5d5da977f89b/custom-nike-air-max-95-by-you.png" alt="" />
          </div>
            
        </Slider>
      </div>
    )
  }

  export default SliderComp