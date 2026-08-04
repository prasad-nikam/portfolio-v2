import portrait from "@/assets/images/portrait-bw.webp";

export function HeroPortrait() {
  return (
    <div className="relative w-72 max-w-sm sm:w-80 lg:w-96 xl:w-105">
      <div className="overflow-hidden rounded-3xl bg-(--color-surface-secondary)">
        <img
          src={portrait}
          alt="Portrait of Prasad Nikam"
          className="aspect-4/5 h-full w-full object-cover select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
