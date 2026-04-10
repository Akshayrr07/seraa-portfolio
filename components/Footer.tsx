export default function Footer() {
  return (
    <footer className="footer-minimal bg-stock">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <span
              className="font-serif font-semibold"
              style={{ fontSize: '14px', color: 'var(--ink-muted)' }}>
              Kiruthi Raghavendran
            </span>
            <nav className="flex items-center gap-6">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ]?.map((link) => (
                <a
                  key={link?.label}
                  href={link?.href}
                  className="font-medium hover:text-ink transition-colors"
                  style={{ fontSize: '14px', color: 'var(--ink-faint)', textDecoration: 'none' }}>
                  {link?.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-6" style={{ fontSize: '14px', color: 'var(--ink-faint)' }}>
            <span>© {new Date()?.getFullYear()} Kiruthi Raghavendran</span>
          </div>
        </div>
      </div>
    </footer>
  );
}