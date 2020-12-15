import React, { useState, useRef, useCallback } from 'react'

function IsJsonString(str) {
	try {
		JSON.parse(str)
	} catch (e) {
		return false
	}
	return true
}

export const Task2 = props => {
	const isMounted = useRef(true)
	const [apiIsLoading, setApiIsLoading] = useState()
	const [text, setText] = useState('')
	const [max, setMax] = useState(null)
	const [secondmax, setSecondMax] = useState(null)

	const handleErrorMessage = msg => {
		// we can display a popup or toast here
		alert(msg)
	}

	// returns true if valid, error-msg string if invalid
	const validateInputText = text => {
		if (!IsJsonString(text)) {
			return 'Pass comma seperated numbers'
		}

		return true
	}

	const getMaxAndSecondMax = async () => {
		// don't send again while we are sending
		if (apiIsLoading) {
			return
		}

		// check if text is valid.
		const valid = validateInputText(text)

		if (valid !== true) {
			return handleErrorMessage(valid)
		}

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
				setMax(body.message.max)
				setSecondMax(body.message.secondMax)
			} else {
				handleErrorMessage(body.message)
			}
		} catch (err) {
			handleErrorMessage(err.body)
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
						placeholder='11, 53, 613, 90, 25'
						onChange={e => {
							setText('[' + e.target.value + ']')
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

			<div className='field'>
				{max && <p className='title'>Max: {max}</p>}
			</div>
			<div className='field'>
				{secondmax && <p className='title'>SecondMax: {secondmax}</p>}
			</div>
		</>
	)
}
