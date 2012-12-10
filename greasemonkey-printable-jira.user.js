// ==UserScript==
// @name           Printing Jira tickets
// @description    Formats the Jira tickets to be small printable boxes. Script is based on 'myCss' by Mike Cao
// @include        https://*.atlassian.net/browse/*
// @namespace      http://www.ajcw.com/
// @grant           none
// ==/UserScript==

var css = new Array();

function writeStyle(css) {
    // Pull in the styles (defined at the bottom) into a print stylesheet
    var printStyles = document.createElement('style');
    printStyles.type = 'text/css';
    printStyles.setAttribute("media", "print");
    if (document.getElementsByTagName) {
        document.getElementsByTagName('head')[0].appendChild(printStyles);
        if (printStyles.sheet && printStyles.sheet.insertRule) {
            for (var i = 0; i < css.length; i++) {
                printStyles.sheet.insertRule(css[i], 0);
            }
        }
    }

    // Also pull in the styles normally so we can preview them in the browser (before we print) - I'm sure we could refactor this repetition
    var previewStylesInBrowser = document.createElement('style');
    previewStylesInBrowser.type = 'text/css';
    if (document.getElementsByTagName) {
        document.getElementsByTagName('head')[0].appendChild(previewStylesInBrowser);
        if (previewStylesInBrowser.sheet && previewStylesInBrowser.sheet.insertRule) {
            for (var i = 0; i < css.length; i++) {
                previewStylesInBrowser.sheet.insertRule(css[i], 0);
            }
        }
    }

}

function addStyle(style) {
    css[css.length] = style;
}

// Hide content
addStyle(".aui-header,.command-bar,.navigator-issue-only #stalker .page-navigation, header .breadcrumbs li, #heading-avatar, #footer, #activitymodule, #greenhopper-agile-issue-web-panel, #datesmodule, #descriptionmodule, #addcomment, #issuedetails, #details-module_heading, #peoplemodule_heading, #votes-val, #watchers-val, .twixi, #attachmentmodule {display:none !important;}");

// Layout styles
addStyle("body, #stalker {min-width: 0 !important;}");
addStyle(".aui-theme-default #content {padding:10px;width:50%;overflow:hidden;border:2px solid #000 !important;border-radius:6px}");
addStyle(".page-type-navigator #content > .content-container {width: 100% !important;font-size:11px;border:0;}");
addStyle("#viewissuesidebar {float:left;clear:left;width:100%;padding:0;}");
addStyle(".issue-main-column {float:left;width:100%;}");

// Heading styles
addStyle("header {position:relative;}");
addStyle(".breadcrumbs {display: inline !important;margin: 0 10px 0 0 !important;float:left;font-size:36px !important;}");
addStyle("header .breadcrumbs li + li {display: block !important;background:none;}");
addStyle("h1 {margin:0 !important;padding:0 !important;width:60%;background:none !important;font-size:20px;float:left;}");

// Content styles
addStyle(".people-details {border-top: 1px solid #DDD;}");
addStyle("ul.item-details dl dt {width: 9.5em;}");
addStyle("#viewissuesidebar ul.item-details dl dd {text-align:left;}");
addStyle(".module > .mod-header + .mod-content, .property-list .wrap {padding:0;}");
addStyle(".navigator-issue-only #viewissuesidebar .item-details dd > span, .property-list .name {margin:0;}");
addStyle(".type-textarea {clear:left;float:left;}");
addStyle(".twixi-wrap {padding:0;}");

// Writes CSS to the document
writeStyle(css);
