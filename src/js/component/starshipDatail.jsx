import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const StarshipDetail = (props) => {
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
                            <h6 className="mb-1">Model:</h6>
                            <p className="mb-1 ms-1 me-auto"> {props.model}</p>
                            <span className="fa-solid fa-shuttle-space text-light"></span>
                        </div>
                        
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Vehicle class:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.vehicle_class}</p>
                            <span className="fa-solid fa-shuttle-space text-light"></span>
                        </div>
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1 ms-1">Manufacturer:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.manufacturer}</p>
                            <span className="fa-solid fa-shuttle-space text-light"></span>
                        </div>   
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1 ms-1">Cost in credits:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.cost_in_credits}</p>
                            <span className="fa-solid fa-shuttle-space text-light"></span>
                        </div>
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Length:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.length}</p>
                            <span className="fa-solid fa-shuttle-space text-light"></span>
                        </div>
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Crew:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.crew}</p>
                            <span className="fa-solid fa-shuttle-space text-light"></span>
                        </div>
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Passengers:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.passengers}</p>
                            <span className="fa-solid fa-shuttle-space text-light"></span>
                        </div>  
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Max atmosphering speed:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.max_atmosphering_speed}</p>
                            <span className="fa-solid fa-shuttle-space text-light"></span>
                        </div>  
                    </div>
                    <div className="details_text_properties">
                        <div className="d-flex align-items-center">
                            <h6 className="mb-1">Cargo capacity:</h6>
                            <p className="mb-1 ms-1 me-auto">{props.cargo_capacity}</p>
                            <span className="fa-solid fa-shuttle-space text-light"></span>
                        </div>  
                    </div>
                </div>
        </div>
    </>
    )
}