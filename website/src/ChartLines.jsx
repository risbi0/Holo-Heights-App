import { useEffect, useState } from "react"

function ChartLines({showLabel, showChartLines, imperialConv, imageContainerHeight}) {
	// height measurements for the chart
	const [heightIntervals, setHeightIntervals] = useState([210, 200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10])
	const [imperialInteravals, setImperialInteravals] = useState(['6\'8"', '6\'4"', '6\'', '5\'8"', '5\'4"', '5\'', '4\'8"', '4\'4"', '4\'', '3\'8"', '3\'4"', '3\'', '2\'8"', '2\'4"', '2\'', '1\'8"', '1\'4"', '1\'', '8"', '4"'])

	useEffect(() => {
			if (showLabel) {
				setHeightIntervals([210, 200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0])
				setImperialInteravals(['6\'8"', '6\'4"', '6\'', '5\'8"', '5\'4"', '5\'', '4\'8"', '4\'4"', '4\'', '3\'8"', '3\'4"', '3\'', '2\'8"', '2\'4"', '2\'', '1\'8"', '1\'4"', '1\'', '8"', '4"', 0])
			} else {
				setHeightIntervals([210, 200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10])
				setImperialInteravals(['6\'8"', '6\'4"', '6\'', '5\'8"', '5\'4"', '5\'', '4\'8"', '4\'4"', '4\'', '3\'8"', '3\'4"', '3\'', '2\'8"', '2\'4"', '2\'', '1\'8"', '1\'4"', '1\'', '8"', '4"'])
			}
	}, [showLabel])

	return (
		<>
			{showChartLines && !imperialConv && heightIntervals.map((height, index) => (
				<>
					<div
						key={index}
						className='group grow flex justify-evenly items-center w-full cursor-pointer text-gray-600 text-[8px] sm:text-base font-bold hover:text-black'
						style={height === 0 ? {'marginBottom': `${Math.round(imageContainerHeight / 50)}px`} : null}
					>
						<div>{height}</div>
						<hr className='w-[85%] sm:w-[92%] border-gray-600 border-[1px] group-hover:border-black' />
						<div>{height}</div>
					</div>
					{((showLabel && height !== 0) || !showLabel) &&
						<hr className='w-[85%] sm:w-[92%] border-gray-500' style={index === heightIntervals.length - 1 ? {'marginBottom': `${Math.round(imageContainerHeight / 46.15)}px`} : null} />
					}
				</>
			))}
			{showChartLines && imperialConv && imperialInteravals.map((height, index) => (
				<>
					{index === 0 && Array(3).fill(null).map((_, i) => (
						<><hr key={i} className='w-[85%] sm:w-[92%] border-gray-500' style={index === 0 && i === 0 ? {'marginTop': `${Math.round(imageContainerHeight / 60)}px`} : null} /></>
					))}
					<div
						key={index}
						className='group flex justify-evenly items-center w-full h-[1px] cursor-pointer text-gray-600 text-[8px] sm:text-base font-bold hover:text-black'
						style={height === 0 ? {'marginBottom': `${Math.round(imageContainerHeight / 25)}px`} : null}
					>
						<div>{height}</div>
						<hr className='w-[85%] sm:w-[92%] border-gray-600 border-[1px] group-hover:border-black' />
						<div>{height}</div>
					</div>
					{((showLabel && height !== 0) || !showLabel) && Array(3).fill(null).map((_, i) => (
						<><hr key={i} className='w-[85%] sm:w-[92%] border-gray-500' style={index === imperialInteravals.length - 1 && i === 2 ? {'marginBottom': `${Math.round(imageContainerHeight / 150)}px`} : null} /></>
					))}
				</>
			))}
		</>
	)
}

export default ChartLines
