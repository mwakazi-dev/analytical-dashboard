"use server";

import { ordersService } from "@/services/orders";
import { salesService } from "@/services/sales";
import { transactionsService } from "@/services/transactions";
import { ISale } from "@/types/sale";

export const fetchMetrics = async () => {
  try {
    const [salesRes, ordersRes, transactionsRes] = await Promise.all([
      salesService.getSalesData(),
      ordersService.getOrders(),
      transactionsService.getTransations(),
    ]);

    // metrics
    const totalSales = (salesRes as ISale[]).reduce(
      (sum, sale) => sum + sale.TotalAmount,
      0
    );
    const totalOrders = ordersRes.length;

    const map: Record<string, boolean> = {};
    const customers = [];
    for (let i = 0; i < ordersRes.length; i++) {
      if (map[ordersRes[i].CustomerID] === undefined) {
        map[ordersRes[i].CustomerID] = true;
        customers.push(ordersRes[i].CustomerID);
      }
    }
    const totalCustomers = customers.length;

    const metrics = [
      {
        id: "sales",
        label: "Total Sales",
        value: totalSales,
        units: "$",
      },
      {
        id: "orders",
        label: "Total Orders",
        value: totalOrders,
        units: null,
      },
      {
        id: "customers",
        label: "Total Customers",
        value: totalCustomers,
        units: null,
      },
    ];

    // bar chart data
    const salesByCategory = (salesRes as ISale[]).reduce((acc, sale) => {
      if (acc[sale.ProductID]) {
        acc[sale.ProductID] += sale.TotalAmount;
      } else {
        acc[sale.ProductID] = sale.TotalAmount;
      }
      return acc;
    }, {} as Record<string, number>);

    return {
      success: true,
      salesByCategory,
      sales: salesRes,
      orders: ordersRes,
      transactions: transactionsRes,
      metrics,
      message: "Fetched successfully!",
      error: null,
    };
  } catch (error: unknown) {
    return {
      success: false,
      data: null,
      message: error || "Something went wrong!",
    };
  }
};
