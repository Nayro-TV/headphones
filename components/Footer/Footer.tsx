import { FC } from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.title}>QPICK</div>
			<div className={styles.list}>
				<div className={styles.item}>Избранное</div>
				<div className={styles.item}>Корзина</div>
				<div className={styles.item}>Контакты</div>
			</div>
			<div className={styles.services}>
				<div className={styles.services__text}>Условия сервиса</div>
				<div className={styles.lang}>
					<div className={styles.lang__img}>
						<Image src='/lang.svg' width={20} height={20} alt='' />
					</div>
					<div className={styles.lang__text}>Рус</div>
					<div className={styles.lang__text}>Eng</div>
				</div>
			</div>
			<div className={styles.soc}>
				<div className={styles.soc__img}>
					<Image src='/social.svg' width={126} height={30} alt='' />
				</div>
			</div>
		</footer>
	)
}

export default Footer
