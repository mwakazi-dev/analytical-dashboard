import { coreFetchHandler } from "@/lib/request";
import { Endpoints } from "@/types/enum";

const getTransations = () => {
  return coreFetchHandler(`/${Endpoints.TRANSACTIONS}.json`, {
    method: "GET",
  });
};

export const transactionsService = {
  getTransations,
};
