import { useEffect, useRef, useState } from "react"
import './Sort.css'

function Sort({notSelected, setSortedNotSelected, heightData}) {
	const sortOptions = useRef(null)

	const [nameAsc, setNameAsc] = useState(true)
	const [nameDesc, setNameDesc] = useState(false)
	const [heightAsc, setHeightAsc] = useState(false)
	const [heightDesc, setHeightDesc] = useState(false)

	function sortItems(e) {
		if (e === 'name-asc') setSortedNotSelected(Object.keys(notSelected).sort((a, b) => a.localeCompare(b, 'en')))
		else if (e === 'name-desc') setSortedNotSelected(Object.keys(notSelected).sort((a, b) => b.localeCompare(a, 'en')))
		else if (e === 'height-asc') setSortedNotSelected(Object.keys(notSelected).sort((a, b) => heightData[a]['height'] - heightData[b]['height']))
		else if (e === 'height-desc') setSortedNotSelected(Object.keys(notSelected).sort((a, b) => heightData[b]['height'] - heightData[a]['height']))
	}

	useEffect(() => {
		for (const child of sortOptions.current.children) {
			if (child.checked) {
				sortItems(child.value)
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [notSelected])

	return (
		<>
			<div ref={sortOptions} id='sort-options' className='flex justify-center mt-3 mx-4 w-full sm:w-auto'>
				<input
					type='radio'
					id='name-asc'
					value='name-asc'
					name='sort-type'
					onClick={(e) => {
						setNameAsc(true)
						setNameDesc(false)
						setHeightAsc(false)
						setHeightDesc(false)
						sortItems(e.target.value)}
					}
					checked={nameAsc}
					readOnly
				/><label htmlFor='name-asc'>Name A-Z</label>
				<input
					type='radio'
					id='name-desc'
					value='name-desc'
					name='sort-type'
					onClick={(e) => {
						setNameAsc(false)
						setNameDesc(true)
						setHeightAsc(false)
						setHeightDesc(false)
						sortItems(e.target.value)}
					}
					checked={nameDesc}
					readOnly
				/><label htmlFor='name-desc'>Name Z-A</label>
				<input
					type='radio'
					id='height-asc'
					value='height-asc'
					name='sort-type'
					onClick={(e) => {
						setNameAsc(false)
						setNameDesc(false)
						setHeightAsc(true)
						setHeightDesc(false)
						sortItems(e.target.value)}
					}
					checked={heightAsc}
					readOnly
				/><label htmlFor='height-asc'>Height 0-9</label>
				<input
					type='radio'
					id='height-desc'
					value='height-desc'
					name='sort-type'
					onClick={(e) => {
						setNameAsc(false)
						setNameDesc(false)
						setHeightAsc(false)
						setHeightDesc(true)
						sortItems(e.target.value)}
					}
					checked={heightDesc}
					readOnly
				/><label htmlFor='height-desc'>Height 9-0</label>
			</div>
		</>
	)
}

export default Sort
