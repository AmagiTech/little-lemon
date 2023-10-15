import imgRestaurantFood from '../assets/img/restauranfood.jpg';
import '../App.css';

function Heroes(props) {
    return (
        <div className="container col-xxl-8 px-4 py-5 ">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 bg-green">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={imgRestaurantFood} className="d-block mx-lg-auto img-fluid" alt="Restauran Food" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold  mb-3 text-yellow">Little Lemon</h1>
                    <h2 className="text-white">Chicago</h2>
                    <p className="lead text-white">We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-yellow btn-lg px-4 me-md-2">Reserve A Table</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heroes;
