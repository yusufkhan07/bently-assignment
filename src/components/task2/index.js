import React, { useState, useRef, useCallback } from 'react'

export const Task2 = props => {
	const isMounted = useRef(true)
	const [apiIsLoading, setApiIsLoading] = useState()
	const [text, setText] = useState('')

	const getMaxAndSecondMax = async () => {
		// don't send again while we are sending
		if (apiIsLoading) {
			return
		}

		// check if text is valid.

		// update state
		setApiIsLoading(true)

		try {
			const url = 'http://localhost:3007'
			const result = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: text,
			})

			const body = await result.json()

			if (result.status >= 200 && result.status < 300) {
				console.log('fetchRequest -> result', body.message)
			} else {
				alert(body.message)
			}
		} catch (err) {
			alert(err.body)
		} finally {
			// once the request is sent, update state again
			if (isMounted.current) setApiIsLoading(false)
		}
	}

	return (
		<>
			<div className='field'>
				<label className='label'>Enter comma seperated numbers</label>
				<div className='control'>
					<input
						className='input'
						type='text'
						placeholder='Text input'
						onChange={e => {
							setText(e.target.value)
						}}
					/>
				</div>
			</div>
			<div className='field'>
				<button
					onClick={getMaxAndSecondMax}
					className={
						'button is-primary ' +
						(apiIsLoading ? 'is-loading' : '')
					}
				>
					Submit
				</button>
			</div>
		</>
	)
}
