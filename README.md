# Vanilla JS Modal Window

Bu loyihada quyidagi asosiy narsalar o'rganildi:

1. `classList.remove('hidden')` va `classList.add('hidden')` orqali modalni ochish va yashirish.
2. `e.target === modalOverlay` orqali modalning tashqarisiga (fonga) bosilganda yopilishini ta'minlash (Event Bubbling'ni oldini olish).
3. `document.addEventListener('keydown', ...)` va `e.key === 'Escape'` yordamida klaviaturadan chiqib ketishni ulash.
   made Date: 10.26.28.
