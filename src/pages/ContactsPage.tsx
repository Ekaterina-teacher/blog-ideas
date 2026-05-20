import { useState } from 'react';
import styles from './ContactsPage.module.css';
import photo from './assets/avatar.jpg';
function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные формы:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <div className={styles.container}>
      <h1>Контакты разработчика</h1>
      <div className={styles.photoContainer}>
        <img src={photo} alt="Фото разработчика" className={styles.photo} />
      </div>
      <div className={styles.info}>
        <h2>Екатерина Самойлова</h2>
        <p className={styles.role}>Frontend-разработчик</p>
        <p className={styles.description}>
          Студентка, увлекаюсь веб-разработкой и современными технологиями. Создаю красивые и
          функциональные приложения.
        </p>
      </div>
      <div className={styles.contactBlock}>
        <h3>Связаться со мной</h3>
        <a href="mailto:esamoilona@sfedu.ru" className={styles.emailLink}>
          esamoilona@sfedu.ru
        </a>
      </div>
      <div className={styles.socialBlock}>
        <h3>Социальные сети</h3>
        <div className={styles.socialLinks}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
            VK
          </a>
        </div>
      </div>
      <div className={styles.formBlock}>
        <h3>Написать сообщение</h3>
        {submitted && <div className={styles.successMessage}>Сообщение отправлено!</div>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className={styles.formInput}
          />
          <button type="submit" className={styles.formButton}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactsPage;
