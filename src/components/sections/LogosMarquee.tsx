const LOGOS = [
  "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/Gaaga-Brand-Logo-1-1.png",
  "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/Gaaga-Brand-Logo-2-1.png",
  "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/Gaaga-Brand-Logo-3-1.png",
  "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/Gaaga-Brand-Logo-4-1.png",
  "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/Gaaga-Brand-Logo-5-1.png",
];

export default function LogosMarquee() {
  return (
    <section className="gaaga-logo-marquee" aria-label="Company logos">
      <div className="gaaga-logo-marquee-track">
        <div className="gaaga-logo-marquee-group">
          {LOGOS.map((logo, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`logo-a-${index}`}
              src={logo}
              alt="Client logo"
              className="gaaga-logo-marquee-image"
              loading="lazy"
            />
          ))}
        </div>

        <div className="gaaga-logo-marquee-group" aria-hidden>
          {LOGOS.map((logo, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`logo-b-${index}`}
              src={logo}
              alt=""
              className="gaaga-logo-marquee-image"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
