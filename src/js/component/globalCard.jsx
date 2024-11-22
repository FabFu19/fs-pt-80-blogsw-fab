import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const CardsForAll = (props) => {
    const {store, actions} = useContext(Context); 
    const navigate = useNavigate();
    const handleUrl = () => navigate(`/swaDetails/${props.types}/${props.uid}`);

    const handleFavs = () => {
        const { name, uid, img, types } = props;
        const newFav = { name, uid, img, types };
        actions.addRemoveFavs(newFav);
    };

    const isFav = store.favorites.some(el => el.uid === props.uid && el.types === props.types);



    return (
        <>
            <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 pb-3">
                <div className="card card_styles">
                    <figure className="card_figure_styles">
                        <img src={props.img} alt={props.name} className="card-img-top img-fluid border-bottom"/>
                        <figcaption className="p-3 card_fig_caption">{props.name}</figcaption>
                    </figure>
                    <div className="d-flex p-3 align-items-center justify-content-between"> 
                        <div className="btn btn-styles" onClick={handleUrl}>More details</div>
                        <span className={`fa-solid fa-heart ${isFav ? 'text-light' : ''}`} onClick={handleFavs}></span>
                    </div>
                </div>
            </div>
            
        </>
    );
}