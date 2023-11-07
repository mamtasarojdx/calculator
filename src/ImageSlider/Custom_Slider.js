import React, {useState} from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./Image_Slider.css"
 


function Custom_Slider() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  console.log(selectedFiles)
  const handleFileChange = (event) => {
      setSelectedFiles(event.target.files);
  };

  return (

    <section className='custom-slide vh-100'>
    <div className='container-fluid py-100 h-100 '>
    <div className='row'>
    <div className='col-lg-12 col-md-6 col-sm-12'>
        <h2 className="text-center">Custom Slider</h2>
              <input type="file" multiple onChange={handleFileChange} className='custom-2'/>
              <div>
                  {selectedFiles.length > 0 && (
                      <div>
                          <h4>Selected Files:</h4>
                          <ul>
                              {Array.from(selectedFiles).map((file, index) => (
                                  <li key={index}>{file.name} </li>
                              ))}
                          </ul>
                      </div>
                  )}
                  <div className="custom-3">
                      <AliceCarousel autoPlay autoPlayInterval={2000} >
                          {Array.from(selectedFiles).map((file, index) => (
                              <img
                                  key={index}
                                  src={URL.createObjectURL(file)}
                                  alt={file.name}
                                  className="img-1"
                                 />
                          ))}
                      </AliceCarousel>
                  </div>
              </div>
          </div>
      </div>
      </div>
    
      </section>

  );
};

export default Custom_Slider