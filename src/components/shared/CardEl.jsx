import PropTypes from 'prop-types';

const CardEl = ({title, body, user}) => {
  return (
    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{user.name}</span>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{body}</p>
            </div>
        </div>
    </div>
  )
}

export default CardEl


CardEl.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.object,
};