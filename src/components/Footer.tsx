import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-lg font-bold tracking-tight">
              Klaps!
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Vzdělávací kreativní studio zaměřené na vývoj pomůcek pro výuku
              dějin umění.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Navigace</h4>
            <ul className="space-y-2">
              {[
                { name: "Studio", href: "/studio" },
                { name: "Projekty", href: "/projekty" },
                { name: "Produkty", href: "/produkty" },
                { name: "Pro školy", href: "/pro-skoly" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/spoluprace"
                  className="hover:text-foreground transition-colors"
                >
                  Spolupráce
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="hover:text-foreground transition-colors"
                >
                  Napište nám
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Klaps! Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}
