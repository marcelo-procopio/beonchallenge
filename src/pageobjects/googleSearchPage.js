class GoogleSearchPage {
    constructor() {
        this.searchBox = $('input[name="q"]');
        this.searchButton = $('input[name="btnK"]');
        this.acceptCookiesButton = $('button#L2AGLb'); 
    }

    async open() {
        await browser.url('https://www.google.com');
    }

    async acceptCookies() {
        if (await this.acceptCookiesButton.isDisplayed()) {
            await this.acceptCookiesButton.click();
        }
    }

    async search(query) {
        await this.searchBox.setValue(query);
        await this.searchButton.click();
    }

    async isSearchBoxVisible() {
        return this.searchBox.isDisplayed();
    }
}

export default GoogleSearchPage;
