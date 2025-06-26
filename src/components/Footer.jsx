// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 text-center py-6 text-sm">
      <p>
        © {new Date().getFullYear()} Borja – Desarrollador Web.
      </p>
    </footer>
  );
}
