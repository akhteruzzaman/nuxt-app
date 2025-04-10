import type { ContactResponseDTO } from "@/api/types/contact";
import type { ObjectToCamel } from "ts-case-convert";

export type GetContact = ObjectToCamel<ContactResponseDTO>;

export interface ContactSearchParams {
  name?: string;
  email?: string;
  is_active?: boolean;
}
