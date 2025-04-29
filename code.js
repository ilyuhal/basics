// URL до API (наприклад, відкритий тестовий API)
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Функція для отримання даних
async function fetchData() {
  try {
    // Відправляємо запит до сервера за допомогою Fetch API
    const response = await fetch(apiUrl);
    
    // Перевіряємо, чи запит пройшов успішно
    if (!response.ok) {
      throw new Error('Щось пішло не так: ' + response.statusText);
    }

    // Парсимо відповідь у форматі JSON
    const data = await response.json();
    console.log('Отримані дані:', data);

  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
}

// Викликаємо функцію для отримання даних
fetchData();
