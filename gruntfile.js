module.exports = function(grunt)
{
	grunt.initCOnfig({
		pkg: grunt.file.readJSON('package.json')
		less:{
			files:{
				'site.css':"less/site.less"
			}
		}
	});
};