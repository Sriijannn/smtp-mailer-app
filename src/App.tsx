import React, { useState } from "react";
import axios from "axios";
import EmailStatusList from "./components/EmailStatusList";

interface EmailStatus {
  email: string;
  status: "pending" | "success" | "error";
}

const App: React.FC = () => {
  const [gmailUser, setGmailUser] = useState("");
  const [appPassword, setAppPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [csvInput, setCsvInput] = useState("");
  const [emailStatuses, setEmailStatuses] = useState<EmailStatus[]>([]);
  const [sending, setSending] = useState(false);

  const sendEmails = async () => {
    const lines = csvInput.trim().split("\n");
    // CSV format: email, optional greeting text
    const emails = lines.map((line) => {
      const parts = line.split(",");
      return { email: parts[0].trim(), greeting: parts[1]?.trim() || "" };
    });

    setEmailStatuses(
      emails.map((e) => ({ email: e.email, status: "pending" }))
    );
    setSending(true);

    for (const { email, greeting } of emails) {
      try {
        // Compose final email body per recipient
        const finalBody = greeting ? `${greeting}\n\n${body}` : body;
        // https://smtp-app-backend.onrender.com
        await axios.post("https://smtp-app-backend.onrender.com/send-emails", {
          gmail_user: gmailUser,
          gmail_app_password: appPassword,
          to_email: email,
          subject,
          content: finalBody,
        });

        setEmailStatuses((prev) =>
          prev.map((es) =>
            es.email === email ? { ...es, status: "success" } : es
          )
        );
      } catch (error) {
        console.error("Error sending email to", email, error);
        setEmailStatuses((prev) =>
          prev.map((es) =>
            es.email === email ? { ...es, status: "error" } : es
          )
        );
      }
    }

    setSending(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-white to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-indigo-700 text-center mb-8 select-none">
          SMTP Mail Sender
        </h1>

        <label
          className="block text-gray-700 font-medium mb-1"
          htmlFor="gmailUser"
        >
          Gmail Address
        </label>
        <input
          id="gmailUser"
          type="email"
          className="w-full p-3 rounded-xl border border-indigo-300 mb-4 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          placeholder="your.email@gmail.com"
          value={gmailUser}
          onChange={(e) => setGmailUser(e.target.value)}
          disabled={sending}
        />

        <label
          className="block text-gray-700 font-medium mb-1"
          htmlFor="appPassword"
        >
          Gmail App Password
        </label>
        <input
          id="appPassword"
          type="password"
          className="w-full p-3 rounded-xl border border-indigo-300 mb-4 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          placeholder="Google App Password"
          value={appPassword}
          onChange={(e) => setAppPassword(e.target.value)}
          disabled={sending}
        />

        <label
          className="block text-gray-700 font-medium mb-1"
          htmlFor="subject"
        >
          Email Subject
        </label>
        <input
          id="subject"
          type="text"
          className="w-full p-3 rounded-xl border border-indigo-300 mb-4 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          placeholder="Subject of the email"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={sending}
        />

        <label className="block text-gray-700 font-medium mb-1" htmlFor="body">
          Email Body (common for all recipients)
        </label>
        <textarea
          id="body"
          className="w-full p-3 rounded-xl border border-indigo-300 mb-4 resize-none focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          rows={5}
          placeholder="Write your email message here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          disabled={sending}
        />

        <label
          htmlFor="csvInput"
          className="block text-gray-700 font-medium mb-1"
        >
          Recipient Emails (one per line)
          <span className="block text-sm text-gray-400">
            Format: <code>email@example.com, Optional greeting text</code>
          </span>
        </label>
        <textarea
          id="csvInput"
          className="w-full h-40 p-3 border border-indigo-300 rounded-xl resize-none
            focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          placeholder="john@example.com, Hello John&#10;jane@example.com, Hi Jane"
          value={csvInput}
          onChange={(e) => setCsvInput(e.target.value)}
          disabled={sending}
          spellCheck={false}
        />

        <button
          onClick={sendEmails}
          disabled={
            sending ||
            !gmailUser.trim() ||
            !appPassword.trim() ||
            !subject.trim() ||
            !body.trim() ||
            !csvInput.trim()
          }
          className={`
            mt-6 w-full py-3 rounded-2xl font-semibold text-white
            transition-colors duration-300
            ${
              sending
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
            }
            focus:outline-none focus:ring-4 focus:ring-indigo-400
          `}
        >
          {sending ? "Sending..." : "Send Emails"}
        </button>

        {emailStatuses.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4 select-none">
              Email Status
            </h2>
            <EmailStatusList emailStatuses={emailStatuses} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
