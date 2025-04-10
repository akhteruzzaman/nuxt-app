export interface ContactSearchRequestDTO {
  name?: string;
  email?: string;
  is_active?: boolean;
}
export interface ContactResponseDTO {
  contact_id: number;
  full_name: string;
  phone_number: string;
  email_address: string;
  is_active: boolean;
}
