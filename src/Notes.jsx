function Notes() {
	return (
		<>
			<button
				data-modal-target='default-modal'
				data-modal-toggle='default-modal'
				className='block w-20 hover:font-bold font-medium rounded-lg text-sm px-4 py-2 text-center bg-gray-900 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-700'
				type='button'
			>
				Notes
			</button>
			<div
				id='default-modal'
				tabIndex='-1'
				aria-hidden='true'
				className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full sm:inset-0 h-[calc(100%-1rem)] max-h-full'
			>
				<div className='relative p-4 w-full max-w-md max-h-full'>
					<div className='relative bg-gray-700 rounded-lg shadow'>
						<div className='flex items-center justify-between py-3 px-4 border-gray-600 border-b rounded-t'>
							<h3 className='text-xl font-semibold'>Notes</h3>
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
						<div className='p-4 sm:p-5 space-y-4'>
							<p className='text-base leading-relaxed list-item ml-4'>
								Height is assumed to be the measure between the bottom of the soles/feet and the top of the head. Guesswork was done to some talents with hats.
							</p>
							<p className='text-base leading-relaxed list-item ml-4'>
								Heights of 3D avatars are less consistently represented compared to 2D since they&apos;re not standing as straight.
							</p>
							<p className='text-base leading-relaxed list-item ml-4'>
								Imperial conversion of heights are rounded to the nearest inch.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Notes
