import { Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 bg-navy-deep text-navy-foreground/60">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm">© {new Date().getFullYear()} IMCJL. Všechna práva vyhrazena.</p>
      <div className="flex items-center gap-5">
        <a href="mailto:contact@imcjl.com" className="hover:text-navy-foreground transition-colors">
          <Mail size={18} strokeWidth={1.5} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-navy-foreground transition-colors">
          <Linkedin size={18} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
