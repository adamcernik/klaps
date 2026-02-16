import { Badge } from "@/components/ui/badge";

export function ProjectsPage() {
  const projects = [
    {
      title: "Projekt 1",
      status: "Připravujeme",
      description:
        "Popis projektu bude doplněn. Tento prostor je připraven pro prezentaci prvního projektu studia Klaps!",
      tags: ["vzdělávání", "dějiny umění"],
      image: "https://cdn.shopify.com/s/files/1/0047/4231/6066/files/Girl_with_a_Pearl_Earring_by_Johannes_Vermeer_1665_800x.jpg",
      alt: "Dívka s perlovou náušnicí — Johannes Vermeer",
    },
    {
      title: "Projekt 2",
      status: "Připravujeme",
      description:
        "Další projekt ve vývoji. Prostor pro prezentaci projektu s popisem, fotografiemi a dalšími detaily.",
      tags: ["pomůcky", "výuka"],
      image: "https://cdn.shopify.com/s/files/1/0047/4231/6066/files/The_Great_Wave_of_Kanagawa_by_Katsushika_Hokusai_1831_800x.jpg",
      alt: "Velká vlna u Kanagawy — Katsushika Hokusai",
    },
    {
      title: "Projekt 3",
      status: "Koncept",
      description:
        "Konceptuální projekt v rané fázi. Sledujte nás pro aktualizace.",
      tags: ["experiment", "laboratoř"],
      image: "https://cdn.shopify.com/s/files/1/0047/4231/6066/files/The_Creation_of_Adam_by_Michelangelo_Buonarroti_1511_800x.jpg",
      alt: "Stvoření Adama — Michelangelo Buonarroti",
    },
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projekty
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Projekty vznikají v rámci pedagogické praxe a ve spolupráci se
            studenty. Vybrané projekty studio produkuje a uvádí na trh.
          </p>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-0 divide-y">
            {projects.map((project, i) => (
              <article
                key={i}
                className="group py-10 first:pt-0 last:pb-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
                  {/* Image placeholder */}
                  <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-2xl font-semibold">
                        {project.title}
                      </h2>
                      <Badge variant="secondary">{project.status}</Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
