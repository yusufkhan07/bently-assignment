import { useState } from 'react'
import { SliderPicker } from 'react-color'

import { ColorPicker } from '../color-picker'
import { Box } from '../box'

export const Home = () => {
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
				className='hero'
				style={{
					backgroundColor: bgColor,
				}}
			>
				<div className='hero-body'>
					<div className='container'>
						<h1 className='title'>
							Select a color from the drop-down
						</h1>
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
					<div className='container'>
						<h1 className='title'>Try a new Background Color</h1>

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
