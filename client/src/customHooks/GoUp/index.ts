const useGoUp = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    };

    return scrollToTop
}

export default useGoUp;
