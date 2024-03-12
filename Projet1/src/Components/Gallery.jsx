import Photo from './Photo';

const Gallery = () => {
    const photos = [
        { id: 1, 
          size: { width: '400px', height: '200px' } 
        },
        { id: 2,
          size: { width: '300px', height: '150px' } 
        },
        { id: 3, 
          size: { width: '200px', height: '100px' } 
        },
    ];

    return(
      <section>
        <h1>Gallerie de Photo</h1>
        {photos.map(photo => (
            <Photo key={photo.id} id={photo.id} size={photo.size} />
        ))}
      </section>
    )
}

export default Gallery;