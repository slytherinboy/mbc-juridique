"use client";

import { useMemo, useState, type FormEvent } from "react";

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

const onlineServices = [
  ["Consultation à distance", "30 minutes par téléphone ou visio", "15 000 FCFA"],
  ["Avis juridique écrit", "Question précise, réponse structurée", "20 000 FCFA"],
  ["Relecture de contrat", "Jusqu’à 10 pages, remarques incluses", "25 000 FCFA"],
  ["Formation en ligne", "Module et format adaptés au groupe", "Sur devis"],
];

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
  const [submitted, setSubmitted] = useState(false);

  const reference = useMemo(
    () => selectedJourney === null ? "À CRÉER" : `MBC-ORI-0${selectedJourney + 1}/2026`,
    [selectedJourney],
  );

  function chooseJourney(index: number) {
    setSelectedJourney(index);
    setSubject(journeys[index].subject);
    setClientType(journeys[index].client);
    setSubmitted(false);
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
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
              <a href="tel:+221771513837" className="btn btn-ghost">Parler à un conseiller</a>
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
                <span className="result-reference">Référence provisoire • {reference}</span>
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
            <div><p className="eyebrow">Votre interlocuteur</p><h2>La confiance commence par un professionnel identifié.</h2></div>
            <p>Le conseil gagne en valeur lorsque l’analyse, la recommandation et le suivi sont portés par le même interlocuteur.</p>
          </div>

          <div className="consultant-showcase">
            <div className="consultant-stage">
              <div className="profile-orbit" aria-hidden="true" />
              <div className="portrait-depth depth-back" aria-hidden="true" />
              <div className="portrait-depth depth-mid" aria-hidden="true" />
              <div className="portrait-frame">
                <img src="mamadou-bakhoum.jpeg" alt="Mamadou Bakhoum, consultant juridique et fondateur de Mind Business Consulting" />
              </div>
              <div className="portrait-badge">
                <span>MBC</span>
                <strong>Depuis 2017</strong>
                <small>Conseil • Assistance • Formation</small>
              </div>
              <div className="portrait-caption">
                <span>CONSULTANT PRINCIPAL</span>
                <strong>Mamadou Bakhoum</strong>
                <small>Fondateur de Mind Business Consulting</small>
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
                <div><h3>Mamadou Bakhoum</h3><p>Consultant juridique • Fondateur de MBC</p></div>
              </div>
              <p className="consultant-lead">Mamadou Bakhoum conduit personnellement les consultations MBC. Sa pratique associe analyse juridique, compréhension des enjeux opérationnels et restitution claire, pour aider chaque client à mesurer ses risques et décider de la prochaine action utile.</p>

              <div className="profile-proof-grid" aria-label="Repères professionnels">
                <article><span>01</span><strong>Depuis 2017</strong><small>Direction de MBC</small></article>
                <article><span>02</span><strong>Conseil &amp; formation</strong><small>Une pratique complète</small></article>
                <article><span>03</span><strong>Suivi direct</strong><small>Un interlocuteur identifié</small></article>
              </div>

              <div className="experience-list">
              <article>
                <span>01</span>
                <div><h3>Fondateur et dirigeant de MBC depuis 2017</h3><p>Une pratique consacrée au conseil, à l’assistance juridique et à la formation des professionnels.</p></div>
              </article>
              <article>
                <span>02</span>
                <div><h3>Expérience en cabinet d’affaires</h3><p>Un parcours comprenant une expérience au sein de GENI &amp; KEBE, cabinet membre de DLA Piper Africa.</p></div>
              </article>
              <article>
                <span>03</span>
                <div><h3>Consultant et formateur</h3><p>Des interventions professionnelles sur la négociation contractuelle, la prévention des contentieux et la sécurisation des opérations.</p></div>
              </article>
              </div>

              <div className="competence-block">
                <span className="competence-label">DOMAINES DE PRATIQUE</span>
                <div className="competence-grid">
                  {["Droit des affaires", "Procédures civiles & commerciales", "Recouvrement de créances", "Droit immobilier", "Négociation contractuelle", "Formation professionnelle"].map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}
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
            <p>Les tarifs sont indicatifs. MBC confirme la prestation et transmet les instructions de paiement après validation du dossier.</p>
          </div>
          <div className="online-layout">
            <div className="online-services">
              {onlineServices.map(([title, text, price]) => (
                <article className="online-service" key={title}><div><h3>{title}</h3><p>{text}</p></div><strong>{price}</strong></article>
              ))}
            </div>
            <aside className="payment-ticket">
              <div className="ticket-status"><span>PAIEMENT</span><b>APRÈS VALIDATION</b></div>
              <h3>Une séquence sécurisée</h3>
              <ol>
                <li><b>01</b><span>Demande envoyée</span></li><li><b>02</b><span>Périmètre et tarif confirmés</span></li><li><b>03</b><span>Référence de dossier transmise</span></li><li><b>04</b><span>Paiement Wave ou Orange Money</span></li>
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
            <div className="contact-reference"><span>RÉFÉRENCE PROVISOIRE</span><strong>{reference}</strong><i className={selectedJourney !== null ? "active" : ""} /></div>
            <dl>
              <div><dt>Téléphone</dt><dd><a href="tel:+221771513837">+221 77 151 38 37</a></dd></div>
              <div><dt>E-mail</dt><dd><a href="mailto:contact@mbc-conseil.sn">contact@mbc-conseil.sn</a></dd></div>
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
            <button type="submit" className="submit-btn">Transmettre la demande <span>→</span></button>
            <p className={`form-note ${submitted ? "success" : ""}`} aria-live="polite">{submitted ? `Demande préparée sous la référence ${reference}. La connexion à la messagerie MBC sera activée dans la version finale.` : "Maquette interactive — aucun paiement ni document confidentiel n’est demandé ici."}</p>
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
      </footer>
      <div className="mobile-actions" aria-label="Actions rapides"><a href="tel:+221771513837">Appeler</a><a href="#contact">Ouvrir un dossier</a></div>
    </main>
  );
}
