"use client";

import Select from "react-select";
import { phoneFormatOptions } from "@/constants/phone";
import { PhoneFormatType } from "@/types/phone";
import useHasMounted from "@/hooks/useHasMounted";

interface IFormatSelectProps {
  value: PhoneFormatType;
  onChange: (val: PhoneFormatType) => void;
}

export default function FormatSelect({ value, onChange }: IFormatSelectProps) {
  const hasMounted = useHasMounted();

  return (
    <div>
      <label className="block text-sm font-medium mb-1">Format Type</label>
      {hasMounted && (
        <Select
          options={phoneFormatOptions}
          value={phoneFormatOptions.find((o) => o.value === value)}
          onChange={(selected) => {
            if (selected) onChange(selected.value as PhoneFormatType);
          }}
        />
      )}
    </div>
  );
}
