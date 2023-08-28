'use client'

import { FC, useState } from 'react'
import styles from './HeadsetCard.module.scss'
import Image from 'next/image'
import { IHeadPhone } from '@/types'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { addItemToCart, selectCartItems } from '@/redux/slices/cartSlice'
import {
	addFavoriteItem,
	removeFavoriteItem,
	selectFavoriteItems,
} from '@/redux/slices/favoritesSlice'

interface IHeadsetCardProps {
	data: IHeadPhone
}

const HeadsetCard: FC<IHeadsetCardProps> = ({ data }) => {
	const dispatch = useDispatch<AppDispatch>()

	const cartItems = useAppSelector(selectCartItems)
	const isCart = cartItems.find(item => item.product.id === data.id)

	const favoriteItems = useAppSelector(selectFavoriteItems)
	const isFavorite = favoriteItems.find(item => item.product.id === data.id)

	const handleAddToCart = () => {
		if (!isCart) {
			dispatch(addItemToCart(data))
		}
	}

	const handleFavoriteToggle = () => {
		if (!isFavorite) {
			dispatch(addFavoriteItem(data))
		} else {
			dispatch(removeFavoriteItem(data.id))
		}
	}

	return (
		<div className={styles.card}>
			<div className={styles.icon}>
				<Image
					src={isFavorite ? '/favorites.svg' : '/favorites-not.svg'}
					width={25}
					height={25}
					alt=''
					onClick={handleFavoriteToggle}
				/>
			</div>
			<div className={styles.img}>
				<Image src={data.imgUrl} width={219} height={237} alt='' />
			</div>
			<div className={styles.info}>
				<div className={styles.top}>
					<div className={styles.title}>{data.title}</div>
					<div className={styles.prices}>
						{data.price && <div className={styles.price}>{data.price} ₽</div>}
						{data.discountedPrice && (
							<div className={styles.price}>{data.discountedPrice} ₽</div>
						)}
						{data.originalPrice && (
							<div className={styles.markdown}>{data.originalPrice} ₽</div>
						)}
					</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.rating}>
						<Image src='/star.svg' width={23} height={21} alt='' />
						{data.rating}
					</div>
					<div
						className={`${styles.buy} ${
							isCart ? styles.added : styles.notAdded
						}`}
						onClick={handleAddToCart}
					>
						{isCart ? 'В корзине' : 'В корзину'}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeadsetCard
