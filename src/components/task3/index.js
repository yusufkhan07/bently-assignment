export const Task3 = props => {
	return (
		<div className='is-size-5'>
			<p>We're logging every request to our Express API server.</p>
			<p>
				We're storing the logs as a JSON because JSON gives us the
				flexibility to diplay the logs the way we want on UI. Due to
				time constraints, I am simply going to diplay the JSON logs over
				here.
			</p>
			<a href='http://localhost:3007/logs.json' target='_blank'>
				View logs
			</a>
		</div>
	)
}
