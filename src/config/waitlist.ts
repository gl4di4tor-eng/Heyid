/**
 * WAITLIST — where the /download "notify me" form submits to.
 *
 * This is a static site with no backend, so this MUST be pointed at an
 * external form handler before launch (e.g. Formspree, Google Forms,
 * a Cloudflare Worker, Buttondown, etc.). Left null for now — the form
 * renders but is disabled with a clear note until this is set.
 */
export const WAITLIST_FORM_ENDPOINT: string | null = null;
