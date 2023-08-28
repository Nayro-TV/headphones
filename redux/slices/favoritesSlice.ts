import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IHeadPhone } from '@/types'

interface FavoritesItem {
	product: IHeadPhone
	quantity: number
}

interface IFavoritesSlice {
	items: FavoritesItem[]
}

const initialState: IFavoritesSlice = {
	items:
		typeof window !== 'undefined'
			? JSON.parse(localStorage.getItem('favorites') || '[]')
			: [],
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavoriteItem: (state, action: PayloadAction<IHeadPhone>) => {
			const newItem: FavoritesItem = {
				product: action.payload,
				quantity: 1,
			}

			const existingItem = state.items.find(
				item => item.product.id === newItem.product.id,
			)

			if (!existingItem) {
				state.items.push(newItem)
				localStorage.setItem('favorites', JSON.stringify(state.items))
			} else {
				existingItem.quantity++
			}
		},

		removeFavoriteItem: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(
				item => item.product.id !== action.payload,
			)
			localStorage.setItem('favorites', JSON.stringify(state.items))
		},
	},
})

export const { addFavoriteItem, removeFavoriteItem } = favoritesSlice.actions
export default favoritesSlice.reducer

export const selectFavoriteItems = (state: RootState) => state.favorites.items
