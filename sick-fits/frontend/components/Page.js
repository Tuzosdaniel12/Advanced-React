import PropTypes from 'prop-types';
import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default Page;
