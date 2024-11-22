import React from "react";

export const HomeCarousel = () =>{

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner carousel_styles">
                    <div className="carousel-item active">
                        <img src="https://i.pinimg.com/originals/c0/73/df/c073df6c763058fe63415c021411dc6f.jpg" className="d-block w-100 img-fluid" alt="0" /> 
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.thepopverse.com/media/tatooine-psojdnlwzy1fdiube2edy5zqru.jpg" className="d-block w-100 img-fluid" alt="1" />
                    </div>
                    <div className="carousel-item">
                    <   img src="https://sm.ign.com/ign_nordic/photo/h/how-star-w/how-star-wars-outlaws-fulfills-the-starship-fantasy-ign-firs_zudn.jpg" className="d-block w-100 img-fluid" alt="2" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            
        </>
    );
}