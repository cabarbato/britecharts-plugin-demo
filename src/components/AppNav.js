import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setCategory } from '../actions/actions';

const $ = window.$,
  placeholder = 'Search for a category',
  mapStateToProps = state => ({
    category: state.categoryReducer.category,
    categories: state.categoryReducer.categories
  }),
  mapDispatchToProps = dispatch => ({
    onSetCategory: (e) => { return (dispatch(setCategory(e.currentTarget.value))) }
  });

class AppNav extends React.Component {
  componentDidMount() {
    const { category, onSetCategory } = this.props;
    $(document).ready(function () {
      $('.combobox').combobox({
        bsVersion: '4',
        iconCaret: 'fas fa-angle-down',
        iconRemove: 'fas fa-times',
        clearIfNoMatch: true
      });

      $('.combobox')
        .attr('placeholder', placeholder)
        .attr('value', category);
      $('.combobox-container input[type="hidden"]')
        .attr('value', category)
        .change(onSetCategory)
    });
  }
  render() {
    const { categories } = this.props;
    return (
      <nav>
        <Row>
          <Col xs={12} sm={6} className="mx-auto">
            <Form.Control as="select" className="combobox" placeholder={placeholder}>
              <option></option>
              {categories.map((d, i) => {
                return <option key={i} value={d[process.env.REACT_APP_SAMPLE_CATEGORY]}>{d[process.env.REACT_APP_SAMPLE_CATEGORY]}</option>
              })}
            </Form.Control>
          </Col>
        </Row>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);