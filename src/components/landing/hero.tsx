import hero_image from '../../assets/Hero.png'

const Hero = () => {
    return (
        <div className=" relative h-[70vh] w-full">
            
            <div className='h-full w-full'>
                <img
                    src={hero_image}
                    alt='hero image'
                    className="h-full w-full z-30"
                />
            </div>

            {/* Overlay */}
            <div className='absolute bg-black/12 h-full w-full inset-0 z-40'></div>

            <div className='absolute top-8 left-36 z-50'>
                <h1 className='text-5xl text-indigo-600'>Powering Your Digital Lifestyle</h1>
                <p className='text-lg text-black mt-6'>Top-quality smartphones, laptops, and accessories — unbeatable deals, trusted brands, and fast delivery.</p>
                <button className='mt-60 py-3 text-white text-lg font-semibold px-7 rounded-md cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 transition-all duration-300 shadow-md'>
                    Shop Now
                </button>
            </div>
        </div>
    )
}

export default Hero
