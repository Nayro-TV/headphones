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
	const { data, search } = useAppSelector(state => state.headphones)

	useEffect(() => {
		dispatch(fetchHeadphones())
	}, [])

	const wiredHeadphones = data.filter(item => !item.wireless)
	const wirelessHeadphones = data.filter(item => item.wireless)

	return (
		<>
			<div className='title'>Наушники</div>

			<div className={styles.blockRow}>
				<SelectSort />
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
				{wiredHeadphones.map(item => (
					<div key={item.id} className='card__item'>
						<HeadsetCard data={item} />
					</div>
				))}
			</div>

			<div className='title'>Беспроводные наушники</div>
			<div className='card__list'>
				{wirelessHeadphones.map(item => (
					<div key={item.id} className='card__item'>
						<HeadsetCard data={item} />
					</div>
				))}
			</div>
		</>
	)
}

export default Home
