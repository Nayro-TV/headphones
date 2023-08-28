'use client'

import { FC } from 'react'
import { useAppSelector } from '@/redux/store'
import {
	selectCartItems,
	selectCartTotalQuantity,
} from '@/redux/slices/cartSlice'
import { CartCard } from '@/components'
import styles from './CartPage.module.scss'
import Image from 'next/image'

const CartPage: FC = () => {
	const cartItems = useAppSelector(selectCartItems)
	const totalQuantity = useAppSelector(selectCartTotalQuantity)
	const totalCost = cartItems.reduce((total, item) => {
		if (item.product.price) {
			return total + item.product.price * item.quantity
		}
		if (item.product.discountedPrice) {
			return total + item.product.discountedPrice * item.quantity
		}
		return total
	}, 0)

	return (
		<>
			<h2 className='title__cart'>Корзина</h2>
			{cartItems.length !== 0 ? (
				<div className={styles.cart__cont}>
					<div className={styles.cart__row}>
						{cartItems.map(item => (
							<CartCard key={item.product.id} cartItem={item} />
						))}
					</div>

					<div className={styles.ri}>
						<div className={styles.total}>
							<div className={styles.total__tile}>ИТОГО</div>
							<div className={styles.total__price}>₽ {totalCost}</div>
						</div>
						<div className={styles.total__btn}>Перейти к оформлению</div>
					</div>
				</div>
			) : (
				<div className={styles.not}>
					<div className={styles.not_text}>
						<h2>Корзина пуста! 😕</h2>
						Пожалуйста, добавьте хотябы один продукт для того чтобы сделать
						покупку 🛒
					</div>
					<div className={styles.not_img}>
						<Image src='/not-cart.svg' width={380} height={380} alt='' />
					</div>
				</div>
			)}
		</>
	)
}

export default CartPage
