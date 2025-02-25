import { salesService } from "@/services/sales";

export const getSales = async () => {
  try {
    const response = await salesService.getSales();

    return {
      success: true,
      data: response,
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
