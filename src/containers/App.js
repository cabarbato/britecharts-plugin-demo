import React from 'react';
import { Container } from 'react-bootstrap';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { getCategories } from '../actions/actions';
import AppHeader from '../components/AppHeader';
import AppNav from '../components/AppNav';
import AppChart from './AppChart';
import data from '../assets/sample_data/data.csv';

const $ = window.$,
  mapStateToProps = state => ({
    categories: state.categoryReducer.categories
  }),
  mapDispatchToProps = dispatch => ({
    onGetCategories: (e) => (dispatch(getCategories(e)))
  });

class App extends React.Component {
  constructor(props) {
    super(props)

    d3.csv(data)
      .then(d => props.onGetCategories(d));
  }
  render() {
    const { categories } = this.props;
    return (
      <Container fluid>
        <AppHeader />
        {categories.length ?
          <>
            <AppNav />
            <AppChart />
          </> :
          <></>}
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
