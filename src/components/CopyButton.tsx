"use client";

interface ICopyButtonProps {
  data: string[];
}

export default function CopyButton({ data }: ICopyButtonProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.join("\n"));
      alert("Copied!");
    } catch {
      alert("Copy failed.");
    }
  };

  return (
    <button
      className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 cursor-pointer ml-4"
      onClick={handleCopy}
    >
      Copy All
    </button>
  );
}
