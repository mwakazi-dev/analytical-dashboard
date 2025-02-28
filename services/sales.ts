import { coreFetchHandler } from "@/lib/request";
import { Endpoints } from "@/types/enum";

const getSalesData = () => {
  return coreFetchHandler(`/${Endpoints.SALES}.json`, {
    method: "GET",
  });
};

export const salesService = {
  getSalesData,
};
