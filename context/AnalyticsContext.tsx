"use client";

import { createContext } from "react";

import { IDataResponse } from "@/types/metric";

const AnalyticsContext = createContext<{
  analytics: IDataResponse;
  isLoading: boolean;
}>({
  analytics: {
    metrics: [],
    sales: [],
    orders: [],
    transactions: [],
    salesByCategory: {},
  },
  isLoading: false,
});

export default AnalyticsContext;
