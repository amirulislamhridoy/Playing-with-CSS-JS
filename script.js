const inputAll = document.querySelectorAll('input')

inputAll.forEach(input => input.addEventListener('change', workingFn))

function workingFn(){
    const type = this.dataset.type || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + type)
}