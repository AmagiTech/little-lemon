import '../App.css';
function SpecialCard(props) {
    console.log(props);
    return (<div className="card col-lg-4 m-2" style={{width:"18rem"}} >
        <img src={props.image} className="card-img-top" alt={props.subtitle} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{props.subtitle}</h6>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-yellow">Order Delivery</a>
        </div>
    </div >)
}

export default SpecialCard;