interface IResultListProps {
  valid: string[];
  invalid: string[];
}

export default function ResultList({ valid, invalid }: IResultListProps) {
  return (
    <div className="space-y-4 mt-4">
      <div>
        <h2 className="font-semibold">
          ✔ Valid Number{valid.length > 1 ? "s" : ""}
        </h2>
        <ul className="list-disc pl-5 text-green-700">
          {valid.map((num, i) => (
            <li key={i}>{num}</li>
          ))}
        </ul>
      </div>

      {invalid.length > 0 && (
        <div>
          <h2 className="font-semibold text-red-600">
            ✘ Invalid Number{invalid.length > 1 ? "s" : ""}
          </h2>
          <ul className="list-disc pl-5 text-red-600">
            {invalid.map((num, i) => (
              <li key={i}>{num}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
