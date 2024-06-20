import { heightData } from './data'

function Images({selected, selectedImages, showLabel, imperialConv, imageContainerHeight}) {
	function cmToFtIn(cm) {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}'${inches}"`;
	}

	return (
		<>
			{Object.entries(selected).map(([name, data], index) => (
				<div
					key={index}
					ref={(r) => {selectedImages.current[index] = r}}
					className={`absolute top-0 left-1/2 flex justify-center content-between h-full w-max pointer-events-none ${!name['show'] ? '' : 'hidden'}`}
					style={{'transform': data['transform'], 'zIndex': data['zIndex']}}
				>
					<img
						src={`https://raw.githubusercontent.com/risbi0/Holo-Heights-App/main/images/out/${name.replaceAll(' ', '_')}.png`}
						className={`object-cover ${!name['show'] ? '' : 'hidden'}`}
						style={{'height': `${showLabel ? (imageContainerHeight - imageContainerHeight / 25) / imageContainerHeight * 100 : 100}%`}}
					/>
					{showLabel &&
						<div
							className='absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center text-black'
							style={{
								'height': `${100 - (imageContainerHeight - imageContainerHeight / 25) / imageContainerHeight * 100}%`,
								'fontSize': `${Math.round(imageContainerHeight / 55)}px`
							}}
						>
							{imperialConv ? cmToFtIn((heightData[name]['height'])) : `${heightData[name]['height']} cm`}
						</div>
					}
				</div>
			))}
		</>
	)
}

export default Images
