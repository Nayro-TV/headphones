/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ltdfoto.ru'
			},
		],
	},
}

module.exports = nextConfig
