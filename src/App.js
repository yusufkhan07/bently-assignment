import './App.css'
import { useState } from 'react'

import { ColorPicker } from './components/color-picker/color-picker'
import { Box } from './components/box/box'

function App() {
	const [color, setColor] = useState('red')

	const colorChanged = e => {
		setColor(e.target.value)
	}

	return (
		<div className='App'>
			<section class='hero is-primary'>
				<div class='hero-body'>
					<div class='container'>
						<h1 class='title'>Select a color from the drop-down</h1>
						<div>
							<ColorPicker
								defaultColor={color}
								colorChanged={colorChanged}
							></ColorPicker>
						</div>

						<div>
							<Box color={color}></Box>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default App
