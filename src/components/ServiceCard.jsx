import PropTypes from 'prop-types';

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-full flex justify-center items-center">
        <img
          src={imgURL}
          alt={label}
          width={44}
          height={44}
          className="bg-transparent" // Set background color to transparent
        />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
};

export default ServiceCard;
