import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);


	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light nav_changes">
				<div className="container-fluid">
					<div className="d-flex w-100 nav_responsive">
						<button className="navbar-toggler nav_toggler_responsive" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon fa-solid fa-bars text-light"></span>
						</button>
						<Link to="/" className="nav-brand-center">
							<img src="https://freepngimg.com/thumb/star_wars/8-2-star-wars-logo-png-thumb.png" alt="swalog" className="img-styles img-fluid" />
						</Link>
						<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
							<div className="btn-group nav_drop_position">
								<button type="button" className="btn btn-secondary dropdown-toggle nav-btn_styles" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
									Favorites
								</button>
								<ul className="dropdown-menu dropdown-menu-lg-end bg-dark nav_text_list">
								{store.favorites.length === 0 ? (
											<li className="dropdown-item text-center text_fav_empty">No favorites yet!</li>
										) : (
											store.favorites.map((fav) => (
												<li className="dropdown-item d-flex justify-content-between align-items-center" key={`${fav.uid}${fav.types}`}>
													<Link to={`/swaDetails/${fav.types}/${fav.uid}`} className="text-decoration-none link-light nav_text_link">
														{fav.name}
													</Link>
													<span
														className="fa-solid fa-trash text-light ms-4 icon-remove"
														onClick={() => actions.addRemoveFavs(fav)}
													></span>
												</li>
											))
										)}
								</ul>
							</div>
						</div>
					</div>
				
				</div>
			</nav>
		</>
		
	);
};
