import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, CheckCircle, Send, AlertCircle } from 'lucide-react';
import styles from './ContactForm.module.scss';

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

const schema = z.object({
  name:    z.string().min(2,  'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email'),
  phone:   z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted]   = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sendError, setSendError]   = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setSendError(null);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject:    `New Enquiry from ${data.name} — AMDC Interior Design`,
          from_name:  'AMDC Website',
          name:       data.name,
          email:      data.email,
          phone:      data.phone,
          message:    data.message,
          botcheck:   '',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      setSendError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <p className={styles.eyebrow}>Get in Touch</p>
      <h2 className={styles.title} id="contact-title">
        Start Your <em>Journey</em>
      </h2>
      <p className={styles.subtitle}>
        Ready to transform your space? Let's discuss your vision.
        Our team will get back to you within 24 hours.
      </p>

      <div className={styles.inner}>
        {/* Form */}
        <div>
          {submitted ? (
            <div className={styles.success} role="alert">
              <div className={styles.icon}>
                <CheckCircle size={24} />
              </div>
              <h3>Thank You!</h3>
              <p>
                We've received your enquiry and will be in touch within 24 hours.
                We look forward to bringing your vision to life.
              </p>
            </div>
          ) : (
            <form
              className={styles.form}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="Contact form"
            >
              {/* Honeypot — hidden from real users, catches bots */}
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">
                    Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    {...register('name')}
                  />
                  {errors.name && (
                    <span className={styles.error} id="name-error" role="alert">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    {...register('email')}
                  />
                  {errors.email && (
                    <span className={styles.error} id="email-error" role="alert">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="phone">
                  Phone <span className={styles.required}>*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98996 63437"
                  autoComplete="tel"
                  aria-required="true"
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  {...register('phone')}
                />
                {errors.phone && (
                  <span className={styles.error} id="phone-error" role="alert">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="message">
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project, space, and vision..."
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  {...register('message')}
                />
                {errors.message && (
                  <span className={styles.error} id="message-error" role="alert">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className={styles.submit}
                disabled={submitting}
                aria-label={submitting ? 'Sending your message...' : 'Send enquiry'}
              >
                {submitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Enquiry
                    <Send size={16} />
                  </>
                )}
              </button>

              {sendError && (
                <div className={styles.sendError} role="alert">
                  <AlertCircle size={16} />
                  {sendError}
                </div>
              )}
            </form>
          )}
        </div>

        {/* Info Panel */}
        <aside className={styles.info} aria-label="Contact information">
          <h3 className={styles.infoTitle}>Contact Details</h3>

          <div className={styles.infoItem}>
            <div className={styles.iconBox} aria-hidden="true">
              <MapPin size={18} />
            </div>
            <div className={styles.infoContent}>
              <p className={styles.infoLabel}>Address</p>
              <p className={styles.infoValue}>
                AMDC Interior Design Studio<br />
                Sec - 46, Gurugram 122003
              </p>
            </div>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.infoItem}>
            <div className={styles.iconBox} aria-hidden="true">
              <Phone size={18} />
            </div>
            <div className={styles.infoContent}>
              <p className={styles.infoLabel}>Phone</p>
              <p className={styles.infoValue}>
                <a href="tel:+919899663437">+91 98996 63437</a>
              </p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox} aria-hidden="true">
              <Mail size={18} />
            </div>
            <div className={styles.infoContent}>
              <p className={styles.infoLabel}>Email</p>
              <p className={styles.infoValue}>
                <a href="mailto:contact.amdcarchitect@gmail.com">contact.amdcarchitect@gmail.com</a>
              </p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox} aria-hidden="true">
              <Clock size={18} />
            </div>
            <div className={styles.infoContent}>
              <p className={styles.infoLabel}>Working Hours</p>
              <p className={styles.infoValue}>
                Mon – Sat: 10:00 AM – 7:00 PM<br />
                Sunday: By appointment
              </p>
            </div>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <a
            href="https://wa.me/919899663437?text=Hello%2C%20I%27m%20interested%20in%20AMDC%20Interior%20Design%20services."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
            aria-label="Chat on WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </aside>
      </div>
    </section>
  );
}
