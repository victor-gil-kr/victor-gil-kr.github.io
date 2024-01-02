function showHelp()
{
    // get the file path and split it on the '/' characters into an array
    var pathArray = location.pathname.split('/');

    // pop off the file name at the end of the array, leaving just the path folders to that file
    pathArray.pop();

    // rejoin the path folders with '/' characters, and add a trailing one on the end
    var absolutePath = pathArray.join('/') + '/';

    // get the relative path back to the "root" folder of the help system, which is embedded as an attribute in the html tag on every page
    var relativePath = document.getElementsByTagName("html")[0].getAttribute("data-mc-path-to-help-system");

    // the path to the desired file is absolutePath + relativePath + file name
    var filePath = absolutePath + relativePath + "content/" + "use_the_online_expert.htm"

    // reset the current URL to the combination of the origin (protocol + hostname + port) and the file path 
    location.href = location.origin + filePath;
}
