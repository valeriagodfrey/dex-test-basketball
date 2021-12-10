import { StringifiableRecord, stringifyUrl } from "query-string";

interface Arguments<Params> {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: {
    [key: string]: string;
  };
  params?: Params;
  notAuth?: boolean;
}

export const baseRequest = async <Params extends StringifiableRecord, Response>({
  url,
  method,
  headers,
  params,
  notAuth,
}: Arguments<Params>): Promise<Response> => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      method === "GET" && params ? stringifyUrl({ url, query: params }) : url,
      {
        method,
        headers: !notAuth ? { ...headers, Authorization: `Bearer ${token}` } : headers,
        body: method !== "GET" && params ? JSON.stringify(params) : undefined,
      },
    );
    let data;
    if (res.status < 400) {
      data = await res.json();
    } else {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("token");
        throw new Error("Unauthorized");
      } else {
        throw new Error("Server error");
      }
    }
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.message);
  }
};
