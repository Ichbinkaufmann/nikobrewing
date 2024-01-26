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
            Montserrat: "Montserrat",
        },
        extend: {
            colors: {
                dangercolor: "#BB1313",
                dangercolorhover: "#A21010",
                successcolor: "#258F0B",
                successcolorhover: "#185E07",
                whitecolor: "#FFFFFF",
                abitgrey: "#F9F9F9",
                grey: "#B4B4B4",
                "gray-1": "#B4B4B4",
                "gray-2": "#E2E0E0",
                "form-bg": "#212121",
            },
        },
    },

    plugins: [forms],
};
