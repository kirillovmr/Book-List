import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
};

function mapStateToProps(state) {
  return {
    books: state.books
  };
};

// Anything returned from this func will end up as a props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenewer selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({
    selectBook
  }, dispatch);
};

// Promote BookList to a container - it needs to know about
// new dispatch method, selectBook. Make it available as prop.
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BookList);