# React Pager

A ReactJS component to render a pagination.

## Installation

    npm install reaginate --save

## Screenshot

![Image of reaginate component](https://raw.githubusercontent.com/jamhall/reaginate/master/screenshot.png)

## Props

| Name | Type | Description |
| --- | --- | --- | --- |
| `currentPage` | `Number` | **Required.** The current page to display. |
| `totalPages` | `Number` | **Required.** The total number of pages. |
| `onPageChange` | `Number` | **Required.** A callback with the page number as an argument for when the page changes. |
| `onRefresh` | `Function` | A function when the refresh button is clicked. If omitted, the button is not displayed. |
| `displayLabel` | `String` | A label to display feedback for the user. i.e. Displaying 1 to 50 of 200 messages |

## API:

```javascript
<Reaginate
    currentPage={ pager.currentPage }
    totalPages={ pager.totalPages }
    onPageChange={ this.onPageChange }
    onRefresh={ this.onRefresh }
    displayLabel={ `Displaying events 101 - 150 of 7765` }/>
```

## Example usage:

```javascript
import React, {Component} from 'react';

import 'reaginate/src/reaginate.scss'
import Reaginate from 'reaginate';

class MessageInbox extends Component {

    constructor(props) {
        super(props);
        // Fetch data and then set state...
        this.state = {
            pager: {
                currentPage: 1,
                totalPages: 20
            }
        };
    }

    onPageChange(page) {
        const {totalPages} = this.state.pager;
        this.setState({
            pager: {
                currentPage: page,
                totalPages: totalPages
            }
        });
    }


    render() {
        const {pager} = this.state;
        return (
          <div>
              <Grid />
              <Reaginate
                  currentPage={ pager.currentPage }
                  totalPages={ pager.totalPages }
                  onPageChange={ this.onPageChange }
                  displayLabel={ `Displaying events 101 - 150 of 7765` }/>
          </div>
        );
    }
}

```
