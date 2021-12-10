import { SerializedError } from "@reduxjs/toolkit";

export interface ContentLoading<T> {
  content: T;
  status: "init" | "loading" | "loaded" | "error";
  error?: SerializedError;
}
