"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const companies = [
  {
    name: "Galenka",
    logo: "/images/galenka.png",
    description: "Hayvan Sağlığını ve çevresel zararlılardan koruma ve kontrolü sağlama.",
    route: "/products/galenka"
  },
  {
    name: "Gravion",
    logo: "/images/gravion.jpeg",
    description: "Beslenme ve yaşam destek ürünleri",
    route: "/products/gravion"
  },
  {
    name: "Farma Green",
    logo: "/images/farma_green.jpg",
    description: "Doğadan gelen çözümlerle, tedaviye yardımcı oluyoruz.",
    route: "/products/farma_green"
  }
];

export default function CompanyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((currentIndex + 1) % companies.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + companies.length) % companies.length);

  const current = companies[currentIndex];

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem",
      textAlign: "center"
    }}>
      {/* Logo */}
      <Link href={current.route}>
        <Image
          src={current.logo}
          alt={`${current.name} Logo`}
          width={200}
          height={100}
          style={{ cursor: "pointer", marginBottom: "1rem" }}
        />
      </Link>

      {/* Info */}
      <h2 style={{ marginBottom: "0.5rem" }}>{current.name}</h2>
      <p style={{ maxWidth: "400px", marginBottom: "1rem", color: "#555" }}>{current.description}</p>

      {/* Controls */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={prev} style={{ padding: "0.5rem 1rem" }}>← Prev</button>
        <button onClick={next} style={{ padding: "0.5rem 1rem" }}>Next →</button>
      </div>
    </div>
  );
}