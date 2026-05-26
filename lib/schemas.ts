import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-\(\)\+]+$/, "Invalid phone format"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});
export type QuoteInput = z.infer<typeof quoteSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Tell us a bit more (10+ characters)"),
  preferredTime: z.string().optional(),
});
export type ContactInput = z.infer<typeof contactSchema>;

export const emergencySchema = z.object({
  phone: z
    .string()
    .min(10, "Enter a phone number we can call")
    .regex(/^[\d\s\-\(\)\+]+$/, "Invalid phone format"),
});
export type EmergencyInput = z.infer<typeof emergencySchema>;

export const footerLeadSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
});
export type FooterLeadInput = z.infer<typeof footerLeadSchema>;
