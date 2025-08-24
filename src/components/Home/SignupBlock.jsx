import { ArrowRight } from "lucide-react";

export default function SignupBlock() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-xl font-semibold text-black mb-2 text-center">
        JOIN THE COMMUNITY
      </h2>
      <p className="text-gray-600 mb-6 text-center text-sm">
        SIGN UP TO OUR MAILING LIST FOR EXCLUSIVE ACCESS.
      </p>

      <form className="flex w-[250px] max-w-md">
        <input
          type="email"
          placeholder="Email"
          className="flex-grow px-4 py-3 rounded-l-md border  bg-[#f3f3f3] placeholder-gray-500 focus:outline-none "
        />
        <button
          type="submit"
          className="px-4 bg-[#f3f3f3] text-black flex items-center justify-center rounded-r-md hover:bg-gray-800 transition"
        >
          <ArrowRight size={20} className="text-gray-400" />
        </button>
      </form>
    </section>
  );
}
