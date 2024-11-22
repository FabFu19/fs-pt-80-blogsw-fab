import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { CardsForAll } from "../component/globalCard.jsx";
import { HomeCarousel } from "../component/homeCarousel.jsx";
import { Link } from "react-router-dom";

export const SwaHome = () => {
    const {store, actions} = useContext(Context); 
    //const navigate = useNavigate();

    useEffect(() => {
        actions.clearCharacterInfo()
    }, [])
    return (
        <>  
            <div className="container-fluid mb-5">
                {store.selection_view === 'home' &&  <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 col-md-1"></div>
                                    <div className="col-sm-12 col-md-10">
                                        <HomeCarousel />    
                                    </div>
                                    <div className="col-sm-12 col-md-1"></div>
                                </div>
                              
                            </div> }
                {store.selection_view === 'people' && <div className="row">{store.people?.map(character => <CardsForAll key={character.uid} 
                                types={'people'}   
                                uid ={character.uid} 
                                name={character.name} 
                                img={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} />)}
                            </div>

                }
                {store.selection_view === 'planets' && <div className="row">
                                {store.planets?.map(planets => <CardsForAll key={planets.uid} 
                                types={'planets'} 
                                uid ={planets.uid} 
                                name={planets.name} 
                                img={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`} />)}
                            </div>}
                {store.selection_view === 'vehicles' && <div className="row">
                                {store.vehicles?.map(vehicles => <CardsForAll key={vehicles.uid} 
                                types={'vehicles'} 
                                uid ={vehicles.uid} 
                                name={vehicles.name} 
                                img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} />)}

                            </div> 
                }
                
            </div>
        </>
    
    );
}