'use client'

import React, { FC } from 'react'
import { selectFavoriteItems } from '@/redux/slices/favoritesSlice'
import { useAppSelector } from '@/redux/store'
import { FavoriteCard } from '@/components'

const FavoritePage: FC = () => {
	const favoriteItems = useAppSelector(selectFavoriteItems)

	return (
		<div>
			<h2 className='title'>Мои Закладки</h2>
			{favoriteItems.map(item => (
				<FavoriteCard key={item.product.id} favoriteItem={item} />
			))}
		</div>
	)
}

export default FavoritePage
