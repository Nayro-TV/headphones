import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import headphonesReducer from './slices/headphonesSlice'
import cartReducer from './slices/cartSlice'
import favoritesSlice from './slices/favoritesSlice'

export const store = configureStore({
	reducer: {
		headphones: headphonesReducer,
		cart: cartReducer,
		favorites: favoritesSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
