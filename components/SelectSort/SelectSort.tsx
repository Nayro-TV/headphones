'use client'

import { FC } from 'react'
import Select from 'react-select'
import './SelectSort.scss'

const options = [
	{ value: 'rating', label: 'Популярности' },
	{ value: 'title', label: 'Наименованию' },
	{ value: 'price', label: 'Цене' },
]

interface ISelectSortProps {
	selectedOption: string
	onOptionChange: (option: string) => void
}

const SelectSort: FC<ISelectSortProps> = ({
	selectedOption,
	onOptionChange,
}) => {
	return (
		<Select
			classNamePrefix='custom-select'
			placeholder='Поиск по...'
			theme={theme => ({
				...theme,
				borderRadius: 12,
			})}
			options={options}
			value={options.find(option => option.value === selectedOption)}
			onChange={option => onOptionChange(option?.value || '')}
		/>
	)
}

export default SelectSort
