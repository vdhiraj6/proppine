import StatCard from "@/components/ui/StatCard";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-teal-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
          🇮🇳 India's Smart Property Platform
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Find Your <span className="text-teal-700">Dream Property</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Buy, Rent and Discover verified properties across India with complete confidence.
        </p>

        {/* Tabs */}
        <div className="mt-10 flex gap-4 rounded-full bg-white p-2 shadow-lg">
          <button className="rounded-full bg-teal-700 px-6 py-3 text-white">
            Buy
          </button>

          <button className="rounded-full px-6 py-3 hover:bg-gray-100">
            Rent
          </button>

          <button className="rounded-full px-6 py-3 hover:bg-gray-100">
            Commercial
          </button>
        </div>

        {/* Search */}
        <div className="mt-8 flex w-full max-w-4xl rounded-2xl bg-white p-3 shadow-xl">
          <input
            type="text"
            placeholder="Search by City, Locality or Project..."
            className="flex-1 px-5 outline-none"
          />

          <button className="rounded-xl bg-teal-700 px-8 py-4 text-white">
            Search
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <StatCard number="25K+" label="Verified Properties" />
          <StatCard number="10K+" label="Happy Users" />
          <StatCard number="2K+" label="Trusted Builders" />
        </div>

      </div>
    </section>
  );
}