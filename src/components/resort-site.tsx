import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  bookingUrl,
  editorialPages,
  navigationItems,
  officialPages,
  resortAssets,
  rooms,
  type EditorialPageKey,
} from "@/lib/resort-data";

const externalProps = {
  target: "_blank",
  rel: "noreferrer",
} as const;

const accommodationsUrl = "https://www.resortrio.com/accommodation/";
const officialHomeUrl = "https://www.resortrio.com/";

const editorialRoute: Record<EditorialPageKey, string> = {
  accommodation: "/accommodation",
  dining: "/dining",
  wellness: "/wellness",
  celebrations: "/celebrations",
  discover: "/discover",
};

export function SiteMotion() {
  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};

    void (async () => {
      const [{ default: Lenis }, gsapModule, scrollModule] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!reducedMotion) {
        const lenis = new Lenis({
          duration: 1.05,
          smoothWheel: true,
          anchors: { offset: -24 },
        });
        lenis.on("scroll", ScrollTrigger.update);

        const ticker = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);
        cleanup = () => {
          gsap.ticker.remove(ticker);
          lenis.destroy();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      } else {
        cleanup = () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }

      const header = document.querySelector<HTMLElement>(".rio-header");
      if (header) {
        ScrollTrigger.create({
          trigger: "#editorial",
          start: "top 75%",
          end: "bottom 20%",
          onToggle: ({ isActive }) => {
            header.dataset["ink"] = isActive ? "light" : "dark";
          },
        });
        ScrollTrigger.create({
          trigger: "#gatherings",
          start: "top 70%",
          end: "bottom 20%",
          onToggle: ({ isActive }) => {
            header.dataset["ink"] = isActive ? "dark" : "light";
          },
        });
      }

      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: reducedMotion ? 0 : 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((grid) => {
        gsap.fromTo(
          grid.children,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: reducedMotion ? 0 : 0.64,
            stagger: reducedMotion ? 0 : 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: grid, start: "top 88%", once: true },
          },
        );
      });

      const imageFrame = document.querySelector<HTMLElement>(".arrival-frame");
      const arrivalCopy = document.querySelector<HTMLElement>(".arrival-copy");

      if (imageFrame && !reducedMotion) {
        gsap.fromTo(
          imageFrame,
          { borderRadius: "48% 48% 2px 2px", scale: 0.84 },
          {
            borderRadius: "2px",
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".arrival",
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      }

      if (arrivalCopy) {
        gsap.to(arrivalCopy, {
          y: -72,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".arrival",
            start: "top top",
            end: "55% top",
            scrub: true,
          },
        });
      }

      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((frame) => {
        const image = frame.querySelector<HTMLElement>(".parallax-image");
        if (!image || reducedMotion) return;
        gsap.fromTo(
          image,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      ScrollTrigger.refresh();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return null;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <header className="rio-header" data-ink="dark">
        <div className="header-inner">
          <Link to="/" aria-label="Resort Rio home" className="wordmark-link">
            <img className="wordmark" src={resortAssets.logo} alt="Resort Rio" />
          </Link>
          <nav className="desktop-navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <Link key={item.to} to={item.to} className="navigation-link">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-book" href={bookingUrl} {...externalProps}>
              <span>Book a stay</span>
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <Button
              className="menu-toggle"
              variant="ghost"
              size="icon"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      <div className={`menu-overlay${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-overlay-content">
          <p className="eyebrow eyebrow-light">A little somewhere in Goa</p>
          <nav aria-label="Full navigation">
            {navigationItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className="menu-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="menu-link-index">0{index + 1}</span>
                {item.label}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <a className="menu-book" href={bookingUrl} {...externalProps}>
            Reserve directly <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
      <div className="announcement-bar">
        <span>Arpora · North Goa</span>
        <span className="announcement-dot" aria-hidden="true" />
        <span>A gentler kind of getaway</span>
      </div>
    </>
  );
}

export function ResortSiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteMotion />
      <SiteHeader />
      {children}
    </>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-kicker">
      <span className="kicker-line" aria-hidden="true" />
      {children}
    </p>
  );
}

function RoundLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="round-link" href={href} {...externalProps} aria-label={String(children)}>
      <ArrowUpRight aria-hidden="true" size={20} />
    </a>
  );
}

function EditorialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="text-link" href={href} {...externalProps}>
      {children} <ArrowUpRight aria-hidden="true" size={15} />
    </a>
  );
}

export function HomePage() {
  return (
    <main>
      <section className="arrival" aria-labelledby="arrival-title">
        <div className="arrival-quiet-bar">
          <span>15°33′ N&nbsp; 73°45′ E</span>
          <span>A riverside retreat, Arpora</span>
        </div>
        <div className="arrival-frame">
          <img
            className="arrival-photo"
            src={resortAssets.hero}
            alt="Resort Rio, a riverside escape in Arpora, Goa"
            fetchPriority="high"
          />
          <div className="arrival-shade" />
          <div className="arrival-copy">
            <p className="eyebrow eyebrow-light">A little less rush. A little more river.</p>
            <h1 id="arrival-title">
              Find your
              <br />
              <em>sussegado.</em>
            </h1>
            <p className="arrival-intro">
              Riverside days, Goan evenings, and room to be entirely, wonderfully here.
            </p>
            <div className="arrival-actions">
              <a className="button-light" href={bookingUrl} {...externalProps}>
                Begin your stay <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <a className="arrival-text-link" href="#editorial">
                Discover Resort Rio <ArrowDown aria-hidden="true" size={14} />
              </a>
            </div>
          </div>
          <div className="arrival-index"><span>01</span> / 05</div>
          <div className="arrival-caption">THE RIVER FINDS ITS WAY, AND SO WILL YOU.</div>
        </div>
      </section>

      <div className="booking-strip" id="book-direct">
        <div className="booking-copy">
          <span className="booking-spark"><Sparkles aria-hidden="true" size={16} /></span>
          <div>
            <p className="booking-title">Make Goa yours.</p>
            <p className="booking-note">Rooms, suites and private villas await.</p>
          </div>
        </div>
        <a className="booking-button" href={bookingUrl} {...externalProps}>
          Check availability <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>

      <section className="intro-section paper-grain" id="editorial">
        <div className="intro-meta" data-reveal>
          <SectionKicker>A SLOWER KIND OF STORY</SectionKicker>
          <span className="meta-note">A riverside resort in North Goa</span>
        </div>
        <div className="intro-copy" data-reveal>
          <h2>
            Some places ask you to do more.
            <br />
            <em>Here, you can simply be.</em>
          </h2>
          <p>
            In Arpora, where the Baga River meets the unhurried spirit of Goa, there is room to
            let the day unfold on its own terms. A pool-side morning. A table that turns into a
            long lunch. Nowhere else you need to be.
          </p>
          <EditorialLink href="https://www.resortrio.com/about-us/">A little about Resort Rio</EditorialLink>
        </div>
        <div className="intro-footnote">
          <span>GOA, A LITTLE DIFFERENTLY</span>
          <Compass aria-hidden="true" size={17} />
        </div>
      </section>

      <section className="rooms-section paper-grain" id="rooms" aria-labelledby="rooms-heading">
        <div className="section-heading" data-reveal>
          <div>
            <SectionKicker>SETTLE IN, YOUR WAY</SectionKicker>
            <h2 id="rooms-heading">Find your kind of <em>room.</em></h2>
          </div>
          <EditorialLink href={accommodationsUrl}>Explore all 13 stays</EditorialLink>
        </div>
        <RoomCollection />
        <div className="rooms-endnote" data-reveal>
          <span>13 WAYS TO FEEL AT HOME.</span>
          <a href={accommodationsUrl} {...externalProps}>
            View every stay <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </section>

      <section className="river-interlude" data-ink="light">
        <div className="river-image-frame" data-parallax>
          <img className="parallax-image" src={resortAssets.riverView} alt="The river beside Resort Rio" loading="lazy" />
          <div className="river-shade" />
        </div>
        <div className="river-interlude-copy" data-reveal>
          <p className="eyebrow eyebrow-light">THE BAGA RIVER, JUST BEYOND</p>
          <p className="river-quote">“Let the day<br />take its <em>time.</em>”</p>
          <ArrowDown className="river-arrow" aria-hidden="true" size={18} />
        </div>
        <span className="river-caption">WHERE THE WATER TAKES THE LONG WAY HOME.</span>
      </section>

      <section className="experiences-section paper-grain" aria-labelledby="experiences-heading">
        <div className="section-heading experience-heading" data-reveal>
          <div>
            <SectionKicker>THE GOOD PART OF BEING HERE</SectionKicker>
            <h2 id="experiences-heading">Follow what <em>feels good.</em></h2>
          </div>
          <p className="experience-heading-note">A few ideas for an unhurried Goa escape.</p>
        </div>
        <ExperienceCards />
      </section>

      <section className="gatherings-section" id="gatherings" aria-labelledby="gatherings-heading">
        <div className="gathering-photo-frame" data-parallax>
          <img className="parallax-image" src={resortAssets.wedding} alt="A celebration in Goa at Resort Rio" loading="lazy" />
        </div>
        <div className="gathering-copy" data-reveal>
          <SectionKicker>THE ONES YOU BRING TOGETHER</SectionKicker>
          <h2 id="gatherings-heading">Make a day of it.<br /><em>Make a memory.</em></h2>
          <p>
            For the big “I do,” the good-news gathering or the ideas that bring a room together.
            There is a space at Resort Rio for making it feel like yours.
          </p>
          <div className="gathering-links">
            <EditorialLink href={officialPages.wedding}>Weddings & celebrations</EditorialLink>
            <EditorialLink href={officialPages.conference}>Rio World Conference Centre</EditorialLink>
          </div>
          <a className="subtle-download-link" href={officialPages.weddingBrochure} {...externalProps}>
            Request the wedding brochure <ArrowDownRight aria-hidden="true" size={15} />
          </a>
        </div>
        <div className="gathering-index">MAKE IT A DAY<br />TO REMEMBER.</div>
      </section>

      <section className="signature-section paper-grain" aria-labelledby="signature-heading">
        <div className="signature-visual" data-reveal>
          <div className="signature-image-frame" data-parallax>
            <img className="parallax-image" src={resortAssets.sunset} alt="Resort Rio at the close of a Goa afternoon" loading="lazy" />
          </div>
          <span className="signature-visual-caption">THE HOUR THAT BECOMES TWO.</span>
        </div>
        <div className="signature-copy" data-reveal>
          <SectionKicker>THAT SPECIAL SORT OF PLACE</SectionKicker>
          <h2 id="signature-heading">A little more<br /><em>Rio in your day.</em></h2>
          <p>
            Fourteen ways to spend the evening. A space for every kind of gathering. A private
            plunge pool with nobody else’s plans in it. This is the sort of place where an
            ordinary afternoon likes to overstay its welcome.
          </p>
          <div className="signature-points">
            <span><Check aria-hidden="true" size={15} /> The Baga River, close by</span>
            <span><Check aria-hidden="true" size={15} /> 13 rooms, suites & villas</span>
            <span><Check aria-hidden="true" size={15} /> Dining, wellness & little detours</span>
          </div>
          <EditorialLink href="https://www.resortrio.com/about-us/">Get to know Resort Rio</EditorialLink>
        </div>
      </section>

      <section className="offers-section" id="special-offers">
        <div className="offers-photo" data-parallax>
          <img className="parallax-image" src={resortAssets.pool} alt="The pool at Resort Rio" loading="lazy" />
        </div>
        <div className="offers-copy" data-reveal>
          <SectionKicker>GOOD THINGS FOR YOUR GETAWAY</SectionKicker>
          <h2>Make a little<br /><em>room for more.</em></h2>
          <p>Discover current Resort Rio offers and find an invitation that feels just right.</p>
          <a className="button-dark" href={officialPages.offers} {...externalProps}>
            See current offers <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
        <span className="offers-note">A VERY GOAN SORT OF PLEASURE.</span>
      </section>

      <section className="stay-note paper-grain">
        <span>UNTIL THE RIVER BRINGS YOU BACK.</span>
        <p>Somewhere between arrival<br />and <em>“one more day.”</em></p>
        <a href={bookingUrl} {...externalProps}>Your room is waiting <ArrowUpRight aria-hidden="true" size={15} /></a>
      </section>
      <SiteFooter />
    </main>
  );
}

const roomFilters = [
  { label: "All stays", value: "all" },
  { label: "Rooms", value: "rooms" },
  { label: "Suites", value: "suites" },
  { label: "Private villas", value: "villas" },
] as const;

function RoomCollection() {
  const [filter, setFilter] = useState<string>("all");
  const visibleRooms = rooms.filter((room) => filter === "all" || room.group === filter);

  return (
    <>
      <div className="room-filter-row" role="group" aria-label="Filter stays by type" data-reveal>
        <span className="filter-label">EXPLORE</span>
        {roomFilters.map((option) => (
          <Button
            key={option.value}
            type="button"
            variant="ghost"
            size="sm"
            className={`filter-button${filter === option.value ? " is-selected" : ""}`}
            aria-pressed={filter === option.value}
            onClick={() => setFilter(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
      <div className="room-grid" data-stagger>
        {visibleRooms.map((room, index) => (
          <article className={`room-card${index === 0 && filter === "all" ? " room-card-featured" : ""}`} key={room.name}>
            <a className="room-image-frame" href={room.href} {...externalProps} aria-label={`View ${room.name}`}>
              <img src={room.image} alt={room.name} loading="lazy" />
              <span className="room-card-number">{String(rooms.indexOf(room) + 1).padStart(2, "0")}</span>
              <span className="room-card-open"><ArrowUpRight aria-hidden="true" size={18} /></span>
            </a>
            <div className="room-card-info">
              <div><span className="room-wing">{room.wing.toUpperCase()}</span><h3>{room.name}</h3></div>
              <a className="room-arrow" href={room.href} {...externalProps} aria-label={`Details for ${room.name}`}>
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
            <a className="room-book" href={bookingUrl} {...externalProps}>Find your room <ArrowUpRight aria-hidden="true" size={13} /></a>
          </article>
        ))}
      </div>
    </>
  );
}

function ExperienceCards() {
  const experiences = [
    { key: "dining", image: resortAssets.dining, eyebrow: "SOMETHING FOR THE TABLE", number: "01" },
    { key: "wellness", image: resortAssets.spa, eyebrow: "A MOMENT TO YOURSELF", number: "02" },
    { key: "discover", image: resortAssets.evening, eyebrow: "A DIFFERENT KIND OF EVENING", number: "03" },
  ] as const;

  return (
    <div className="experience-grid" data-stagger>
      {experiences.map(({ key, image, eyebrow, number }) => {
        const item = editorialPages[key];
        return (
          <article className="experience-card" key={key}>
            <Link className="experience-photo-frame" to={editorialRoute[key]}>
              <img src={image} alt={item.imageAlt} loading="lazy" />
              <span className="experience-number">{number}</span>
              <span className="experience-open"><ArrowUpRight aria-hidden="true" size={19} /></span>
            </Link>
            <div className="experience-copy">
              <span className="room-wing">{eyebrow}</span>
              <h3><Link to={editorialRoute[key]}>{item.title}</Link></h3>
              <p>{item.description}</p>
              <Link className="text-link" to={editorialRoute[key]}>
                {key === "dining" ? "Discover dining" : key === "wellness" ? "Explore wellness" : "Discover more"}
                <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function EditorialPage({ page }: { page: EditorialPageKey }) {
  const content = editorialPages[page];
  const isAccommodation = page === "accommodation";
  const asideImage = page === "accommodation" ? resortAssets.suite : page === "celebrations" ? resortAssets.conference : page === "dining" ? resortAssets.evening : page === "wellness" ? resortAssets.pool : resortAssets.about;
  const extraLink = page === "celebrations" ? officialPages.conference : page === "discover" ? officialPages.casino : page === "accommodation" ? officialPages.tours : page === "wellness" ? officialPages.hotelBrochure : officialPages.hotelBrochure;
  const extraLabel = page === "celebrations" ? "Meet at Rio World Conference Centre" : page === "discover" ? "Explore Big B Casino" : page === "accommodation" ? "Take a 360° virtual tour" : page === "wellness" ? "Download the Resort Rio brochure" : "Discover the wider resort";

  return (
    <main className="editorial-page">
      <section className="editorial-banner" aria-label={content.label}>
        <img src={content.image} alt={content.imageAlt} fetchPriority="high" />
        <div className="editorial-banner-shade" />
        <div className="editorial-banner-content">
          <div className="editorial-breadcrumb"><Link to="/">RESORT RIO</Link><span>/</span>{content.label}</div>
          <p className="eyebrow eyebrow-light">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="editorial-lede">{content.description}</p>
          <a className="button-light" href={isAccommodation ? bookingUrl : content.href} {...externalProps}>
            {isAccommodation ? "Check availability" : content.cta} <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
        <span className="editorial-banner-caption">A LITTLE SOMEWHERE IN GOA</span>
      </section>

      <section className="editorial-body paper-grain">
        <div className="editorial-main-copy" data-reveal>
          <SectionKicker>{content.label}</SectionKicker>
          <h2>{content.title}</h2>
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="editorial-cta-stack">
            {page === "accommodation" ? (
              <a className="button-dark" href={bookingUrl} {...externalProps}>Check availability <ArrowUpRight aria-hidden="true" size={15} /></a>
            ) : (
              <a className="button-dark" href={content.href} {...externalProps}>{content.cta} <ArrowUpRight aria-hidden="true" size={15} /></a>
            )}
            <EditorialLink href={extraLink}>{extraLabel}</EditorialLink>
          </div>
        </div>
        <div className="editorial-side" data-reveal>
          <div className="editorial-side-photo"><img src={asideImage} alt={page === "celebrations" ? "The conference and celebration spaces at Resort Rio" : content.imageAlt} loading="lazy" /></div>
          <div className="editorial-side-note"><span>GOOD THINGS TAKE THEIR TIME.</span><ArrowDownRight aria-hidden="true" size={17} /></div>
        </div>
      </section>

      {isAccommodation ? (
        <section className="rooms-section paper-grain editorial-rooms" id="rooms" aria-labelledby="rooms-heading">
          <div className="section-heading" data-reveal>
            <div><SectionKicker>ALL 13 WAYS TO STAY</SectionKicker><h2 id="rooms-heading">Find your kind of <em>room.</em></h2></div>
            <a className="text-link" href={bookingUrl} {...externalProps}>Book directly <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
          <RoomCollection />
        </section>
      ) : page === "discover" ? (
        <section className="discovery-actions">
          <SectionKicker>MAKE A DAY OF IT</SectionKicker>
          <a href={officialPages.tours} {...externalProps}>Take a 360° virtual tour <ArrowUpRight aria-hidden="true" size={17} /></a>
          <a href={officialPages.hotelBrochure} {...externalProps}>Download the resort brochure <ArrowDownRight aria-hidden="true" size={17} /></a>
          <a href={officialPages.offers} {...externalProps}>See current offers <ArrowUpRight aria-hidden="true" size={17} /></a>
        </section>
      ) : null}

      {page === "celebrations" ? (
        <section className="gathering-venue">
          <div className="gathering-venue-photo"><img src={resortAssets.conference} alt="Rio World Conference Centre" loading="lazy" /></div>
          <div><SectionKicker>ROOM FOR BIG IDEAS</SectionKicker><h2>Bring everyone<br /><em>into the room.</em></h2><p>Discover the Rio World Conference Centre and event spaces at Resort Rio.</p><EditorialLink href={officialPages.conference}>Explore event spaces</EditorialLink></div>
        </section>
      ) : null}

      <section className="editorial-footer-cta">
        <div><SectionKicker>WHENEVER YOU’RE READY</SectionKicker><p>We’ll leave<br />the light on.</p></div>
        <a className="button-light" href={bookingUrl} {...externalProps}>Make it your stay <ArrowUpRight aria-hidden="true" size={16} /></a>
      </section>
      <SiteFooter />
    </main>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" aria-label="Resort Rio home"><img src={resortAssets.logo} alt="Resort Rio" /></Link>
          <p>A little somewhere in Goa.<br />A little more room to be.</p>
          <a className="footer-direct" href={bookingUrl} {...externalProps}>Book directly <ArrowUpRight aria-hidden="true" size={14} /></a>
        </div>
        <div className="footer-column">
          <span>FIND YOUR STAY</span>
          <Link to="/accommodation">Rooms & villas</Link>
          <a href={officialPages.offers} {...externalProps}>Special offers</a>
          <a href={officialPages.tours} {...externalProps}>360° virtual tour</a>
          <a href={officialPages.quickPay} {...externalProps}>Quick Pay</a>
        </div>
        <div className="footer-column">
          <span>MAKE A DAY OF IT</span>
          <Link to="/dining">Dining & Aur Jalsa</Link>
          <Link to="/wellness">Rio Luxury Spa</Link>
          <Link to="/celebrations">Weddings & events</Link>
          <Link to="/discover">Discover Resort Rio</Link>
        </div>
        <div className="footer-column footer-address">
          <span>WHEN YOU NEED US</span>
          <p>Tambudki, Arpora, Bardez<br />North Goa, Goa 403518, India</p>
          <a href="tel:+918322658700">+91 832 665 8700</a>
          <a href="https://www.resortrio.com/contact-us/" {...externalProps}>Get in touch <ArrowUpRight aria-hidden="true" size={13} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© Resort Rio Goa · A place in your own time.</span>
        <span>ARPORA · NORTH GOA</span>
        <a href={officialHomeUrl} {...externalProps}>Resort Rio official website <ArrowUpRight aria-hidden="true" size={12} /></a>
      </div>
    </footer>
  );
}
