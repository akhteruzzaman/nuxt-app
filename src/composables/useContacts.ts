import { useContactStore } from "@/stores/contacts/contact";
import { contactApi } from "@/api/contact/contactApi";
import type { ContactSearchParams, GetContact } from "@/types/contact";
import { storeToRefs } from "pinia";
import type { Ref } from "vue";

export const useContacts = (): {
  searchContacts: (params: ContactSearchParams) => Promise<void>;
  getContacts: () => Promise<void>;
  loading: Ref<boolean>;
  contacts: Ref<GetContact[] | []>;
  resetContacts: () => Promise<void>;
  filteredContact: Ref<GetContact[] | []>;
} => {
  const contactStore = useContactStore();
  const { setLoading, setContacts, getFilteredContact } = contactStore;
  const { contacts, loading, filteredContact } = storeToRefs(contactStore);

  const searchContacts = async (params: ContactSearchParams): Promise<void> => {
    try {
      setLoading(true);
      const result = await contactApi.contactSearch(params);
      getFilteredContact(result); // Ensure this updates the reactive state
    } catch (error) {
      console.error("Error searching contacts:", error); // handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  const getContacts = async (): Promise<void> => {
    try {
      setLoading(true);
      const result = await contactApi.getAllContacts();
      setContacts(result);
    } catch (error) {
      console.error("Error fetching contacts:", error); // handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  // create reset contact
  const resetContacts = async (): Promise<void> => {
    try {
      setLoading(true);
      setContacts([]);
    } catch (error) {
      console.error("Error resetting contacts:", error); // handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  return {
    searchContacts,
    getContacts,
    loading,
    contacts,
    resetContacts,
    filteredContact,
  };
};
