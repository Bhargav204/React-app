import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import Webcam from 'react-webcam';

const Scan = () => {
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const webcamRef = useRef(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          imageSrc,
        });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <>
      <Navbar />

      <div className='mt-5 w-full px-4 md:px-20'>
        <img
          className='mx-auto w-[60vw] h-[55vh]'
          src='https://i.pinimg.com/564x/1c/0d/75/1c0d75f2c8cbf27c7793cd13e69afd61.jpg'
          alt=''
        />
        <h1 className='font-bold underline my-3 text-[2rem]'>How to Use?</h1>
        <ol className='list-decimal'>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ol>
      </div>

      <button
        className='block mx-auto btn btn-info text-white'
        onClick={() => setIsWebcamOpen(true)}
      >
        Scan
      </button>

      {isWebcamOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75'>
          <div className='bg-white p-5 rounded-lg'>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat='image/jpeg'
              className='w-[45vw] h-[45vh] rounded'
            />
            <button className='btn btn-primary mt-3' onClick={handleCapture}>
              Capture Image
            </button>
            <button
              className='btn btn-secondary mt-3 ml-3'
              onClick={() => setIsWebcamOpen(false)}
            >
              Close
            </button>
            {location && (
              <div className='mt-3'>
                <p>Latitude: {location.latitude}</p>
                <p>Longitude: {location.longitude}</p>
                <img
                  src={location.imageSrc}
                  alt='Captured'
                  className='mt-3 w-[300px] h-[200px]'
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Scan;
