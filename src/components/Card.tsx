"use client";

import React from "react";

interface CardProps {
  title: string;
  description: string;
  href: string;
  badge: string;
  image: string;
  delay: number;
  category: string;
}

export default function Card({
  title,
  description,
  href,
  badge,
  image,
  delay,
  category,
}: CardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 16,
        overflow: "hidden",
        background: "#ffffff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        height: "100%",
        transition: "transform 0.2s ease",
      }}
    >
      <div style={{ position: "relative", height: 300, overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "#FFC107",
            color: "#333333",
            fontSize: 12,
            fontWeight: 600,
            padding: "4px 8px",
            borderRadius: 12,
            boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
          }}
        >
          {badge}
        </span>
      </div>

      {/* Нижняя часть: содержимое карточки */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: 16,
        }}
      >
        {/* Заголовок */}
        <h3
          style={{
            margin: 0,
            marginBottom: 8,
            fontSize: 20,
            fontWeight: 600,
            color: "#0D47A1",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>

        {/* Описание */}
        <p
          style={{
            margin: 0,
            marginBottom: 12,
            fontSize: 16,
            color: "#555555",
            lineHeight: 1.5,
            flexGrow: 1,
          }}
        >
          {description}
        </p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "auto",
            height: "45px",
            borderRadius: "8px",
            background: "#0D47A1",
            color: "white",
            fontSize: "22px",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            justifyContent: "center",
          }}
          // При наведении изменим оттенок синего (hover-эффект):
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "gray";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "white";
          }}
        >
          Перейти
        </a>
      </div>
    </div>
  );
}
