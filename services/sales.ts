import { coreFetchHandler } from "@/lib/request";
import { Endpoints } from "@/types/enum";

const getSales = () => {
  return coreFetchHandler(`/${Endpoints.SALES}.json`, {
    method: "GET",
  });
};

export const salesService = {
  getSales,
};
