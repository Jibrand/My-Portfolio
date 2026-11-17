"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function DemoAccess({ name, credentials }: {
  name: string;
  credentials: { username?: string; password: string };
}) {
  const fields = [
    ...(credentials.username ? [{ label: "Username", value: credentials.username }] : []),
    { label: "Password", value: credentials.password },
  ];
  const [feedback, setFeedback] = useState<{ field: string; copied: boolean } | null>(null);

  async function copy(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setFeedback({ field: label, copied: true });
    } catch {
      setFeedback({ field: label, copied: false });
    }
  }

  return (
    <div className="demo-access" role="group" aria-label={`${name} demo access`}>
      <p className="eyebrow">Demo Access</p>
      {fields.map(({ label, value }) => (
        <div className="demo-field" key={label}>
          <span><span className="demo-label">{label}</span><code>{value}</code></span>
          <button type="button" onClick={() => copy(label, value)} aria-label={`Copy ${name} demo ${label.toLowerCase()}`}>
            {feedback?.field === label && feedback.copied ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
          </button>
        </div>
      ))}
      <p className={feedback && !feedback.copied ? "demo-feedback" : "sr-only"} role="status">
        {feedback && (feedback.copied ? `${feedback.field} copied.` : `Could not copy. Select the ${feedback.field.toLowerCase()} to copy it manually.`)}
      </p>
    </div>
  );
}
