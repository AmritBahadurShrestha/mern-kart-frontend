import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import type { IImage } from '../../../../types/global.types'
import Slider from 'react-slick'

interface IProps {
    images: IImage[]
}
const ImageCarousel:React.FC<IProps> = ({images}) => {
    const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    // <div className='w-full h-[400px] aspect-square'>
    //     <Slider className='h-full' {...settings}>
    //         {
    //             images.map(image => (
    //                 <div className='h-full w-full'>
    //                     <img
    //                         src={image.path}
    //                         alt={'product detail image'}
    //                         className='w-full h-full'/>
    //                 </div>
    //             ))
    //         }
    //     </Slider>
      
    // </div>

    <div className="w-full h-[360px] max-w-3xl mx-auto aspect-square sm:aspect-[4/3] md:aspect-[16/9] rounded-xl shadow-2xl">
        <Slider className="w-auto h-full" {...settings}>
            {
                images.map(image => (
                    <div className="h-full w-full">
                      <img
                        src={image.path}
                        alt="product detail image"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                ))
            }
        </Slider>
    </div>
  )
}

export default ImageCarousel
