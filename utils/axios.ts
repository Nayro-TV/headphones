import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://64ec250ce51e1e82c577e634.mockapi.io',
})

export default instance
