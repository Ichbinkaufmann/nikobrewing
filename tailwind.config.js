import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        fontFamily: {
            montserrat: ["Montserrat"],
        },
        extend: {
            colors: {
                danger: "#BB1313",
                dangerhover: "#FB8F78",
                mtcolorhover: "#A21010",
                success: "#258F0B",
                successhover: "#185E07",
                white: "#FFFFFF",
                abitgrey: "#F9F9F9",
                "gray-2": "#E2E0E0",
                "form-bg": "#212121",
            },
        },
    },

    plugins: [forms],
};
