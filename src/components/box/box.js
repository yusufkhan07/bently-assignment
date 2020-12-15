export const Box = props => {
	return (
		<div
			class='card'
			style={{
				backgroundColor: props.color,
				margin: '20px 0',
			}}
		>
			<div class='card-content'>
				<p class='title'>...just a random card</p>
				<p class='subtitle'>
					with a color of <b>{props.color} </b>
				</p>
			</div>
		</div>
	)
}
