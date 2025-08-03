"use client";

import Select from "react-select";
import { countries } from "@/constants/country";
import { getFlagEmoji } from "@/utils/getFlagEmoji";
import { ICountry } from "@/types/country";

interface ICountrySelectProps {
  value: ICountry["code"];
  onChange: (code: ICountry["code"]) => void;
}

export default function CountrySelect({
  value,
  onChange,
}: ICountrySelectProps) {
  const options = countries.map((country) => ({
    value: country.code,
    label: `${getFlagEmoji(country.code)} ${country.name} (${
      country.dialCode
    })`,
  }));

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">Country</label>
      <Select
        options={options}
        value={selectedOption}
        onChange={(selected) => {
          if (selected) onChange(selected.value);
        }}
        isSearchable
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
}
