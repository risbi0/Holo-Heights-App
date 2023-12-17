function Images({selected, selectedImages}) {
	return (
		<>
			{Object.entries(selected).map(([name, data], index) => (
				<img
					key={index}
					ref={(r) => {selectedImages.current[index] = r}}
					src={`https://raw.githubusercontent.com/risbi0/Holo-Heights/main/out/${name.replaceAll(' ', '_')}.png`}
					className={`absolute bottom-0 left-1/2 h-full object-cover pointer-events-none ${!name['show'] ? '' : 'hidden'}`}
					style={{'transform': data['transform'], 'zIndex': data['zIndex']}}
				/>
			))}
		</>
	)
}

export default Images
