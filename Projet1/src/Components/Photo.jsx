import React from 'react';

const Photo = ({ photo, showId }) => {
    return (
        <div>
            <p>{photo.author} {showId && `(#${photo.id})`}</p>
            
            <img src={photo.download_url} alt={photo.author} style={{width: '200px', height: '250px'}} />
        </div>
    )
}

export default Photo;