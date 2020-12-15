import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Home } from './components/home'

function App() {
	return (
		<Router>
			<nav
				className='navbar'
				role='navigation'
				aria-label='main navigation'
			>
				<div className='navbar-menu is-active'>
					<div className='navbar-start'>
						<Link to='/' className='navbar-item'>
							Task 1
						</Link>

						<Link to='/task2' className='navbar-item'>
							Task 2
						</Link>
					</div>
				</div>
			</nav>

			<Switch>
				<Route path='/task2'>
					<div>Max 2 Elements from Array</div>
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}

export default App