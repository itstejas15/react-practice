import React, { useCallback, useEffect, useState } from 'react'
import { Images } from '../../Const/DB'

const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState(0)

  const handlePrev = () => {
    setActiveImage(activeImage <= 0 ? Images.length - 1 : activeImage - 1)
  }

  const handleNext = useCallback(() => {
    setActiveImage(activeImage >= Images.length - 1 ? 0 : activeImage + 1)
  }, [activeImage])

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext()
    }, 5000)
    return () => {
      (clearTimeout(timer))
    }
  }, [activeImage, handleNext])

  return (
    <div style={{ margin: '4rem', display: 'flex', justifyContent: 'center' }}>
      <button onClick={handlePrev}>&lt;</button>
      {Images.map((image, i) => {
        return (
          <div key={image}>
            <img src={image} alt='wallpapers' height={400} width={800} style={{ display: activeImage === i ? 'block' : 'none' }} />
          </div>
        )
      })}
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
}

export default ImageSlider;