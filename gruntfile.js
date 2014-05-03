module.exports = function(grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less:{
			compile:{
				files:{
					"site.css":"less/site.less"
				}				
			}
		},
		watch:{
			files: ['less/site.less'],
			tasks: ['less']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default',['less']);

};