export const ALLOWED_EMAILS = ['tung.edtech@gmail.com', 'phanhphieuluuky@gmail.com'];

export const isAdminEmail = (email?: string | null) => {
  if (!email) return false;
  return ALLOWED_EMAILS.includes(email);
};
