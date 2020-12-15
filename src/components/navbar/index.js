import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export const Navbar = props => {
	return (
		<Router>
			<nav
				className='navbar'
				role='navigation'
				aria-label='main navigation'
			>
				<div id='navbarBasicExample' className='navbar-menu  is-active'>
					<div className='navbar-start'>
						<Link to='/' className='navbar-item'>
							Task 1
						</Link>

						<Link to='/about' className='navbar-item'>
							Task 2
						</Link>
					</div>
				</div>
			</nav>

			<Switch>
				<Route path='/about'>
					<div>About Page</div>
				</Route>
				<Route path='/'>
					<div>Home Page</div>
				</Route>
			</Switch>
		</Router>
	)
}
