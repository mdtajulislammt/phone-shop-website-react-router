import PhonsCard from "./PhonsCard";
import PropTypes from 'prop-types';

const Phones = ({ phones }) => {
  return (
    <div>
      <h1 className=" text-4xl text-center mt-5 font-medium">
        All category Phones
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {phones?.map((phone) => (
          <PhonsCard key={phone.id} phone={phone}></PhonsCard>
        ))}
      </div>
    </div>
  );
};

Phones.propTypes = {
  phones: PropTypes.array
}

export default Phones;
