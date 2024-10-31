// Функция для сортировки новостей по дате
function sortNews(order) {
    const newsSection = document.getElementById('news-section');
    const newsItems = Array.from(newsSection.querySelectorAll('.news-item'));

    newsItems.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return order === 'newest' ? dateB - dateA : dateA - dateB;
    });

    newsSection.innerHTML = '';
    newsItems.forEach(item => newsSection.appendChild(item));
}

// Анимация появления блоков новостей при прокрутке
document.addEventListener('DOMContentLoaded', () => {
    const newsItems = document.querySelectorAll('.news-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    newsItems.forEach(item => observer.observe(item));
});
