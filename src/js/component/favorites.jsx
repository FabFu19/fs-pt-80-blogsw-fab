import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router";
import { CardsForAll } from "./globalCard.jsx";

export const FavSection = () => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();
        

    
    return (
        <>
            <div>
            <h2>Favorites</h2>
            {store.favorites.length > 0 ? (
                <ul>
                    <div className="row">
                        {store.favorites?.map((fav) => (
                        <>
                            
                            <CardsForAll key={`${fav.uid}${fav.types}`} img={fav.img}
                                uid={fav.uid}
                                types={fav.types}
                                name={fav.name}
                                alt={fav.name}
                                 />
                            
                            
                        </>  
                    ))}
                    </div>
                    
                </ul>
            ) : (
                <p>No favorites yet!</p>
            )}
        </div>
        </>
    );
}