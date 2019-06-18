module.exports = {
    baseUrl: './',
    outputDir: 'dist',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.apiopen.top',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}