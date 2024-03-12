import React from 'react';
import Photo from './Photo';

const Gallery = ({ photos }) => {
    return (
        <div>
            {photos.map(photo => (
                <Photo key={photo.id} photo={photo} />
            ))}
        </div>
    )
}

export default Gallery;