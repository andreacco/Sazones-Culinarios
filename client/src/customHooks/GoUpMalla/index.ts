const useGoUpMalla = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 2500,
            behavior: 'smooth'
        });
    };

    return scrollToTop
}

export default useGoUpMalla;
