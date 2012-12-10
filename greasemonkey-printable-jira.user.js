// ==UserScript==
// @name           Printing Jira tickets
// @description    Formats the Jira tickets to be small printable boxes. Script is based on 'myCss' by Mike Cao
// @include        https://*.atlassian.net/browse/*
// @namespace      http://www.ajcw.com/
// @grant       	none
// ==/UserScript==

var css = new Array();

function writeStyle(css) {
    var style = document.createElement('style');
    style.type = 'text/css';
    if (document.getElementsByTagName) {
        document.getElementsByTagName('head')[0].appendChild(style);
        if (style.sheet && style.sheet.insertRule) {
            for (var i = 0; i < css.length; i++) {
                style.sheet.insertRule(css[i], 0);
            }
        }
    }
}

function addStyle(style) {
    css[css.length] = style;
}

// Define your CSS here

// Hide elements
addStyle(".aui-header { display: none; }");
addStyle(".command-bar, .navigator-issue-only #stalker .page-navigation {display:none;}");
addStyle("#footer, #activitymodule, #greenhopper-agile-issue-web-panel, #datesmodule, #descriptionmodule, #addcomment, #issuedetails, #details-module_heading, #peoplemodule_heading, #votes-val, #watchers-val {display:none;}");
addStyle("header .breadcrumbs li {display: none !important;}");

// Style content
addStyle(".breadcrumbs {display: inline !important;margin: 0 !important;float:right;}");
addStyle("header .breadcrumbs li + li {display: block !important;background:none;}");
addStyle("#key-val {font-size:56px;}");
addStyle("#heading-avatar {float:right !important;margin: 12px 24px !important;}");
addStyle("h1 {margin:0 0 0 30px !important;padding:0 !important;position:absolute !important;top:24px;width:50%;background:none !important;}");
addStyle("header {position:relative;}");
addStyle("#viewissuesidebar {float:left;clear:left;width:100%;padding:0;}");
addStyle(".issue-main-column {float:left;width:100%;}");
addStyle(".issue-main-column {float:left;width:100%;}");
addStyle(".people-details {border-top: 1px solid #DDDDDD;}");
addStyle("ul.item-details dl dt {width: 9.5em;}");
addStyle("#viewissuesidebar ul.item-details dl dd {text-align:left;}");
addStyle("section > .content-container {width:600px;}");
addStyle("body, #stalker {min-width: 0 !important;}");

// Writes CSS to the document
writeStyle(css);
