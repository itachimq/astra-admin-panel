import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                background: "#09090b", // zinc-950
                foreground: "#fafafa", // zinc-50
                primary: "#3b82f6", // blue-500
                secondary: "#71717a", // zinc-500
                destructve: "#ef4444", // red-500
                border: "#27272a", // zinc-800
                input: "#27272a",
                ring: "#3b82f6",
            }
        },
    },
    plugins: [],
};
export default config;
