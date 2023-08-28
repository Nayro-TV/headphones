import { createSlice } from '@reduxjs/toolkit'
import { IHeadPhone } from '@/types'
import { RootState } from '../store'

interface CartItem {
	product: IHeadPhone
	quantity: number
}

interface ICartSlice {
	items: CartItem[]
}

const initialState: ICartSlice = {
	items:
		typeof window !== 'undefined'
			? JSON.parse(localStorage.getItem('cart') || '[]')
			: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart: (state, action) => {
			const newItem: CartItem = {
				product: action.payload,
				quantity: 1,
			}

			const existingItem = state.items.find(
				item => item.product.id === newItem.product.id,
			)

			if (existingItem) {
				existingItem.quantity++
			} else {
				state.items.push(newItem)
			}

			localStorage.setItem('cart', JSON.stringify(state.items))
		},

		deleteItemToCart: (state, action) => {
			state.items = state.items.filter(
				item => item.product.id !== action.payload.id,
			)
			localStorage.setItem('cart', JSON.stringify(state.items))
		},

		updateCartItemQuantity: (state, action) => {
			const { id, change } = action.payload
			const targetItem = state.items.find(item => item.product.id === id)

			if (targetItem) {
				const newQuantity = targetItem.quantity + change

				if (newQuantity > 0) {
					targetItem.quantity = newQuantity
				} else {
					state.items = state.items.filter(item => item.product.id !== id)
				}

				localStorage.setItem('cart', JSON.stringify(state.items))
			}
		},
	},
})

export const { addItemToCart, deleteItemToCart, updateCartItemQuantity } =
	cartSlice.actions
export default cartSlice.reducer

export const selectCartTotalQuantity = (state: RootState) =>
	state.cart.items.reduce((total, item) => total + item.quantity, 0)

export const selectCartItems = (state: RootState) => state.cart.items
