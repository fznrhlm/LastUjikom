import React from 'react';
import './ImageGallery.css';


const ImageGallery = () => {
  const foodImages = [
    'https://www.themealdb.com/images/category/beef.png',
    'https://www.themealdb.com/images/category/dessert.png',
    'https://images.unsplash.com/photo-1626082929543-5bab0f090c42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww',
    'https://www.themealdb.com/images/category/pasta.png',
    'https://www.themealdb.com/images/category/pork.png',
    'https://images.unsplash.com/photo-1601390395693-364c0e22031a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlJTIwdGVhfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1592099759599-24b131b8e824?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGljZSUyMGxlbW9uJTIwdGVhfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhZ2hldHRpfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww'

  ];

  return (
    <div className='wrapper'>
      <h1>Macam Makanan</h1>
      <div className="image-gallery"> 
        {foodImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Food ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;