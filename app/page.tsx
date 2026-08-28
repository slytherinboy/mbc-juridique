"use client";

import { useState, type FormEvent } from "react";

function BrandSeal({ hero = false }: { hero?: boolean }) {
  if (!hero) {
    return (
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="1" />
        <text x="50" y="58" textAnchor="middle" className="logo-letters">MBC</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 300 300" role="img" aria-label="Sceau Mind Business Consulting">
      <defs>
        <path id="circlePath" d="M 150,150 m -105,0 a 105,105 0 1,1 210,0 a 105,105 0 1,1 -210,0" />
      </defs>
      <g className="seal-spin">
        <circle cx="150" cy="150" r="145" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="150" cy="150" r="128" fill="none" stroke="var(--gold-light)" strokeWidth="1.5" strokeDasharray="2 7" />
        <text className="seal-ring-text">
          <textPath href="#circlePath" startOffset="2%">MIND BUSINESS CONSULTING • CONSEIL — ASSISTANCE — FORMATION •</textPath>
        </text>
      </g>
      <circle cx="150" cy="150" r="78" fill="rgba(16,27,49,.12)" stroke="var(--gold)" strokeWidth="1" />
      <text x="150" y="142" textAnchor="middle" className="seal-title">MBC</text>
      <text x="150" y="168" textAnchor="middle" className="seal-subtitle">CONSEIL</text>
    </svg>
  );
}

const navigation = [
  ["Votre besoin", "#orientation"],
  ["Solutions", "#solutions"],
  ["Méthode", "#methode"],
  ["Le consultant", "#consultant"],
  ["Expertise", "#expertise"],
  ["Contact", "#contact"],
];

const journeys = [
  {
    code: "DOSSIER 01",
    label: "Entreprise & dirigeant",
    title: "Créer ou sécuriser une activité",
    text: "Société, gouvernance, contrats commerciaux, conformité OHADA ou fiscalité.",
    recommendation: "Entretien de cadrage, puis avis juridique ou assistance selon le niveau de risque.",
    documents: "Statuts, projet de contrat ou correspondances utiles",
    subject: "Consultation juridique",
    client: "Entreprise / dirigeant",
  },
  {
    code: "DOSSIER 02",
    label: "RH & employeur",
    title: "Gérer une situation de travail",
    text: "Contrat, discipline, règlement intérieur, rupture ou contentieux social.",
    recommendation: "Consultation ciblée en droit du travail avec plan d’action et documents à sécuriser.",
    documents: "Contrat de travail, échanges et règlement intérieur",
    subject: "Assistance juridique",
    client: "Entreprise / dirigeant",
  },
  {
    code: "DOSSIER 03",
    label: "Contrat & marché",
    title: "Sécuriser un engagement",
    text: "Relecture de contrat, négociation de clauses ou dossier de marché public.",
    recommendation: "Relecture documentée ou accompagnement à la négociation selon l’enjeu du dossier.",
    documents: "Projet de contrat, cahier des charges ou dossier d’appel d’offres",
    subject: "Relecture de contrat",
    client: "Entreprise / dirigeant",
  },
  {
    code: "DOSSIER 04",
    label: "Particulier",
    title: "Protéger mes droits",
    text: "Famille, succession, patrimoine, logement, immobilier ou question personnelle.",
    recommendation: "Première consultation confidentielle pour qualifier la situation et les options possibles.",
    documents: "Résumé chronologique et pièces essentielles uniquement",
    subject: "Consultation juridique",
    client: "Particulier",
  },
];

const services = [
  {
    code: "01 / CLARIFIER",
    title: "Consultation juridique",
    text: "Comprendre votre situation, mesurer les risques et déterminer la prochaine action utile.",
    meta: "Sur place ou à distance",
    points: ["Question qualifiée", "Options expliquées", "Prochaine étape définie"],
  },
  {
    code: "02 / SÉCURISER",
    title: "Assistance juridique",
    text: "Préparer, relire ou suivre vos actes et démarches avec une continuité de dossier.",
    meta: "Périmètre confirmé avant mission",
    points: ["Actes et contrats", "Démarches administratives", "Conformité et suivi"],
  },
  {
    code: "03 / TRANSMETTRE",
    title: "Formation sur mesure",
    text: "Donner à vos équipes des réflexes juridiques adaptés à leur métier et à leurs risques.",
    meta: "En entreprise ou à distance",
    points: ["Diagnostic du besoin", "Module contextualisé", "Support remis"],
  },
];

const method = [
  ["01", "Orientation", "Vous sélectionnez la situation la plus proche de votre besoin."],
  ["02", "Qualification", "MBC vérifie le périmètre, l’urgence et les pièces réellement utiles."],
  ["03", "Proposition", "La prestation, le délai et le tarif sont confirmés avant tout paiement."],
  ["04", "Accompagnement", "Le dossier est traité avec un interlocuteur et des étapes identifiées."],
  ["05", "Restitution", "Vous recevez un avis, un document ou une feuille de route claire."],
];

const expertises = [
  ["Droit des affaires & OHADA", "Sociétés, gouvernance, contrats commerciaux et actes uniformes OHADA."],
  ["Droit du travail", "Contrats, discipline, relations collectives et situations de rupture."],
  ["Droit immobilier & foncier", "Baux, transactions, titres et sécurisation des acquisitions."],
  ["Droit fiscal", "Obligations déclaratives, conformité et préparation des contrôles."],
  ["Marchés publics", "Dossiers de soumission, conformité et accompagnement en cas de recours."],
  ["Droit du numérique", "Données personnelles, contrats technologiques et propriété intellectuelle."],
  ["Famille & patrimoine", "Succession, régimes matrimoniaux et organisation patrimoniale."],
  ["Négociation contractuelle", "Clauses sensibles, stratégie de négociation et sécurisation des accords."],
];

const onlineServices = {
  senegal: {
    label: "Sénégal",
    heading: "Tarifs en FCFA",
    note: "Prestations destinées aux clients au Sénégal.",
    services: [
      ["Consultation à distance", "45 minutes par téléphone ou visioconférence, tous domaines", "100 000 FCFA"],
      ["Avis juridique écrit", "Selon la complexité de la question et le temps de recherche", "70 000 – 200 000 FCFA"],
      ["Relecture de contrat", "Jusqu’à 10 pages, du contrat simple au contrat commercial ou OHADA", "75 000 – 250 000 FCFA"],
      ["Accompagnement d’appel d’offres", "Selon la valeur et la complexité du contrat négocié", "200 000 – 750 000 FCFA"],
    ],
  },
  international: {
    label: "International",
    heading: "Tarifs en euros TTC",
    note: "Prestations à distance facturées en euros, toutes taxes comprises.",
    services: [
      ["Consultation à distance", "30 minutes par téléphone ou visioconférence", "80 € – 150 € TTC"],
      ["Avis juridique écrit", "Selon la complexité de la question et le temps de recherche", "200 € – 450 € TTC"],
      ["Relecture de contrat", "Jusqu’à 10 pages, du contrat simple au contrat commercial complexe", "250 € – 500 € TTC"],
    ],
  },
} as const;

type PricingZone = keyof typeof onlineServices;

type DeliveryChannel = "whatsapp" | "email";

function createRequestReference() {
  const now = new Date();
  const part = (value: number) => String(value).padStart(2, "0");
  const date = `${now.getFullYear()}${part(now.getMonth() + 1)}${part(now.getDate())}`;
  const time = `${part(now.getHours())}${part(now.getMinutes())}`;
  const suffix = Math.random().toString(36).slice(2, 5).toUpperCase();
  return `MBC-${date}-${time}-${suffix}`;
}

const commitments = [
  ["Confidentialité", "Les informations sont utilisées uniquement pour qualifier et traiter votre demande."],
  ["Langage clair", "Chaque recommandation est expliquée sans jargon inutile ni promesse irréaliste."],
  ["Cadre validé", "Le périmètre, le délai et le tarif sont confirmés avant le démarrage de la mission."],
  ["Paiement maîtrisé", "Aucun paiement n’est demandé avant la validation de la prise en charge."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedJourney, setSelectedJourney] = useState<number | null>(null);
  const [subject, setSubject] = useState("Consultation juridique");
  const [clientType, setClientType] = useState("Entreprise / dirigeant");
  const [urgency, setUrgency] = useState("À planifier");
  const [meetingMode, setMeetingMode] = useState("Téléphone / visioconférence");
  const [pricingZone, setPricingZone] = useState<PricingZone>("senegal");
  const [requestReference, setRequestReference] = useState<string | null>(null);
  const [deliveryChannel, setDeliveryChannel] = useState<DeliveryChannel | null>(null);

  function chooseJourney(index: number) {
    setSelectedJourney(index);
    setSubject(journeys[index].subject);
    setClientType(journeys[index].client);
    setRequestReference(null);
    setDeliveryChannel(null);
  }

  function prepareRequest(form: HTMLFormElement) {
    if (!form.reportValidity()) return null;

    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const reference = requestReference ?? createRequestReference();
    const message = [
      "Bonjour, je souhaite soumettre une demande juridique à M.B.C.",
      "",
      `Référence : ${reference}`,
      `Nom : ${value("nom")}`,
      `Téléphone : ${value("telephone")}`,
      `Profil : ${value("client")}`,
      `Nature du besoin : ${value("sujet")}`,
      `Niveau d’urgence : ${value("urgence")}`,
      `Mode de rendez-vous : ${value("rendezvous")}`,
      "",
      "Contexte et résultat recherché :",
      value("message"),
      "",
      "Je comprends que ce premier message sert à qualifier ma demande et ne vaut pas consultation juridique.",
    ].join("\n");

    setRequestReference(reference);
    return { reference, message };
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const request = prepareRequest(event.currentTarget);
    if (!request) return;

    setDeliveryChannel("whatsapp");
    window.open(`https://wa.me/221770161690?text=${encodeURIComponent(request.message)}`, "_blank", "noopener,noreferrer");
  }

  function prepareEmail(form: HTMLFormElement | null) {
    if (!form) return;
    const request = prepareRequest(form);
    if (!request) return;

    setDeliveryChannel("email");
    const emailSubject = `Demande juridique MBC — ${request.reference}`;
    window.location.href = `mailto:mamadou.bakhoum@outlook.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(request.message)}`;
  }

  return (
    <main id="top">
      <header className="site-header">
        <div className="nav-inner">
          <a href="#top" className="brand" aria-label="MBC — accueil">
            <BrandSeal />
            <span className="brand-text">
              <span className="brand-name">Mind Business Consulting</span>
              <span className="brand-tag">Conseil juridique • Présentiel & distance</span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Navigation principale">
            {navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <a href="#contact" className="nav-cta">Ouvrir un dossier</a>
          <button
            className="burger"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
        </div>
        <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-label="Navigation mobile">
          {navigation.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="wrap hero-shell">
          <div className="hero-copy">
            <div className="dossier-ref">
              <span>RÉF. <b>MBC — CONSEIL / 2026</b></span>
              <span>SÉNÉGAL • À DISTANCE</span>
            </div>
            <p className="hero-kicker">Votre situation mérite une réponse claire</p>
            <h1 id="hero-title">Le droit expliqué.<br />Votre décision <em>sécurisée.</em></h1>
            <p className="lead">M.B.C transforme une question juridique complexe en un parcours concret : identifier le besoin, qualifier le risque et choisir la bonne action.</p>
            <div className="cta-row">
              <a href="#orientation" className="btn btn-primary">Identifier mon besoin <span>→</span></a>
              <a href="tel:+221770161690" className="btn btn-ghost">Parler à un conseiller</a>
            </div>
            <div className="hero-proof" aria-label="Informations pratiques">
              <span><b>8</b> domaines couverts</span>
              <span><b>3</b> modes d’accompagnement</span>
              <span><b>01</b> interlocuteur de suivi</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Dossier juridique MBC en trois dimensions">
            <div className="visual-halo" />
            <img src="mbc-3d-hero.png" alt="Composition abstraite en papier ivoire, verre bleu nuit et métal doré" />
            <div className="floating-file file-top">
              <span>STATUT DU DOSSIER</span>
              <strong>Orientation ouverte</strong>
              <i />
            </div>
            <div className="floating-file file-bottom">
              <span>CONFIDENTIALITÉ</span>
              <strong>Échanges encadrés</strong>
            </div>
            <div className="hero-seal"><BrandSeal hero /></div>
          </div>
        </div>
      </section>

      <nav className="journey-bar" aria-label="Parcours de la page">
        <div className="wrap">
          <span>PARCOURS MBC</span>
          <a href="#orientation"><b>01</b> Besoin</a><i />
          <a href="#solutions"><b>02</b> Solution</a><i />
          <a href="#methode"><b>03</b> Méthode</a><i />
          <a href="#consultant"><b>04</b> Consultant</a><i />
          <a href="#contact"><b>05</b> Dossier</a>
        </div>
      </nav>

      <section className="orientation-section" id="orientation">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Point de départ</p><h2>Quelle situation vous amène aujourd’hui&nbsp;?</h2></div>
            <p>Sélectionnez le dossier le plus proche de votre besoin. L’orientation prépare votre demande, sans remplacer une consultation.</p>
          </div>
          <div className="journey-grid">
            {journeys.map((journey, index) => (
              <button type="button" className={`journey-card ${selectedJourney === index ? "selected" : ""}`} aria-pressed={selectedJourney === index} onClick={() => chooseJourney(index)} key={journey.code}>
                <span className="journey-code">{journey.code}</span>
                <span className="journey-icon" aria-hidden="true">0{index + 1}</span>
                <span className="journey-label">{journey.label}</span>
                <strong>{journey.title}</strong>
                <span className="journey-text">{journey.text}</span>
                <span className="journey-action">{selectedJourney === index ? "Dossier sélectionné ✓" : "Choisir ce dossier →"}</span>
              </button>
            ))}
          </div>
          {selectedJourney !== null && (
            <div className="orientation-result" aria-live="polite">
              <div className="result-stamp"><span>ORIENTATION</span><strong>MBC</strong></div>
              <div className="result-copy">
                <span className="result-reference">Orientation sélectionnée • {journeys[selectedJourney].code}</span>
                <h3>{journeys[selectedJourney].recommendation}</h3>
                <p><b>À préparer :</b> {journeys[selectedJourney].documents}.</p>
              </div>
              <a href="#contact" className="result-action">Continuer avec ce besoin <span>→</span></a>
            </div>
          )}
        </div>
      </section>

      <section className="article solutions-section" id="solutions">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Solutions</p><h2>Le bon niveau d’accompagnement</h2></div>
            <p>Une offre lisible, du premier éclairage jusqu’à la sécurisation de vos pratiques internes.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.code}>
                <div className="service-top"><span>{service.code}</span><b>0{index + 1}</b></div>
                <h3>{service.title}</h3><p>{service.text}</p>
                <ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <span className="service-meta">{service.meta}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="method-section" id="methode">
        <div className="wrap method-layout">
          <div className="method-intro">
            <p className="eyebrow">Méthode MBC</p>
            <h2>Vous savez toujours où en est votre dossier.</h2>
            <p>Chaque mission suit une progression simple. Le périmètre et les conditions sont confirmés avant la prise en charge.</p>
            <div className="method-object" aria-hidden="true">
              <div className="method-sheet sheet-back" />
              <div className="method-sheet sheet-front"><span>MBC / PROCESSUS</span><i /><i /><i /><b>VALIDÉ</b></div>
              <div className="method-ring" />
            </div>
          </div>
          <ol className="method-steps">
            {method.map(([number, title, text]) => (
              <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="consultant-section" id="consultant">
        <div className="wrap">
          <div className="consultant-heading split-heading">
            <div><p className="eyebrow">Votre interlocuteur</p><h2>Plus de 10 ans d’expérience au service des entreprises et institutions financières.</h2></div>
            <p>Une expertise sénior en droit des affaires OHADA, droit financier et bancaire UEMOA, contentieux et négociation contractuelle.</p>
          </div>

          <div className="consultant-showcase">
            <div className="consultant-stage">
              <div className="profile-orbit" aria-hidden="true" />
              <div className="portrait-depth depth-back" aria-hidden="true" />
              <div className="portrait-depth depth-mid" aria-hidden="true" />
              <div className="portrait-frame">
                <img src="mamadou-bakhoum.jpeg" alt="Mamadou Bakhoum, juriste sénior spécialisé en droit des affaires OHADA" />
              </div>
              <div className="portrait-badge">
                <span>MBC</span>
                <strong>+10 ans</strong>
                <small>D’expertise juridique</small>
              </div>
              <div className="portrait-caption">
                <span>JURISTE SÉNIOR</span>
                <strong>Mamadou BAKHOUM</strong>
                <small>Affaires OHADA • Banque UEMOA • Contentieux</small>
              </div>

              <aside className="consultant-sidecard" aria-label="Approche de consultation MBC">
                <div className="portrait-mark" aria-hidden="true">MB</div>
                <div className="sidecard-heading">
                  <span>APPROCHE MBC</span>
                  <strong>Une consultation en trois temps</strong>
                </div>
                <ol>
                  <li><b>01</b><span><strong>Comprendre</strong><small>Le contexte et l’objectif recherché.</small></span></li>
                  <li><b>02</b><span><strong>Sécuriser</strong><small>Les risques et les options réellement utiles.</small></span></li>
                  <li><b>03</b><span><strong>Décider</strong><small>Une prochaine étape claire et proportionnée.</small></span></li>
                </ol>
              </aside>
            </div>

            <div className="consultant-profile">
              <div className="profile-intro">
                <span className="profile-index">PROFIL / 01</span>
                <div><h3>Mamadou BAKHOUM</h3><p>Juriste Sénior</p></div>
              </div>

              <p className="profile-specialties">Droit des Affaires OHADA <span>|</span> Droit Financier &amp; Bancaire UEMOA <span>|</span> Contentieux des Affaires</p>
              <p className="consultant-lead">Plus de 10 ans d’expérience au service des entreprises et institutions financières.</p>

              <div className="profile-proof-grid" aria-label="Repères professionnels">
                <article><span>01</span><strong>+10 ans</strong><small>D’expertise juridique</small></article>
                <article><span>02</span><strong>Major de promotion</strong><small>Licence &amp; Master</small></article>
                <article><span>03</span><strong>Doctorant en Droit</strong></article>
              </div>

              <div className="consultant-biography">
                <p>Juriste confirmé spécialisé en droit des affaires, major de promotion en Licence comme en Master, Mamadou BAKHOUM met à votre service plus de dix années d’expertise dans le droit des contrats, le droit des sûretés, le recouvrement de créances et la rédaction de conventions bancaires complexes.</p>
                <p>Fort d’une solide maîtrise des réglementations prudentielles UEMOA et de la législation OHADA, il accompagne aussi bien les institutions bancaires que les entreprises dans la sécurisation de leurs opérations, la gestion de leur contentieux et la structuration de leurs contrats. Il est également doctorant en Droit et formateur reconnu auprès de plusieurs universités et institutions professionnelles de la place.</p>
                <p>Il justifie par ailleurs d’une expertise pointue en passation des marchés publics et en montage de contrats de Partenariat Public-Privé (PPP), reconnue par une certification IRCOP en gestion réglementaire de la commande publique. Cette expertise s’accompagne d’une solide maîtrise des techniques de négociation contractuelle, lui permettant d’accompagner ses clients à chaque étape de leurs projets : élaboration des dossiers d’appel d’offres, sécurisation juridique des montages contractuels et défense des intérêts des parties lors des négociations.</p>
              </div>
            </div>

            <div className="consultant-detail-grid">
              <div className="experience-list">
                <article>
                  <span>01</span>
                  <div><h3>Contrats, sûretés et conventions bancaires</h3><p>Sécurisation des engagements, des financements et des opérations complexes.</p></div>
                </article>
                <article>
                  <span>02</span>
                  <div><h3>Marchés publics &amp; Partenariats Public-Privé</h3><p>Expertise reconnue par une certification IRCOP en gestion réglementaire de la commande publique.</p></div>
                </article>
                <article>
                  <span>03</span>
                  <div><h3>Formation &amp; négociation contractuelle</h3><p>Accompagnement des professionnels, défense des intérêts et sécurisation des montages contractuels.</p></div>
                </article>
              </div>

              <div className="consultant-practice-panel">
                <div className="competence-block">
                  <span className="competence-label">DOMAINES DE PRATIQUE</span>
                  <div className="competence-grid">
                    {["Droit des affaires OHADA", "Droit financier & bancaire UEMOA", "Droit des contrats & sûretés", "Recouvrement & contentieux des affaires", "Marchés publics & PPP", "Négociation contractuelle"].map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}
                  </div>
                </div>

                <div className="consultant-actions">
                  <a className="linkedin-link" href="https://www.linkedin.com/in/mamadou-bakhoum-b08107153/" target="_blank" rel="noreferrer">
                    <span aria-hidden="true">in</span> Consulter son parcours LinkedIn <b>↗</b>
                  </a>
                  <a className="consultant-cta" href="#contact">Demander une consultation <span>→</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="article expertise-section" id="expertise">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Domaines</p><h2>Une expertise organisée par enjeu</h2></div>
            <p>Parcourez les domaines ou commencez par le diagnostic si vous ne savez pas encore lequel correspond à votre situation.</p>
          </div>
          <div className="expertise-list">
            {expertises.map(([title, text], index) => (
              <details className="expertise-item" key={title}>
                <summary><span>§{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><i>+</i></summary>
                <p>{text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section" id="engagements">
        <div className="wrap">
          <div className="trust-heading"><p className="eyebrow">Cadre de confiance</p><h2>Professionnel dans la forme.<br />Rigoureux dans le fond.</h2></div>
          <div className="commitment-grid">
            {commitments.map(([title, text], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="article online-section" id="services-ligne">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Prestations à distance</p><h2>Simple à demander, cadré avant paiement</h2></div>
            <p>Choisissez votre zone tarifaire. MBC confirme le périmètre et le montant exact avant de transmettre les instructions de paiement.</p>
          </div>
          <div className="online-layout">
            <div className="pricing-panel">
              <div className="pricing-switch" aria-label="Choisir la zone tarifaire">
                {(Object.keys(onlineServices) as PricingZone[]).map((zone) => (
                  <button
                    type="button"
                    aria-pressed={pricingZone === zone}
                    className={pricingZone === zone ? "active" : ""}
                    onClick={() => setPricingZone(zone)}
                    key={zone}
                  >
                    <span>{zone === "senegal" ? "SN" : "INT"}</span>
                    {onlineServices[zone].label}
                  </button>
                ))}
              </div>
              <div className="pricing-market-heading">
                <span>{onlineServices[pricingZone].heading}</span>
                <p>{onlineServices[pricingZone].note}</p>
              </div>
              <div className="online-services" aria-live="polite">
                {onlineServices[pricingZone].services.map(([title, text, price]) => (
                  <article className="online-service" key={title}><div><h3>{title}</h3><p>{text}</p></div><strong>{price}</strong></article>
                ))}
              </div>
            </div>
            <aside className="payment-ticket">
              <div className="ticket-status"><span>PAIEMENT</span><b>APRÈS VALIDATION</b></div>
              <h3>Une séquence sécurisée</h3>
              <ol>
                <li><b>01</b><span>Demande envoyée</span></li><li><b>02</b><span>Périmètre et tarif confirmés</span></li><li><b>03</b><span>Référence de dossier transmise</span></li><li><b>04</b><span>Instructions de paiement transmises</span></li>
              </ol>
              <a href="#contact">Faire qualifier ma demande <span>→</span></a>
              <p>Ne transmettez aucun paiement avant confirmation de MBC.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <p className="eyebrow">Ouvrir un dossier</p>
            <h2>Donnez-nous l’essentiel. MBC vous aide à structurer la suite.</h2>
            <p className="contact-lead">N’envoyez pas de documents confidentiels à cette étape. Décrivez simplement le contexte et le résultat recherché.</p>
            <div className="contact-reference" aria-live="polite">
              <span>RÉFÉRENCE DE VOTRE DEMANDE</span>
              <strong>{requestReference ?? "GÉNÉRÉE AUTOMATIQUEMENT APRÈS L’ENVOI"}</strong>
              <p>
                {requestReference
                  ? "Conservez cette référence pour vos prochains échanges avec MBC."
                  : "Elle permettra d’identifier votre demande et de suivre vos échanges avec MBC."}
              </p>
              <i className={requestReference ? "active" : ""} />
            </div>
            <dl>
              <div><dt>Téléphone du cabinet</dt><dd><a href="tel:+221770161690">+221 77 016 16 90</a></dd></div>
              <div><dt>E-mail</dt><dd><a href="mailto:mamadou.bakhoum@outlook.com">mamadou.bakhoum@outlook.com</a></dd></div>
              <div><dt>Disponibilité</dt><dd>Clients au Sénégal et à distance <span>Sur rendez-vous</span></dd></div>
            </dl>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            {selectedJourney !== null && <div className="selected-need"><span>Besoin présélectionné</span><strong>{journeys[selectedJourney].title}</strong></div>}
            <div className="form-row">
              <label>Nom complet<input type="text" name="nom" autoComplete="name" required /></label>
              <label>Téléphone<input type="tel" name="telephone" autoComplete="tel" required /></label>
            </div>
            <div className="form-row">
              <label>Vous êtes<select value={clientType} onChange={(event) => setClientType(event.target.value)} name="client"><option>Entreprise / dirigeant</option><option>Responsable RH</option><option>Institution</option><option>Particulier</option></select></label>
              <label>Nature du besoin<select value={subject} onChange={(event) => setSubject(event.target.value)} name="sujet"><option>Consultation juridique</option><option>Assistance juridique</option><option>Relecture de contrat</option><option>Formation personnalisée</option><option>Autre demande</option></select></label>
            </div>
            <div className="form-row">
              <label>Niveau d’urgence<select value={urgency} onChange={(event) => setUrgency(event.target.value)} name="urgence"><option>À planifier</option><option>Cette semaine</option><option>Sous 48 heures</option></select></label>
              <label>Mode de rendez-vous<select value={meetingMode} onChange={(event) => setMeetingMode(event.target.value)} name="rendezvous"><option>Téléphone / visioconférence</option><option>En présentiel</option><option>À définir avec MBC</option></select></label>
            </div>
            <label>Contexte et résultat recherché<textarea name="message" rows={5} placeholder="Expliquez la situation en quelques lignes, sans joindre de document confidentiel." required /></label>
            <label className="consent"><input type="checkbox" required /><span>J’accepte que MBC utilise ces informations uniquement pour qualifier ma demande.</span></label>
            <div className="form-actions">
              <button type="submit" className="submit-btn">Continuer sur WhatsApp <span>→</span></button>
              <button type="button" className="email-btn" onClick={(event) => prepareEmail(event.currentTarget.form)}>Utiliser l’e-mail</button>
            </div>
            <p className={`form-note ${deliveryChannel ? "success" : ""}`} aria-live="polite">
              {deliveryChannel === "whatsapp" && requestReference
                ? `Votre message ${requestReference} est prêt dans WhatsApp. Vérifiez-le, puis appuyez sur Envoyer pour le transmettre à MBC.`
                : deliveryChannel === "email" && requestReference
                  ? `Votre e-mail ${requestReference} est prêt dans votre messagerie. Vérifiez-le, puis envoyez-le à MBC.`
                  : "Aucune donnée n’est stockée sur le site. La transmission s’effectue dans WhatsApp ou votre messagerie."}
            </p>
          </form>
        </div>
      </section>

      <section className="faq-section">
        <div className="wrap faq-layout">
          <div><p className="eyebrow">Questions fréquentes</p><h2>Avant d’ouvrir votre dossier</h2></div>
          <div className="faq-list">
            <details><summary>Dois-je envoyer mes documents immédiatement&nbsp;?<span>+</span></summary><p>Non. Commencez par décrire votre besoin. MBC vous indiquera ensuite les pièces strictement nécessaires et le canal de transmission adapté.</p></details>
            <details><summary>Le premier message vaut-il consultation&nbsp;?<span>+</span></summary><p>Non. Il sert à vérifier la nature du besoin, la disponibilité et le format d’accompagnement pertinent.</p></details>
            <details><summary>Quand dois-je effectuer le paiement&nbsp;?<span>+</span></summary><p>Après confirmation du périmètre, du tarif et de la référence de votre dossier par MBC.</p></details>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div><BrandSeal /><span>© 2026 Mind Business Consulting<br />Conseil • Assistance • Formation</span></div>
          <nav aria-label="Navigation secondaire"><a href="#orientation">Votre besoin</a><a href="#solutions">Solutions</a><a href="#consultant">Le consultant</a><a href="#contact">Contact</a></nav>
          <span>Clients au Sénégal<br />et à distance</span>
        </div>
        <div className="wrap footer-signature">
          <span>Site conçu par</span>
          <a href="https://statureweb.com" target="_blank" rel="noopener noreferrer" aria-label="Découvrir STATURE, conseil et solutions digitales">
            <strong>STATURE</strong>
            <small>Conseil &amp; solutions digitales</small>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </footer>
      <div className="mobile-actions" aria-label="Actions rapides"><a href="tel:+221770161690">Appeler</a><a href="#contact">Ouvrir un dossier</a></div>
    </main>
  );
}
