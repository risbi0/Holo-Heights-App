import { useEffect, useRef, useState } from 'react'
import './App.css'
import bringFront from './assets/bring_front.svg'
import sendBack from './assets/send_back.svg'
import { heightData } from './data'

import Images from './Images'
import ChartLines from './ChartLines'
import Sort from './Sort'
import Search from './Search'
import About from './About'

function App() {
	const imageContainerRef = useRef(null)

	const [selected, setSelected] = useState({})
  const [notSelected, setNotSelected] = useState(
		Object.keys(heightData).reduce((acc, key) => {
			acc[key] = {
				'show': false,
				'transform': 'translateX(-50%)',
				'zIndex': 0
			}
			return acc
		}, {})
	)
	const [sortedNotSelected, setSortedNotSelected] = useState(Object.keys(notSelected).sort((a, b) => a.localeCompare(b, 'en')))
	const [imageContainerHeight, setImgContainerHeight] = useState(0)
	// options
	const [toggleMenu, setToggeMenu] = useState(false)
	const [showChartLines, setShowChartLines] = useState(true)
	const [imperialConv, setImperialConv] = useState(false)
	const [searchStr, setSearchStr] = useState('')

	// menu dragging
	const selectionMenu = useRef(null)
	const currTranslateX = useRef(0)
	const currTranslateY = useRef(0)

	const [position, setPosition] = useState({x: 0, y: 0})
	const [isDragging, setIsDragging] = useState(false)

	function getOtherZIndex(name, obj) {
		const zIndexValues = []
		Object.entries(obj).forEach(([n, data]) => {
			if (name !== n) zIndexValues.push(data['zIndex'])
		})
		// return 0 z-index if there are no other shown images
		return zIndexValues.length > 0 ? zIndexValues : [0]
	}

	function updateSelection(name, show, newImage, transform='translateX(-50%)', zIndex=0) {
		// increment z-index for new images so it's always at top
		if (newImage) zIndex = Math.max(...getOtherZIndex(name, selected)) + 1

		if (show) {
			setSelected({
				...selected,
				[name]: {
					'show': show,
					'transform': transform,
					'zIndex': zIndex
				}
			})

			const copy = { ...notSelected }
			delete copy[name]
			setNotSelected(copy)
		} else {
			const copy = { ...selected }
			delete copy[name]
			setSelected(copy)

			setNotSelected({
				...notSelected,
				[name]: {
					'show': show,
					'transform': transform,
					'zIndex': zIndex
				}
			})
		}
  }

	function moveImage(name, direction) {
		const transformValue = selected[name]['transform']
		const newTransformValue = +transformValue.match(/(?<=\().+(?=\))/)[0].replace('%', '')

		updateSelection(name, selected[name]['show'], false, `translateX(${newTransformValue + direction}%)`, selected[name]['zIndex'])
	}

	function updateZIndex(name, bringFront) {
		// get min/max z-index values of all other shown images
		const zIndexValues = getOtherZIndex(name, selected)

		let maxIndexVal = Math.max(...zIndexValues)
		let minIndexVal = Math.min(...zIndexValues)

		let newZIndex
		if (bringFront) {
			newZIndex = maxIndexVal + 1
		} else { // note: not well designed, needs improvement
			// prevent image from disappearing
			if (selected[name]['zIndex'] === 0 || minIndexVal === 0) newZIndex = 0
			else if (selected[name]['zIndex'] > 0) newZIndex = minIndexVal - 1
		}

		updateSelection(name, selected[name]['show'], false, selected[name]['transform'], newZIndex)
	}

	function cmToFeetAndInches(cm) {
		const inches = cm / 2.54
		const feet = Math.floor(inches / 12)
		const remainingInches = Math.round(inches % 12)

		return remainingInches === 12 ? `${feet + 1}'0"` : `${feet}'${remainingInches}"`
	}

	function handleDragStart(e) {
		const currTranslates = selectionMenu.current.style.transform.replaceAll(' ', '').match(/(-|\+)\d+(?=px)/g)
		currTranslateX.current = +currTranslates[0].replace('+', '')
		currTranslateY.current = +currTranslates[1].replace('+', '')

		setPosition({
			x: e.clientX,
			y: e.clientY
		})
		setIsDragging(true)
	}

	function handleDrop(e) {
		if (isDragging && position.x !== 0 && position.y !== 0) {
			/* const boundingClientRect = selectionMenu.current.getBoundingClientRect()
			console.log(
				Math.floor(boundingClientRect.height + boundingClientRect.top) - 1 === window.innerHeight,
				Math.floor(boundingClientRect.right) - 1 === window.innerWidth
			); */
			const newX = currTranslateX.current + e.clientX - position.x
			const newY = currTranslateY.current + e.clientY - position.y
			selectionMenu.current.style.transform = `translate(calc(-50% + ${newX}px), calc(-50% + ${newY}px))`
		}
	}

	useEffect(() => {
    function updateImgContainerHeight () {
      const height = imageContainerRef.current.getBoundingClientRect().height
      setImgContainerHeight(height)
    }
    window.addEventListener('resize', updateImgContainerHeight)
    // initial update
    updateImgContainerHeight()
  }, [])

  return (
    <>
			<button
				className='hidden sm:block absolute bottom-[2.5%] translate-y-[50%] left-8 underline'
				onClick={() => setToggeMenu(!toggleMenu)}
			>
				{toggleMenu ? 'Show' : 'Hide'} Menu
			</button>
			<div
				ref={imageContainerRef}
				id='image-container'
				className='relative flex flex-col justify-between items-center h-[90%] w-[90%] sm:w-full sm:mx-8 overflow-hidden bg-white border-gray-500 border-4 rounded-2xl'
			>
				<Images selected={selected} />
				<ChartLines showChartLines={showChartLines} imperialConv={imperialConv} imageContainerHeight={imageContainerHeight} />
			</div>
			{/* selection */}
			<div
				ref={selectionMenu}
				className={`${toggleMenu ? 'hidden' : 'sm:absolute'} mt-4 sm:mt-0 sm:pr-2 w-full sm:w-2/5 h-1/2 sm:top-1/2 sm:left-1/2 sm:cursor-grab sm:z-[99999] bg-gray-800 sm:border-gray-500 sm:border-4 sm:rounded-2xl`}
				onMouseUp={window.innerWidth >= 640 ? () => {setIsDragging(false)} : null}
				onMouseDown={window.innerWidth >= 640 ? handleDragStart : null}
				onMouseMove={window.innerWidth >= 640 ? handleDrop : null}
				style={{
					transform: window.innerWidth >= 640 ? `translate(calc(-50% + 0px), calc(-50% + 0px))` : ''
				}}
			>
				<div
					className='flex flex-col items-center w-full h-full sm:pt-5 overflow-y-auto'
				>
					{/* selected */}
					{Object.entries(selected).length === 0
						?	<div className='italic text-lg my-2 sm:mt-4'>select a member</div>
						: <>
							<div className='flex flex-col items-center w-[90%] h-full sm:max-w-[600px]'>
								{Object.keys(selected).map((name, index) => (
									<div
										key={index}
										className='flex justify-between items-center w-full flex-col sm:flex-row gap-2 sm:gap-4 bg-gray-900 my-2 px-4 py-2 rounded-2xl text-lg overflow-x-auto'
									>
										<div className='flex justify-evenly sm:justify-start items-center w-full sm:w-1/2'>
											<div
												className='w-10 h-10 mr-2 bg-contain rounded-full border-2 bg-no-repeat bg-center'
												style={{'backgroundImage': `url(./${name.replaceAll(' ', '%20')}.png)`, 'borderColor': `#${heightData[name]['color']}`}}
											></div>
											<div className='flex grow justify-around sm:justify-between w-auto sm:w-[inherit]'>
												<div className='font-bold whitespace-nowrap text-ellipsis overflow-hidden'>{name}</div>
												<div className='font-bold'>{!imperialConv ? heightData[name]['height'] : cmToFeetAndInches(heightData[name]['height'])}</div>
											</div>
										</div>
										<div className='flex justify-evenly sm:justify-between items-center w-full sm:w-[40%]'>
											{/* bring front/send back buttons */}
											<button
												className='flex justify-center items-center w-5 h-5 bg-contain bg-no-repeat bg-center'
												onClick={() => updateZIndex(name, true)}
												style={{'backgroundImage': `url(${bringFront})`}}
											>
											</button>
											<button
												className='flex justify-center items-center w-5 h-5 bg-contain bg-no-repeat bg-center'
												onClick={() => updateZIndex(name, false)}
												style={{'backgroundImage': `url(${sendBack})`}}
											>
											</button>
											{/* move image buttons */}
											<button
												className='flex justify-center items-center w-7 h-7 rounded-full hover:bg-gray-300 hover:text-gray-800 duration-100'
												onClick={() => moveImage(name, -5)}
											>
												<span className='material-symbols-outlined'>arrow_back</span>
											</button>
											<button
												className='flex justify-center items-center w-7 h-7 rounded-full hover:bg-gray-300 hover:text-gray-800 duration-100'
												onClick={() => moveImage(name, 5)}
											>
												<span className='material-symbols-outlined'>arrow_forward</span>
											</button>
											{/* remove button */}
											<button
												className='flex justify-center items-center w-7 h-7 rounded-full hover:bg-gray-300 hover:text-gray-800 duration-100'
												onClick={() => updateSelection(name, false)}
											>
												<span className='material-symbols-outlined'>close</span>
											</button>
										</div>
									</div>
								))}
							</div>
						</>
					}
					<hr className='w-[90%] sm:max-w-[650px] my-4 border-[1px] border-gray-300'/>
					{/* not selected */}
					<div className='flex flex-col items-center w-[90%] sm:max-w-[600px]'>
						<div className='flex flex-col sm:flex-row justify-around items-center w-full gap-2 sm:gap-0'>
							<div className='flex items-center'>
								<div className='checkbox-wrapper mr-2'>
									<input type='checkbox' id='toggle-chart' />
									<label htmlFor='toggle-chart' className='toggle' onClick={() => setShowChartLines(!showChartLines)}><span></span></label>
								</div>
								<div>Hide chart lines</div>
							</div>

							<div className='flex items-center'>
								<div className='checkbox-wrapper mr-2'>
									<input type='checkbox' id='imperial-conv' />
									<label htmlFor='imperial-conv' className='toggle' onClick={() => setImperialConv(!imperialConv)}><span></span></label>
								</div>
								<div>Use freedom units</div>
							</div>

							<About />
						</div>

						<Sort notSelected={notSelected} setSortedNotSelected={setSortedNotSelected} heightData={heightData} />
						<Search setSearchStr={setSearchStr} />

						{sortedNotSelected.filter((name) => name.toLowerCase().includes(searchStr)).map((name, index) => (
							<div
								key={index}
								className='flex justify-between items-center w-full gap-6 sm:gap-0 bg-gray-900 my-2 px-4 py-2 rounded-2xl text-lg'
							>
								<div
									className='w-10 h-10 sm:mr-2 bg-contain rounded-full border-2'
									style={{'backgroundImage': `url(./${name.replaceAll(' ', '%20')}.png)`, 'borderColor': `#${heightData[name]['color']}`}}
								></div>
								<div className='font-bold grow whitespace-nowrap text-ellipsis overflow-hidden'>{name}</div>
								<div className='font-bold sm:w-[20%]'>{!imperialConv ? heightData[name]['height'] : cmToFeetAndInches(heightData[name]['height'])}</div>
								<button
									className='flex justify-center items-center w-7 h-7 rounded-full hover:bg-gray-300 hover:text-gray-800 duration-100'
									onClick={() => updateSelection(name, true, true)}
								>
									<span className='material-symbols-outlined'>add</span>
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
    </>
  )
}

export default App
