import Image, { type StaticImageData } from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: "center" | "top" | "bottom";
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "center",
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image
        className={`page-hero__image page-hero__image--${imagePosition}`}
        src={image}
        alt={imageAlt}
        sizes="100vw"
        priority
      />
      <div className="page-hero__shade" />
      <div className="site-container page-hero__content">
        <p className="page-hero__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__description">{description}</p>
      </div>
      <p className="page-hero__mark" aria-hidden="true">
        QKRT <span>/</span> Queen&apos;s University
      </p>
    </section>
  );
}
