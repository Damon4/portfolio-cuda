document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.jsHomeButtonWork').addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        document.querySelector('#contact')?.scrollIntoView()
    })
})
