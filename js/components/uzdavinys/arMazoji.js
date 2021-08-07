function arMazoji(text, position) {

    const letter = text[position - 1];

    return letter === letter.toLowerCase();
}

export { arMazoji }