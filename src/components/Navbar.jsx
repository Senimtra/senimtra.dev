const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md bg-transparent">
			<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Projects
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a className="dropdown-item" href="https://senimtra.dev" target="_blank" rel="noreferrer">
										senimtra.dev
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://quadrant-patrol.netlify.app" target="_blank" rel="noreferrer">
										Quadrant Patrol
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://recipe-app0921.herokuapp.com" target="_blank" rel="noreferrer">
										Iron Cooking Will
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://realfrogger.netlify.app" target="_blank" rel="noreferrer">
										Real Frogger
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Labs
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a className="dropdown-item" href="https://senimtra.dev/labs/react-ironbeers" target="_blank" rel="noreferrer">
										React IronBeers
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://senimtra.dev/labs/wiki-countries" target="_blank" rel="noreferrer">
										React Wiki Countries
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://senimtra.dev/labs/react-ironnutrition" target="_blank" rel="noreferrer">
										React IronNutrition
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://senimtra.dev/labs/react-training" target="_blank" rel="noreferrer">
										React Training
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://senimtra.dev/labs/react-ironcontacts" target="_blank" rel="noreferrer">
										React IronContacts
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="https://senimtra.dev/labs/hello-ironhack" target="_blank" rel="noreferrer">
										React Hello Ironhack
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
