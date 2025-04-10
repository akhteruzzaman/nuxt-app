import { objectToCamel } from "ts-case-convert";
import api from "../config";
import type { GetContact, ContactSearchParams } from "@/types/contact";

export const contactApi = {
  getAllContacts: async (): Promise<GetContact[]> => {
    const response = await api.get<GetContact[]>("/contact");
    return objectToCamel<GetContact[]>(response.data);
  },
  contactSearch: async (params: ContactSearchParams): Promise<GetContact[]> => {
    const response = await api.post<GetContact[]>("/filter", params);
    return objectToCamel<GetContact[]>(response.data);
  },
};
