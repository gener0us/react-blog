import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardEl = ({ title, body, user, id }) => {
  return (
    <Link to={`/blogs/${id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-full pb-6 relative">
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {user.name}
          </span>
        </div>
        <div className="px-6 py-6">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base mb-5">
            {body.substring(0, 50)} ...
          </p>
          <span className="absolute bottom-6 bg-gray-500 rounded-lg px-3 py-1 text-md font-semibold text-white">
            show blog
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardEl;

CardEl.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  user: PropTypes.object,
  id: PropTypes.string,
};
