"use client";
import React, { FC, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchMetrics } from "@/app/actions/analytics";
import AnalyticsContext from "@/context/AnalyticsContext";
import { IDataResponse } from "@/types/metric";

interface Props {
  children: React.ReactNode;
}
const AnalyticsProvider: FC<Props> = ({ children }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["analytics"],
    queryFn: fetchMetrics,
  });

  const analytics = useMemo(() => {
    return { analytics: data, isLoading };
  }, [data, isLoading]);

  return (
    <AnalyticsContext.Provider
      value={
        analytics as {
          analytics: IDataResponse;
          isLoading: boolean;
        }
      }
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
