/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return ['/cases', '/blog', '/career', '/contact', '/service/:id'].map(source => ({
            source,
            destination: '/',
            permanent: false,
        }))
    },
}

export default nextConfig
