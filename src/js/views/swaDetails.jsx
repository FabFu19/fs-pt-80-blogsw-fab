import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { PeopleDetail } from "../component/peopleDetails.jsx";
import { PlanetDetail } from "../component/planetDetail.jsx";
import { StarshipDetail } from "../component/starshipDatail.jsx";

export const DetailsForAll = () => {
    const {store, actions} = useContext(Context)
    const {types, uid} = useParams();
    
    useEffect(() => {
        actions.getAllDetails(types, uid);
    }, [])
    
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row">
                    {types === 'people' && < PeopleDetail
                        img={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                        name={store.all_details?.properties?.name}
                        height={store?.all_details?.properties?.height} 
                        mass={store.all_details?.properties?.mass}
                        hair_color={store.all_details?.properties?.hair_color}
                        skin_color={store.all_details?.properties?.skin_color}
                        eye_color={store.all_details?.properties?.eye_color}
                        birth_year={store.all_details?.properties?.birth_year}
                        gender={store.all_details?.properties?.gender} 
                    />  }
                    {types === 'planets' && <PlanetDetail 
                        img={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                        name={store.all_details?.properties?.name}
                        population={store.all_details?.properties?.population} 
                        diameter={store.all_details?.properties?.diameter}
                        rotation_period={store.all_details?.properties?.rotation_period}
                        orbital_period={store.all_details?.properties?.orbital_period}
                        gravity={store.all_details?.properties?.gravity}
                        climate={store.all_details?.properties?.climate}
                        terrain={store.all_details?.properties?.terrain} 
                    />}
                    {types === 'vehicles' && <StarshipDetail img={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                        name={store.all_details?.properties?.name}
                        model={store.all_details?.properties?.model} 
                        vehicle_class={store.all_details?.properties?.vehicle_class}
                        manufacturer={store.all_details?.properties?.manufacturer}
                        cost_in_credits={store.all_details?.properties?.cost_in_credits}
                        length={store.all_details?.properties?.length}
                        crew={store.all_details?.properties?.crew}
                        passengers={store.all_details?.properties?.passengers}
                        max_atmosphering_speed={store.all_details?.properties?.max_atmosphering_speed}
                        cargo_capacity={store.all_details?.properties?.cargo_capacity}
                        
                    />}
                    
                </div>
            </div>
            
        </>
    );
}