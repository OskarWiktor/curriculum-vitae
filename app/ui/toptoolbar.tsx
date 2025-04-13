import {Moon, TextUp} from "@deemlol/next-icons";

export default function TopToolbar() {
  return (
    <section className="flex justify-end items-center w-full h-8">
      <button className="flex justify-center items-center group cursor-pointer w-18 h-8 bg-zinc-800 rounded-md hover:bg-zinc-700 mr-3">
        <p className="text-[oklch(0.76_0_132)] group-hover:text-[oklch(0.93_0_132)]">PL / EN</p>
      </button>
      <button className="flex justify-center items-center group cursor-pointer w-8 h-8 bg-zinc-800 rounded-md hover:bg-zinc-700 mr-3">
        <TextUp
          size={24}
          className="text-[oklch(0.76_0_132)] group-hover:text-[oklch(0.93_0_132)]"
        />
      </button>
      <button className="flex justify-center items-center group cursor-pointer w-8 h-8 bg-zinc-800 rounded-md hover:bg-zinc-700">
        <Moon
          size={16}
          className="text-[oklch(0.76_0_132)] group-hover:text-[oklch(0.93_0_132)]"
        />
      </button>
    </section>
  );
}
