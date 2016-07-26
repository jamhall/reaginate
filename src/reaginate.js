import React, {Component, PropTypes} from 'react';

export default class Reaginate extends Component {

    static propTypes = {
        currentPage: PropTypes.number.isRequired,
        totalPages: PropTypes.number.isRequired,
        onRefresh: PropTypes.func,
        onFirstPage: PropTypes.func.isRequired,
        onPreviousPage: PropTypes.func.isRequired,
        onNextPage: PropTypes.func.isRequired,
        onLastPage: PropTypes.func.isRequired,
        onPageNumberEnter: PropTypes.func,
        displayLabel: PropTypes.string
    }

    static defaultProps = {
        onPageNumberEnter: () => null
    }

    constructor(props) {
        super(props);
    }

    isFirstPage() {
        const {currentPage} = this.props;
        return currentPage === 1;
    }

    isLastPage() {
        const {currentPage, totalPages} = this.props;
        return currentPage === totalPages;
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
                <a className="pager-btn" onClick={onFirstPage}>
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
                <a className="pager-btn" onClick={onPreviousPage}>
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
                <a className="pager-btn" onClick={onNextPage}>
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
        const {onLastPage} = this.props;
        return (
            <div className="pager-item">
                <a className="pager-btn" onClick={onLastPage}>
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

    handleCurrentPageOnEnter(event) {
        if (event.key === 'Enter') {
            const value = event.target.value;
            if (!/^\d+$/.test(value)) {
                // this.refs.currentPage.value = "1999";
            }
        }
    }

    renderCurrentPage() {
        const {currentPage} = this.props;
        return (
            <div className="pager-item">
                <input className="pager-text-box" ref="currentPage" type="text" onKeyPress={:: this.handleCurrentPageOnEnter} defaultValue={currentPage}/>
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
