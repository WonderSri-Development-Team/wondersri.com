"use client";

export default function AppcardComponent({
  img,
  title,
  description,
  buttonText,
}) {
  return (
    <>
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} Layout="fill" objectFit="cover"></Image>
        <div ></div>

      </div>
    </>
  );
}
