import React from 'react';
import { Container } from 'react-bootstrap';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { getCategories } from '../actions/actions';
import AppHeader from '../components/AppHeader';
import AppNav from '../components/AppNav';
import AppChart from './AppChart';
import * as data from '../assets/data/data.csv';

type AppProps = {
  categories,
  onGetCategories
};

const mapStateToProps = state => ({
    categories: state.categoryReducer.categories
  }),
  mapDispatchToProps = dispatch => ({
    onGetCategories: (e) => (dispatch(getCategories(e)))
  });

class App extends React.Component<AppProps> {
  constructor(props) {
    super(props)

    d3.csv(data.default)
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
