import { useContext } from "react";

import AnalyticsContext from "@/context/AnalyticsContext";

const useAnalytics = () => {
  return useContext(AnalyticsContext);
};

export default useAnalytics;
