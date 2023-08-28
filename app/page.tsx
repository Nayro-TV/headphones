'use client'

import { useEffect } from 'react'
import { HeadsetCard, Input, SelectFilter } from '@/components'
import { fetchHeadphones, setSearch, setSortOption } from '@/redux/slices/headphonesSlice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import styles from './page.module.scss'
import SelectSort from '@/components/SelectSort/SelectSort'

const Home = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { data, search, sortOption } = useAppSelector(state => state.headphones)

	useEffect(() => {
		dispatch(fetchHeadphones())
	}, [])

	const wiredHeadphones = data.filter(item => !item.wireless)
	const wirelessHeadphones = data.filter(item => item.wireless)

	const filteredWiredHeadphones = wiredHeadphones.filter(item =>
		item.title.toLowerCase().includes(search.toLowerCase()),
	)
	const filteredWirelessHeadphones = wirelessHeadphones.filter(item =>
		item.title.toLowerCase().includes(search.toLowerCase()),
	)

	const sortedWiredHeadphones = wiredHeadphones.slice().sort((a, b) => {
		if (sortOption === 'rating') {
			return b.rating - a.rating
		} else if (sortOption === 'title') {
			return a.title.localeCompare(b.title)
		} else if (sortOption === 'price') {
			return a.price - b.price
		}
		return 0
	})

	const sortedWirelessHeadphones = wirelessHeadphones.slice().sort((a, b) => {
		if (sortOption === 'rating') {
			return b.rating - a.rating
		} else if (sortOption === 'title') {
			return a.title.localeCompare(b.title)
		} else if (sortOption === 'price') {
			return a.price - b.price
		}
		return 0
	})

	return (
		<>
			<div className='title'>Наушники</div>

			<div className={styles.blockRow}>
				<SelectSort
					selectedOption={sortOption}
					onOptionChange={option => dispatch(setSortOption(option))}
				/>
				<Input
					onClear={() => dispatch(setSearch(''))}
					onChangeInput={e => dispatch(setSearch(e.target.value))}
					value={search}
					placeholder='Поиск...'
					showCustomImage={true}
					type='text'
				/>
			</div>

			<div className='card__list'>
				{sortedWiredHeadphones.map(item => (
					<div key={item.id} className='card__item'>
						<HeadsetCard data={item} />
					</div>
				))}
			</div>

			<div className='title'>Беспроводные наушники</div>
			<div className='card__list'>
				{sortedWirelessHeadphones.map(item => (
					<div key={item.id} className='card__item'>
						<HeadsetCard data={item} />
					</div>
				))}
			</div>
		</>
	)
}

export default Home
