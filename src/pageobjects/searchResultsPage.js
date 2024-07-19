class SearchResultsPage {
    constructor() {
        this.results = $$('#search .g'); 
        this.firstResultLink = $('#search .g a'); 
    }

    async getResultsCount() {
        const results = await this.results;
        return results.length;
    }

    async clickFirstResult() {
        await this.firstResultLink.click();
    }

    async getCurrentUrl() {
        return browser.getUrl();
    }
}

export default SearchResultsPage;
