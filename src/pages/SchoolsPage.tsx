import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function SchoolsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Pro školy
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Materiály a pomůcky navržené pro výuku dějin umění. Vytvořené
            učiteli a studenty přímo v praxi.
          </p>
        </div>
      </section>

      <section className="border-t bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* For teachers */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Pro učitele</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Získejte důvěru v materiály, které vznikají přímo v pedagogické
                praxi. Naše pomůcky jsou navrženy tak, aby se daly snadno
                začlenit do výuky.
              </p>
              <ul className="space-y-4">
                {[
                  "Pomůcky navržené pro reálnou výuku",
                  "Testované v praxi na středních uměleckých školách",
                  "Podpora a metodické materiály",
                  "Možnost zapojení do vývoje nových projektů",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For students */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Pro studenty</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Zapojte se do reálné tvorby. V rámci studia Klaps! se studenti
                podílejí na projektech od konceptu po finální produkt.
              </p>
              <ul className="space-y-4">
                {[
                  "Zapojení do reálných projektů",
                  "Práce pod kurátorským vedením",
                  "Zkušenosti s art direction",
                  "Možnost uvést vlastní práci na trh",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Máte zájem o spolupráci?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Rádi probereme možnosti spolupráce s vaší školou. Ozvěte se nám.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/kontakt">Napište nám</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
