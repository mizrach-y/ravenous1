import React from 'react';
import './SearchBar.css';

let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}
class SearchBar extends React.Component {
 //dynamically create the list items needed to display the sort options[Best Math, Highest Rated, Most Reviewed]
 //helps future proof againes potential changes to the Yelp API.
  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li{key=sortByOptionValue}>sortByOption</li>
    
      render(){
        return <div className="SearchBar">
  <div class="SearchBar-sort-options">
    <ul>
    //  <!-- Use .renderSortByOptions() to sort the businesses by their options -->
      {this.renderSortByOptions()};
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Let's Go</a>
  </div>
</div>
      }
    });

  }
}
export default SearchBar;
