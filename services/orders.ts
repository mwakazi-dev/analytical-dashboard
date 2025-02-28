import { coreFetchHandler } from "@/lib/request";
import { Endpoints } from "@/types/enum";

const getOrders = () => {
  return coreFetchHandler(`/${Endpoints.ORDERS}.json`, {
    method: "GET",
  });
};

export const ordersService = {
  getOrders,
};
