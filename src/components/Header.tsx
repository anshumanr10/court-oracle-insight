import { Link, useLocation } from "react-router-dom";
import { Scale } from "lucide-react";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <Scale className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">
            SCOTUS<span className="text-primary">Predict</span>
          </span>
        </Link>
        <nav className="flex gap-8">
          <Link
            to="/"
            className={`font-body text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-foreground/70"
            }`}
          >
            Cases
          </Link>
          <Link
            to="/technology"
            className={`font-body text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/technology" ? "text-primary" : "text-foreground/70"
            }`}
          >
            Technology
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
