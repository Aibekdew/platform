"use client";

import React, { useState } from "react";
import Card from "./Card";

// 1) Составляем массив всех карточек с правильными путями в поле `image`.
//    Предполагается, что файлы лежат по пути public/имя-файла4efr
const cards = [
  {
    title: "Цифровой рудник",
    description:
      "Инновационная система управления горнодобывающими процессами с использованием цифровых технологий.",
    href: "http://ruda.kyrgyzaltyn.kg",
    badge: "Инновация",
    image: "/logoruda.png",
    delay: 0,
    category: "Технологии",
  },
  {
    title: "Калькулятор",
    description:
      "Система непрерывного контроля экологических показателей на объектах добычи и переработки.",
    href: "http://rent.kyrgyzaltyn.kg/login",
    badge: "Экология",
    image: "./logo.png", // public/eco-monitoring.jpg
    delay: 0.5,
    category: "Экология",
  },
  {
    title: "Кампа",
    description:
      "Программа поддержки местных сообществ и развития инфраструктуры в регионах присутствия.",
    href: "http://kampa.kyrgyzaltyn.kg/dashboard",
    badge: "Социальный",
    image: "./logo.png", // public/social-development.jpg
    delay: 1,
    category: "Социальные проекты",
  },
  {
    title: "Репорт",
    description:
      "Проект по внедрению современного оборудования и технологий для повышения эффективности добычи.",
    href: "http://report.kyrgyzaltyn.kg/",
    badge: "Технологии",
    image: "./logo.png", // public/modernization.jpg
    delay: 0,
    category: "Производство",
  },
  {
    title: "Кыргызское взморье",
    description:
      "Проект освоения золоторудного месторождения с применением инновационных технологий добычи.",
    href: "https://vzmorie-2j2w.vercel.app/",
    badge: "Добыча",
    image: "./logo.png", // public/gold-mining.jpg
    delay: 0.5,
    category: "Добыча",
  },
  // {
  //   title: "Обучение специалистов",
  //   description:
  //     "Программа подготовки и повышения квалификации кадров для горнодобывающей отрасли.",
  //   href: "#",
  //   badge: "Образование",
  //   image: "./logo.png", // public/education.jpg
  //   delay: 1,
  //   category: "Образование",
  // },
] as const;

// 2) Собираем уникальные категории + "Все" в начале:
const categories = [
  "Все",
  ...Array.from(new Set(cards.map((c) => c.category))),
];

export default function Cards() {
  // 3) Состояние выбранной категории
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");

  // 4) Если выбрана категория "Все" — показываем весь массив, иначе фильтруем
  const filteredCards =
    selectedCategory === "Все"
      ? cards
      : cards.filter((c) => c.category === selectedCategory);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 16 }}>
      {/* Заголовок */}
      <h2
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: 600,
          marginBottom: 16,
        }}
      >
        Наши проекты
      </h2>

      {/* Кнопки-фильтры */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 8,
          marginBottom: 24,
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              border:
                selectedCategory === category
                  ? "2px solid #1976D2"
                  : "1px solid #999",
              background: selectedCategory === category ? "#1976D2" : "#fff",
              color: selectedCategory === category ? "#fff" : "#1976D2",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Сетка карточек (flex wrap) */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "flex-start",
        }}
      >
        {filteredCards.map((c, idx) => (
          <div
            key={idx}
            style={{
              flex: "0 0 calc(33.333% - 16px)",
              boxSizing: "border-box",
              minWidth: 280,
            }}
          >
            <Card {...c} />
          </div>
        ))}
      </div>

      {/* Если нет ни одной карточки в данной категории */}
      {filteredCards.length === 0 && (
        <p
          style={{
            textAlign: "center",
            marginTop: 24,
            color: "#555",
            fontSize: 16,
          }}
        >
          По этой категории проектов не найдено.
        </p>
      )}
    </div>
  );
}
