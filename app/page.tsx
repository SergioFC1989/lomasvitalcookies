import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Busca &nbsp;</span>
        <span className={title({ color: "violet" })}>Lo Más Rico,&nbsp;</span>
        <br />
        <span className={title()}>Lo Más Vital.</span>
        <div className="flex flex-col gap-4 mt-8">
          <video
            autoPlay
            loop
            muted
            className="w-full rounded-md shadow-lg opacity-85"
            src="/vecteezy_knead-the-dough-ingredients-for-the-dough-the-best_14348716.mov"
          />
        </div>
      </div>
    </section>
  );
}
