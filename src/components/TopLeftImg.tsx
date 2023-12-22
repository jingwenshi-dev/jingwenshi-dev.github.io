import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className={'absolute left-0 top-0 mix-blend-color-dodge w-[200px] z-10 xl:w-[400px] opacity-50'}>
      <Image
        src="/top-left-img.png"
        alt="TopLeftImg"
        width={400}
        height={400}
        draggable={false}
      />
    </div>
  );
};

export default TopLeftImg;
