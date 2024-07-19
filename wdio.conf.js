export const config = {
    runner: 'local',
    port: 4723, // Port for Appium server
    path: '/',
    specs: ['./test/**/*.js'],
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'nightwatch-android-11',
        'appium:platformVersion': '11.0',
        'appium:browserName': 'Chrome'
    }],
    logLevel: 'info',
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
};
