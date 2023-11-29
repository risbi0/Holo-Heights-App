function Search({setSearchStr}) {
	return (
		<input
			type='search'
			onChange={(e) => setSearchStr(e.target.value.toLowerCase())}
			className='w-9/12 sm:w-80 font-bold my-3 py-2 px-4 bg-gray-600 rounded-2xl border-4 border-gray-700 outline-none text-center'
			placeholder='Search'
		/>
	)
}

export default Search
