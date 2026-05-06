import emailjs, { init } from '@emailjs/browser';

// Public key is safe in the frontend. Override in production with VITE_EMAILJS_PUBLIC_KEY.
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'tXz5CMaLwlN4P3gvR';

const SUPPORT_RECIPIENTS = ['support@sphereops.org', 'ahson.shaikh@sphereops.org'];

// EmailJS browser API always needs both a service and a template. Set VITE_EMAILJS_TEMPLATE_ID when you add a template for this service.
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_pq9bkgb';
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_dgk142l';

export type ConsultationPayload = {
  name: string;
  email: string;
  company: string;
  date: string;
  time: string;
  message: string;
};

export const initEmailJS = () => {
  init(EMAILJS_PUBLIC_KEY);
};

export const EMAILJS_CONFIG = {
  publicKey: EMAILJS_PUBLIC_KEY,
  serviceId: EMAILJS_SERVICE_ID,
  templateId: EMAILJS_TEMPLATE_ID,
};

export const sendConsultationRequest = (payload: ConsultationPayload) => {
  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    {
      name: payload.name,
      email: payload.email,
      company: payload.company,
      date: payload.date,
      time: payload.time,
      message: payload.message,
      to_email: SUPPORT_RECIPIENTS.join(','),
      subject: 'Consultation Request from SphereOps Website',
    },
    EMAILJS_CONFIG.publicKey
  );
};