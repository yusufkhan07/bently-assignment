export const ColorPicker = props => {
	return (
		<div className='select is-large'>
			<select
				name='colors'
				id='color-picker'
				onChange={props.colorChanged}
				value={props.defaultColor}
			>
				<option value='red'>Red</option>
				<option value='blue'>Blue</option>
				<option value='green'>Green</option>
				<option value='black'>Black</option>
			</select>
		</div>
	)
}
