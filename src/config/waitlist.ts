/**
 * WAITLIST — where the /download "notify me" form submits to.
 *
 * This is a static site with no backend, so this MUST be pointed at an
 * external form handler before launch (e.g. Formspree, Google Forms,
 * a Cloudflare Worker, Buttondown, etc.). Now pointed at Formspree.
 */
export const WAITLIST_FORM_ENDPOINT: string | null = "https://formspree.io/f/mvkpvjra";