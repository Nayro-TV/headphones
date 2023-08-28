'use client'

import { FC } from 'react'
import Select from 'react-select'
import './SelectSort.scss'

const options = [
	{ value: 'rating', label: 'Популярности' },
	{ value: 'title', label: 'Наименованию' },
	{ value: 'price', label: 'Цене' },
]

interface ISelectSortProps {}

const SelectSort: FC<ISelectSortProps> = () => {
	return <Select classNamePrefix='select' placeholder='Поиск по...' options={options} />
}

export default SelectSort
