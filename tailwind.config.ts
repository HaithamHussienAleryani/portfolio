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
    plugins: [
        require("tailwind-scrollbar")
    ],
}
export default config
