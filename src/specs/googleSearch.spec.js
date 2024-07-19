const GoogleSearchPage = require('./GoogleSearchPage');
const SearchResultsPage = require('./SearchResultsPage');

describe('Google Search Automation Tests', () => {
    let googleSearchPage;
    let searchResultsPage;

    before(async () => {
        googleSearchPage = new GoogleSearchPage();
        searchResultsPage = new SearchResultsPage();
        await googleSearchPage.open();
    });

    it('should display search results for a valid search', async () => {
        await googleSearchPage.acceptCookies();
        await googleSearchPage.search('WebdriverIO');    

        const resultsCount = await searchResultsPage.getResultsCount();
        expect(resultsCount).toBeGreaterThan(0);
    });

    it('should navigate to a search result and verify URL', async () => {
        await googleSearchPage.acceptCookies();
        await googleSearchPage.search('WebdriverIO');

        await searchResultsPage.clickFirstResult();

        const currentUrl = await searchResultsPage.getCurrentUrl();
        expect(currentUrl).toContain('webdriver.io');
    });
});
