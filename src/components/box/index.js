export const Box = props => {
	return (
		<div
			className='card'
			style={{
				backgroundColor: props.color,
				margin: '20px 0',
			}}
		>
			<div className='card-content'>
				<p className='title'>...just a random card</p>
				<p className='subtitle'>
					with a color of <b>{props.color} </b>
				</p>
			</div>
		</div>
	)
}
