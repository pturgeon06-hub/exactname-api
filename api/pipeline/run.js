export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // (plus tard) Auth par clé API:
   const key = req.headers['x-api-key'];
   if (process.env.API_KEY && key !== process.env.API_KEY) return res.status(401).json({ error: 'Unauthorized' });

  const response = {
    winner: "ExactName",
    runner_up: "Luminaut",
    margin: 3.0,
    confidence: 0.82,
    tie_breakers: ["DISTINCTIVENESS","FR_PHONETICS","SHORTER"],
    rationale: {
      why_fit: [
        "Aligné à la promesse de précision",
        "Prononçable FR/EN, mémorable",
        "Défendable en comité"
      ],
      tone: "Sérieux, moderne",
      phonetics: "3 syllabes régulières",
      linguistics: "Aucune connotation négative FR/EN",
      taglines: [
        "ExactName — Le nom parfait, sans détour.",
        "ExactName — Fin du brainstorm."
      ],
      availability_signals: {
        domains_hint: ".com possiblement pris; .ca souvent ok",
        handles_hint: "IG/TikTok souvent dispo avec mod."
      }
    },
    report: { pdf_url: "https://example.com/report.pdf" }
  };

  return res.status(200).json(response);
}
