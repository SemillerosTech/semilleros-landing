module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1847px',
        },
        extend: {
            fontFamily: {},
            backgroundImage: {
                'semilleros-kids': "url('/src/assets/img/2x/10_img paralax.png')",
                'semilleros-kids2': "url('/src/assets/img/2x/17_imagen ninos.png')"
            },
            colors: {
                'semilleros-cyan': '#44C2CA',
                'semilleros-yellow': '#FFEC8A',
                'semilleros-pink': '#F9BDB8',
                'semilleros-blue': '#1D3B6D',
                'semilleros-white': '#F7F7F7',
                'semilleros-gray': '#707070'
            }
        },
    },
    plugins: []
}