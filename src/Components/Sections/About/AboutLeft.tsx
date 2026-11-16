import Image from "next/image";

export default function AboutLeft() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10">

      <Image
        src="/images/about-image.png"
        alt="Sultan Mia working"
        width={600}
        height={650}
        className="w-full h-auto object-cover object-center"
        priority
      />

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 bg-[#0B1120]/80 backdrop-blur-sm border-t border-white/10">
        <span className="text-white text-sm font-medium">MD Sultan Mia</span>
        <span className="text-primary text-sm">Dhaka, Bangladesh</span>
      </div>

    </div>
  );
}
