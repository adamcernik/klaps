import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ProductsPage() {
  const products = [
    {
      title: "Produkt 1",
      price: "Cena bude upřesněna",
      description:
        "Popis produktu bude doplněn. Tento prostor je připraven pro prezentaci prvního produktu.",
      image: "https://cdn.shopify.com/s/files/1/0047/4231/6066/files/The_Birth_of_Venus_by_Sandro_Botticelli_800x.jpg",
      alt: "Zrození Venuše — Sandro Botticelli",
    },
    {
      title: "Produkt 2",
      price: "Cena bude upřesněna",
      description:
        "Další produkt ve vývoji. Sledujte nás pro aktualizace o dostupnosti.",
      image: "https://cdn.shopify.com/s/files/1/0047/4231/6066/files/The_Persistence_of_Memory_by_Salvador_Dali_1931_800x.jpg",
      alt: "Persistence paměti — Salvador Dalí",
    },
    {
      title: "Produkt 3",
      price: "Cena bude upřesněna",
      description:
        "Prostor pro další produkt studia Klaps!",
      image: "https://cdn.shopify.com/s/files/1/0047/4231/6066/files/The_Scream_by_Edvard_Munch_1893_800x.png",
      alt: "Výkřik — Edvard Munch",
    },
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Produkty
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Vybrané projekty studia, které prošly filtrem kvality a jsou
            připraveny k prodeji. Struktura je připravena pro budoucí e-shop.
          </p>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={i} className="group">
                {/* Image placeholder */}
                <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {product.description}
                </p>
                <p className="text-sm font-medium text-accent mt-2">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center border-t pt-16">
            <p className="text-muted-foreground mb-6">
              E-shop je ve vývoji. Pro objednávky nás kontaktujte přímo.
            </p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/kontakt">Kontaktovat nás</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
