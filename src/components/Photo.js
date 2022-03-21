import "../App.css";

function Photo({item: { id, url }}) {
    return (
  
      <div className="card" >
          <h5 className="h2">Id : {id}</h5>
          <div className="card-image" >{url}</div>

      </div>
    
    )
}

export default Photo;
