import { Dayjs } from "dayjs";

export interface FilterFormValues {
  dateRange?: [Dayjs, Dayjs];
  dataset: "sales" | "orders" | "transactions";
}
