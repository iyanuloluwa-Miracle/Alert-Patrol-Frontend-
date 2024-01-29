import Button from "../components/Button";
import { alertPatrol } from "../assets/image";
function Hero() {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Empowering Communities
          </span>
          <br />
          <span className="mr-3">for</span>
          <span className="text-coral-red inline-block mt-3">
            {" "}
            Safer Tomorrows
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-9 sm:max-w-sm">
        Our platform empowers you to be a proactive force for change by reporting critical incidents such as pollution and fire outbreaks. 
        </p>

        <Button label="Signup Now" />
       
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:bg-hero bg-cover bg-center">
        <img
          src={alertPatrol}
          alt="alert Patrol"
          width={410}
          height={402}
          className="object-contain relative"
        />
      </div>
    </section>
  );
}

export default Hero;
