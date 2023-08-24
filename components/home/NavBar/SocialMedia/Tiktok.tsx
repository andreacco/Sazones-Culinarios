import { useTheme } from "next-themes";
import React from "react";

function Tiktok() {
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
                    <clipPath id="daeb6b5ae6">
                        <path d="M15 15h314v345H15zm0 0"></path>
                    </clipPath>
                    <clipPath id="d57c278328">
                        <path
                            d="M156.25 31.25c0-8.629 6.996-15.625 15.625-15.625h46.875c8.629 0 15.625 6.996 15.625 15.625 0 43.148 34.977 78.125 78.125 78.125 8.629 0 15.625 6.996 15.625 15.625v46.875c0 8.629-6.996 15.625-15.625 15.625-28.45 0-55.14-7.613-78.125-20.906V250c0 60.406-48.969 109.375-109.375 109.375S15.625 310.406 15.625 250 64.594 140.625 125 140.625c8.629 0 15.625 6.996 15.625 15.625v46.875c0 8.629-6.996 15.625-15.625 15.625-17.258 0-31.25 13.992-31.25 31.25s13.992 31.25 31.25 31.25 31.25-13.992 31.25-31.25zm31.25 15.625V250c0 34.516-27.984 62.5-62.5 62.5-34.52 0-62.5-27.984-62.5-62.5 0-29.121 19.918-53.594 46.875-60.531v-16.031c-35.66 7.238-62.5 38.765-62.5 76.562 0 43.148 34.977 78.125 78.125 78.125s78.125-34.977 78.125-78.125V136.066c0-6.16 3.621-11.75 9.25-14.261a15.625 15.625 0 0116.797 2.62c18.469 16.528 41.851 27.638 67.703 30.86v-15.77c-47.902-6.85-85.79-44.738-92.64-92.64zm0 0"
                            clipRule="evenodd"
                        ></path>
                    </clipPath>
                    <linearGradient
                        id="46fa110a18"
                        x1="11"
                        x2="11"
                        y1="1"
                        y2="23"
                        gradientTransform="scale(15.625)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#3D4E62"></stop>
                        <stop offset="0.016" stopColor="#3D4E62"></stop>
                        <stop offset="0.031" stopColor="#3C4D61"></stop>
                        <stop offset="0.047" stopColor="#3C4D60"></stop>
                        <stop offset="0.063" stopColor="#3B4C5F"></stop>
                        <stop offset="0.078" stopColor="#3B4B5F"></stop>
                        <stop offset="0.094" stopColor="#3B4B5E"></stop>
                        <stop offset="0.109" stopColor="#3A4A5D"></stop>
                        <stop offset="0.125" stopColor="#3A4A5C"></stop>
                        <stop offset="0.141" stopColor="#39495C"></stop>
                        <stop offset="0.156" stopColor="#39495B"></stop>
                        <stop offset="0.172" stopColor="#38485A"></stop>
                        <stop offset="0.188" stopColor="#384759"></stop>
                        <stop offset="0.203" stopColor="#374759"></stop>
                        <stop offset="0.219" stopColor="#374658"></stop>
                        <stop offset="0.234" stopColor="#374657"></stop>
                        <stop offset="0.25" stopColor="#364557"></stop>
                        <stop offset="0.266" stopColor="#364456"></stop>
                        <stop offset="0.281" stopColor="#354455"></stop>
                        <stop offset="0.297" stopColor="#354354"></stop>
                        <stop offset="0.313" stopColor="#344354"></stop>
                        <stop offset="0.328" stopColor="#344253"></stop>
                        <stop offset="0.344" stopColor="#344252"></stop>
                        <stop offset="0.359" stopColor="#334151"></stop>
                        <stop offset="0.375" stopColor="#334051"></stop>
                        <stop offset="0.391" stopColor="#324050"></stop>
                        <stop offset="0.406" stopColor="#323F4F"></stop>
                        <stop offset="0.422" stopColor="#313F4E"></stop>
                        <stop offset="0.438" stopColor="#313E4E"></stop>
                        <stop offset="0.453" stopColor="#303E4D"></stop>
                        <stop offset="0.469" stopColor="#303D4C"></stop>
                        <stop offset="0.484" stopColor="#303C4C"></stop>
                        <stop offset="0.5" stopColor="#2F3C4B"></stop>
                        <stop offset="0.516" stopColor="#2F3B4A"></stop>
                        <stop offset="0.531" stopColor="#2E3B49"></stop>
                        <stop offset="0.547" stopColor="#2E3A49"></stop>
                        <stop offset="0.563" stopColor="#2D3A48"></stop>
                        <stop offset="0.578" stopColor="#2D3947"></stop>
                        <stop offset="0.594" stopColor="#2D3846"></stop>
                        <stop offset="0.609" stopColor="#2C3846"></stop>
                        <stop offset="0.625" stopColor="#2C3745"></stop>
                        <stop offset="0.641" stopColor="#2B3744"></stop>
                        <stop offset="0.656" stopColor="#2B3643"></stop>
                        <stop offset="0.672" stopColor="#2A3543"></stop>
                        <stop offset="0.688" stopColor="#2A3542"></stop>
                        <stop offset="0.703" stopColor="#293441"></stop>
                        <stop offset="0.719" stopColor="#293441"></stop>
                        <stop offset="0.734" stopColor="#293340"></stop>
                        <stop offset="0.75" stopColor="#28333F"></stop>
                        <stop offset="0.766" stopColor="#28323E"></stop>
                        <stop offset="0.781" stopColor="#27313E"></stop>
                        <stop offset="0.797" stopColor="#27313D"></stop>
                        <stop offset="0.813" stopColor="#26303C"></stop>
                        <stop offset="0.828" stopColor="#26303B"></stop>
                        <stop offset="0.844" stopColor="#252F3B"></stop>
                        <stop offset="0.859" stopColor="#252F3A"></stop>
                        <stop offset="0.875" stopColor="#252E39"></stop>
                        <stop offset="0.891" stopColor="#242D38"></stop>
                        <stop offset="0.906" stopColor="#242D38"></stop>
                        <stop offset="0.922" stopColor="#232C37"></stop>
                        <stop offset="0.938" stopColor="#232C36"></stop>
                        <stop offset="0.953" stopColor="#222B36"></stop>
                        <stop offset="0.969" stopColor="#222A35"></stop>
                        <stop offset="0.984" stopColor="#222A34"></stop>
                        <stop offset="1" stopColor="#212933"></stop>
                    </linearGradient>
                </defs>
                <g clipPath="url(#daeb6b5ae6)">
                    <g clipPath="url(#d57c278328)">
                        <path
                            fill="url(#46fa110a18)"
                            d="M15.625 15.625v343.75h312.5V15.625zm0 0"
                        ></path>
                    </g>
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
                    <clipPath id="3411052b7c">
                        <path d="M15 15h314v345H15zm0 0"></path>
                    </clipPath>
                    <clipPath id="36651b55bf">
                        <path
                            d="M156.25 31.25c0-8.629 6.996-15.625 15.625-15.625h46.875c8.629 0 15.625 6.996 15.625 15.625 0 43.148 34.977 78.125 78.125 78.125 8.629 0 15.625 6.996 15.625 15.625v46.875c0 8.629-6.996 15.625-15.625 15.625-28.45 0-55.14-7.613-78.125-20.906V250c0 60.406-48.969 109.375-109.375 109.375S15.625 310.406 15.625 250 64.594 140.625 125 140.625c8.629 0 15.625 6.996 15.625 15.625v46.875c0 8.629-6.996 15.625-15.625 15.625-17.258 0-31.25 13.992-31.25 31.25s13.992 31.25 31.25 31.25 31.25-13.992 31.25-31.25zm31.25 15.625V250c0 34.516-27.984 62.5-62.5 62.5-34.52 0-62.5-27.984-62.5-62.5 0-29.121 19.918-53.594 46.875-60.531v-16.031c-35.66 7.238-62.5 38.765-62.5 76.562 0 43.148 34.977 78.125 78.125 78.125s78.125-34.977 78.125-78.125V136.066c0-6.16 3.621-11.75 9.25-14.261a15.625 15.625 0 0116.797 2.62c18.469 16.528 41.851 27.638 67.703 30.86v-15.77c-47.902-6.85-85.79-44.738-92.64-92.64zm0 0"
                            clipRule="evenodd"
                        ></path>
                    </clipPath>
                    <linearGradient
                        id="bc85c8ad30"
                        x1="11"
                        x2="11"
                        y1="1"
                        y2="23"
                        gradientTransform="scale(15.625)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#FFF"></stop>
                        <stop offset="0.031" stopColor="#FFF"></stop>
                        <stop offset="0.063" stopColor="#FEFEFE"></stop>
                        <stop offset="0.094" stopColor="#FDFDFE"></stop>
                        <stop offset="0.125" stopColor="#FCFCFD"></stop>
                        <stop offset="0.156" stopColor="#FBFCFD"></stop>
                        <stop offset="0.188" stopColor="#FAFBFC"></stop>
                        <stop offset="0.219" stopColor="#F9FAFC"></stop>
                        <stop offset="0.25" stopColor="#F8FAFB"></stop>
                        <stop offset="0.281" stopColor="#F7F9FB"></stop>
                        <stop offset="0.313" stopColor="#F6F8FB"></stop>
                        <stop offset="0.344" stopColor="#F5F7FA"></stop>
                        <stop offset="0.375" stopColor="#F5F7FA"></stop>
                        <stop offset="0.406" stopColor="#F4F6F9"></stop>
                        <stop offset="0.438" stopColor="#F3F5F9"></stop>
                        <stop offset="0.469" stopColor="#F2F5F8"></stop>
                        <stop offset="0.5" stopColor="#F1F4F8"></stop>
                        <stop offset="0.531" stopColor="#F0F3F7"></stop>
                        <stop offset="0.563" stopColor="#EFF2F7"></stop>
                        <stop offset="0.594" stopColor="#EEF2F6"></stop>
                        <stop offset="0.625" stopColor="#EDF1F6"></stop>
                        <stop offset="0.656" stopColor="#ECF0F5"></stop>
                        <stop offset="0.688" stopColor="#EBF0F5"></stop>
                        <stop offset="0.719" stopColor="#EBEFF4"></stop>
                        <stop offset="0.75" stopColor="#EAEEF4"></stop>
                        <stop offset="0.781" stopColor="#E9EDF3"></stop>
                        <stop offset="0.813" stopColor="#E8EDF3"></stop>
                        <stop offset="0.844" stopColor="#E7ECF3"></stop>
                        <stop offset="0.875" stopColor="#E6EBF2"></stop>
                        <stop offset="0.906" stopColor="#E5EBF2"></stop>
                        <stop offset="0.938" stopColor="#E4EAF1"></stop>
                        <stop offset="0.969" stopColor="#E3E9F1"></stop>
                        <stop offset="1" stopColor="#E2E8F0"></stop>
                    </linearGradient>
                </defs>
                <g clipPath="url(#3411052b7c)">
                    <g clipPath="url(#36651b55bf)">
                        <path
                            fill="url(#bc85c8ad30)"
                            d="M15.625 15.625v343.75h312.5V15.625zm0 0"
                        ></path>
                    </g>
                </g>
            </svg>
        )
    }
}

export default Tiktok;
