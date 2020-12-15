import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useState } from 'react'

import { Task3 } from './components/task3'
import { Task2 } from './components/task2'
import { Task1 } from './components/task1'

function App() {
	const [bgColor, setBgColor] = useState('#7ECBA2')

	const bgColorChanged = color => {
		setBgColor(color.hex)
	}

	return (
		<Router>
			<nav
				className='navbar is-dark'
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

						<Link to='/task3' className='navbar-item'>
							Task 3
						</Link>
					</div>
				</div>
			</nav>

			<div className='App'>
				<section
					className='hero'
					style={{
						backgroundColor: bgColor,
					}}
				>
					<div className='hero-body'>
						<Switch>
							<Route path='/task3'>
								<Task3 />
							</Route>
							<Route path='/task2'>
								<Task2 />
							</Route>
							<Route path='/'>
								<Task1
									bgColor={bgColor}
									bgColorChanged={bgColorChanged}
								/>
							</Route>
						</Switch>
					</div>
				</section>
			</div>
		</Router>
	)
}

export default App
