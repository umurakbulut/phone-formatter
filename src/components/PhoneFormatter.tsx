"use client";

import { useEffect, useState } from "react";
import ResultList from "@/components/ResultList";
import CopyButton from "@/components/CopyButton";
import { handleFormat, PhoneFormatType } from "@/utils/format";
import CountrySelect from "./CountrySelect";
import FormatSelect from "./FormatSelect";

export default function PhoneFormatter() {
  const [rawInput, setRawInput] = useState("");
  const [country, setCountry] = useState<string>("TR");
  const [formatted, setFormatted] = useState<string[]>([]);
  const [invalid, setInvalid] = useState<string[]>([]);
  const [formatType, setFormatType] = useState<PhoneFormatType>("spaced");

  useEffect(() => {
    if (!rawInput.length) {
      setFormatted([]);
      setInvalid([]);
    }
  }, [rawInput]);

  const handleFormatClick = () => {
    const { formatted, invalid } = handleFormat(rawInput, {
      countryCode: country,
      format: formatType,
    });
    setFormatted(formatted);
    setInvalid(invalid);
  };

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <CountrySelect value={country} onChange={setCountry} />
      <FormatSelect value={formatType} onChange={setFormatType} />
      <textarea
        className="w-full p-3 border rounded resize-y min-h-[120px]"
        placeholder="Paste your phone numbers here..."
        value={rawInput}
        onChange={(e) => setRawInput(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        onClick={handleFormatClick}
      >
        Format
      </button>
      {formatted.length > 0 && (
        <>
          <CopyButton data={formatted} />
          <ResultList valid={formatted} invalid={invalid} />
        </>
      )}
    </div>
  );
}
