import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const PlanetDetail = (props) => {
    const {store, actions} = useContext(Context);


    
    return (
        <>
            <div className="col-sm-12 col-md-4 col-lg-4">
                <figure className="img-container-img d-flex">
                    <img src={props.img} alt={props.name} className="img-fluid rounded"/>
                </figure>
                <figcaption className="d-flex justify-content-center"><h4>{props.name}</h4></figcaption>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="properties-container">
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Population:</h6>
                            <p className="mb-1 ms-1 me-auto"> {props.population}</p>
                            <span className="fa-solid fa-globe text-light"></span>
                        </div>
                        
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Diameter:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.diameter}</p>
                            <span className="fa-solid fa-globe text-light"></span>
                        </div>
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1 ms-1">Rotation period:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.rotation_period}</p>
                            <span className="fa-solid fa-globe text-light"></span>
                        </div>   
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1 ms-1">Orbital period:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.orbital_period}</p>
                            <span className="fa-solid fa-globe text-light"></span>
                        </div>
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Gravity:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.gravity}</p>
                            <span className="fa-solid fa-globe text-light"></span>
                        </div>
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Climate:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.climate}</p>
                            <span className="fa-solid fa-globe text-light"></span>
                        </div>
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Terrain:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.terrain}</p>
                            <span className="fa-solid fa-globe text-light"></span>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}