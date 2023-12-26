import Image from 'next/image';
const Avatar = () => {
  return (
    <div className={'hidden xl:flex xl:max-w-none'}>
      <Image src={'/avatar2.png'} width={4096} height={4096} alt={''} className={'translate-z-0 w-full h-full'}></Image>
    </div>
  );
}

export default Avatar;