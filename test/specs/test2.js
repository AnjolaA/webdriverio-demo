var assert = require('assert');
describe('sky.com homepage again', function() {
    it('Homepage should have the right title - Sky TV & Broadband....', function () {
        browser.url('http://sky.com');
        var title = browser.getTitle();
        console.log(title);
        assert.equal(title, 'Sky TV & Broadband | News, Sports, Movies & Entertainment');
    });
});