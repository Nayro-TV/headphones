import { FC } from 'react'
import Image from 'next/image'
import styles from './CartCard.module.scss'
import { IHeadPhone } from '@/types'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import {
	deleteItemToCart,
	updateCartItemQuantity,
} from '@/redux/slices/cartSlice'

interface ICartItem {
	product: IHeadPhone
	quantity: number
}

interface ICartCardProps {
	cartItem: ICartItem
}

const CartCard: FC<ICartCardProps> = ({ cartItem }) => {
	const { quantity, product } = cartItem
	const dispatch = useDispatch<AppDispatch>()

	const handleDelete = () => {
		dispatch(deleteItemToCart(product))
	}

	const handleUpdateQuantity = (change: number) => {
		dispatch(updateCartItemQuantity({ id: product.id, change }))
	}

	return (
		<div className={styles.list}>
			<div className={styles.le}>
				<div className={styles.item}>
					<div className={styles.item__flex}>
						<div onClick={handleDelete} className={styles.icon__del}>
							<Image src='/delete.svg' width={20} height={17} alt='delete' />
						</div>
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
						<div className={styles.count}>
							<div
								className={styles.icon}
								onClick={() => handleUpdateQuantity(-1)}
							>
								<Image src='/minus.svg' width={35} height={35} alt='minus' />
							</div>
							<b>{quantity}</b>
							<div
								className={styles.iconRight}
								onClick={() => handleUpdateQuantity(1)}
							>
								<Image src='/plus.svg' width={35} height={35} alt='plus' />
							</div>
						</div>
						{product.price && (
							<div className={styles.bottom__price}>{product.price * quantity} ₽</div>
						)}
						{product.discountedPrice && (
							<div className={styles.bottom__price}>
								{product.discountedPrice * quantity} ₽
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartCard
