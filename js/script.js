function runTypingEffect() {
  const text = '<> Eric Malley | Web Dev </>'
  const typingElement = document.getElementById('typing-text')
  const typingDelay = 150 // delay between each typing in ms

  typeText(text, typingElement, 0, typingDelay)
}

function typeText(text, typingElement, index, delay) {
  if (index < text.length) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(index)
      typeText(text, typingElement, index + 1, delay)
    }, delay)
  }
}

document.addEventListener('DOMContentLoaded', runTypingEffect)
