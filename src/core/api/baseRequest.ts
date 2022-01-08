import { StringifiableRecord, stringifyUrl } from "query-string";
import { toast } from "react-toastify";

interface Arguments<Params> {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: {
    [key: string]: string;
  };
  params?: Params;
  notAuth?: boolean;
  formData?: FormData;
}

export const baseRequest = async <Params extends StringifiableRecord, Response>({
  url,
  method,
  headers,
  params,
  notAuth,
  formData,
}: Arguments<Params>): Promise<Response> => {
  try {
    const token = localStorage.getItem("token");
    const body = formData
      ? formData
      : method !== "GET" && params
      ? JSON.stringify(params)
      : undefined;

    const res = await fetch(
      method === "GET" && params ? stringifyUrl({ url, query: params }) : url,
      {
        method,
        headers: {
          ...headers,
          ...(!formData ? { "Content-Type": "application/json" } : {}),
          ...(!notAuth ? { Authorization: `Bearer ${token}` } : {}),
        },
        body,
      },
    );
    let data;
    if (res.status < 400) {
      data = await res.json();
    } else {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("token");
        toast.error(res.statusText);
        throw new Error("Unauthorized");
      } else if (res.status === 409) {
        toast.error(res.statusText);
      } else {
        toast.error(res.statusText);
        throw new Error("Server error");
      }
    }
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.message);
  }
};
