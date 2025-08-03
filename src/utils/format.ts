import { VALID_TR_PREFIXES } from "@/constants/common";
import { countries, COUNTRY_DIAL_CODES } from "@/constants/country";

export type PhoneFormatType =
  | "spaced"
  | "international"
  | "local-zero"
  | "local";

export const phoneFormatOptions = [
  { value: "spaced", label: "+90 5xx XXX XX XX" },
  { value: "international", label: "+905xxxxxxxxx" },
  { value: "local-zero", label: "05xxxxxxxxx" },
  { value: "local", label: "5xxxxxxxxx" },
];

export const handleFormat = (
  rawInput: string,
  options?: { countryCode?: string; format?: PhoneFormatType }
) => {
  const countryCode = options?.countryCode ?? "TR";
  const country = countries.find((c) => c.code === countryCode);
  const format = options?.format ?? "spaced";
  const dialCode = country?.dialCode ?? COUNTRY_DIAL_CODES.TR;

  const numbers = rawInput
    .split(/[,;\n]+/)
    .map((num) => num.replace(/\D/g, ""))
    .filter(Boolean);

  const valid = numbers.filter((n) => {
    const normalized = n.length === 10 ? n : n.slice(-10);
    const prefix = normalized.slice(0, 3);
    return normalized.length === 10 && VALID_TR_PREFIXES.includes(prefix);
  });

  const formatted = valid.map((n) => {
    const digits = n.length === 10 ? n : n.slice(-10);
    switch (format) {
      case "spaced":
        return `${dialCode} ${digits.slice(0, 3)} ${digits.slice(
          3,
          6
        )} ${digits.slice(6, 8)} ${digits.slice(8)}`;
      case "international":
        return `${dialCode}${digits}`;
      case "local-zero":
        return `0${digits}`;
      case "local":
        return `${digits}`;
      default:
        return `${dialCode}${digits}`;
    }
  });

  const invalid = numbers.filter((n) => {
    const digits = n.length === 10 ? n : n.slice(-10);
    const prefix = digits.slice(0, 3);
    return !(digits.length === 10 && VALID_TR_PREFIXES.includes(prefix));
  });

  return { formatted, invalid };
};
