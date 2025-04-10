import type { GetContact } from "@/types/contact";

export interface ContactState {
  contacts: GetContact[] | [];
  filteredContact: GetContact[] | [];
  loading: boolean;
}

export interface ContactActions {
  setLoading(isLoading: boolean): void;
  resetLoading(): void;
  setContacts(contacts: GetContact[]): void;
  resetContacts(): void;
  getFilteredContact(contact: GetContact[]): void;
  resetFilterContact(): void;
}
