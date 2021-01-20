import React from 'react';
import { Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setCategory } from '../actions/actions';

type NavProps = {
  category,
  categories,
  onSetCategory
};

const placeholder = 'Select a category',
  mapStateToProps = state => ({
    category: state.categoryReducer.category,
    categories: state.categoryReducer.categories
  }),
  mapDispatchToProps = dispatch => ({
    onSetCategory: (e) => dispatch(setCategory(e))
  });

const AppNav: React.FC<NavProps> = (props) => {
  const {
    category,
    categories,
    onSetCategory
  } = props;
  const [value, setValue] = React.useState('');
  const handleSelect = (e) => {
    console.log(e);
    setValue(e)
  }
  return (
    <nav>
      <Row>
        <Col xs={12} sm={8} md={6} className="mx-auto">
          <DropdownButton variant="secondary" title={category.length ? category : placeholder} onSelect={e => onSetCategory(e)}>
            <Dropdown.Item eventKey="">Any</Dropdown.Item>
            {categories.map((d, i) => {
              const row_category = d[process.env.REACT_APP_SAMPLE_CATEGORY];
              return <Dropdown.Item key={i} eventKey={row_category}>{row_category}</Dropdown.Item>

            })
            }
          </DropdownButton>
        </Col>
      </Row>
    </nav>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);