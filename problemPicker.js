
var problems = ['2017-1-G1.png', '2017-1-K2.png', '2021-3-9.png', '2008-2-5.png', '2018-2-5.png', '2010-2-3.png', '2002-1-4.png', '2013-3-3.png', '2012-1-4.png', '2001-1-10.png', '2013-1-1.png', '2003-1-1.png', '2012-3-6.png', '2012-3-7.png', '2016-3-12.png', '2017-3-12.png', '2012-1-5.png', '2002-1-5.png', '2013-3-2.png', '2010-2-2.png', '2009-2-10.png', '2008-2-10.png', '2018-2-4.png', '2008-2-4.png', '2021-3-8.png', '2009-2-1.png', '2019-2-1.png', '2009-2-3.png', '2017-1-G2.png', '2019-2-3.png', '2004-2-8.png', '2014-2-8.png', '2017-1-K1.png', '2007-3-8.png', '2017-3-8.png', '2018-2-6.png', '2008-2-6.png', '2002-1-7.png', '2016-3-10.png', '2017-3-10.png', '2012-3-5.png', '2003-1-2.png', '2013-1-2.png', '2013-1-3.png', '2012-3-4.png', '2003-1-3.png', '2017-3-11.png', '2016-3-11.png', '2003-2-10.png', '2013-3-1.png', '2002-1-6.png', '2010-2-1.png', '2008-2-7.png', '2018-2-7.png', '2017-3-9.png', '2007-3-9.png', '2014-2-9.png', '2004-2-9.png', '2019-2-2.png', '2009-2-2.png', '2009-2-6.png', '2019-2-6.png', '2015-2-8.png', '2005-2-8.png', '2018-2-3.png', '2008-2-3.png', '2016-3-8.png', '2006-3-8.png', '2010-2-5.png', '2012-1-2.png', '2002-1-2.png', '2013-3-5.png', '.DS_Store', '2012-3-1.png', '2002-1-3.png', '2013-3-4.png', '2012-1-3.png', '2010-2-4.png', '2006-3-9.png', '2016-3-9.png', '2008-2-2.png', '2018-2-2.png', '2021-1-Z1.png', '2005-2-9.png', '2015-2-9.png', '2020-1-Z1.png', '2019-2-7.png', '2009-2-7.png', '2019-2-5.png', '2009-2-5.png', '2020-3-9.png', '2010-2-6.png', '2013-3-6.png', '2002-1-1.png', '2012-1-1.png', '2013-1-4.png', '2012-3-3.png', '2003-1-4.png', '2012-3-2.png', '2003-1-5.png', '2013-1-5.png', '2013-3-7.png', '2010-2-7.png', '2020-3-8.png', '2014-2-10.png', '2015-2-10.png', '2018-2-1.png', '2008-2-1.png', '2020-1-Z2.png', '2021-1-Z2.png', '2009-2-4.png', '2019-2-4.png', '2011-3-5.png', '2010-1-2.png', '2012-2-5.png', '2001-1-7.png', '2018-3-6.png', '2009-1-1.png', '2008-3-6.png', '2009-3-3.png', '2018-1-Z1.png', '2019-3-3.png', '2008-1-4.png', '2019-1-Z1.png', '2004-3-8.png', '2014-3-8.png', '2007-2-8.png', '2017-2-8.png', '2017-2-9.png', '2007-2-9.png', '2014-3-9.png', '2004-3-9.png', '2019-3-2.png', '2008-1-5.png', '2009-3-2.png', '2018-2-10.png', '2008-3-7.png', '2018-3-7.png', '2013-2-1.png', '2003-2-1.png', '2001-1-6.png', '2006-3-12.png', '2010-3-1.png', '2007-3-12.png', '2012-2-4.png', '2010-1-3.png', '2011-2-1.png', '2011-3-4.png', '2010-1-1.png', '2011-3-6.png', '2011-2-3.png', '2012-2-6.png', '2010-3-3.png', '2006-3-10.png', '2001-1-4.png', '2007-3-10.png', '2011-1-4.png', '2013-2-3.png', '2003-2-3.png', '2008-3-5.png', '2009-1-2.png', '2018-3-5.png', '2019-1-Z2.png', '2018-1-Z2.png', '2021-2-8.png', '2009-3-1.png', '2019-3-1.png', '2009-1-3.png', '2018-3-4.png', '2008-3-4.png', '2003-2-2.png', '2013-2-2.png', '2007-3-11.png', '2011-1-5.png', '2006-3-11.png', '2010-3-2.png', '2001-1-5.png', '2012-2-7.png', '2013-2-10.png', '2012-2-10.png', '2011-3-7.png', '2011-2-2.png', '2010-1-4.png', '2011-2-6.png', '2011-3-3.png', '2012-2-3.png', '2001-1-1.png', '2010-3-6.png', '2011-1-1.png', '2013-2-6.png', '2003-2-6.png', '2019-3-5.png', '2008-1-2.png', '2009-3-5.png', '2009-3-4.png', '2019-3-4.png', '2008-1-3.png', '2020-2-8.png', '2018-3-1.png', '2011-3-12.png', '2008-3-1.png', '2010-3-12.png', '2003-2-7.png', '2013-2-7.png', '2010-3-7.png', '2012-2-2.png', '2011-2-7.png', '2011-3-2.png', '2010-1-5.png', '2011-2-5.png', '2011-1-2.png', '2010-3-5.png', '2001-1-2.png', '2003-2-5.png', '2013-2-5.png', '2015-3-8.png', '2009-1-4.png', '2011-3-10.png', '2018-3-3.png', '2010-3-10.png', '2008-3-3.png', '2016-2-8.png', '2006-2-8.png', '2009-3-6.png', '2008-1-1.png', '2019-3-6.png', '2004-2-10.png', '2005-2-10.png', '2019-3-7.png', '2009-3-7.png', '2006-2-9.png', '2016-2-9.png', '2010-3-11.png', '2008-3-2.png', '2011-3-11.png', '2009-1-5.png', '2018-3-2.png', '2015-3-9.png', '2013-2-4.png', '2003-2-4.png', '2010-3-4.png', '2001-1-3.png', '2011-1-3.png', '2011-2-10.png', '2012-2-1.png', '2011-3-1.png', '2011-2-4.png', '2011-2-9.png', '2017-1-Z1.png', '2010-3-9.png', '2013-2-9.png', '2003-2-9.png', '2005-3-4.png', '2014-1-3.png', '2015-3-4.png', '2004-1-3.png', '2006-2-4.png', '2016-2-4.png', '2020-2-6.png', '2014-3-1.png', '2004-3-1.png', '2017-2-1.png', '2007-2-1.png', '2021-2-3.png', '2021-2-2.png', '2008-3-12.png', '2009-3-12.png', '2020-2-7.png', '2016-2-5.png', '2006-2-5.png', '2015-3-5.png', '2004-1-2.png', '2005-3-5.png', '2014-1-2.png', '2003-2-8.png', '2013-2-8.png', '2010-3-8.png', '2017-2-10.png', '2016-2-10.png', '2011-2-8.png', '2017-1-Z2.png', '2015-3-7.png', '2016-2-7.png', '2006-2-7.png', '2020-2-5.png', '2015-1-5.png', '2008-3-10.png', '2004-3-2.png', '2005-1-5.png', '2014-3-2.png', '2009-3-10.png', '2009-3-9.png', '2019-3-9.png', '2007-2-2.png', '2017-2-2.png', '2021-2-1.png', '2017-2-3.png', '2007-2-3.png', '2019-3-8.png', '2009-3-8.png', '2005-1-4.png', '2009-3-11.png', '2014-3-3.png', '2015-1-4.png', '2004-3-3.png', '2008-3-11.png', '2020-2-4.png', '2006-2-6.png', '2016-2-6.png', '2014-1-1.png', '2004-1-1.png', '2015-3-6.png', '2001-1-8.png', '2018-3-9.png', '2008-3-9.png', '2015-3-2.png', '2004-1-5.png', '2005-3-2.png', '2014-1-5.png', '2016-2-2.png', '2006-2-2.png', '2004-3-7.png', '2021-3-12.png', '2014-3-7.png', '2020-3-12.png', '2021-2-5.png', '2007-2-7.png', '2015-3-10.png', '2017-2-7.png', '2014-3-10.png', '2017-2-6.png', '2014-3-11.png', '2007-2-6.png', '2015-3-11.png', '2021-2-4.png', '2014-3-6.png', '2005-1-1.png', '2004-3-6.png', '2015-1-1.png', '2006-2-3.png', '2016-2-3.png', '2020-2-1.png', '2005-3-3.png', '2014-1-4.png', '2015-3-3.png', '2004-1-4.png', '2008-3-8.png', '2018-3-8.png', '2001-1-9.png', '2020-1-K2.png', '2021-1-K2.png', '2020-1-G1.png', '2021-1-G1.png', '2011-3-9.png', '2012-2-9.png', '2005-3-1.png', '2015-3-1.png', '2020-2-3.png', '2006-2-1.png', '2016-2-1.png', '2005-1-3.png', '2014-3-4.png', '2020-3-11.png', '2015-1-3.png', '2004-3-4.png', '2021-3-11.png', '2021-2-6.png', '2002-1-10.png', '2017-2-4.png', '2007-2-4.png', '2015-3-12.png', '2007-2-5.png', '2014-3-12.png', '2017-2-5.png', '2021-2-7.png', '2015-1-2.png', '2021-3-10.png', '2004-3-5.png', '2005-1-2.png', '2020-3-10.png', '2014-3-5.png', '2020-2-2.png', '2021-1-K1.png', '2012-2-8.png', '2020-1-K1.png', '2011-3-8.png', '2021-1-G2.png', '2020-1-G2.png', '2004-2-2.png', '2014-2-2.png', '2009-2-9.png', '2007-3-2.png', '2016-1-5.png', '2017-3-2.png', '2006-1-5.png', '2015-2-7.png', '2005-2-7.png', '2016-3-7.png', '2006-3-7.png', '2020-3-5.png', '2019-1-G1.png', '2018-1-G1.png', '2019-1-K2.png', '2018-1-K2.png', '2012-3-10.png', '2013-3-10.png', '2007-2-10.png', '2006-2-10.png', '2013-3-11.png', '2012-3-11.png', '2020-3-4.png', '2006-3-6.png', '2016-3-6.png', '2007-1-1.png', '2018-3-12.png', '2019-3-12.png', '2005-2-6.png', '2015-2-6.png', '2021-3-1.png', '2017-3-3.png', '2006-1-4.png', '2007-3-3.png', '2016-1-4.png', '2019-2-8.png', '2009-2-8.png', '2014-2-3.png', '2004-2-3.png', '2014-2-1.png', '2004-2-1.png', '2017-3-1.png', '2007-3-1.png', '2021-3-3.png', '2005-2-4.png', '2015-2-4.png', '2018-3-10.png', '2019-3-10.png', '2006-3-4.png', '2007-1-3.png', '2016-3-4.png', '2020-3-6.png', '2018-1-G2.png', '2019-1-G2.png', '2010-2-9.png', '2018-1-K1.png', '2019-1-K1.png', '2013-3-9.png', '2012-3-12.png', '2013-3-12.png', '2013-3-8.png', '2010-2-8.png', '2020-3-7.png', '2007-1-2.png', '2016-3-5.png', '2006-3-5.png', '2019-3-11.png', '2018-3-11.png', '2015-2-5.png', '2005-2-5.png', '2021-3-2.png', '2014-2-4.png', '2004-2-4.png', '2021-3-6.png', '2017-3-4.png', '2006-1-3.png', '2007-3-4.png', '2016-1-3.png', '2005-2-1.png', '2015-2-1.png', '2020-3-3.png', '2004-3-10.png', '2006-3-1.png', '2016-3-1.png', '2012-3-9.png', '2012-3-8.png', '2004-3-11.png', '2020-3-2.png', '2007-3-5.png', '2016-1-2.png', '2017-3-5.png', '2006-1-2.png', '2021-3-7.png', '2004-2-5.png', '2014-2-5.png', '2010-2-10.png', '2004-2-7.png', '2014-2-7.png', '2021-3-5.png', '2007-3-7.png', '2017-3-7.png', '2018-2-9.png', '2008-2-9.png', '2015-2-2.png', '2005-2-2.png', '2007-1-5.png', '2016-3-2.png', '2006-3-2.png', '2002-1-8.png', '2002-1-9.png', '2006-3-3.png', '2007-1-4.png', '2016-3-3.png', '2020-3-1.png', '2004-3-12.png', '2005-2-3.png', '2015-2-3.png', '2008-2-8.png', '2018-2-8.png', '2006-1-1.png', '2017-3-6.png', '2016-1-1.png', '2007-3-6.png', '2021-3-4.png', '2014-2-6.png', '2004-2-6.png']

function getProblem() {
  var prob = problems[Math.floor(Math.random()*problems.length)];
  var info = prob.slice(0,-4).split('-')

  if (info[0] <= 2002) {
  	info[1] = "Selection"
  } else if (info[0] == 2003) {
  	info[1] = ["Preselection","Selection"][info[1]-1]
  } else if (info[0] <= 2020) {
  	info[1] = ["Preliminary","Final","Selection"][info[1]-1]
  } else {
  	info[1] = ["Secondry","Final","Selection"][info[1]-1]
  }

  document.getElementById("problem").src = "problems-de/" + prob;
  document.getElementById("year").innerHTML = info[0];
  document.getElementById("exam").innerHTML = info[1];
  document.getElementById("number").innerHTML = info[2];
}

function toggleInfo() {
  var info = document.getElementById("info-table");
  var butt = document.getElementById("infoButton");

  if (info.style.display == "none") {
    info.style.display = "table";
    butt.innerHTML = "Hide Info"
  } else {
    info.style.display = "none";
    butt.innerHTML = "Show Info"
  }
}