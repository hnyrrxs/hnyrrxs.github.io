export const hideInitialLoader = () => {
    const loader = document.getElementById('loader-body');
    if (loader) {
        loader.style.display = 'none';
    }
}