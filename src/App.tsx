import { useMemo, useState } from "react";
import {
  class6e,
  type Domain,
  type LearningSituation,
  type SequenceData,
  type LessonData,
} from "./data/curriculum6e";

const domainLabels: Record<Domain, string> = {
  Vocabulary: "Vocabulaire",
  Structure: "Structure",
  Function: "Function",
  Reading: "Reading",
  Writing: "Writing",
  Speaking: "Speaking",
  Listening: "Listening",
};

const strategyLabels: Record<string, string> = {
  IW: "IW — Individual Work",
  PW: "PW — Pair Work",
  CW: "CW — Collective Work",
  GW: "GW — Group Work",
};

function App() {
  const [selectedLS, setSelectedLS] = useState("");
  const [selectedSequence, setSelectedSequence] = useState("");
  const [selectedLesson, setSelectedLesson] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<Domain | "">("");
  const [selectedNotion, setSelectedNotion] = useState("");
  const [teacher, setTeacher] = useState("");
  const [school, setSchool] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [generated, setGenerated] = useState(false);

  const learningSituation: LearningSituation | undefined = useMemo(
    () => class6e.learningSituations.find((item) => item.id === selectedLS),
    [selectedLS]
  );

  const sequence: SequenceData | undefined = useMemo(
    () =>
      learningSituation?.sequences.find(
        (item) => item.id === selectedSequence
      ),
    [learningSituation, selectedSequence]
  );

  const lesson: LessonData | undefined = useMemo(
    () =>
      sequence?.lessons.find((item) => item.id === selectedLesson),
    [sequence, selectedLesson]
  );

  const domains = lesson?.domains ?? [];
  const notions = lesson?.notions ?? [];

  const resetFromLS = (value: string) => {
    setSelectedLS(value);
    setSelectedSequence("");
    setSelectedLesson("");
    setSelectedDomain("");
    setSelectedNotion("");
    setGenerated(false);
  };

  const resetFromSequence = (value: string) => {
    setSelectedSequence(value);
    setSelectedLesson("");
    setSelectedDomain("");
    setSelectedNotion("");
    setGenerated(false);
  };

  const resetFromLesson = (value: string) => {
    setSelectedLesson(value);
    setSelectedDomain("");
    setSelectedNotion("");
    setGenerated(false);
  };

  const resetFromDomain = (value: Domain | "") => {
    setSelectedDomain(value);
    setSelectedNotion("");
    setGenerated(false);
  };

  const canGenerate =
    Boolean(learningSituation) &&
    Boolean(sequence) &&
    Boolean(lesson) &&
    Boolean(selectedDomain) &&
    Boolean(selectedNotion);

  const generate = () => {
    if (!canGenerate) return;
    setGenerated(true);

    setTimeout(() => {
      document
        .getElementById("fiche")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const printFiche = () => {
    window.print();
  };


  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #eef3f5;
          color: #172126;
        }

        button,
        select,
        input {
          font: inherit;
        }

        .app {
          min-height: 100vh;
        }

        .hero {
          background: linear-gradient(135deg, #087f5b, #075e45);
          color: white;
          padding: 30px 18px 34px;
          text-align: center;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(28px, 7vw, 44px);
        }

        .flag {
          font-size: 34px;
          margin-right: 8px;
        }

        .hero p {
          margin: 12px auto 0;
          max-width: 700px;
          font-size: 18px;
          line-height: 1.5;
        }

        .container {
          width: min(1100px, calc(100% - 28px));
          margin: 26px auto 50px;
        }

        .card {
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 8px 30px rgba(0,0,0,.08);
          margin-bottom: 24px;
        }

        .card h2 {
          color: #075e45;
          margin-top: 0;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field.full {
          grid-column: 1 / -1;
        }

        label {
          font-weight: 700;
          color: #172126;
        }

        input,
        select {
          width: 100%;
          min-height: 52px;
          border: 2px solid #dbe2e5;
          border-radius: 12px;
          padding: 10px 14px;
          background: white;
          color: #172126;
          outline: none;
        }

        input:focus,
        select:focus {
          border-color: #087f5b;
        }

        .hint {
          color: #68757b;
          font-size: 14px;
          line-height: 1.4;
        }

        .actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .btn {
          border: 0;
          border-radius: 12px;
          padding: 14px 20px;
          font-weight: 700;
          cursor: pointer;
        }

        .btn-primary {
          background: #087f5b;
          color: white;
        }

        .btn-secondary {
          background: #e8f1ee;
          color: #075e45;
        }

        .btn:disabled {
          opacity: .45;
          cursor: not-allowed;
        }

        .status {
          margin-top: 16px;
          padding: 14px;
          border-radius: 12px;
          background: #f4f7f8;
          color: #526067;
        }

        .fiche {
          background: white;
          padding: 28px;
          box-shadow: 0 8px 30px rgba(0,0,0,.08);
        }

        .fiche-title {
          text-align: center;
          border-bottom: 3px solid #075e45;
          padding-bottom: 16px;
          margin-bottom: 18px;
        }

        .fiche-title h1 {
          margin: 0;
          color: #075e45;
          font-size: 26px;
        }

        .fiche-title p {
          margin: 6px 0 0;
          color: #526067;
        }

        .section-title {
          background: #075e45;
          color: white;
          padding: 10px 12px;
          margin: 22px 0 0;
          font-size: 16px;
          font-weight: 700;
        }

        .info-table,
        .planning-table,
        .process-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 12px;
        }

        .info-table td,
        .planning-table td,
        .planning-table th,
        .process-table td,
        .process-table th {
          border: 1px solid #9aa7ac;
          padding: 9px;
          vertical-align: top;
          line-height: 1.4;
        }

        .info-table td:first-child,
        .planning-table td:first-child {
          font-weight: 700;
          width: 24%;
          background: #f1f5f4;
        }

        .process-wrapper {
          overflow-x: auto;
        }

        .process-table {
          min-width: 900px;
        }

        .process-table th {
          background: #e3ece9;
          color: #17362d;
          font-weight: 700;
          text-align: center;
        }

        .activity-title {
          font-weight: 700;
          color: #075e45;
        }

        .subsection {
          margin-top: 20px;
        }

        .subsection h3 {
          margin: 0 0 8px;
          color: #075e45;
          font-size: 18px;
        }

        .box {
          border: 1px solid #b8c4c8;
          border-radius: 8px;
          padding: 12px;
          min-height: 55px;
          white-space: pre-line;
        }

        .print-actions {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin: 20px 0;
        }

        .footer-note {
          text-align: center;
          color: #68757b;
          font-size: 13px;
          margin-top: 30px;
        }

        @media (max-width: 700px) {
          .container {
            width: min(100% - 16px, 1100px);
          }

          .card {
            padding: 17px;
            border-radius: 16px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .field.full {
            grid-column: auto;
          }

          .fiche {
            padding: 14px;
          }

          .fiche-title h1 {
            font-size: 21px;
          }

          .info-table td {
            display: block;
            width: 100% !important;
          }

          .info-table tr {
            display: block;
            margin-bottom: 8px;
          }
        }

        @media print {
          body {
            background: white;
          }

          .no-print,
          .hero,
          .setup,
          .print-actions {
            display: none !important;
          }

          .container {
            width: 100%;
            margin: 0;
          }

          .fiche {
            box-shadow: none;
            padding: 0;
          }

          .section-title {
            break-after: avoid;
          }

          .process-table {
            min-width: 0;
            font-size: 10px;
          }

          .process-table th,
          .process-table td {
            padding: 6px;
          }

          @page {
            size: A4 portrait;
            margin: 10mm;
          }
        }
      `}</style>

      <div className="app">
        <header className="hero no-print">
          <h1>
            <span className="flag">🇧🇯</span>
            Assistant Pédagogique
          </h1>
          <p>
            Préparer une fiche de cours d'anglais — Version Bénin V3.1
          </p>
        </header>

        <main className="container">
          <section className="card setup no-print">
            <h2>1. Préparer une séance</h2>

            <div className="grid">
              <div className="field">
                <label>Classe</label>
                <select value="6e" disabled>
                  <option value="6e">6ème</option>
                </select>
                <div className="hint">
                  La V3 commence avec la 6ème.
                </div>
              </div>

              <div className="field">
                <label>Enseignant</label>
                <input
                  value={teacher}
                  onChange={(e) => setTeacher(e.target.value)}
                  placeholder="Nom et prénom"
                />
              </div>

              <div className="field">
                <label>Établissement</label>
                <input
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="Nom de l'établissement"
                />
              </div>

              <div className="field">
                <label>Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="field full">
                <label>Learning Situation</label>
                <select
                  value={selectedLS}
                  onChange={(e) => resetFromLS(e.target.value)}
                >
                  <option value="">— Choisir —</option>
                  {class6e.learningSituations.map((ls) => (
                    <option key={ls.id} value={ls.id}>
                      {ls.id.toUpperCase()} — {ls.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field full">
                <label>Séquence</label>
                <select
                  value={selectedSequence}
                  disabled={!learningSituation}
                  onChange={(e) => resetFromSequence(e.target.value)}
                >
                  <option value="">— Choisir —</option>
                  {learningSituation?.sequences.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field full">
                <label>Leçon / séance</label>
                <select
                  value={selectedLesson}
                  disabled={!sequence}
                  onChange={(e) => resetFromLesson(e.target.value)}
                >
                  <option value="">— Choisir —</option>
                  {sequence?.lessons.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label>Domaine</label>
                <select
                  value={selectedDomain}
                  disabled={!lesson}
                  onChange={(e) =>
                    resetFromDomain(e.target.value as Domain | "")
                  }
                >
                  <option value="">— Choisir —</option>
                  {domains.map((domain) => (
                    <option key={domain} value={domain}>
                      {domainLabels[domain]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label>Notion / thème</label>
                <select
                  value={selectedNotion}
                  disabled={!lesson}
                  onChange={(e) => {
                    setSelectedNotion(e.target.value);
                    setGenerated(false);
                  }}
                >
                  <option value="">— Choisir —</option>
                  {notions.map((notion) => (
                    <option key={notion} value={notion}>
                      {notion}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="actions">
              <button
                className="btn btn-primary"
                disabled={!canGenerate}
                onClick={generate}
              >
                ✨ Préparer la séance
              </button>
            </div>

            {!canGenerate && (
              <div className="status">
                Choisis une Learning Situation, une séquence, une leçon,
                un domaine et une notion pour préparer la fiche.
              </div>
            )}
          </section>

          {generated && lesson && learningSituation && sequence && (
            <>
              <div className="print-actions no-print">
                <button
                  className="btn btn-primary"
                  onClick={printFiche}
                >
                  🖨️ Imprimer / Enregistrer en PDF
                </button>
              </div>

              <section className="fiche" id="fiche">
                <div className="fiche-title">
                  <h1>FICHE DE PRÉPARATION D'ANGLAIS</h1>
                  <p>Assistant Pédagogique — Version Bénin V3.1</p>
                </div>

                <div className="section-title">
                  IDENTIFICATION
                </div>

                <table className="info-table">
                  <tbody>
                    <tr>
                      <td>Enseignant</td>
                      <td>{teacher || "................................................"}</td>
                    </tr>
                    <tr>
                      <td>Établissement</td>
                      <td>{school || "................................................"}</td>
                    </tr>
                    <tr>
                      <td>Classe</td>
                      <td>6ème</td>
                    </tr>
                    <tr>
                      <td>Learning Situation</td>
                      <td>
                        {learningSituation.id.toUpperCase()} —{" "}
                        {learningSituation.title}
                      </td>
                    </tr>
                    <tr>
                      <td>Séquence</td>
                      <td>
                        {sequence.id} — {sequence.title}
                      </td>
                    </tr>
                    <tr>
                      <td>Titre</td>
                      <td>{lesson.title}</td>
                    </tr>
                    <tr>
                      <td>Domaine</td>
                      <td>
                        {selectedDomain
                          ? domainLabels[selectedDomain]
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Notion</td>
                      <td>{selectedNotion}</td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>{date}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="section-title">
                  ÉLÉMENT DE PLANIFICATION
                </div>

                <table className="planning-table">
                  <tbody>
                    <tr>
                      <td>Objectif</td>
                      <td>{lesson.objective}</td>
                    </tr>
                    <tr>
                      <td>Contenu de formation</td>
                      <td>
                        {lesson.content.length > 0
                          ? lesson.content.map((item) => (
                              <div key={item}>• {item}</div>
                            ))
                          : "À compléter par l'enseignant."}
                      </td>
                    </tr>
                    <tr>
                      <td>Compétences disciplinaires</td>
                      <td>
                        {Array.from(
                          new Set(
                            lesson.activities.flatMap(
                              (activity) => activity.competences
                            )
                          )
                        ).join(", ") || "À compléter."}
                      </td>
                    </tr>
                    <tr>
                      <td>Compétences transversales</td>
                      <td>
                        CTD2, CD1, CD3 — selon les activités sélectionnées.
                      </td>
                    </tr>
                    <tr>
                      <td>Connaissances et techniques</td>
                      <td>
                        {lesson.notions.join(", ")}
                      </td>
                    </tr>
                    <tr>
                      <td>Stratégie objet d'apprentissage</td>
                      <td>
                        {Array.from(
                          new Set(
                            lesson.activities.flatMap(
                              (activity) => activity.strategies
                            )
                          )
                        )
                          .map(
                            (strategy) =>
                              strategyLabels[strategy] || strategy
                          )
                          .join(", ") || "À compléter."}
                      </td>
                    </tr>
                    <tr>
                      <td>Stratégie d'enseignement / évaluation</td>
                      <td>
                        Travail individuel, travail en binôme,
                        travail collectif ou travail de groupe selon
                        l'activité.
                      </td>
                    </tr>
                    <tr>
                      <td>Matériel</td>
                      <td>
                        Tableau, manuel, images/supports de cours et
                        matériel pédagogique disponible.
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="section-title">
                  DÉROULEMENT
                </div>

                <div className="process-wrapper">
                  <table className="process-table">
                    <thead>
                      <tr>
                        <th>Activités</th>
                        <th>Teaching process</th>
                        <th>Learning process</th>
                        <th>
                          Strategies and competences
                        </th>
                        <th>Suggested answers</th>
                        <th>Observations</th>
                      </tr>
                    </thead>

                    <tbody>
                      {lesson.activities.map((activity, index) => (
                        <tr key={`${activity.title}-${index}`}>
                          <td>
                            <div className="activity-title">
                              {activity.title}
                            </div>
                          </td>

                          <td>
                            <textarea
                              className="editable-cell"
                              defaultValue={activity.teacher}
                              rows={4}
                              aria-label="Teaching process"
                            />
                          </td>

                          <td>
                            <textarea
                              className="editable-cell"
                              defaultValue={activity.learner}
                              rows={4}
                              aria-label="Learning process"
                            />
                          </td>

                          <td>
                            <strong>Stratégies :</strong>
                            <br />
                            {activity.strategies
                              .map(
                                (item) =>
                                  strategyLabels[item] || item
                              )
                              .join(", ")}
                            <br />
                            <br />
                            <strong>Compétences :</strong>
                            <br />
                            {activity.competences.join(", ")}
                          </td>

                          <td>
                            <textarea
                              className="editable-cell"
                              defaultValue={activity.expectedAnswers?.join("\n") || ""}
                              rows={4}
                              aria-label="Suggested answers"
                            />
                          </td>

                          <td>
                            <textarea
                              className="editable-cell"
                              defaultValue={activity.observations?.join("\n") || ""}
                              rows={4}
                              aria-label="Observations"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="subsection">
                  <h3>RÉPONSES ATTENDUES</h3>
                  <div className="box">
                    {lesson.activities.some(
                      (activity) =>
                        activity.expectedAnswers &&
                        activity.expectedAnswers.length > 0
                    )
                      ? lesson.activities
                          .filter(
                            (activity) =>
                              activity.expectedAnswers &&
                              activity.expectedAnswers.length > 0
                          )
                          .map(
                            (activity) =>
                              `${activity.title} : ${activity.expectedAnswers!.join(
                                " "
                              )}`
                          )
                          .join("\n")
                      : "Les réponses attendues seront ajoutées ou adaptées par l'enseignant."}
                  </div>
                </div>

                <div className="subsection">
                  <h3>OBSERVATIONS</h3>
                  <div className="box">
                    {lesson.activities.some(
                      (activity) =>
                        activity.observations &&
                        activity.observations.length > 0
                    )
                      ? lesson.activities
                          .filter(
                            (activity) =>
                              activity.observations &&
                              activity.observations.length > 0
                          )
                          .map(
                            (activity) =>
                              `${activity.title} : ${activity.observations!.join(
                                " "
                              )}`
                          )
                          .join("\n")
                      : "Zone réservée aux observations de l'enseignant."}
                  </div>
                </div>

                <div className="footer-note">
                  Fiche générée à partir du curriculum 6ème intégré
                  dans Assistant Pédagogique.
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
