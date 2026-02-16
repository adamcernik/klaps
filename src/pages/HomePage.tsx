import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Palette, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-end overflow-hidden">
        <img
          src="https://www.artprinta.com/cdn/shop/products/A08683JGA_1400x.jpg?v=1579018774"
          alt="Klaps! — kreativní vzdělávací studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-6 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              Kreativní studio pro
              <span className="text-accent"> výuku umění</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              Klaps! je vzdělávací kreativní studio zaměřené na vývoj pomůcek
              pro výuku dějin umění. Otevřená laboratoř, kde projekty vznikají
              v rámci pedagogické praxe a ve spolupráci se studenty.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/projekty">
                  Prohlédnout projekty
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/studio">O studiu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: BookOpen,
                title: "Vzdělávání",
                description:
                  "Pomůcky a materiály navržené přímo pro výuku dějin umění na středních školách.",
              },
              {
                icon: Palette,
                title: "Tvorba",
                description:
                  "Projekty vznikají v reálné pedagogické praxi pod kurátorským vedením.",
              },
              {
                icon: Users,
                title: "Spolupráce",
                description:
                  "Studenti se zapojují do reálné tvorby — od návrhu po finální produkt.",
              },
            ].map((pillar) => (
              <div key={pillar.title}>
                <pillar.icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects teaser */}
      <section className="bg-card border-t">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Vybrané projekty
              </h2>
              <p className="mt-3 text-muted-foreground">
                Projekty, které prošly filtrem kvality a studio je uvádí na trh.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex">
              <Link to="/projekty">
                Všechny projekty
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Připravujeme",
                description: "Nové projekty se připravují — sledujte nás.",
                image: "https://cdn.shopify.com/s/files/1/0047/4231/6066/files/mona_liza_800x.jpg",
                alt: "Mona Lisa — Leonardo da Vinci",
              },
              {
                title: "Připravujeme",
                description: "Další projekty brzy představíme.",
                image: "https://cdn.shopify.com/s/files/1/0047/4231/6066/files/The_Starry_Night_by_Vincent_van_Gogh_1889_800x.jpg",
                alt: "Hvězdná noc — Vincent van Gogh",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] bg-muted rounded-lg flex items-end p-6 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link to="/projekty">Všechny projekty</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Chcete spolupracovat?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Hledáme partnery z řad škol, galerií a kulturních institucí.
            Ozvěte se nám.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/kontakt">Napište nám</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/spoluprace">Více o spolupráci</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
