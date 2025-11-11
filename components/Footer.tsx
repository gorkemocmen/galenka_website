import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      borderTop: "1px solid #ddd",
      padding: "2rem",
      backgroundColor: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.875rem"
    }}>
      

      {/* Social Links */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <a href="https://twitter.com/galenka" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
          Twitter
        </a>
        <a href="https://linkedin.com/company/galenka-veterinary-pharmaceuticals" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
          LinkedIn
        </a>
        <a href="https://instagram.com/galenka" target="_blank" rel="noopener noreferrer" style={{ color: "#fff"}}>
          Instagram
        </a>
        <a href="https://facebook.com/galenka" target="_blank" rel="noopener noreferrer" style={{ color: "#fff"}}>
          Facebook
        </a>
      </div>

      {/* Copyright */}
      <div style={{ color: "#aaa" }}>
        © {new Date().getFullYear()} madebyjaguar. Built with passion.
      </div>
    </footer>
  );
}