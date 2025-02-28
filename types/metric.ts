import { IOrder } from "./order";
import { ISale } from "./sale";
import { ITransaction } from "./transaction";

export interface IMetric {
  id: string;
  label: string;
  value: number;
  units?: string;
}
export interface IDataResponse {
  salesByCategory: Record<string, number>;
  sales: ISale[];
  orders: IOrder[];
  transactions: ITransaction[];
  metrics: IMetric[];
}
