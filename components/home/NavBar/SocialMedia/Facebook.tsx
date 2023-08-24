import { useTheme } from "next-themes";
import React from "react";

function FacebookLight() {
    const { theme } = useTheme();

    if (theme === "light") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                version="1"
                viewBox="0 0 375 375"
                className="ml-2 mr-2"
            >
                <defs>
                    <clipPath id="c37fd38f4a">
                        <path d="M.684.684h373.632v373.632H.684zm0 0"></path>
                    </clipPath>
                    <clipPath id="8b6b61297c">
                        <path d="M187.5.684C84.324.684.684 84.324.684 187.5S84.324 374.316 187.5 374.316s186.816-83.64 186.816-186.816S290.676.684 187.5.684"></path>
                    </clipPath>
                    <clipPath id="97fd427e19">
                        <path d="M0 .684h375v373.125H0zm0 0"></path>
                    </clipPath>
                </defs>
                <g clipPath="url(#c37fd38f4a)">
                    <g clipPath="url(#8b6b61297c)">
                        <path fill="#e2e8f0" d="M.684.684h373.632v373.632H.684zm0 0"></path>
                    </g>
                </g>
                <g clipPath="url(#97fd427e19)">
                    <path
                        fill="#212933"
                        d="M187.582.805C83.965.805 0 84.66 0 188.137 0 281.07 67.887 358.273 156.723 372.87V245.875h-47.746v-55.629h47.746V149.86c0-43.793 35.57-73.472 79.418-73.472 19.488 0 31.672 2.918 31.672 2.918v46.71H236.14c-13.157 0-23.875 10.708-23.875 23.844v40.387h51.16l-7.145 55.629h-44.015v127.809c91.761-12.164 162.57-90.664 162.57-185.547C375 84.66 291.036.805 187.582.805zm0 0"
                    ></path>
                </g>
            </svg>
        )
    } else {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                version="1"
                viewBox="0 0 375 375"
                className="ml-2 mr-2"
            >
                <defs>
                    <clipPath id="efe4a6d212">
                        <path d="M.684.684h373.632v373.632H.684zm0 0"></path>
                    </clipPath>
                    <clipPath id="445a0e8d65">
                        <path d="M187.5.684C84.324.684.684 84.324.684 187.5S84.324 374.316 187.5 374.316s186.816-83.64 186.816-186.816S290.676.684 187.5.684"></path>
                    </clipPath>
                    <clipPath id="70c5193608">
                        <path d="M0 .684h375v373.125H0zm0 0"></path>
                    </clipPath>
                </defs>
                <g clipPath="url(#efe4a6d212)">
                    <g clipPath="url(#445a0e8d65)">
                        <path fill="#212933" d="M.684.684h373.632v373.632H.684zm0 0"></path>
                    </g>
                </g>
                <g clipPath="url(#70c5193608)">
                    <path
                        fill="#e2e8f0"
                        d="M187.582.805C83.965.805 0 84.66 0 188.137 0 281.07 67.887 358.273 156.723 372.87V245.875h-47.746v-55.629h47.746V149.86c0-43.793 35.57-73.472 79.418-73.472 19.488 0 31.672 2.918 31.672 2.918v46.71H236.14c-13.157 0-23.875 10.708-23.875 23.844v40.387h51.16l-7.145 55.629h-44.015v127.809c91.761-12.164 162.57-90.664 162.57-185.547C375 84.66 291.036.805 187.582.805zm0 0"
                    ></path>
                </g>
            </svg>
        )
    }
}

export default FacebookLight;
