var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var crawl = require('object-crawl');
var Link = require('../models/links.js');

var internet1 = {
 "pages": [
   {"address": "http://foo.bar.com/p1", "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]},
   {"address": "http://foo.bar.com/p2", "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p4"]},
   {"address": "http://foo.bar.com/p4", "links": ["http://foo.bar.com/p5", "http://foo.bar.com/p1", "http://foo.bar.com/p6"]},
   {"address": "http://foo.bar.com/p5", "links": []},
   {"address": "http://foo.bar.com/p6", "links": ["http://foo.bar.com/p7", "http://foo.bar.com/p4", "http://foo.bar.com/p5"]}]
};

var internet2 = {
 "pages": [
   {"address":"http://foo.bar.com/p1", "links": ["http://foo.bar.com/p2"]},
   {"address":"http://foo.bar.com/p2", "links": ["http://foo.bar.com/p3"]},
   {"address":"http://foo.bar.com/p3", "links": ["http://foo.bar.com/p4"]},
   {"address":"http://foo.bar.com/p4", "links": ["http://foo.bar.com/p5"]},
   {"address":"http://foo.bar.com/p5", "links": ["http://foo.bar.com/p1"]},
   {"address":"http://foo.bar.com/p6", "links": ["http://foo.bar.com/p1"]}]
};

crawl( internet1, 'pages[0].address');
