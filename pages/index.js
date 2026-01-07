export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1f1f1f",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        HypeLab
      </h1>

      <p style={{ fontSize: "18px", color: "#cccccc", maxWidth: "500px" }}>
        اصنع ترندك قبل غيرك  
        <br />
        اكتشف أفكار ترندات حقيقية من TikTok و Instagram
      </p>

      <div style={{ marginTop: "40px" }}>
        <a
          href="/login"
          style={{
            padding: "14px 30px",
            backgroundColor: "#e10600",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            marginRight: "15px",
          }}
        >
          تسجيل الدخول
        </a>

        <a
          href="/register"
          style={{
            padding: "14px 30px",
            border: "2px solid #e10600",
            color: "#e10600",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          إنشاء حساب
        </a>
      </div>
    </div>
  );
}
