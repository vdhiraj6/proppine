type StatCardProps = {
  number: string;
  label: string;
};

export default function StatCard({
  number,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="text-3xl font-bold text-teal-700">
        {number}
      </h2>

      <p className="mt-2 text-gray-500">
        {label}
      </p>
    </div>
  );
}