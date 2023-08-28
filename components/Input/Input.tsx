import { FC } from 'react'
import styles from './Input.module.scss'
import Image from 'next/image'

interface IInputProps {
	placeholder: string
	type: 'text' | 'password' | 'email' | 'number' | 'tel'
	showCustomImage?: boolean
	value: string
	onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
	onClear: () => void
}

const Input: FC<IInputProps> = ({
	placeholder,
	type,
	showCustomImage,
	value,
	onChangeInput,
	onClear,
}) => {
	const customInputClasses = `${styles.customInput} ${
		showCustomImage ? styles.customInputImage : ''
	}`

	return (
		<div className={styles.inputContainer}>
			<input
				onChange={onChangeInput}
				value={value}
				type={type}
				placeholder={placeholder}
				className={customInputClasses}
			/>
			{value && (
				<button className={styles.clearButton} onClick={onClear}>
					<Image src='/trash.svg' width={25} height={25} alt='Clear' />
				</button>
			)}
		</div>
	)
}

export default Input
