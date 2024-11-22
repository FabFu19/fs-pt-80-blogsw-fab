import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const SideBar = () => {
    const navigate = useNavigate();
    const {store, actions} = useContext(Context);
    const handleClick = (view) => {
        actions.setSelectionView(view);
        navigate('/')
    }
    return (

        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button onClick={()=> handleClick('home')} className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
            <button onClick={()=> handleClick('people')} className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Characters</button>
            <button onClick={()=> handleClick('planets')} className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Planets</button>
            <button onClick={()=> handleClick('vehicles')} className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Starships</button>
            <Link to={'/favorites'} className="link-light text-decoration-none w-100 text-center">
                <button className="nav-link w-100" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Favorites</button>
            </Link>
        </div>
    );
}