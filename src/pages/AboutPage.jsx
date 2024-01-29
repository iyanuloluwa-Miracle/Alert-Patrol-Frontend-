import { alertPatrol2 } from "../assets/image";
import Button from "../components/Button";
function AboutPage() {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={alertPatrol2}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Community </span>
          Empowerment
        </h2>
        <p className="mt-4 info-text">
          We envision a world where individuals, like you, play a pivotal role
          in creating a safer and more resilient environment. Our platform is
          designed to empower you to become a proactive agent of change by
          reporting critical incidents, such as pollution and fire outbreaks.
        </p>
        <p className="mt-6 info-text">
          Through seamless communication channels and a steadfast commitment to
          community collaboration, Alert-Patrol stands as your trusted partner
          in ensuring a swift response and resolution to safety concerns.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="Get Started"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
