export function typingEffect({ element, wordList }) {
  let typingSpeed = 120;
  let delSpeed = 80;
  let pauseDelay = 800;
  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentWord = wordList[wordIdx];
    const visibleText = currentWord.substr(0, charIdx);
    element.textContent = visibleText;

    if (!isDeleting) {
      if (charIdx < currentWord.length) {
        charIdx++;
        setTimeout(type, typingSpeed);
      } else {
        isDeleting = true;
        setTimeout(type, pauseDelay);
      }
    } else {
      if (charIdx > 0) {
        charIdx--;
        setTimeout(type, delSpeed);
      } else {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % wordList.length;
        setTimeout(type, pauseDelay);
      }
    }
  }

  type();
}
