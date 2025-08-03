import PhoneFormatter from "@/components/PhoneFormatter";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Phone Number Formatter
      </h1>
      <PhoneFormatter />
    </main>
  );
}
