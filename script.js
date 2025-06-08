function answer(isTrue) {
    const result = document.getElementById('quiz-result');
    if (isTrue) {
        result.textContent = 'Így van, ez valóban tény!';
    } else {
        result.textContent = 'Ez bizony tévhit, gondold át újra.';
    }
}
