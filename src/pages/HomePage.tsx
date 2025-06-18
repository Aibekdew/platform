import Head from "next/head";
import Header from "../components/header/Header";
import Cards from "../components/Cards";
import { useEffect } from "react";

export default function HomePage() {
  // Scroll‑reveal effect
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".card");
    const features = document.querySelectorAll<HTMLElement>(".feature");

    const show = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true");
        }
      });
    };

    const io = new IntersectionObserver(show, {
      threshold: 0.2,
    });

    [...cards, ...features].forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Кыргызалтын - Проектная платформа</title>
        <meta
          name="description"
          content="Платформа проектов Кыргызалтын - золотодобывающая компания Кыргызстана"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Декоративные элементы фона */}
      <div className="background" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <main className="container">
        <Header />

        {/* Добавление героического блока */}
        <section className="hero">
          <div className="hero-content">
            <h1>Развиваем горнодобывающую отрасль Кыргызстана</h1>
            <p>
              Инновационные проекты и технологические решения для устойчивого
              будущего
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">50+</span>
                <span
                  style={{
                    color: "white",
                  }}
                  className="stat-label"
                >
                  лет опыта
                </span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">5000+</span>
                <span
                  style={{
                    color: "white",
                  }}
                  className="stat-label"
                >
                  сотрудников
                </span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">10+</span>
                <span
                  style={{
                    color: "white",
                  }}
                  className="stat-label"
                >
                  активных проектов
                </span>
              </div>
            </div>
          </div>
        </section>

        <Cards />

        {/* Добавление секции о компании */}
        <section className="about-section">
          <div className="about-content">
            <h2>О компании</h2>
            <p>
              Кыргызалтын – флагман горнодобывающей отрасли Кыргызстана с
              многолетним опытом разработки месторождений драгоценных металлов.
              Компания применяет инновационные технологии и лучшие мировые
              практики для эффективной и экологически ответственной добычи.
            </p>
            {/* <a href="/about" className="button-primary">
              Узнать больше
            </a> */}
          </div>
          <div className="about-image">
            <img
              src="https://ru.kyrgyzaltyn.kg/uploads/news/mini/308d0182990ebf6f4b85f535e75335bb.jpg"
              alt="Кыргызалтын операции"
            />
          </div>
        </section>

        {/* Добавление футера */}
        <footer className="site-footer">
          <div className="footer-columns">
            <div className="footer-column">
              <h3>Кыргызалтын</h3>
              <p>
                Открытое акционерное общество, специализирующееся на добыче и
                переработке золота и других драгоценных металлов.
              </p>
            </div>
            <div className="footer-column">
              <h3>Контакты</h3>
              <p>Адрес: г. Бишкек, ул. Абдымомунова, 195</p>
              <p>Телефон: +996 (312) 66-66-70</p>
              <p>Email: info@kyrgyzaltyn.kg</p>
            </div>
            <div className="footer-column">
              <h3>Связаться с нами</h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  Facebook
                </a>
                <a href="#" className="social-link">
                  Instagram
                </a>
                <a href="#" className="social-link">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} ОАО "Кыргызалтын". Все права
              защищены.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
