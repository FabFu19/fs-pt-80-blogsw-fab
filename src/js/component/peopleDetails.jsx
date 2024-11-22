import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const PeopleDetail = (props) => {
    const {store, actions} = useContext(Context);
    
    return (
        <>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
                <figure className="img-container-img d-flex">
                    <img src={props.img} alt={props.name} className="img-fluid rounded"/>
                </figure>
                <figcaption className="d-flex justify-content-center"><h4>{props.name}</h4></figcaption>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="properties-container">
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Height:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.height}</p>
                            <span className="fa-brands fa-galactic-republic text-light"></span>
                        </div>
                        
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Mass:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.mass}</p>
                            <span className="fa-brands fa-galactic-republic text-light"></span>
                        </div>
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1 ms-1">Hair color:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.hair_color}</p>
                            <span className="fa-brands fa-galactic-republic text-light"></span>
                        </div>   
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1 ms-1">Skin color:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.skin_color}</p>
                            <span className="fa-brands fa-galactic-republic text-light"></span>
                        </div>
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Eye color:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.eye_color}</p>
                            <span className="fa-brands fa-galactic-republic text-light"></span>
                        </div>
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Birth year:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.birth_year}</p>
                            <span className="fa-brands fa-galactic-republic text-light"></span>
                        </div>
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Gender:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.gender}</p>
                            <span className="fa-brands fa-galactic-republic text-light"></span>
                        </div>  
                    </div>
                </div>
            </div>
        </>
        
    )
}