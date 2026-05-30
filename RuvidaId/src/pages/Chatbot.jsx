import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { chatbotConfig } from "../data/data";

// ChatbotPage 
// Nanti jika backend sendiri sudah siap, cukup ganti:
// fungsi sendMessage() agar hit endpoint /api/chatbot
// dan hapus API_KEY dari frontend (pindah ke backend)

const GROQ_API_KEY = "gsk_mohon-Tuhan-untuk-kali-ini-saja-beri-aku-kekuatan-tuk-menatap-matanya";

function getCurrentTime() {
  return new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function extractQuickReplies(text) {
  if (
    text.toLowerCase().includes("tambah") ||
    text.toLowerCase().includes("fitur")
  ) {
    return [
      "Tambah reservasi meja",
      "Integrasi pembayaran",
      "Manajemen stok bahan",
      "Lainnya",
    ];
  }
  if (
    text.toLowerCase().includes("estimasi") ||
    text.toLowerCase().includes("biaya")
  ) {
    return ["Ya, buatkan estimasi", "Nanti dulu"];
  }
  return [];
}

export default function Chatbot() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Halo! 👋\nSaya Asisten Ruvida. Ceritakan kebutuhan aplikasi yang Anda butuhkan, nanti saya bantu rancang solusi terbaik.",
      time: getCurrentTime(),
      quickReplies: chatbotConfig.quickRepliesAwal,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text) {
    if (!text.trim() || loading) return;

    const userMsg = { role: "user", content: text, time: getCurrentTime() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      // ── Format History Sesuai Standar OpenAI / Groq ────────────────
      // Groq menggunakan array objek dengan properti 'role' dan 'content'
      const historyForGroq = newMessages.map((m) => ({
        role: m.role, // "user" atau "assistant"
        content: m.content,
      }));

      // Masukkan system prompt di awal array jika ada
      const finalMessages = [
        {
          role: "system",
          content:
            chatbotConfig.systemPrompt ||
            "Kamu adalah asisten AI yang berguna.",
        },
        ...historyForGroq,
      ];

      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            // Ubah bagian ini dari 'llama3-8b-8192' menjadi model yang aktif:
            model: "llama-3.3-70b-versatile",
            messages: finalMessages,
            max_tokens: 600,
            temperature: 0.7,
          }),
        },
      );

      // Proteksi jika HTTP status bukan 2xx
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error?.message || "Terjadi kesalahan pada API",
        );
      }

      const data = await response.json();

      // Format response Groq mengikuti struktur OpenAI
      const reply =
        data.choices?.[0]?.message?.content ||
        "Maaf, ada kesalahan. Coba lagi ya.";

      setMessages((prev) => [
        ...prev,
        ...[
          {
            role: "assistant",
            content: reply,
            time: getCurrentTime(),
            quickReplies: extractQuickReplies(reply),
          },
        ],
      ]);
    } catch (error) {
      console.error("Chatbot Error:", error); // Membantu debugging di console
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Maaf, koneksi bermasalah atau API Key tidak valid. Silakan coba lagi.",
          time: getCurrentTime(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Header Dark ── */}
      <div className="bg-[#0f2e2b] pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate("/katalog")}
            className="flex items-center gap-2 text-[#2A8B85] text-sm font-medium mb-6 hover:text-[#4db6ac] transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Katalog
          </button>

          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-white text-3xl font-extrabold">
              Custom Aplikasi
            </h1>
            <span className="flex items-center gap-1.5 bg-[#2A8B85]/20 border border-[#2A8B85]/40 text-[#4db6ac] text-xs font-semibold px-3 py-1.5 rounded-full">
              🤖 AI Assistant
            </span>
          </div>
          <p className="text-white/50 text-sm max-w-lg">
            Ceritakan kebutuhan bisnis Anda, kami akan membantu merancang solusi
            aplikasi & website yang tepat.
          </p>
        </div>
      </div>

      {/* ── Main Area ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-4">
            {/* Bot Info */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#e8f5f4] flex items-center justify-center text-3xl mx-auto mb-3">
                🤖
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-1">
                Asisten Ruvida
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Siap membantu Anda membuat aplikasi sesuai kebutuhan
              </p>
              <div className="mt-4 text-left border-t border-gray-50 pt-4">
                <p className="text-xs font-semibold text-gray-500 mb-2">
                  Informasi
                </p>
                {[
                  "Akan merespon sesuai kebutuhan Anda",
                  "Estimasi & Penawaran akan diberikan",
                  "Gratis konsultasi tanpa komitmen",
                ].map((info) => (
                  <div key={info} className="flex items-start gap-2 mb-2">
                    <span className="text-[#2A8B85] text-xs mt-0.5">•</span>
                    <span className="text-gray-500 text-xs">{info}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contoh Kebutuhan */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span>💡</span>
                <p className="text-xs font-semibold text-gray-600">
                  Contoh Kebutuhan
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {chatbotConfig.contohKebutuhan.map((contoh) => (
                  <button
                    key={contoh}
                    onClick={() => sendMessage(contoh)}
                    className="text-left text-xs text-gray-500 hover:text-[#2A8B85] hover:bg-[#f0faf9] px-3 py-2 rounded-lg transition-colors"
                  >
                    {contoh}
                  </button>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎧</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    Butuh bantuan?
                  </p>
                  <p className="text-gray-400 text-xs">
                    Tim kami siap membantu Anda 24/7
                  </p>
                </div>
              </div>
              <button className="w-full border border-[#2A8B85] text-[#2A8B85] hover:bg-[#f0faf9] text-sm font-semibold py-2 rounded-xl transition-colors">
                Hubungi Support
              </button>
            </div>
          </div>

          {/* ── Chat Box ── */}
          <div
            className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col"
            style={{ minHeight: "600px" }}
          >
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              <div className="text-center">
                <span className="bg-gray-100 text-gray-400 text-xs px-3 py-1 rounded-full">
                  Hari ini
                </span>
              </div>

              {messages.map((msg, idx) => (
                <div key={idx}>
                  <div
                    className={`flex gap-3 ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-[#e8f5f4] flex items-center justify-center text-base flex-shrink-0 mt-1">
                        🤖
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] flex flex-col gap-1 ${
                        msg.role === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                          msg.role === "user"
                            ? "bg-gray-100 text-gray-800 rounded-br-sm"
                            : "bg-[#f0faf9] border border-[#2A8B85]/15 text-gray-700 rounded-bl-sm"
                        }`}
                      >
                        {msg.content}
                      </div>
                      <span className="text-gray-300 text-xs px-1">
                        {msg.time}
                        {msg.role === "user" && (
                          <span className="ml-1 text-[#2A8B85]">✓✓</span>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Quick Replies */}
                  {msg.role === "assistant" && msg.quickReplies?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 ml-11">
                      {msg.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => sendMessage(qr)}
                          className="text-xs border border-gray-200 text-gray-600 hover:border-[#2A8B85] hover:text-[#2A8B85] px-3 py-1.5 rounded-full transition-colors"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Loading dots */}
              {loading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-[#e8f5f4] flex items-center justify-center text-base flex-shrink-0">
                    🤖
                  </div>
                  <div className="bg-[#f0faf9] border border-[#2A8B85]/15 px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1 items-center h-5">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-2 h-2 bg-[#2A8B85] rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-100 p-4">
              <div className="flex gap-3 items-end">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ketik kebutuhan aplikasi Anda di sini..."
                  rows={1}
                  className="flex-1 resize-none border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2A8B85] transition-colors"
                  style={{ maxHeight: "120px" }}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={loading || !input.trim()}
                  className="w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-2 text-center">
                Asisten AI dapat membuat kesalahan. Pastikan untuk memeriksa
                kembali informasi penting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
