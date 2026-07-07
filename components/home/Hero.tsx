import StatCard from "@/components/ui/StatCard";
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-white">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="mb-4 rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
          India's Smart Property Platform
        </span>

        <h1 className="max-w-4xl text-6xl font-extrabold leading-tight">
          Find Your
          <span className="text-teal-700"> Dream Property</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Buy, Rent and Discover verified properties across India with
          PropPine.
        </p>

        <div className="mt-10 flex w-full max-w-3xl rounded-2xl bg-white p-3 shadow-xl">

          <input
            type="text"
            placeholder="Search City, Locality or Property..."
            className="flex-1 rounded-xl px-5 py-4 outline-none"
          />

          <button className="rounded-xl bg-teal-700 px-8 text-white hover:bg-teal-800">
            Search
          </button>

        </div>
<div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
  <StatCard number="25K+" label="Verified Properties" />
  <StatCard number="10K+" label="Happy Users" />
  <StatCard number="2K+" label="Trusted Builders" />
</div>
{/* 
<div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
  <StatCard number="25K+" label="Verified Properties" />
  <StatCard number="10K+" label="Happy Users" />
  <StatCard number="2K+" label="Trusted Builders" />
</div>
*/}

      </div>
    </section>
  );
}