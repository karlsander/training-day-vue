function getRandomColor() {
    return (
        "#" +
        Number(Math.round(Math.random() * 0xffffff))
            .toString(16)
            .padStart(6, "0")
            .toUpperCase()
    );
}

export { getRandomColor };
