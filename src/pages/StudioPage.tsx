export function StudioPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Studio
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Klaps! je vzdělávací kreativní studio zaměřené na vývoj pomůcek
            pro výuku dějin umění. Funguje jako otevřená laboratoř reagující
            na potřeby výuky.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Jak pracujeme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Identifikace potřeby",
                description:
                  "Potřeby výuky identifikujeme přímo v pedagogické praxi. Každý projekt reaguje na reálný problém.",
              },
              {
                step: "02",
                title: "Tvorba v laboratoři",
                description:
                  "Studenti se pod kurátorským vedením zapojují do reálné tvorby — od konceptu po realizaci.",
              },
              {
                step: "03",
                title: "Produkce a uvedení",
                description:
                  "Vybrané projekty procházejí filtrem kvality. Studio je produkuje a uvádí na trh.",
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-sm font-medium text-accent">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Hodnoty studia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Kurátorský přístup",
                description:
                  "Každý projekt je veden s důrazem na kvalitu a koncepční ucelenost. Ne všechny studentské výstupy jsou automaticky produkty studia.",
              },
              {
                title: "Pedagogická praxe",
                description:
                  "Projekty vznikají v rámci výuky a reflektují skutečné potřeby učitelů a studentů.",
              },
              {
                title: "Otevřená laboratoř",
                description:
                  "Studio funguje jako experimentální prostor, kde se testují nové přístupy k výuce dějin umění.",
              },
              {
                title: "Dlouhodobá platforma",
                description:
                  "Klaps! není jednorázový projekt. Je to rostoucí platforma s ambicí měnit přístup k výuce umění.",
              },
            ].map((value) => (
              <div key={value.title} className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="border-t bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
            Klaps! není osobní brand. Je to samostatné studio s kurátorským
            vedením a art direction dohledem. Projekty vznikají v rámci
            pedagogické praxe a zapojují studenty do reálné tvorby.
          </p>
        </div>
      </section>
    </>
  );
}
