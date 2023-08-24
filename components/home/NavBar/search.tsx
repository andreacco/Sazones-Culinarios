import { useTheme } from "next-themes";
import React from "react";

function Search() {
    const { theme } = useTheme();

    if (theme === "light") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                version="1"
                viewBox="0 0 375 375"
                className="ml-2 mr-2"
            >
                <defs>
                    <clipPath id="fa44a8c197">
                        <path d="M0 1.703h251V252H0zm0 0"></path>
                    </clipPath>
                    <clipPath id="10f3fa1fc6">
                        <path d="M249 246h125v126.953H249zm0 0"></path>
                    </clipPath>
                </defs>
                <g clipPath="url(#fa44a8c197)">
                    <path
                        fill="#212933"
                        d="M125.16 251.543C56.215 251.543.117 195.508.117 126.617c0-68.89 56.09-124.93 125.043-124.93s125.043 56.04 125.043 124.93c0 68.89-56.098 124.926-125.043 124.926zm0-229.309c-1.71 0-3.418.043-5.125.125-1.71.086-3.414.211-5.117.38-1.7.167-3.398.374-5.09.628a105.036 105.036 0 00-10.055 1.996c-1.656.414-3.304.871-4.941 1.367a107.554 107.554 0 00-4.871 1.606 104.743 104.743 0 00-14.05 6.227 103.73 103.73 0 00-8.793 5.266 103.782 103.782 0 00-15.833 12.98 102.334 102.334 0 00-6.887 7.59 104.792 104.792 0 00-6.109 8.226 104.406 104.406 0 00-11.5 22.828 104.121 104.121 0 00-2.973 9.8 99.364 99.364 0 00-1.125 5 109.847 109.847 0 00-.878 5.048 106.221 106.221 0 00-1.004 10.195 106.43 106.43 0 00-.125 5.121c0 1.707.043 3.414.125 5.121a106.221 106.221 0 001.003 10.196c.254 1.687.547 3.37.88 5.046.331 1.676.706 3.34 1.124 5 .414 1.657.872 3.301 1.368 4.938a107.248 107.248 0 001.605 4.863 104.11 104.11 0 003.926 9.465c.73 1.543 1.5 3.066 2.305 4.574a102.06 102.06 0 002.527 4.457 103.597 103.597 0 005.695 8.52 104.793 104.793 0 0010.043 11.629 105.606 105.606 0 003.711 3.531 108.854 108.854 0 003.883 3.348 112.175 112.175 0 004.043 3.152c1.375 1.016 2.773 2 4.195 2.95a99.75 99.75 0 004.332 2.738 104.585 104.585 0 0018.512 8.75 107.61 107.61 0 004.871 1.609c1.637.496 3.285.95 4.941 1.363 1.66.418 3.329.79 5.004 1.125a104.917 104.917 0 0015.258 1.88c1.707.081 3.414.124 5.125.124 1.711 0 3.418-.043 5.125-.125 1.707-.082 3.414-.21 5.113-.375a105.839 105.839 0 0010.145-1.504c1.676-.336 3.344-.707 5.004-1.125a103.95 103.95 0 004.941-1.363 105.863 105.863 0 0014.34-5.527 104.585 104.585 0 0021.61-13.672c1.324-1.086 2.617-2.2 3.882-3.348a102.397 102.397 0 007.25-7.242 105.494 105.494 0 003.352-3.88 104.695 104.695 0 006.105-8.23 103.681 103.681 0 007.578-13.359 104.052 104.052 0 003.922-9.465 102.634 102.634 0 002.977-9.8c.418-1.66.789-3.325 1.125-5a105.602 105.602 0 001.504-10.133c.168-1.7.293-3.403.379-5.11.082-1.707.125-3.414.125-5.12a106.69 106.69 0 00-.133-5.122 106.448 106.448 0 00-.383-5.105 104.812 104.812 0 00-1.516-10.129c-.332-1.672-.71-3.34-1.125-4.996-.417-1.657-.875-3.301-1.37-4.934a105.606 105.606 0 00-3.462-9.637 102.092 102.092 0 00-2.082-4.68 102.159 102.159 0 00-4.836-9.03 103.62 103.62 0 00-8.852-12.547 105.717 105.717 0 00-6.883-7.586 105.607 105.607 0 00-3.71-3.532 108.745 108.745 0 00-3.883-3.343 104.695 104.695 0 00-4.039-3.153c-1.375-1.015-2.77-2-4.191-2.949a103.732 103.732 0 00-8.79-5.266 106.676 106.676 0 00-4.577-2.304 102.17 102.17 0 00-4.684-2.078 112.765 112.765 0 00-4.781-1.848 102.726 102.726 0 00-9.809-2.977 99.362 99.362 0 00-5-1.125 104.97 104.97 0 00-5.05-.882 106.233 106.233 0 00-10.195-1.012 106.853 106.853 0 00-5.126-.133zm0 0"
                    ></path>
                </g>
                <path
                    fill="#212933"
                    d="M215.453 265.047c-1.137 0-2.25-.164-3.336-.492a11.505 11.505 0 01-3.054-1.438 11.578 11.578 0 01-4.243-5.152 11.504 11.504 0 01-.828-3.266 11.585 11.585 0 01.156-3.367 11.355 11.355 0 011.13-3.18c.53-1.004 1.199-1.91 2-2.714l31.843-32.055c.52-.586 1.09-1.117 1.715-1.59a11.638 11.638 0 012.004-1.211 11.605 11.605 0 014.527-1.102 11.587 11.587 0 014.594.781 11.65 11.65 0 013.906 2.536 11.523 11.523 0 013.418 8.453c-.02.785-.117 1.559-.293 2.32-.176.766-.43 1.504-.758 2.215-.324.711-.722 1.383-1.187 2.016a11.798 11.798 0 01-1.57 1.734l-31.848 32.05a11.365 11.365 0 01-3.738 2.552 11.401 11.401 0 01-4.438.91zm0 0"
                ></path>
                <g clipPath="url(#10f3fa1fc6)">
                    <path
                        fill="#212933"
                        d="M353.64 372.945a19.71 19.71 0 01-7.664-1.535 19.904 19.904 0 01-3.449-1.875 19.797 19.797 0 01-3.011-2.523l-84.73-86.692a18.874 18.874 0 01-1.286-1.453 18.592 18.592 0 01-1.137-1.566 19.852 19.852 0 01-1.785-3.434 21.032 21.032 0 01-.633-1.828c-.18-.621-.328-1.25-.449-1.883a21.331 21.331 0 01-.262-1.918 20.027 20.027 0 01.352-5.781 20.274 20.274 0 011.168-3.687 19.848 19.848 0 011.863-3.391c.367-.531.758-1.047 1.176-1.54a19.63 19.63 0 012.766-2.703 21.079 21.079 0 011.57-1.136 19.35 19.35 0 013.438-1.781 18.78 18.78 0 011.831-.633c.622-.18 1.25-.328 1.883-.45a21.226 21.226 0 011.922-.261 20.026 20.026 0 015.785.352c.633.132 1.258.296 1.871.492a19.891 19.891 0 013.563 1.523c.566.309 1.113.649 1.648 1.016a19.497 19.497 0 012.965 2.484l84.73 86.696a19.675 19.675 0 013.383 4.664c.45.855.829 1.738 1.149 2.652.316.91.562 1.84.742 2.789.18.95.293 1.906.332 2.871a19.74 19.74 0 01-1.531 8.461c-.375.89-.813 1.75-1.317 2.574-.5.824-1.058 1.61-1.675 2.352a19.397 19.397 0 01-2 2.086 20.044 20.044 0 01-2.286 1.77 19.9 19.9 0 01-5.218 2.448 19.753 19.753 0 01-5.703.84zm0 0"
                    ></path>
                </g>
                <path
                    fill="#212933"
                    d="M124.953 214.61c-16.105 0-37.398-4.614-60.183-22.126-20.008-15.37-29.23-39.015-26.68-68.367a132.82 132.82 0 019.7-39.238c.167-.367.366-.715.605-1.04.234-.327.5-.632.792-.905a6.224 6.224 0 012.036-1.27 6.213 6.213 0 013.563-.242 6.186 6.186 0 013.84 2.719 6.176 6.176 0 01.858 2.238c.07.398.102.797.09 1.2a6.098 6.098 0 01-.523 2.339 122.538 122.538 0 00-8.696 35.562c-2.105 25.153 5.274 44.383 21.934 57.207 41.133 31.625 76.3 15.286 76.652 15.114a6.26 6.26 0 011.145-.446c.394-.109.797-.18 1.207-.207.41-.03.816-.02 1.227.032a6.21 6.21 0 011.19.277c.392.129.763.3 1.118.504.356.207.688.445.996.715.305.273.586.574.832.898.246.328.461.676.64 1.047.177.367.317.754.419 1.149.101.398.164.8.183 1.21a6.097 6.097 0 01-.359 2.41c-.14.387-.316.755-.527 1.106a6.223 6.223 0 01-1.657 1.793 6.072 6.072 0 01-1.058.613c-.879.453-12.156 5.707-29.344 5.707zm0 0"
                ></path>
            </svg>
        )
    } else {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                version="1"
                viewBox="0 0 375 375"
                className="ml-2 mr-2"
            >
                <defs>
                    <clipPath id="4351d5d10f">
                        <path d="M0 1.703h251V252H0zm0 0"></path>
                    </clipPath>
                    <clipPath id="771bbaaafe">
                        <path d="M249 246h125v126.953H249zm0 0"></path>
                    </clipPath>
                </defs>
                <g clipPath="url(#4351d5d10f)">
                    <path
                        fill="#e2e8f0"
                        d="M125.16 251.543C56.215 251.543.117 195.508.117 126.617c0-68.89 56.09-124.93 125.043-124.93s125.043 56.04 125.043 124.93c0 68.89-56.098 124.926-125.043 124.926zm0-229.309c-1.71 0-3.418.043-5.125.125-1.71.086-3.414.211-5.117.38-1.7.167-3.398.374-5.09.628a105.036 105.036 0 00-10.055 1.996c-1.656.414-3.304.871-4.941 1.367a107.554 107.554 0 00-4.871 1.606 104.743 104.743 0 00-14.05 6.227 103.73 103.73 0 00-8.793 5.266 103.782 103.782 0 00-15.833 12.98 102.334 102.334 0 00-6.887 7.59 104.792 104.792 0 00-6.109 8.226 104.406 104.406 0 00-11.5 22.828 104.121 104.121 0 00-2.973 9.8 99.364 99.364 0 00-1.125 5 109.847 109.847 0 00-.878 5.048 106.221 106.221 0 00-1.004 10.195 106.43 106.43 0 00-.125 5.121c0 1.707.043 3.414.125 5.121a106.221 106.221 0 001.003 10.196c.254 1.687.547 3.37.88 5.046.331 1.676.706 3.34 1.124 5 .414 1.657.872 3.301 1.368 4.938a107.248 107.248 0 001.605 4.863 104.11 104.11 0 003.926 9.465c.73 1.543 1.5 3.066 2.305 4.574a102.06 102.06 0 002.527 4.457 103.597 103.597 0 005.695 8.52 104.793 104.793 0 0010.043 11.629 105.606 105.606 0 003.711 3.531 108.854 108.854 0 003.883 3.348 112.175 112.175 0 004.043 3.152c1.375 1.016 2.773 2 4.195 2.95a99.75 99.75 0 004.332 2.738 104.585 104.585 0 0018.512 8.75 107.61 107.61 0 004.871 1.609c1.637.496 3.285.95 4.941 1.363 1.66.418 3.329.79 5.004 1.125a104.917 104.917 0 0015.258 1.88c1.707.081 3.414.124 5.125.124 1.711 0 3.418-.043 5.125-.125 1.707-.082 3.414-.21 5.113-.375a105.839 105.839 0 0010.145-1.504c1.676-.336 3.344-.707 5.004-1.125a103.95 103.95 0 004.941-1.363 105.863 105.863 0 0014.34-5.527 104.585 104.585 0 0021.61-13.672c1.324-1.086 2.617-2.2 3.882-3.348a102.397 102.397 0 007.25-7.242 105.494 105.494 0 003.352-3.88 104.695 104.695 0 006.105-8.23 103.681 103.681 0 007.578-13.359 104.052 104.052 0 003.922-9.465 102.634 102.634 0 002.977-9.8c.418-1.66.789-3.325 1.125-5a105.602 105.602 0 001.504-10.133c.168-1.7.293-3.403.379-5.11.082-1.707.125-3.414.125-5.12a106.69 106.69 0 00-.133-5.122 106.448 106.448 0 00-.383-5.105 104.812 104.812 0 00-1.516-10.129c-.332-1.672-.71-3.34-1.125-4.996-.417-1.657-.875-3.301-1.37-4.934a105.606 105.606 0 00-3.462-9.637 102.092 102.092 0 00-2.082-4.68 102.159 102.159 0 00-4.836-9.03 103.62 103.62 0 00-8.852-12.547 105.717 105.717 0 00-6.883-7.586 105.607 105.607 0 00-3.71-3.532 108.745 108.745 0 00-3.883-3.343 104.695 104.695 0 00-4.039-3.153c-1.375-1.015-2.77-2-4.191-2.949a103.732 103.732 0 00-8.79-5.266 106.676 106.676 0 00-4.577-2.304 102.17 102.17 0 00-4.684-2.078 112.765 112.765 0 00-4.781-1.848 102.726 102.726 0 00-9.809-2.977 99.362 99.362 0 00-5-1.125 104.97 104.97 0 00-5.05-.882 106.233 106.233 0 00-10.195-1.012 106.853 106.853 0 00-5.126-.133zm0 0"
                    ></path>
                </g>
                <path
                    fill="#e2e8f0"
                    d="M215.453 265.047c-1.137 0-2.25-.164-3.336-.492a11.505 11.505 0 01-3.054-1.438 11.578 11.578 0 01-4.243-5.152 11.504 11.504 0 01-.828-3.266 11.585 11.585 0 01.156-3.367 11.355 11.355 0 011.13-3.18c.53-1.004 1.199-1.91 2-2.714l31.843-32.055c.52-.586 1.09-1.117 1.715-1.59a11.638 11.638 0 012.004-1.211 11.605 11.605 0 014.527-1.102 11.587 11.587 0 014.594.781 11.65 11.65 0 013.906 2.536 11.523 11.523 0 013.418 8.453c-.02.785-.117 1.559-.293 2.32-.176.766-.43 1.504-.758 2.215-.324.711-.722 1.383-1.187 2.016a11.798 11.798 0 01-1.57 1.734l-31.848 32.05a11.365 11.365 0 01-3.738 2.552 11.401 11.401 0 01-4.438.91zm0 0"
                ></path>
                <g clipPath="url(#771bbaaafe)">
                    <path
                        fill="#e2e8f0"
                        d="M353.64 372.945a19.71 19.71 0 01-7.664-1.535 19.904 19.904 0 01-3.449-1.875 19.797 19.797 0 01-3.011-2.523l-84.73-86.692a18.874 18.874 0 01-1.286-1.453 18.592 18.592 0 01-1.137-1.566 19.852 19.852 0 01-1.785-3.434 21.032 21.032 0 01-.633-1.828c-.18-.621-.328-1.25-.449-1.883a21.331 21.331 0 01-.262-1.918 20.027 20.027 0 01.352-5.781 20.274 20.274 0 011.168-3.687 19.848 19.848 0 011.863-3.391c.367-.531.758-1.047 1.176-1.54a19.63 19.63 0 012.766-2.703 21.079 21.079 0 011.57-1.136 19.35 19.35 0 013.438-1.781 18.78 18.78 0 011.831-.633c.622-.18 1.25-.328 1.883-.45a21.226 21.226 0 011.922-.261 20.026 20.026 0 015.785.352c.633.132 1.258.296 1.871.492a19.891 19.891 0 013.563 1.523c.566.309 1.113.649 1.648 1.016a19.497 19.497 0 012.965 2.484l84.73 86.696a19.675 19.675 0 013.383 4.664c.45.855.829 1.738 1.149 2.652.316.91.562 1.84.742 2.789.18.95.293 1.906.332 2.871a19.74 19.74 0 01-1.531 8.461c-.375.89-.813 1.75-1.317 2.574-.5.824-1.058 1.61-1.675 2.352a19.397 19.397 0 01-2 2.086 20.044 20.044 0 01-2.286 1.77 19.9 19.9 0 01-5.218 2.448 19.753 19.753 0 01-5.703.84zm0 0"
                    ></path>
                </g>
                <path
                    fill="#e2e8f0"
                    d="M124.953 214.61c-16.105 0-37.398-4.614-60.183-22.126-20.008-15.37-29.23-39.015-26.68-68.367a132.82 132.82 0 019.7-39.238c.167-.367.366-.715.605-1.04.234-.327.5-.632.792-.905a6.224 6.224 0 012.036-1.27 6.213 6.213 0 013.563-.242 6.186 6.186 0 013.84 2.719 6.176 6.176 0 01.858 2.238c.07.398.102.797.09 1.2a6.098 6.098 0 01-.523 2.339 122.538 122.538 0 00-8.696 35.562c-2.105 25.153 5.274 44.383 21.934 57.207 41.133 31.625 76.3 15.286 76.652 15.114a6.26 6.26 0 011.145-.446c.394-.109.797-.18 1.207-.207.41-.03.816-.02 1.227.032a6.21 6.21 0 011.19.277c.392.129.763.3 1.118.504.356.207.688.445.996.715.305.273.586.574.832.898.246.328.461.676.64 1.047.177.367.317.754.419 1.149.101.398.164.8.183 1.21a6.097 6.097 0 01-.359 2.41c-.14.387-.316.755-.527 1.106a6.223 6.223 0 01-1.657 1.793 6.072 6.072 0 01-1.058.613c-.879.453-12.156 5.707-29.344 5.707zm0 0"
                ></path>
            </svg>
        )
    }
}

export default Search;
