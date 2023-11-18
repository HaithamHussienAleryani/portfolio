import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f1aa00'
            }
        },
    },
    plugins: [],
}
export default config
