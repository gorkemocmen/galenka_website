const fs = require("fs");
const path = require("path");

const folders = [
  "public/products",
  "src/pages/products",
  "src/pages/api",
  "src/components",
  "src/styles",
  "src/data"
];

const files = {
  "src/pages/index.js": `export default function Home() {
  return <h1>Welcome to the Company Website</h1>;
}
`,
  "src/pages/about.js": `export default function About() {
  return <h1>About Us</h1>;
}
`,
  "src/pages/contact.js": `export default function Contact() {
  return <h1>Contact Us</h1>;
}
`,
  "src/pages/products/index.js": `export default function Products() {
  return <h1>Our Products</h1>;
}
`,
  "src/components/Layout.js": `import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
`,
  "src/components/Header.js": `export default function Header() {
  return <header><h2>Company Name</h2></header>;
}
`,
  "src/components/Footer.js": `export default function Footer() {
  return <footer><p>© 2025 Company Name</p></footer>;
}
`,
  "src/styles/globals.css": `body { margin: 0; font-family: sans-serif; }`
};

// Create folders
folders.forEach(dir => {
  fs.mkdirSync(path.join(process.cwd(), dir), { recursive: true });
});

// Create files
Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(process.cwd(), filePath), content.trim());
});

console.log("✅ Folder structure and starter files created successfully!");
