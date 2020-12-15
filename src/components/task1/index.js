import { useState } from 'react'
import { SliderPicker } from 'react-color'

import { ColorPicker } from '../color-picker'
import { Box } from '../box'

export const Task1 = props => {
	const [color, setColor] = useState('red')

	const colorChanged = color => {
		setColor(color)
	}

	return (
		<>
			<div className='container'>
				<h1 className='title'>Select a color from the drop-down</h1>
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
					color={props.bgColor}
					onChangeComplete={props.bgColorChanged}
				/>
			</div>
		</>
	)
}
