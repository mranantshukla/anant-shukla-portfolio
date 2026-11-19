"use client";
import { email, github, linkedin } from "../lib/portfolio";
import { useState } from "react";
export function Contact() {
  const [status, setStatus] = useState("");
  return (
    <section id="contact" className="section contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let’s talk.</h2>
        <p>For technology, analytics and consulting opportunities.</p>
        <a href={"mailto:" + email}>{email}</a>
        <div className="actions">
          <button
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(email);
                setStatus("Email copied");
              } catch {
                setStatus("Select the email address above to copy it.");
              }
            }}
          >
            Copy email
          </button>
          <a href={github}>GitHub</a>
          <a href={linkedin}>LinkedIn</a>
          <a href="/resume.pdf" download>
            Download résumé
          </a>
        </div>
        <span role="status">{status}</span>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const form = new FormData(event.currentTarget);
          const body =
            form.get("message") +
            "\n\n" +
            form.get("name") +
            "\n" +
            form.get("reply");
          window.location.href =
            "mailto:" +
            email +
            "?subject=" +
            encodeURIComponent("Portfolio enquiry from " + form.get("name")) +
            "&body=" +
            encodeURIComponent(body);
          setStatus("Continue in your email app to send the message.");
        }}
      >
        <label>
          Your name
          <input required name="name" autoComplete="name" maxLength={100} />
        </label>
        <label>
          Email address
          <input
            required
            type="email"
            name="reply"
            autoComplete="email"
            maxLength={250}
          />
        </label>
        <label>
          What do you have in mind?
          <textarea required name="message" rows={3} maxLength={1800} />
        </label>
        <button className="pill" type="submit">
          Create email draft ↗
        </button>
      </form>
    </section>
  );
}
