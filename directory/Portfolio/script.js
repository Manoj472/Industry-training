const words = ["Designer", "Developer", "Programmer" ,"Explorer"
];
    const typedText = document.getElementById("typed-text");
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 60;
    const pauseBetweenWords = 1500;

    function type() {
      const currentWord = words[wordIndex];
      const visibleText = currentWord.substring(0, charIndex);
      typedText.textContent = visibleText;

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, deletingSpeed);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, pauseBetweenWords);
      }
    }

    document.addEventListener("DOMContentLoaded", type);