import { differenceInYears } from "date-fns";

export const calculateAge = (dateString: string) =>
  differenceInYears(new Date(), new Date(dateString));
