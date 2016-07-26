import React, {Component, PropTypes} from 'react';

export default class Reaginate extends Component {

    static propTypes = {
        currentPage: PropTypes.number.isRequired,
        totalPages: PropTypes.number.isRequired,
        onRefresh: PropTypes.func,
        onPageChange: PropTypes.func.isRequired,
        displayLabel: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.currentPage
        }
    }

    isFirstPage() {
        const {currentPage} = this.state;
        return currentPage === 1;
    }

    isLastPage() {
        const {currentPage} = this.state;
        const {totalPages} = this.props;
        return currentPage === totalPages;
    }

    handleOnPageChange() {
        const page = this.state.currentPage;
        if (/^\d+$/.test(page)) {
            const {currentPage, totalPages} = this.props;
            const convertedPage = parseInt(page);
            if (convertedPage >= 1 & convertedPage <= totalPages) {
                this.setState({
                    currentPage: convertedPage
                });
                this.props.onPageChange(convertedPage);
                return;
            }
        }
        this.updateCurrentPage(this.props.currentPage, false);
    }

    handleCurrentPageOnBlur() {
        const {currentPage} = this.props;
        this.updateCurrentPage(currentPage, false);
    }

    updateCurrentPage(page, notify=true) {
        this.setState({
            currentPage: page
        });
        if(notify) {
            this.props.onPageChange(page);
        }
    }

    onNextPageClick() {
        const {currentPage} =  this.state;
        const newCurrentPage = currentPage + 1;
        this.updateCurrentPage(newCurrentPage);
    }

    onPreviousPageClick() {
        const {currentPage} =  this.state;
        const newCurrentPage = currentPage - 1;
        this.updateCurrentPage(newCurrentPage);
    }

    onFirstPageClick() {
        this.updateCurrentPage(1);
    }

    onLastPageClick() {
        const {totalPages} = this.props;
        this.updateCurrentPage(totalPages);
    }

    handleCurrentPageOnEnter(event) {
        if (event.key === 'Enter') {
            this.handleOnPageChange();
        }
    }


    handleCurrentPageOnChange(event) {
        const page = event.target.value;
        this.updateCurrentPage(page, false);
    }

    renderFirstPageButton() {
        if (this.isFirstPage()) {
            return (
                <div className="pager-item">
                    <a className="pager-btn pager-btn-disabled">
                        <i className="fa fa-angle-double-left" aria-hidden="true"/>
                    </a>
                </div>
            );
        }
        const {onFirstPage} = this.props;
        return (
            <div className="pager-item">
                <a className="pager-btn" onClick={ ::this.onFirstPageClick }>
                    <i className="fa fa-angle-double-left" aria-hidden="true"/>
                </a>
            </div>
        );
    }

    renderPreviousPageButton() {
        if (this.isFirstPage()) {
            return (
                <div className="pager-item">
                    <a className="pager-btn pager-btn-disabled">
                        <i className="fa fa-angle-left" aria-hidden="true"/>
                    </a>
                </div>
            );
        }
        const {onPreviousPage} = this.props;
        return (
            <div className="pager-item">
                <a className="pager-btn" onClick={ ::this.onPreviousPageClick }>
                    <i className="fa fa-angle-left" aria-hidden="true"/>
                </a>
            </div>
        );
    }

    renderNextPageButton() {
        if (this.isLastPage()) {
            return (
                <div className="pager-item">
                    <a className="pager-btn pager-btn-disabled">
                        <i className="fa fa-angle-right" aria-hidden="true"/>
                    </a>
                </div>
            );
        }
        const {onNextPage} = this.props;
        return (
            <div className="pager-item">
                <a className="pager-btn" onClick={ ::this.onNextPageClick }>
                    <i className="fa fa-angle-right" aria-hidden="true"/>
                </a>
            </div>
        );
    }

    renderLastPageButton() {
        if (this.isLastPage()) {
            return (
                <div className="pager-item">
                    <a className="pager-btn pager-btn-disabled">
                        <i className="fa fa-angle-double-right" aria-hidden="true"/>
                    </a>
                </div>
            );
        }
        return (
            <div className="pager-item">
                <a className="pager-btn" onClick={ ::this.onLastPageClick }>
                    <i className="fa fa-angle-double-right" aria-hidden="true"/>
                </a>
            </div>
        );
    }

    renderDisplayLabel() {
        const {displayLabel} = this.props;
        if (displayLabel) {
            return (
                <div className="pager-item pager-item-right">
                    <div className="pager-text-item">
                        {displayLabel}
                    </div>
                </div>
            );
        }
    }

    renderTotalPages() {
        const {totalPages} = this.props;
        return (
            <div className="pager-item">
                <div className="pager-text-item">of {totalPages}</div>
            </div>
        );
    }

    renderCurrentPage() {
        return (
            <div className="pager-item">
                <input className="pager-text-box"
                    ref="currentPage"
                    type="text"
                    onChange = { ::this.handleCurrentPageOnChange }
                    onBlur={:: this.handleCurrentPageOnBlur}
                    value={this.state.currentPage}
                    onKeyPress={:: this.handleCurrentPageOnEnter}/>
            </div>
        );
    }

    renderRefresh() {
        const {onRefresh} = this.props;
        if (onRefresh) {
            return (
                <div>
                    <div className="pager-item">
                        <div className="pager-separator"/>
                    </div>
                    <div className="pager-item">
                        <a className="pager-btn" onClick={onRefresh}>
                            Refresh
                        </a>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="pager">
                {this.renderFirstPageButton()}
                {this.renderPreviousPageButton()}
                <div className="pager-item">
                    <div className="pager-separator"/>
                </div>
                <div className="pager-item">
                    <div className="pager-text-item">Page</div>
                </div>
                {this.renderCurrentPage()}
                {this.renderTotalPages()}
                <div className="pager-item">
                    <div className="pager-separator"/>
                </div>
                {this.renderNextPageButton()}
                {this.renderLastPageButton()}
                {this.renderRefresh()}
                {this.renderDisplayLabel()}
            </div>
        );
    }
}
