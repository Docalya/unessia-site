import { useEffect, useState } from "react";

const SUPABASE_URL = "https://kiijennbanzhqrygjesx.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpaWplbm5iYW56aHFyeWdqZXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5OTEyNDEsImV4cCI6MjA5NjU2NzI0MX0.Tm4UEReSKIGqeHE6HBWKISqrszKatY6YUvXWcmXeFjI";

export default function Unsubscribe() {
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");
  const [message, setMessage] = useState("Désinscription en cours…");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const u = params.get("u");
    const t = params.get("t");

    if (!u || !t) {
      setStatus("error");
      setMessage("Lien de désinscription invalide.");
      return;
    }

    fetch(`${SUPABASE_URL}/functions/v1/make-server-f4a7046f/unsubscribe?u=${encodeURIComponent(u)}&t=${encodeURIComponent(t)}`, {
      headers: { Authorization: `Bearer ${ANON_KEY}` },
    })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          setStatus("ok");
          setMessage("Vous êtes désinscrit du récap hebdomadaire. Vous pouvez le réactiver à tout moment dans les préférences de notification de votre espace Unessia.");
        } else {
          setStatus("error");
          setMessage(data.error ?? "Ce lien n'est pas valide ou a expiré.");
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Une erreur est survenue. Réessayez plus tard.");
      });
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#FBF7EF", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div style={{ maxWidth: 460, width: "100%", background: "#FFFFFF", borderRadius: 20, border: "1px solid #EFE5D8", padding: "40px 32px", textAlign: "center" }}>
        <img src="/logo-unessia.png" width={44} height={44} alt="Unessia" style={{ display: "inline-block" }} />
        <div style={{ fontSize: 24, letterSpacing: 5, fontWeight: 600, marginTop: 12, color: "#2F302F" }}>UNESSIA</div>
        <div style={{ fontSize: 40, margin: "24px 0 8px" }}>
          {status === "loading" ? "⏳" : status === "ok" ? "✅" : "⚠️"}
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "#444", margin: 0 }}>{message}</p>
        <a href="https://app.unessia.fr" style={{ display: "inline-block", marginTop: 24, background: "#B98B53", color: "#FFFFFF", textDecoration: "none", padding: "13px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700 }}>
          Retour à Unessia
        </a>
      </div>
    </div>
  );
}