# Используем официальный образ Cypress для тестов
FROM cypress/base:16.0.0

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npx cypress install --force

# Копируем все файлы проекта в контейнер
COPY . .

# Указываем команду для запуска тестов в firefox
CMD ["npx", "cypress", "run", "--browser", "firefox"]

