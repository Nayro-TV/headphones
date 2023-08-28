// 'use client'

import { FC } from 'react'
import styles from './FavoriteCard.module.scss'
import { useAppSelector } from '@/redux/store'
import { selectFavoriteItems } from '@/redux/slices/favoritesSlice'
import { IHeadPhone } from '@/types'
import Image from 'next/image'

interface IFavoriteItem {
	product: IHeadPhone
	quantity: number
}

interface IFavoriteCardProps {
	favoriteItem: IFavoriteItem
}

const FavoriteCard: FC<IFavoriteCardProps> = ({ favoriteItem }) => {
	const { product } = favoriteItem
	const favoriteItems = useAppSelector(selectFavoriteItems)

	return (
		<div className={styles.list}>
			<div className={styles.le}>
				<div className={styles.item}>
					<div className={styles.item__flex}>
						<div className={styles.img}>
							<Image
								src={product.imgUrl}
								width={146}
								height={136}
								alt={product.title}
							/>
						</div>
						<div className={styles.info}>
							<div className={styles.title}>{product.title}</div>
							{product.price && (
								<div className={styles.price}>{product.price} ₽</div>
							)}
							{product.discountedPrice && (
								<div className={styles.price}>{product.discountedPrice} ₽</div>
							)}
						</div>
					</div>

					<div className={styles.bottom}>
						{product.price && (
							<div className={styles.bottom__price}>{product.price} ₽</div>
						)}
						{product.discountedPrice && (
							<div className={styles.bottom__price}>
								{product.discountedPrice} ₽
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FavoriteCard
