const onClickCopy = () => {
    const svg = document.querySelector('#svg');
    console.log(svg.innerHTML);
    navigator.clipboard.writeText(svg.innerHTML)
}

export default onClickCopy