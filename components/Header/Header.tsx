'use client'

import Image from 'next/image'
import { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { useAppSelector } from '@/redux/store'
import {
	selectCartItems,
	selectCartTotalQuantity,
} from '@/redux/slices/cartSlice'
import { selectFavoriteItems } from '@/redux/slices/favoritesSlice'

const Header: FC = () => {
	const cartItems = useAppSelector(selectCartItems)
	const cartTotalQuantity = useAppSelector(selectCartTotalQuantity)

	const favoriteItems = useAppSelector(selectFavoriteItems)

	return (
		<header>
			<div className={styles.inner}>
				<Link href='/'>
					<div className={styles.logo}>QPICK</div>
				</Link>
				<div className={styles.list}>
					<div className={styles.item}>
						<Link href='/favorites'>
							{favoriteItems.length !== 0 && (
								<div className={styles.count}>{favoriteItems.length}</div>
							)}
							<Image width={22} height={20} src='/heart.svg' alt='heart' />
						</Link>
					</div>
					<div className={styles.item}>
						<Link href='/cart'>
							{cartItems.length !== 0 && (
								<div className={styles.count}>{cartTotalQuantity}</div>
							)}
							<Image width={23} height={23} src='/cart.svg' alt='cart' />
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
