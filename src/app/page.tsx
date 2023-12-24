const Home = () => {
  return (
    <div className={'h-full'}>
      <div className={'w-full h-full bg-gradient-to-r'}>
        <div className={'text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'}>
          <h1 className={'h1'}>
            Hi, I am Jingwen Shi!
          </h1>
          <p className={'max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'}>
            I am a senior student at the University of Toronto, double majoring in Computer Science and Applied Statistics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;