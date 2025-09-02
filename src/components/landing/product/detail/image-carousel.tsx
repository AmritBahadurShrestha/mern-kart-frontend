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
    <div className='w-full h-[400px] aspect-square'>
        <Slider className='h-full' {...settings}>
            {
                images.map(image => (
                    <div className='h-full w-full'>
                        <img
                            src={image.path}
                            alt={'product detail image'}
                            className='w-full h-full'/>
                    </div>
                ))
            }
        </Slider>
      
    </div>
  )
}

export default ImageCarousel
