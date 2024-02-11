function About() {
	return (
		<>
			<button
				data-modal-target='default-modal'
				data-modal-toggle='default-modal'
				className='block w-20 hover:font-bold font-medium rounded-lg text-sm px-4 py-2 text-center bg-gray-900 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-700'
				type='button'
			>
				About
			</button>
			<div
				id='default-modal'
				tabIndex='-1'
				aria-hidden='true'
				className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full sm:inset-0 h-[calc(100%-1rem)] max-h-full'
			>
				<div className='relative p-4 w-full max-w-md max-h-full'>
					<div className='relative flex flex-col bg-gray-700 rounded-lg shadow h-96'>
						<div className='flex items-center justify-between py-3 px-4 border-gray-600 border-b rounded-t'>
							<h3 className='text-xl font-semibold'>About</h3>
							<button
								type='button'
								className='bg-transparent hover:bg-gray-300 hover:text-gray-700 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
								data-modal-hide='default-modal'
							>
								<svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
									<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
								</svg>
								<span className='sr-only'>Close modal</span>
							</button>
						</div>
						<div className='p-4 sm:p-5 space-y-4 overflow-y-scroll'>
							<p>Compare VTuber talent avatars from Hololive, Nijisanji, and VSPO! scaled to their heights. Includes ALL talents in said agencies (up to November 2023) that satisfies all of the following conditions: a full body avatar with transparent background available in the sites mentioned below; and an exact height measurement within human range.</p>

							<p>Height sources:</p>
							<p className='text-base leading-relaxed list-item ml-4'>
								Hololive - <a className="underline" href="https://hololive.hololivepro.com/en/talents/" target="_blank" rel="noreferrer">Hololive Official Website</a>, <a className="underline" href="https://holostars.hololivepro.com/talent" target="_blank" rel="noreferrer">Holostars Official Website</a>, <a className="underline" href="https://virtualyoutuber.fandom.com/wiki/Banzoin_Hakka" target="_blank" rel="noreferrer">Virtual Youtuber Wiki</a> for Banzoin Hakka&apos;s height including heels
							</p>
							<p className='text-base leading-relaxed list-item ml-4'>
								Nijisanji - <a className="underline" href="https://virtualyoutuber.fandom.com/wiki/" target="_blank" rel="noreferrer">Virtual Youtuber Wiki</a>, <a className="underline" href="https://wikiwiki.jp/nijisanji/" target="_blank" rel="noreferrer">WIKIWIKI Nijisanji Wiki</a> when no height data is available in the first website
							</p>
							<p className='text-base leading-relaxed list-item ml-4'>
								VSPO! - <a className="underline" href="https://vspo.jp/en/member/" target="_blank" rel="noreferrer">VSPO! JP Official Website</a>
							</p>

							<p>Notes:</p>
							<p className='text-base leading-relaxed list-item ml-4'>
								Height is assumed to be the measure between the bottom of the soles/feet and the top of the head. Guesswork was done to some talents with obstructions on top of their head.
							</p>
							<p className='text-base leading-relaxed list-item ml-4'>
								If the height has a decimal, it is rounded to the nearest whole number. Imperial conversion of heights are rounded to the nearest inch. Height specifying including the heels/shoes is preferred to use.
							</p>
							<p className='text-base leading-relaxed list-item ml-4'>
								Heights of 3D avatars are less consistently represented compared to 2D since they&apos;re not standing as straight.
							</p>

							<p>The following talents are ones that I modified their height due to various reasons:</p>
							<p className='text-base leading-relaxed list-item ml-4'>
								Ike Eveland - Added 7 centimeters. Acquired height specifies not including the heels.
							</p>
							<p className='text-base leading-relaxed list-item ml-4'>
								Mononobe Alice - Removed 15 centimeters. Acquired height specifies including the ribbons.
							</p>
							<p className='text-base leading-relaxed list-item ml-4'>
								Naraka - Added 6 centimeters from base height. The other height specifies including shoes AND horns. No height including shoes only.
							</p>

							<p>
								The menu is draggable and hideable in desktop for a bigger canvas.
							</p>

							<p>
								Any wrong/updated info, updated default models, or missing/new talents that satisfy the aforementioned conditions, contact me in <a className="underline" href="https://discord.com/users/431376611699458048" target="_blank" rel="noreferrer">Discord</a>.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
