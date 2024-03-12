const Photo = ({ id, size }) => {
    return(
      
        <img src={`https://picsum.photos/seed/${id}/400/200`} style={size} alt="placeholder"/>
    )
}
export default Photo;