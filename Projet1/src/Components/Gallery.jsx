import React from 'react';
import Photo from './Photo';

const Gallery = ({ photos, showId }) => {
    return (
        <div>
            {photos.map(photo => (
                <Photo key={photo.id} photo={photo} showId={showId}/>
            ))}
        </div>
    )
}

export default Gallery;