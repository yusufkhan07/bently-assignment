import './App.css'
import { useState } from 'react'

import { ColorPicker } from './components/color-picker/color-picker'
import { Box } from './components/box/box'
import { SliderPicker } from 'react-color'

function App() {
	const [color, setColor] = useState('red')
	const [bgColor, setBgColor] = useState('#7ECBA2')

	const colorChanged = color => {
		setColor(color)
	}

	const bgColorChanged = color => {
		setBgColor(color.hex)
	}

	return (
		<div className='App'>
			<section
				class='hero'
				style={{
					backgroundColor: bgColor,
				}}
			>
				<div class='hero-body'>
					<div class='container'>
						<h1 class='title'>Select a color from the drop-down</h1>
						<div>
							<ColorPicker
								defaultColor={color}
								colorChanged={e => colorChanged(e.target.value)}
							></ColorPicker>
						</div>

						<div>
							<Box color={color}></Box>
						</div>
					</div>
					<div class='container'>
						<h1 class='title'>Try a new Background Color</h1>

						<SliderPicker
							color={bgColor}
							onChangeComplete={bgColorChanged}
						/>
					</div>
				</div>
			</section>
		</div>
	)
}

export default App
