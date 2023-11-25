function ChartLines({showChartLines, imperialConv, imageContainerHeight}) {
	// height measurements for the chart
	const height_intervals = [210, 200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
	const imperial_interavals = ['6\'8"', '6\'4"', '6\'', '5\'8"', '5\'4"', '5\'', '4\'8"', '4\'4"', '4\'', '3\'8"', '3\'4"', '3\'', '2\'8"', '2\'4"', '2\'', '1\'8"', '1\'4"', '1\'', '8"', '4"']

	return (
		<>
			{showChartLines && !imperialConv && height_intervals.map((height, index) => (
				<>
					<div
						key={index}
						className='group grow flex justify-evenly items-center w-full cursor-pointer text-gray-600 text-[8px] sm:text-base font-bold hover:text-black'
					>
						<div>{height}</div>
						<hr className='w-[80%] border-gray-600 border-[1px] group-hover:border-black' />
						<div>{height}</div>
					</div>
					<hr className='w-[80%] border-gray-500' style={index === height_intervals.length - 1 ? {'marginBottom': `${Math.round(imageContainerHeight / 46.15)}px`} : null} />
				</>
			))}
			{showChartLines && imperialConv && imperial_interavals.map((height, index) => (
				<>
					{index === 0 && Array(3).fill(null).map((_, i) => (
						<><hr key={i} className='w-[80%] border-gray-500' style={index === 0 && i === 0 ? {'marginTop': `${Math.round(imageContainerHeight / 60)}px`} : null} /></>
					))}
					<div
						key={index}
						className='group flex justify-evenly items-center w-full h-[1px] cursor-pointer text-gray-600 text-[8px] sm:text-base font-bold hover:text-black'
					>
						<div>{height}</div>
						<hr className='w-[80%] border-gray-600 border-[1px] group-hover:border-black' />
						<div>{height}</div>
					</div>
					{Array(3).fill(null).map((_, i) => (
						<><hr key={i} className='w-[80%] border-gray-500' style={index === imperial_interavals.length - 1 && i === 2 ? {'marginBottom': `${Math.round(imageContainerHeight / 150)}px`} : null} /></>
					))}
				</>
		))}
		</>
	)
}

export default ChartLines
