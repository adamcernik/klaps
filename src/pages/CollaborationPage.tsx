import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CollaborationPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Spolupráce
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Studio Klaps! hledá partnery z řad škol, galerií a kulturních
            institucí. Spolupráce je základem naší práce.
          </p>
        </div>
      </section>

      <section className="border-t bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Koho hledáme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Školy",
                description:
                  "Střední umělecké školy a gymnázia se zájmem o inovativní přístup k výuce dějin umění.",
              },
              {
                title: "Galerie a muzea",
                description:
                  "Kulturní instituce, které chtějí rozšířit svůj vzdělávací program o nové formáty a pomůcky.",
              },
              {
                title: "Další partneři",
                description:
                  "Organizace a jednotlivci se zájmem o vzdělávání, umění a kreativní přístupy k výuce.",
              },
            ].map((item) => (
              <div key={item.title} className="border rounded-lg p-6 bg-background">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Jak spolupráce probíhá
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Kontakt",
                description: "Napíšete nám a popíšete svůj záměr.",
              },
              {
                step: "02",
                title: "Konzultace",
                description: "Společně probereme možnosti a rozsah spolupráce.",
              },
              {
                step: "03",
                title: "Návrh",
                description: "Připravíme konkrétní návrh projektu nebo zapojení.",
              },
              {
                step: "04",
                title: "Realizace",
                description: "Společně projekt dotáhneme do konce.",
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-sm font-medium text-accent">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Pojďme do toho
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Máte nápad na spolupráci? Rádi si vyslechneme vaši představu.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/kontakt">Kontaktovat nás</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
