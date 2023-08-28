'use client'

import { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

interface IReduxProviderProps {
	children: React.ReactNode
}

const ReduxProvider: FC<IReduxProviderProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
