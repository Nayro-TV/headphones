import { IHeadPhone } from '@/types'
import axios from './axios'

export const getAll = async () => {
	try {
		const { data } = await axios.get<IHeadPhone[]>('/headphones')
		return data
	} catch (error) {
		console.error('Error fetching data:', error)
		return []
	}
}
