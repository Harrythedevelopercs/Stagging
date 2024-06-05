/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 60,
        
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wp23.cryscampus.com',
                port: '',
                pathname: '/**',
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/mobile-app-design-company',
                destination: '/top-mobile-app-development-company',
                permanent: true,
            },
        ]
    },
}

export default nextConfig;