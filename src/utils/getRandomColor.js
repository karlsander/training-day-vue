function getRandomColor() {
    return "#" + Number(Math.round(Math.random() * 0xFFFFFF)).toString(16).padStart(6, "0").toUpperCase()
}

export { getRandomColor }