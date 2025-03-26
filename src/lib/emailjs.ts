import { init } from '@emailjs/browser';

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  init('tXz5CMaLwlN4P3gvR'); // Replace with your actual EmailJS public key
};

// EmailJS service and template IDs
export const EMAILJS_CONFIG = {
  serviceId: 'service_vp8qeca', // Replace with your actual EmailJS service ID
  templateId: 'template_zgx73oz', // Replace with your actual EmailJS template ID
}; 