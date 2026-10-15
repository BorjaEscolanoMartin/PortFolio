// src/components/Footer.jsx
import { useLanguage } from '../i18n/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-gray-500 text-center py-6 text-sm">
      <p>
        © {new Date().getFullYear()} Borja Escolano Martín · {t.footer.tagline}
      </p>
    </footer>
  );
}
