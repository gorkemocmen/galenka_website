"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"TR" | "EN">("TR");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "TR" ? "EN" : "TR"));
    // Optional: redirect or update locale here
  };

  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      borderBottom: "1px solid #ddd",
      position: "relative",
      zIndex: 1000
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/images/galenka.png"
          alt="Galenka Logo"
          width={120}
          height={40}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      {/* Right side: Hamburger + Language */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Language Toggle */}
        <div
          onClick={toggleLanguage}
          style={{
            cursor: "pointer",
            fontSize: "0.9rem",
            color: "#333",
            userSelect: "none"
          }}
        >
          {language === "TR" ? "TR | EN" : "EN | TR"}
        </div>

        {/* Hamburger Icon */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            cursor: "pointer",
            width: "30px",
            height: "22px",
            position: "relative"
          }}
        >
          <span style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "4px",
            backgroundColor: "#333",
            borderRadius: "2px"
          }} />
          <span style={{
            position: "absolute",
            top: "9px",
            width: "100%",
            height: "4px",
            backgroundColor: "#333",
            borderRadius: "2px"
          }} />
          <span style={{
            position: "absolute",
            top: "18px",
            width: "100%",
            height: "4px",
            backgroundColor: "#333",
            borderRadius: "2px"
          }} />
        </div>
      </div>

      {/* Drawer Menu */}
      {menuOpen && (
        <nav style={{
          position: "absolute",
          top: "100%",
          right: 0,
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "1rem",
          width: "200px"
        }}>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            <li><Link href="/">{language === "TR" ? "ANA SAYFA" : "HOME"}</Link></li>
            <li><Link href="/products">{language === "TR" ? "ÜRÜNLER" : "PRODUCTS"}</Link></li>
            <li><Link href="/about">{language === "TR" ? "KALİTE" : "QUALITY"}</Link></li>
            <li><Link href="/contact">{language === "TR" ? "İLETİŞİM" : "CONTACT"}</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}