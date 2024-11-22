import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { DetailsForAll } from "./views/swaDetails.jsx";
import { SwaHome } from "./views/forceHome.jsx";
import { FavSection } from "./component/favorites.jsx";
import { SideBar } from "./component/sideBar.jsx";


const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12 col-md-3 col-lg-3"><SideBar /></div>
							<div className="col-sm-12 col-md-9 col-lg-9">
								<Routes>
									<Route path="/" element={<SwaHome />} />
									<Route path="/swaDetails/:types/:uid" element={<DetailsForAll />} />
									<Route path="/favorites/" element={<FavSection />} />
									<Route path="*" element={<h1>Not found!</h1>} />
								</Routes>
							</div>
						</div>
					</div>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
