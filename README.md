# React Pager

A nice pager component for React


Installation:

    npm install reaginate --save

Screenshot:


API:

```
<Reaginate
    currentPage={ pager.currentPage }
    totalPages={ pager.totalPages }
    onPageNumberEnter={ this.onNumberEnter }
    onRefresh={ this.onRefresh }
    displayLabel={ `Displaying events 101 - 150 of 7765` }
    onFirstPage={ this.onFirstPage }
    onPreviousPage={ this.onPreviousPage }
    onNextPage={ this.onNextPage}
    onLastPage={ this.onLastPage }/>
```

Example usage:

```
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

    updatePager(currentPage, totalPages) {
        this.setState({
            pager: {
                currentPage: currentPage,
                totalPages: totalPages
            }
        });
    }

    onNextPage() {
        const {currentPage, totalPages} = this.state.pager;
        const newCurrentPage = currentPage + 1;
        // Fetch data, then update...
        this.updatePager(newCurrentPage, totalPages);
    }

    onPreviousPage() {
        const {currentPage, totalPages} = this.state.pager;
        const newCurrentPage = currentPage - 1
        // Fetch data, then update...
        this.updatePager(newCurrentPage, totalPages);
    }

    onFirstPage() {
        const {totalPages} = this.state.pager;
        // Fetch data, then update...
        this.updatePager(1, totalPages);
    }

    onLastPage() {
        const {totalPages} = this.state.pager;
        // Fetch data, then update...
        this.updatePager(totalPages, totalPages);
    }

    onNumberEnter(page) {
        // User has entered a number in to the current page box....do something...
        // Fetch data, then update...
    }

    onRefresh() {
        // User has clicked on the fresh button
        // Fetch data...
    }

    render() {
        const {pager} = this.state;
        return (
          <div>
              <Grid />
              <Reaginate
                  currentPage={pager.currentPage}
                  totalPages={pager.totalPages}
                  onPageNumberEnter={:: this.onNumberEnter}
                  onRefresh={:: this.onRefresh}
                  displayLabel={`Displaying events 101 - 150 of 7765`}
                  onFirstPage={:: this.onFirstPage}
                  onPreviousPage={:: this.onPreviousPage}
                  onNextPage={:: this.onNextPage}
                  onLastPage={:: this.onLastPage}/>
          </div>
        );
    }
}

```
