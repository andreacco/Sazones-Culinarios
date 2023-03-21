const useGoUpMalla = (num: any) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: Number(num),
            behavior: 'smooth'
        });
    };
    return scrollToTop
}

export default useGoUpMalla;
