import Button from "@/components/ui/Button"
import { contactDetails } from "@/data/contact"

export default function Contact() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactDetails.email)}&su=Portfolio%20project%20enquiry`

  return (
    <section className="contact dark-section" id="contact">
      <h2>
        Let's
        <br />
        talk
      </h2>
      <div>
        <p>
          Have a product, website or digital experience that needs thoughtful
          design? Let's create something meaningful together.
        </p>
        <Button href={gmailComposeUrl}>Start a conversation</Button>
        <div className="contact-details">
          <span>
            <small>Email</small>
            <a href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
          </span>
          <span>
            <small>LinkedIn</small>
            <a href={contactDetails.linkedin} target="_blank" rel="noreferrer">
              {contactDetails.linkedin.replace(/^https:\/\//, "")}
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}
