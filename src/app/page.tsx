import { MobileApp } from "@/ui/MobileApp";

const chapters = [
  {
    number: "I",
    title: "The Mirror",
    copy: "Three instinctive choices become a precise archetypal reflection—short enough for a morning, sharp enough to stay with you all day.",
    mark: "✦",
  },
  {
    number: "II",
    title: "The Sage",
    copy: "Move beneath the result. Context, practice, and deeper reflection turn a label into a conversation with your own pattern.",
    mark: "◈",
  },
  {
    number: "III",
    title: "The Chronicle",
    copy: "Your mirrors remain yours. A local-first archive becomes a private history of what you noticed, chose, avoided, and became.",
    mark: "⌁",
  },
];

const principles = [
  ["02:00", "A ritual, not a feed"],
  ["03", "choices before interpretation"],
  ["00", "accounts required"],
];

export default function Home() {
  return (
    <main className="codex-site">
      <div className="codex-noise" aria-hidden="true" />
      <div className="codex-stars" aria-hidden="true" />

      <nav className="codex-nav" aria-label="Book of Kings navigation">
        <a className="codex-wordmark" href="#top" aria-label="Book of Kings home">
          <span className="codex-wordmark-seal">ش</span>
          <span>
            <b>BOOK OF KINGS</b>
            <small>کتاب شاهان</small>
          </span>
        </a>
        <div className="codex-nav-meta" aria-hidden="true">
          <span>PRIVATE CODEX</span>
          <i />
          <span>EDITION I</span>
        </div>
        <a className="codex-nav-enter" href="#experience">
          Enter the ritual <span>↘</span>
        </a>
      </nav>

      <section className="codex-hero" id="top">
        <div className="codex-hero-copy">
          <p className="codex-overline"><span>VOL. I</span> A daily practice of self-rule</p>
          <h1>
            Rule the kingdom
            <em>no one else can see.</em>
          </h1>
          <p className="codex-intro">
            Book of Kings is a two-minute private ritual inspired by Persian storytelling—built to turn instinct into reflection, and reflection into a record of who you are becoming.
          </p>
          <div className="codex-hero-actions">
            <a className="codex-primary" href="#experience">Open today&apos;s mirror <span>→</span></a>
            <a className="codex-secondary" href="#chapters">Read the codex</a>
          </div>
          <div className="codex-principles" aria-label="Product principles">
            {principles.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="codex-hero-art" aria-hidden="true">
          <div className="royal-astrolabe">
            <div className="royal-orbit royal-orbit-a" />
            <div className="royal-orbit royal-orbit-b" />
            <div className="royal-orbit royal-orbit-c" />
            <span className="royal-star star-a">✦</span>
            <span className="royal-star star-b">✧</span>
            <span className="royal-star star-c">✦</span>
            <div className="royal-core">
              <small>THE INNER</small>
              <b>ش</b>
              <small>KINGDOM</small>
            </div>
          </div>
          <p className="codex-art-caption">A mirror is not a verdict. It is a throne you can leave.</p>
        </div>

        <div className="codex-scroll-note" aria-hidden="true">
          <span>SCROLL TO UNSEAL</span><i />
        </div>
      </section>

      <section className="codex-manifesto" aria-label="Book of Kings philosophy">
        <div className="codex-manifesto-mark" aria-hidden="true">✦</div>
        <p>Most products want your attention.</p>
        <blockquote>THIS ONE RETURNS IT.</blockquote>
        <p>Nothing to perform. Nothing to publish. Nothing to become for an audience.</p>
      </section>

      <section className="codex-chapters" id="chapters">
        <header className="codex-section-head">
          <p className="codex-overline">THE THREE CHAMBERS</p>
          <h2>A ritual with an architecture.</h2>
          <p>Every layer exists for one reason: move from reaction to recognition without turning reflection into another chore.</p>
        </header>

        <div className="codex-chapter-grid">
          {chapters.map((chapter) => (
            <article className="codex-chapter" key={chapter.number}>
              <div className="codex-chapter-top">
                <span>{chapter.number}</span>
                <i>{chapter.mark}</i>
              </div>
              <h3>{chapter.title}</h3>
              <p>{chapter.copy}</p>
              <div className="codex-chapter-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="codex-sequence" aria-label="The ritual sequence">
        <p className="codex-overline">THE ROYAL SEQUENCE</p>
        <div className="codex-sequence-track">
          <div><span>01</span><b>Arrive</b><small>Leave the noise outside.</small></div>
          <i>→</i>
          <div><span>02</span><b>Choose</b><small>Answer before you explain.</small></div>
          <i>→</i>
          <div><span>03</span><b>Receive</b><small>Meet the mirror, not a score.</small></div>
          <i>→</i>
          <div><span>04</span><b>Carry</b><small>Take one truth into the day.</small></div>
        </div>
      </section>

      <section className="codex-experience" id="experience">
        <div className="codex-experience-copy">
          <p className="codex-overline">THE CODEX IS LIVE</p>
          <h2>Don&apos;t read about it.<br /><em>Enter it.</em></h2>
          <p>
            This is the actual product—not a mockup. Begin the ritual, reveal your mirror, enter Sage mode, read the library, save your card, and build your private chronicle.
          </p>
          <div className="codex-live-proof">
            <span><i /> Local-first state</span>
            <span><i /> Client-side card export</span>
            <span><i /> No database required</span>
          </div>
          <a href="#ritual-frame" className="codex-text-link">DESCEND INTO THE MIRROR <span>↓</span></a>
        </div>

        <div className="codex-device-stage" id="ritual-frame">
          <div className="codex-device-crown" aria-hidden="true"><span>✦</span><i /><span>✦</span></div>
          <div className="codex-device">
            <MobileApp />
          </div>
          <div className="codex-device-foot" aria-hidden="true">
            <span>BOOK OF KINGS</span><i>✦</i><span>PRIVATE MIRROR</span>
          </div>
        </div>
      </section>

      <section className="codex-closing">
        <div className="codex-closing-orbit" aria-hidden="true">✦</div>
        <p className="codex-overline">A SMALL RITUAL FOR A LONG REIGN</p>
        <h2>Your life already writes a story.<br /><em>Read it while it is still yours to edit.</em></h2>
        <a className="codex-primary codex-primary-light" href="#experience">Begin today&apos;s page <span>→</span></a>
        <p className="codex-closing-farsi">هر روز، یک آینه. هر انتخاب، یک سطر.</p>
      </section>

      <footer className="codex-footer">
        <div className="codex-wordmark codex-wordmark-footer">
          <span className="codex-wordmark-seal">ش</span>
          <span><b>BOOK OF KINGS</b><small>YOUR PRIVATE CHRONICLE</small></span>
        </div>
        <p>Persian-inspired reflection for the modern inner kingdom.</p>
        <span>© THE READER REMAINS THE AUTHOR</span>
      </footer>
    </main>
  );
}
