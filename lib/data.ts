import { DataPoint } from "@/types/data";

/**
 * Aggregates sales, orders, and transaction data by date.
 *
 * @param salesData - An array of objects containing sales data with date and total amount.
 * @param orderData - An array of objects containing order data with date and total amount.
 * @param transactionData - An array of objects containing transaction data with date and amount.
 *
 * @returns An array of DataPoint objects, each representing aggregated sales, orders, and transactions for a specific date, sorted by date.
 */

export const processData = (
  salesData: { SaleDate: string; TotalAmount: number }[],
  orderData: { OrderDate: string; TotalAmount: number }[],
  transactionData: { TransactionDate: string; Amount: number }[]
): DataPoint[] => {
  const aggregatedData: Record<string, DataPoint> = {};

  // sales Data
  salesData.forEach(({ SaleDate, TotalAmount }) => {
    if (!aggregatedData[SaleDate])
      aggregatedData[SaleDate] = {
        date: SaleDate,
        sales: 0,
        orders: 0,
        transactions: 0,
      };
    aggregatedData[SaleDate].sales += TotalAmount;
  });

  // orders data
  orderData.forEach(({ OrderDate, TotalAmount }) => {
    if (!aggregatedData[OrderDate])
      aggregatedData[OrderDate] = {
        date: OrderDate,
        sales: 0,
        orders: 0,
        transactions: 0,
      };
    aggregatedData[OrderDate].orders += TotalAmount;
  });

  // transactions data
  transactionData.forEach(({ TransactionDate, Amount }) => {
    if (!aggregatedData[TransactionDate])
      aggregatedData[TransactionDate] = {
        date: TransactionDate,
        sales: 0,
        orders: 0,
        transactions: 0,
      };
    aggregatedData[TransactionDate].transactions += Amount;
  });

  return Object.values(aggregatedData).sort((a, b) =>
    a.date.localeCompare(b.date)
  );
};
