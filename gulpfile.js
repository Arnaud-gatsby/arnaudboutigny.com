require('gulp').task('perf-tool', function () {
	var options = {
    	siteURL:'http://www.google.com',
        sitePages: ['/', '/voice']
	};
	return require('devbridge-perf-tool').performance(options);
});