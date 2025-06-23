import React, { useEffect, useState } from 'react'
import Img1 from "../../assets/HomePage-Images/Image1.png"
import Img2 from "../../assets/HomePage-Images/Image2.png"
import Img3 from "../../assets/HomePage-Images/Image3.png"
import Img4 from "../../assets/HomePage-Images/Image4.png"
import Img5 from "../../assets/HomePage-Images/Image5.png"
import Img6 from "../../assets/HomePage-Images/Image6.png"
import { useNavigate } from 'react-router-dom';



const slides = [{image: Img1, quote:" Empowering Lives Through Organ Donation"},
                {image: Img2, quote: "You don’t have to be a doctor to save a life — just a donor"},
                {image: Img3, quote: "You could be the miracle someone is praying for"},
                {image: Img4, quote: "What if your goodbye became someone’s second chance?"},
                {image: Img5, quote: "Your final act could be someone else’s first breath of hope"},
                {image: Img6, quote: "You carry the power to light up the darkest hour of someone's life"}
              ]
const HomePageImage = () => {

  const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleDonateNow = () => {
      navigate('/login') 
    }
  
    useEffect(()=>{
        const Interval = setInterval(()=>{
            setCurrentIndex(prev => (prev + 1) % slides.length);
        }, 4000)

        return ()=> clearInterval(Interval)

    },[])
    const imageSlider = (currentIndex)=>{
            setCurrentIndex(currentIndex)
    }


  return ( <div className=" w-full  md:max-w-3xl mx-auto mt-8 overflow-hidden pl-2 pr-2">
  <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl shadow-md overflow-hidden">
    {slides.map((slide, index) => (
      <img
        key={index}
        src={slide.image}
        alt={`slide ${index}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

    <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-center py-4 rounded-xl animate-slide-up">
      <h1 className="text-xl md:text-2xl font-semibold">
        {slides[currentIndex].quote}
      </h1>
      <button onClick={handleDonateNow} className="border-red-500 border-2 rounded-2xl p-2 md:p-2 bg-red-500 text-[18px] hover:bg-transparent mt-2 md:mt-4 md:mb-4 text-white font-bold md:text-[22px]">
        Donate Now
      </button>
    </div>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mb-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => imageSlider(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
  </div>






</div>
    
  )
}

export default HomePageImage
