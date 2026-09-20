import { useState } from "react";

type LessonType =
  | "Grammar"
  | "Reading comprehension"
  | "Vocabulary"
  | "Speaking"
  | "Writing"
  | "Listening";

function App() {
  const [form, setForm] = useState({
    teacher: "",
    school: "",
    className: "",
    unit: "",
    san: "",
    sequence: "",
    title: "",
    lessonType: "Grammar" as LessonType,
    duration: "55 min",
    date: "",
    content: "",
    competence: "",
    transversal: "",
    knowledge: "",
    learningStrategy: "",
    teachingStrategy: "",
    material: "",
  });

  const [generated, setGenerated] = useState(false);

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const generate = () => {
    if (!form.className || !form.title) {
      alert("Veuillez renseigner au moins la classe et le titre.");
      return;
    }

    setGenerated(true);

    setTimeout(() => {
      document.getElementById("fiche")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const printFiche = () => {
    window.print();
  };

  const getActivities = () => {
    switch (form.lessonType) {
      case "Grammar":
        return {
          situation: `L'enseignant présente une situation contextualisée liée à « ${form.title} ».`,
          problem:
            "Les apprenants observent les exemples et identifient le problème linguistique.",
          resolution:
            "Les apprenants analysent les exemples, découvrent la règle et vérifient leurs hypothèses.",
          consolidation:
            "Les apprenants appliquent la règle dans des exercices puis produisent leurs propres phrases.",
        };

      case "Reading comprehension":
        return {
          situation: `L'enseignant introduit le thème « ${form.title} » à partir du titre, d'une image ou d'une question.`,
          problem:
            "Les apprenants anticipent le contenu du texte et identifient les informations à rechercher.",
          resolution:
            "Les apprenants lisent le texte, répondent aux questions et justifient leurs réponses.",
          consolidation:
            "Les apprenants réinvestissent les informations dans une activité orale ou écrite.",
        };

      case "Vocabulary":
        return {
          situation: `L'enseignant présente une situation permettant de faire émerger le vocabulaire de « ${form.title} ».`,
          problem:
            "Les apprenants identifient les mots nouveaux et recherchent leur signification.",
          resolution:
            "Les mots sont expliqués, prononcés, classés et employés dans des phrases.",
          consolidation:
            "Les apprenants réutilisent le vocabulaire dans une nouvelle activité.",
        };

      case "Speaking":
        return {
          situation: `L'enseignant propose une situation de communication portant sur « ${form.title} ».`,
          problem:
            "Les apprenants recherchent les expressions nécessaires pour communiquer.",
          resolution:
            "Les apprenants pratiquent les expressions dans des interactions guidées.",
          consolidation:
            "Les apprenants réalisent une production orale en binômes ou en groupes.",
        };

      case "Writing":
        return {
          situation: `L'enseignant présente une situation d'écriture liée à « ${form.title} ».`,
          problem:
            "Les apprenants identifient les informations et structures nécessaires.",
          resolution:
            "Les apprenants construisent progressivement leur production à partir d'un modèle.",
          consolidation:
            "Les apprenants rédigent, relisent et améliorent leur production.",
        };

      default:
        return {
          situation: `L'enseignant introduit une situation d'écoute liée à « ${form.title} ».`,
          problem:
            "Les apprenants identifient les informations importantes à écouter.",
          resolution:
            "Les apprenants écoutent et réalisent les activités proposées.",
          consolidation:
            "Les apprenants réinvestissent les informations entendues.",
        };
    }
  };

  const activities = getActivities();

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f3f6f8;
          color: #17202a;
        }

        .app {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
        }

        .header {
          background: #123b5d;
          color: white;
          padding: 28px;
          border-radius: 16px;
          margin-bottom: 20px;
        }

        .header h1 {
          margin: 10px 0 8px;
        }

        .badge {
          display: inline-block;
          background: #e8b923;
          color: #17202a;
          padding: 6px 12px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 13px;
        }

        .card {
          background: white;
          padding: 22px;
          border-radius: 14px;
          margin-bottom: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,.08);
        }

        h2 {
          color: #123b5d;
          margin-top: 0;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }

        input,
        select,
        textarea {
          width: 100%;
          padding: 11px;
          border: 1px solid #ccd5dc;
          border-radius: 8px;
          font-size: 15px;
          font-family: inherit;
        }

        textarea {
          min-height: 80px;
          resize: vertical;
        }

        .full {
          grid-column: 1 / -1;
        }

        button {
          border: none;
          border-radius: 9px;
          padding: 13px 20px;
          font-weight: bold;
          cursor: pointer;
          font-size: 15px;
        }

        .generate {
          background: #123b5d;
          color: white;
        }

        .print {
          background: #e8b923;
          color: #17202a;
          margin-top: 20px;
        }

        .fiche {
          background: white;
          padding: 30px;
          border: 1px solid #bbb;
        }

        .fiche-title {
          text-align: center;
          border-bottom: 3px solid #123b5d;
          padding-bottom: 12px;
          margin-bottom: 20px;
        }

        .fiche-title h1 {
          margin: 0;
          font-size: 24px;
        }

        .info-table,
        .flow-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        .info-table td,
        .flow-table td,
        .flow-table th {
          border: 1px solid #555;
          padding: 8px;
          vertical-align: top;
        }

        .info-table td:nth-child(odd) {
          font-weight: bold;
          background: #edf2f5;
          width: 18%;
        }

        .section-title {
          background: #123b5d;
          color: white;
          padding: 8px;
          font-weight: bold;
          margin-top: 18px;
        }

        .flow-table th {
          background: #dfe8ee;
          text-align: center;
        }

        @media (max-width: 700px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .full {
            grid-column: auto;
          }

          .app {
            padding: 10px;
          }

          .fiche {
            padding: 15px;
          }
        }

        @media print {
          body {
            background: white;
          }

          .no-print {
            display: none !important;
          }

          .app {
            max-width: none;
            padding: 0;
          }

          .fiche {
            border: none;
            padding: 0;
          }
        }
      `}</style>

      <div className="app">
        <div className="header no-print">
          <span className="badge">🇧🇯 POUR LES ENSEIGNANTS DU BÉNIN</span>
          <h1>🎓 Assistant Pédagogique</h1>
          <p>
            Création structurée de fiches de préparation d'anglais.
          </p>
        </div>

        <div className="card no-print">
          <h2>📋 Préparer une fiche d'anglais</h2>

          <div className="grid">
            <div>
              <label>Nom de l'enseignant</label>
              <input
                value={form.teacher}
                onChange={(e) => update("teacher", e.target.value)}
              />
            </div>

            <div>
              <label>Établissement</label>
              <input
                value={form.school}
                onChange={(e) => update("school", e.target.value)}
              />
            </div>

            <div>
              <label>Classe *</label>
              <input
                placeholder="Ex : 4e"
                value={form.className}
                onChange={(e) => update("className", e.target.value)}
              />
            </div>

            <div>
              <label>Type de leçon *</label>
              <select
                value={form.lessonType}
                onChange={(e) =>
                  update("lessonType", e.target.value)
                }
              >
                <option>Grammar</option>
                <option>Reading comprehension</option>
                <option>Vocabulary</option>
                <option>Speaking</option>
                <option>Writing</option>
                <option>Listening</option>
              </select>
            </div>

            <div>
              <label>Dossier / Unité n°</label>
              <input
                value={form.unit}
                onChange={(e) => update("unit", e.target.value)}
              />
            </div>

            <div>
              <label>S.A.N. / Séance</label>
              <input
                value={form.san}
                onChange={(e) => update("san", e.target.value)}
              />
            </div>

            <div>
              <label>Séquence</label>
              <input
                value={form.sequence}
                onChange={(e) => update("sequence", e.target.value)}
              />
            </div>

            <div>
              <label>Durée</label>
              <input
                value={form.duration}
                onChange={(e) => update("duration", e.target.value)}
              />
            </div>

            <div>
              <label>Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
              />
            </div>

            <div>
              <label>Titre / Thème *</label>
              <input
                placeholder="Ex : The Simple Future"
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
              />
            </div>

            <div className="full">
              <label>Élément de planification</label>
              <textarea
                value={form.content}
                onChange={(e) => update("content", e.target.value)}
                placeholder="Ex : Grammar — expressing future actions"
              />
            </div>

            <div className="full">
              <label>Compétence disciplinaire</label>
              <textarea
                value={form.competence}
                onChange={(e) => update("competence", e.target.value)}
              />
            </div>

            <div>
              <label>Compétence transversale</label>
              <textarea
                value={form.transversal}
                onChange={(e) => update("transversal", e.target.value)}
              />
            </div>

            <div>
              <label>Connaissances et techniques</label>
              <textarea
                value={form.knowledge}
                onChange={(e) => update("knowledge", e.target.value)}
              />
            </div>

            <div>
              <label>Stratégie d'apprentissage</label>
              <textarea
                value={form.learningStrategy}
                onChange={(e) =>
                  update("learningStrategy", e.target.value)
                }
              />
            </div>

            <div>
              <label>Stratégie d'enseignement / évaluation</label>
              <textarea
                value={form.teachingStrategy}
                onChange={(e) =>
                  update("teachingStrategy", e.target.value)
                }
              />
            </div>

            <div className="full">
              <label>Matériel / Supports</label>
              <textarea
                value={form.material}
                onChange={(e) => update("material", e.target.value)}
                placeholder="Images, textbook, board, flashcards..."
              />
            </div>
          </div>

          <br />

          <button className="generate" onClick={generate}>
            ✨ Générer la fiche
          </button>
        </div>

        {generated && (
          <div id="fiche" className="fiche">
            <div className="fiche-title">
              <h1>FICHE DE PRÉPARATION D'ANGLAIS</h1>
              <p>Assistant Pédagogique — Version Bénin V2</p>
            </div>

            <table className="info-table">
              <tbody>
                <tr>
                  <td>Enseignant</td>
                  <td>{form.teacher || "—"}</td>
                  <td>Établissement</td>
                  <td>{form.school || "—"}</td>
                </tr>

                <tr>
                  <td>Classe</td>
                  <td>{form.className}</td>
                  <td>Durée</td>
                  <td>{form.duration}</td>
                </tr>

                <tr>
                  <td>Dossier / Unité</td>
                  <td>{form.unit || "—"}</td>
                  <td>S.A.N.</td>
                  <td>{form.san || "—"}</td>
                </tr>

                <tr>
                  <td>Séquence</td>
                  <td>{form.sequence || "—"}</td>
                  <td>Date</td>
                  <td>{form.date || "—"}</td>
                </tr>
              </tbody>
            </table>

            <div className="section-title">PLANIFICATION</div>

            <p>
              <strong>Titre :</strong> {form.title}
            </p>

            <p>
              <strong>Type de leçon :</strong> {form.lessonType}
            </p>

            <p>
              <strong>Élément de planification :</strong>{" "}
              {form.content || `Contenu lié à ${form.title}.`}
            </p>

            <p>
              <strong>Compétence disciplinaire :</strong>{" "}
              {form.competence ||
                "À préciser selon le programme et la séance."}
            </p>

            <p>
              <strong>Compétence transversale :</strong>{" "}
              {form.transversal || "À préciser selon la séance."}
            </p>

            <p>
              <strong>Connaissances et techniques :</strong>{" "}
              {form.knowledge || `Notions liées à ${form.title}.`}
            </p>

            <p>
              <strong>Stratégie d'apprentissage :</strong>{" "}
              {form.learningStrategy ||
                "Travail individuel, en binômes et en groupes."}
            </p>

            <p>
              <strong>Stratégie d'enseignement / évaluation :</strong>{" "}
              {form.teachingStrategy ||
                "Observation, questionnement, pratique guidée et évaluation."}
            </p>

            <p>
              <strong>Matériel :</strong>{" "}
              {form.material ||
                "Tableau, manuel et supports de cours."}
            </p>

            <div className="section-title">DÉROULEMENT</div>

            <table className="flow-table">
              <thead>
                <tr>
                  <th>Étapes</th>
                  <th>Consignes / Activités</th>
                  <th>Résultats attendus</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td><strong>Situation</strong></td>
                  <td>{activities.situation}</td>
                  <td>
                    Les apprenants comprennent la situation et identifient
                    le thème.
                  </td>
                </tr>

                <tr>
                  <td><strong>Problème</strong></td>
                  <td>{activities.problem}</td>
                  <td>
                    Les apprenants formulent des hypothèses et identifient
                    la tâche.
                  </td>
                </tr>

                <tr>
                  <td><strong>Résolution</strong></td>
                  <td>{activities.resolution}</td>
                  <td>
                    Les apprenants construisent progressivement la
                    connaissance.
                  </td>
                </tr>

                <tr>
                  <td><strong>Consolidation</strong></td>
                  <td>{activities.consolidation}</td>
                  <td>
                    Les apprenants réinvestissent les acquis.
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="section-title">
              CONTENU / ACTIVITÉS SPÉCIFIQUES
            </div>

            {form.lessonType === "Grammar" && (
              <>
                <p>
                  <strong>A. Usage</strong>
                </p>

                <p>
                  Study of the use of <strong>{form.title}</strong> in
                  meaningful situations.
                </p>

                <p>
                  <strong>B. Form</strong>
                </p>

                <p>
                  Affirmative — Negative — Interrogative
                </p>

                <p>
                  <strong>C. Examples</strong>
                </p>

                <p>
                  Examples adapted to the lesson situation and the
                  vocabulary studied.
                </p>

                <p>
                  <strong>D. Practice</strong>
                </p>

                <ol>
                  <li>Complete the sentences.</li>
                  <li>Change the sentences as requested.</li>
                  <li>Produce your own sentences.</li>
                </ol>

                <p>
                  <strong>E. Production</strong>
                </p>

                <p>
                  Pair work / role play related to the lesson situation.
                </p>
              </>
            )}

            {form.lessonType === "Reading comprehension" && (
              <>
                <p>
                  <strong>A. Pre-reading</strong>
                </p>

                <p>
                  Questions and predictions based on the title, picture or
                  context.
                </p>

                <p>
                  <strong>B. While-reading</strong>
                </p>

                <ul>
                  <li>Read the text.</li>
                  <li>True / False statements.</li>
                  <li>Answer comprehension questions.</li>
                  <li>Justify answers from the text.</li>
                </ul>

                <p>
                  <strong>Expected answers</strong>
                </p>

                <p>
                  Answers prepared according to the selected text.
                </p>

                <p>
                  <strong>C. Post-reading</strong>
                </p>

                <p>
                  Writing or speaking activity based on the reading text.
                </p>
              </>
            )}

            {form.lessonType !== "Grammar" &&
              form.lessonType !== "Reading comprehension" && (
                <>
                  <p>
                    <strong>Activités :</strong> pratique guidée,
                    interaction et réinvestissement liés au thème{" "}
                    <strong>{form.title}</strong>.
                  </p>

                  <p>
                    <strong>Production :</strong> utilisation des acquis
                    dans une situation nouvelle.
                  </p>
                </>
              )}

            <div className="section-title">ÉVALUATION</div>

            <p>
              Vérification de l'atteinte de l'objectif à travers une
              activité individuelle adaptée au type de leçon.
            </p>

            <div className="section-title">DEVOIR / HOMEWORK</div>

            <p>
              Préparer une courte production liée au thème « {form.title} ».
            </p>

            <button className="print no-print" onClick={printFiche}>
              🖨️ Imprimer la fiche
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
