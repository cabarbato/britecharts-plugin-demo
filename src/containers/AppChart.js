import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import * as pym from "pym.js";
import ReactPaginate from 'react-paginate';
import ChartGraph from '../components/ChartGraph';

const pymChild = new pym.Child(),
  label = process.env.REACT_APP_SAMPLE_LABEL,
  mapStateToProps = state => ({
    category: state.categoryReducer.category,
    categories: state.categoryReducer.categories
  });

class AppChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: props.category,
      page: 0,
      offset: 0,
      per_page: 3,
      page_count: 0
    }
  }
  getCategories(reset) {
    const { category, categories } = this.props,
      { per_page, offset } = this.state,
      o = reset ? 0: offset,
      data = category.length ? categories.filter(d => category == d[process.env.REACT_APP_SAMPLE_CATEGORY]) : categories,
      slice = data.slice(o, o + per_page),
      displayed = slice.map((d, i) => <div className="chart" key={i}>
        <Row className="chart-category align-items-center">
          <Col sm={8}>
            <h3>{d[process.env.REACT_APP_SAMPLE_CATEGORY]}</h3>
          </Col>
          {!i &&
            <Col sm={4}>
              <p className="d-none d-sm-block">{label}</p>
            </Col>
          }
        </Row>
        <Row className="chart-data align-items-center">
          <Col sm={9} className="chart-data__graph">
            <ChartGraph data={d} />
          </Col>
          <Col sm={3} className="chart-data__percent text-center d-flex d-sm-block align-items-center mb-3 mb-sm-0">
            <p className="chart-data__percent-label d-sm-none my-0 mx-3">{label}:</p>
            <p className="chart-data__percent-data flex-fill">{d[label]}</p>
          </Col>
        </Row>
      </div>)

    this.setState({
      category,
      page_count: Math.ceil(data.length / per_page),
      displayed
    })
  }
  onPageClick = (e) => {
    const page = e.selected;
    const offset = page * this.state.per_page;

    this.setState({
      page,
      offset
    }, () => {
      this.getCategories()
    });
  }
  componentDidMount() {
    this.getCategories();
    pymChild.sendHeight();
  }
  componentDidUpdate() {
    pymChild.sendHeight();
  }
  shouldComponentUpdate(next_props) {
    if (next_props.category != this.state.category) this.getCategories(true)
    return true;
  }
  render() {
    const { displayed, page_count } = this.state;

    return !displayed ? <></> : <main>
      {displayed}
      <Row>
        <Col className="d-flex justify-content-center">
          <ReactPaginate
            previousLabel={<><i className="fas fa-angle-left"></i> Prev</>}
            nextLabel={<>Next <i className="fas fa-angle-right"></i></>}
            breakLabel={"..."}
            breakClassName={"break-me"}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={this.onPageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            pageCount={page_count} />
        </Col>
      </Row>
      <Row as="footer">
        <Col>
          <p>Shameless Plug: <a href="https://github.com/cabarbato">github.com/cabarbato</a></p>
        </Col>
      </Row>
    </main>
      ;
  }
}

export default connect(mapStateToProps)(AppChart);