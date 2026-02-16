import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Kontakt
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Máte dotaz, nápad na spolupráci, nebo se chcete dozvědět víc?
            Napište nám.
          </p>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="border rounded-lg p-8 text-center">
                  <Mail className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h2 className="text-xl font-semibold mb-2">
                    Děkujeme za zprávu
                  </h2>
                  <p className="text-muted-foreground">
                    Ozveme se vám co nejdříve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium mb-2 block"
                      >
                        Jméno
                      </label>
                      <Input
                        id="name"
                        placeholder="Vaše jméno"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium mb-2 block"
                      >
                        E-mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="vas@email.cz"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium mb-2 block"
                    >
                      Předmět
                    </label>
                    <Input
                      id="subject"
                      placeholder="O čem chcete napsat?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium mb-2 block"
                    >
                      Zpráva
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Vaše zpráva..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Odeslat zprávu
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold mb-2">E-mail</h3>
                <p className="text-muted-foreground text-sm">
                  info@klaps.art
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2">Studio</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Klaps! — vzdělávací kreativní studio
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2">Sociální sítě</h3>
                <p className="text-muted-foreground text-sm">
                  Profily budou doplněny, jakmile budou aktivní.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
