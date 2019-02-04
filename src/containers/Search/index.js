import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
const searchOptions = [];
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  const regex = new RegExp('^' + escapedValue, 'i');
  //console.log("getsugg == "+searchOptions.filter(language => regex.test(language)))
  return searchOptions.filter(language => regex.test(language));
}

function getSuggestionValue(suggestion) {
  return suggestion;
}

function shouldRenderSuggestions() {
  return true;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion}</span>
  );
}
class SearchApp extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      noSuggestions: false
    };
  }

  onChange = (event, { newValue, method }) => {
    //console.log(newValue)
    this.setState({
      value: newValue
    });
  };
  onKeyPress = (event) => {
    //console.log(event.key + event.charCode);
    if (event.key === 'Enter') {
      const newValue = document.getElementsByClassName("react-autosuggest__input")[0].value;
      //console.log("=="+ newValue)
      if (newValue) {
        this.props.actions.fetchNews(newValue);
      }
    }

  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    //console.log(suggestionValue);
    this.suggestionSelected = true;
    this.props.actions.fetchNews(suggestionValue);
  };

  searchClick = () => {
    const newValue = document.getElementsByClassName("react-autosuggest__input")[0].value;
    //console.log("=="+ newValue)
    if (newValue) {
      this.props.actions.fetchNews(newValue);
    }
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const suggestions = getSuggestions(value);
    const isInputBlank = value.trim() === '';
    //const noSuggestions = !isInputBlank && suggestions.length === 0;

    this.setState({
      suggestions,
      //noSuggestions
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };



  render() {
    const summaryList = this.props.searchOptions;

    summaryList.map((item, index) => {
      //console.log(searchOptions.indexOf(item.section_name))
      if (searchOptions.indexOf(item.section_name) === -1) {
        searchOptions.push(item.section_name);
        //  console.log(searchOptions)
      }
    });
    const { value, suggestions/*, noSuggestions */ } = this.state;
    const inputProps = {
      placeholder: "Search",
      value,
      onChange: this.onChange,
      onKeyUp: this.onKeyPress
    };

    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          shouldRenderSuggestions={shouldRenderSuggestions}
          onSuggestionSelected={this.onSuggestionSelected}
          focusInputOnSuggestionClick={false}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
        <i className="fas fa-search" onClick={this.searchClick}></i>
        {/*
          noSuggestions &&
          <div className="no-suggestions">
            Category N/A.
              </div>*/
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

SearchApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchApp)
export default SearchApp
