var gFile = require('gulp-file'),
    gulp = require('gulp'),
    fs = require('fs');

module.exports = function () {
    var content,
        injectIndex,
        hasOrientation,
        hasOrientationIpad,
        appName,
        orientation = '' +
            '  <key>UISupportedInterfaceOrientations</key>\n' +
            '    <array>\n' +
            '      <string>UIInterfaceOrientationPortrait</string>\n' +
            '      <string>UIInterfaceOrientationLandscapeLeft</string>\n' +
            '      <string>UIInterfaceOrientationPortraitUpsideDown</string>\n' +
            '      <string>UIInterfaceOrientationLandscapeRight</string>\n' +
            '    </array>\n',
        orientationIpad = '' +
            '    <key>UISupportedInterfaceOrientations~ipad</key>\n' +
            '    <array>\n' +
            '      <string>UIInterfaceOrientationPortrait</string>\n' +
            '      <string>UIInterfaceOrientationLandscapeLeft</string>\n' +
            '      <string>UIInterfaceOrientationPortraitUpsideDown</string>\n' +
            '      <string>UIInterfaceOrientationLandscapeRight</string>\n' +
            '    </array>\n';
    try {
        appName = fs.readFileSync('config.xml').toString();
        appName = (appName.match(/<name>(.*)<\/name>/))[1];
        content = fs.readFileSync('platforms/ios/' + appName + '/' + appName + '-Info.plist').toString();
        injectIndex = content.lastIndexOf('</dict>');
        hasOrientation = content.match(/<key>UISupportedInterfaceOrientations<\/key>/);
        hasOrientationIpad = content.match(/<key>UISupportedInterfaceOrientations~ipad<\/key>/);
    } catch (e) {
        return;
    }

    if (!hasOrientation) {
        content = content.slice(0, injectIndex) + orientation + content.slice(injectIndex);
        injectIndex = content.lastIndexOf('</dict>');
    }
    if (!hasOrientationIpad) {
        content = content.slice(0, injectIndex) + orientationIpad + content.slice(injectIndex);
    }

    gFile(appName + '-Info.plist', content)
        .pipe(gulp.dest('platforms/ios/' + appName));
};
