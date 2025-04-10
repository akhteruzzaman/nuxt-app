import type { GetContact } from "@/types/contact";
import { defineStore } from "pinia";
import type { ContactActions, ContactState } from "./types/types";

export const useContactStore = defineStore<"contact", ContactState, {}, ContactActions>("contact", {
  state: () => ({
    contacts: [],
    filteredContact: [],
    loading: false,
  }),
  actions: {
    setLoading(isLoading: boolean) {
      this.loading = isLoading;
    },
    resetLoading() {
      this.loading = false;
    },
    setContacts(contacts: GetContact[]) {
      this.contacts = contacts;
    },
    resetContacts() {
      this.contacts = [];
    },
    getFilteredContact(contact: GetContact[]) {
      this.filteredContact = contact;
    },
    resetFilterContact() {
      this.filteredContact = [];
    },
  },
});
