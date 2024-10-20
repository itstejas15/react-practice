import React, { useEffect, useState } from 'react';
import './album.css'
// import { useNavigate } from 'react-router-dom';

const PhotoAlbum = () => {
  const [data, setData] = useState([])
  const [hideAlbbum, setHideAlbum] = useState(false)
  const [activeAlbum, setActiveAlbum] = useState(null)
  const [openImg, setOpenImg] = useState(false)
  const [image, setImage] = useState('')
  // const navigate = useNavigate()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => setData(data))
      .catch((err)=>{window.alert(`Album api is expired=${err}`)})
  }, [])
  // console.log('data=', data)

  // let uniqueAlbums = data.filter((item)=> item.albumId != )
  const filteredData = data.filter((item, index, self) =>
    index === self.findIndex(i => i.albumId === item.albumId)
  );

  // console.log(filteredData)
  const handleCardClick = (albumId) => {
    // navigate('/practice/album')
    console.log("albumId=", albumId)
    setActiveAlbum(albumId)
    setHideAlbum(true)
  }

  const handlebackButton = () => {
    setHideAlbum(false)
    setActiveAlbum(null)
  }

  const albumSet = data.filter((item) => (
    item.albumId === activeAlbum
  )
  );
  console.log('albumSet=', albumSet)

  const handleThumbnailClick = (url) => {
    setOpenImg(true)
    setImage(url)
  }

  return (
    <div style={{ margin: '1rem' }}>
      <h1>PhotoAlbum</h1>

      {!hideAlbbum && (
        <div className='cardContainer'>
          {filteredData.map((item) => (
            <div key={item.albumId} className='card' onClick={() => handleCardClick(item.albumId)}>
              <div>
                {item.albumId}
                <span style={{ overflow: 'hidden', display: 'flex', height: '55px', width: '10vw', cursor: 'pointer' }} title={item.title}>
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeAlbum && !openImg && (
        <div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <button onClick={handlebackButton}>Back</button>
            <span>Album number = {activeAlbum}</span>
          </div>
          <div className='cardContainer'>
            {albumSet.map((item) => (
              <div key={item.id} className='card' onClick={() => handleCardClick(item.albumId)}>
                <div>
                  {item.id}
                  <span style={{ overflow: 'hidden', display: 'flex', height: '55px', width: '10vw', cursor: 'pointer' }} title={item.title}>
                    {item.title}
                  </span>
                  <div onClick={() => handleThumbnailClick(item.url)} style={{ cursor: 'pointer' }}>
                    <img src={item.thumbnailUrl} alt='album' height={40} width={60} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {openImg && (
        <div style={{ height: '80vh', background: 'blue', paddingLeft: '35px' }}>
          <button onClick={() => setOpenImg(false)} style={{ display: 'flex', position: 'fixed', top: 35, right: 35 }}>X</button>
          <img src={image} alt='imagge' height={'490'} width={'1150'} />
        </div>
      )}

    </div>
  );
}

export default PhotoAlbum;