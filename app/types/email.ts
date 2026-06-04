export interface EmailState {
  success?: boolean;
  error?: string;
}

export interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}