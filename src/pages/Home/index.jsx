import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { getCountryList } from '@containers/App/actions';
import { selectCountryList } from '@containers/App/selectors';

import classes from './style.module.scss';

const Home = ({ countryList }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(countryList, 'country list redux');
  }, [countryList]);

  useEffect(() => {
    dispatch(getCountryList());
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <h3>
        <FormattedMessage id="app_fullstack" />
      </h3>
    </div>
  );
};

Home.propTypes = {
  countryList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  countryList: selectCountryList,
});

export default connect(mapStateToProps)(Home);
