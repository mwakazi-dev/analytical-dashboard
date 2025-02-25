"use server";

import { FIREBASE_BASE_URL } from "@/constants/urls";

export const coreFetchHandler = async (
  endpoint: string,
  options: {
    headers?: Record<string, string>;
    [key: string]: unknown;
  } = {}
) => {
  const { ...restOptions } = options;

  // Determine base URL and token
  const baseUrl = FIREBASE_BASE_URL;

  if (!baseUrl) {
    throw new Error(`Base URL not found.`);
  }

  const headers = {
    ...restOptions.headers,
    "Content-Type": "application/json",
  };

  const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
    ...restOptions,
    headers,
    next: {
      revalidate: 600, // added this for caching
    },
  };

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, fetchOptions);

    if (!response.ok) {
      const errorData = await response.json();
      throw {
        data: errorData,
        message: response.statusText || "Fetch error",
      };
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject({
        data: (error as unknown as { data: unknown })?.data || null, // Use type assertion if data exists
        message: error.message || "Something went wrong",
      });
    }

    return Promise.reject({
      data: null,
      message: "Something went wrong",
    });
  }
};
