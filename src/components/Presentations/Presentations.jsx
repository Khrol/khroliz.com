import React from 'react';
import PresentationItem from './PresentationItem';
import PresentationYear from './PresentationYear';

const presentations = () => (
  <section id="presentations">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>My Public Presentations</h1>
      </div>
      <PresentationYear year="2023">
        <PresentationItem
          title="How to Test BigData/ETL Solutions?"
          location="Vilnius, Lithuania"
          conference="TestCon"
          link="https://events.pinetool.ai/3078/#sessions/100683"
          youtube="umw8X5umHyw"
          language="ENG"
        />
        <PresentationItem
          title="Big Data With Open Source Solutions"
          link="https://events.pinetool.ai/3079/#sessions/101328"
          location="Vilnius, Lithuania"
          conference="Big Data Conference Europe"
          youtube="Ex6CfJlWBgk"
          language="ENG"
        />
        <PresentationItem
          title="How to Test BigData/ETL Solutions?"
          link="https://epichey.dev/igorkhrol"
          location="Lisbon, Portugal"
          conference="EpicHey"
          slidesDrive="2PACX-1vRAGwwyKNIS7CeOq0Pdg7fhH62P59FOlcjKDNneA-U5t4sgkjQWiAggqbkfvbUR8ERf6FoLpg2dCl3T"
          language="ENG"
        />
      </PresentationYear>
      <PresentationYear year="2021">
        <PresentationItem
          title="Testing artificial intelligence: which side to approach?"
          // eslint-disable-next-line max-len
          link="https://a4qworldcongress.com/events/%d1%82%d0%b5%d1%81%d1%82%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5-%d0%b8%d1%81%d0%ba%d1%83%d1%81%d1%81%d1%82%d0%b2%d0%b5%d0%bd%d0%bd%d0%be%d0%b3%d0%be-%d0%b8%d0%bd%d1%82%d0%b5%d0%bb%d0%bb%d0%b5/"
          location="Online"
          conference="A4Q World Congress"
        />
      </PresentationYear>
      <PresentationYear year="2020">
        <PresentationItem
          title="BOF: SDET – yet another rattle title or separate engineering line?"
          link="https://delex-conf.com/bof/bof-sdet-yet-another-rattle-title-or-separate-engineering-line/"
          location="Minsk, Belarus"
          conference="DelEx"
          youtube="x-d6wK83iBo"
        />
        <PresentationItem
          title="Big Data Testing"
          link="https://ritfest.ru/2020/abstracts/6896"
          location="Online"
          conference="РИТ++"
          youtube="AF8dufCHhRs"
        />
      </PresentationYear>
      <PresentationYear year="2019">
        <PresentationItem
          title="Big Data Testing"
          link="https://community-z.com/events/dsc19#_=_"
          location="Vitebsk, Belarus"
          conference="DSC"
          youtube="WRJ02C0W9wE"
        />
        <PresentationItem
          title="Big Data Testing"
          link="http://qaasp.tech/igor-khrol"
          location="Minsk, Belarus"
          conference="QAASP"
          slidesDrive="2PACX-1vQ69CxeXTS4h4b59US5vrHoCJYqGEySfwqAsxLMy2d7pt-VbdC7wfAuMaywwXLi4fwxUyX0GTF5zvzY"
        />
        <PresentationItem
          title="Monads for Testers"
          link="https://seleniumcamp.com/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          youtube="djJIi7RGqjk"
        />
        <PresentationItem
          title="Monads for Testers"
          link="http://delex-conf.com/"
          location="Minsk, Belarus"
          conference="DelEx"
          slidesDrive="2PACX-1vToOdhETvsxsR7Eu0fCiJZggBY4Q7U55W-54fm75iJ0FVgEzY6uNgf6y1MGR7llNJqKnatpK7oFzPrV"
        />
      </PresentationYear>
      <PresentationYear year="2018">
        <PresentationItem
          title="Testing artificial intelligence: which side to approach?"
          link="https://item.com.ua/en#!/tproduct/67151017-1534030289949"
          location="Dnipro, Ukraine"
          conference="ITEM"
          youtube="WTXin9dQ6w4"
        />
        <PresentationItem
          title="How to test Artificial Intelligence and Machine Learning solutions?"
          link="http://qmoconference.com/Archive/2018_04/index.html"
          location="Lviv, Ukraine"
          conference="QMO Converence"
          youtube="JUlpxTXdOY0"
        />
        <PresentationItem
          title="How to test Machine Learning solutions?"
          link="https://2018.secon.ru/reports/kak-testirovat-sistemy-mashinnogo-obucheniya"
          location="Penza, Russia"
          conference="SECON"
          youtube="oDIATBzasG4"
        />
        <PresentationItem
          title="How to test Artificial Intelligence and Machine Learning solutions?"
          link="https://seleniumcamp.com/talk/how-to-test-artificial-intelligence-and-machine-learning-solutions/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          youtube="ztG3RD3ozxE"
        />
        <PresentationItem
          title="How to test Artificial Intelligence and Machine Learning solutions?"
          link="http://delex-conf.com/"
          location="Minsk, Belarus"
          conference="DelEx"
          youtube="SNBrP8JQthk"
        />
      </PresentationYear>
      <PresentationYear year="2017">
        <PresentationItem
          title="Data Warehouse in Google Cloud"
          link="https://dfua17.firebaseapp.com/schedule/day1?sessionId=148"
          location="Lviv, Ukraine"
          conference="GDG Lviv"
          youtube="6I870Dq2YoA"
          language="ENG"
        />
        <PresentationItem
          title="Who should write automated tests?"
          link="http://qafest.com/qafest2017/"
          location="Kyiv, Ukraine"
          conference="QA Fest"
          youtube="HbEceyiHrmM"
        />
        <PresentationItem
          title="Testing in Data World"
          location="Lviv, Ukraine"
          conference="BAQ Conference"
          slidesDrive="2PACX-1vT5X07r1MWo04DWKfrIyKKgLpj83o2qxOem_5IJqo8U6TfjGqOrf9FbxasPvP1uFjV_VeKT_Cuv883d"
        />
        <PresentationItem
          title="Testing in Data World"
          link="http://2017.heisenbug-piter.ru/en/talks/4cxymnehiaaysuims0weau/"
          location="Saint Petersburg, Russia"
          conference="Heisenbug"
          youtube="bny86gxbUcg"
        />
        <PresentationItem
          title="Testing in Data World"
          link="https://comaqa.by/2017/05/25/testing-in-the-data-world/"
          location="Minsk, Belarus"
          conference="COMAQA Spring 2017"
          youtube="nFpZQOrZQfw"
        />
      </PresentationYear>
      <PresentationYear year="2016">
        <PresentationItem
          title="Test Automation: Do the Same but Better"
          link="http://2016.heisenbug-moscow.ru/en/talks/avtotesty-takie-zhe-no-luchshe/"
          location="Moscow, Russia"
          conference="Heisenbug"
          youtube="JYY_52DTJqs"
        />
        <PresentationItem
          title="Test Automation: Do the Same but Better"
          link="https://comaqa.by/2016/11/20/comaqa-autumn-2016-igor-khrol/"
          location="Minsk, Belarus"
          conference="COMAQA Autumn 2016"
          youtube="NioKI_ymVJA"
        />
        <PresentationItem
          title="Test Automation: Do the Same but Better"
          link="https://www.testcon.lt/2016/"
          location="Vilnius, Lithuania"
          conference="TestCon"
          previewLink="https://www.youtube.com/embed/sx5JD36Jj_k?rel=0"
          language="ENG"
        />
        <PresentationItem
          title="Test Automation: Do the Same but Better"
          location="Minsk, Belarus"
          conference="IT Spring"
          previewLink="https://drive.google.com/file/d/1BWD66RgufDegJoPYgCAyhY-027jj96Z3/preview"
        />
        <PresentationItem
          title="Good tests change your application"
          link="https://seleniumcamp.com/talk/good-tests-change-your-application/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          youtube="joi_vmNLYtk"
        />
        <PresentationItem
          title="How to do tests quick and improve development efficiency"
          link="http://agile.by/2016/01/11/agile-by-gathering-23-yanvarya"
          location="Minsk, Belarus"
          conference="Agile.by Gathering"
          slideshare="NwEe66AAKwnCW0"
        />
      </PresentationYear>
      <PresentationYear year="2015">
        <PresentationItem
          title="Who is a tester in Agile?"
          link="http://qafest.com/qafest2015/"
          location="Kyiv, Ukraine"
          conference="QA Fest"
          youtube="s4uSeWUDz_w"
        />
        <PresentationItem
          title="Test Automation: throw away redundant and test the point"
          link="http://qafest.com/qafest2015/"
          location="Kyiv, Ukraine"
          conference="QA Fest"
          youtube="ZC_GH4AANqc"
        />
        <PresentationItem
          title="Test Automation: throw away excess and check the point"
          link="https://comaqa.by/2015/09/16/conf2-extra/"
          location="Minsk, Belarus"
          conference="COMAQA.BY Conf #2"
          youtube="w1hjnphkACA"
        />
        <PresentationItem
          title="Test Automation: Available for Everyone or The Destiny of The Elite?"
          link="https://sqadays.com/en/talk/33559"
          location="Minsk, Belarus"
          conference="SQA Days-17"
          previewLink="https://player.vimeo.com/video/130289554"
        />
        <PresentationItem
          title="Grail: steps for your Python-tests"
          link="https://habr.com/company/wargaming/blog/259619/"
          location="Minsk, Belarus"
          conference="Python Meetup"
          youtube="KVlUfJIOc5E"
        />
        <PresentationItem
          title="Grail: steps for your Python-tests"
          link="https://2015.codefest.ru/lecture/989"
          location="Novosibirsk, Russia"
          conference="CodeFest"
          youtube="T5nz0Gwr1b8"
        />
        <PresentationItem
          title="Webium: Page Objects in Python"
          link="https://seleniumcamp.com/talk/webium-page-objects-in-python/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          youtube="XrL1BLgkKyA"
        />
      </PresentationYear>
      <PresentationYear year="2014">
        <PresentationItem
          title="Modern QA: let's do it quickly"
          location="Minsk, Belarus"
          conference="SEF.BY to Students"
          slideshare="NZ6ewYgs0bpYYh"
        />
        <PresentationItem
          title="Increase Selenium tests stability via JavaScript"
          // eslint-disable-next-line max-len
          link="https://confengine.com/selenium-conf-2014/proposal/335/increase-selenium-tests-stability-via-javascript"
          location="Bangalore, India"
          conference="SeleniumConf"
          youtube="GvRA9VAA9rw"
          language="ENG"
        />
        <PresentationItem
          title="WG Talks for Students"
          location="Minsk, Belarus"
          conference="SEF.BY to Students"
          slideshare="NZ6ewYgs0bpYYh"
        />
        <PresentationItem
          title="Test Automation: throw away excess and check the point"
          link="https://sqadays.com/en/talk/19552"
          location="Moscow, Russia"
          conference="SQA Days-15"
          videoLink="https://player.vimeo.com/video/93944414"
        />
        <PresentationItem
          title="Increase Selenium tests stability via JavaScript"
          link="https://seleniumcamp.com/archive/selenium-camp-2014/materials/js-with-selenium/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          slideshare="pska2KeSlEFozi"
        />
      </PresentationYear>
      <PresentationYear year="2013">
        <PresentationItem
          title="Increase Selenium tests stability via JavaScript"
          link="http://confetqa.ru/program-selen/#khrol"
          location="Online"
          conference="Selen ConfeT&QA, Autumn 2013"
          youtube="moclYbCXMPM"
        />
        <PresentationItem
          title="Why test automation projects are failing?"
          link="http://www.tapost.org/tapost-2013/"
          location="Riga, Latvia"
          conference="TAPOST"
          slideshare="wkuxXZANC83hoR"
          language="ENG"
        />
        <PresentationItem
          title="Can we rotate the pyramid? Automate tests with less number of middlemen."
          link="http://confetqa.ru/auto-confetqa-vesna-2013/#khrol"
          location="Online"
          conference="Auto ConfeT&QA, Spring 2013"
          youtube="ZentmPn0_pg"
        />
        <PresentationItem
          title="WebDriver: Usual Mistakes of Beginners"
          link="https://seleniumcamp.com/archive/selenium-camp-2013/materials/mistakes-of-beginners/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          youtube="LtTmki_75vg"
        />
      </PresentationYear>
      <PresentationYear year="2012">
        <PresentationItem
          title="Why test automation projects are failing?"
          link="https://sqadays.com/ru/talk/7627"
          location="Minsk, Belarus"
          conference="SQA Days-12"
          youtube="SgGH9V4LB5s"
        />
        <PresentationItem
          title="Sikuli – tool to automate GUI applications"
          link="http://confetqa.ru/auto-confetqa-vesna-2012/#hrol"
          location="Online"
          conference="Auto ConfeT&QA, Spring 2012"
          youtube="LD6ZRKdlRHA"
        />
        <PresentationItem
          title="WebDriver: One Migration History"
          link="https://seleniumcamp.com/archive/selenium-camp-2012/materials/migration/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          youtube="8ttVa0NxPvA"
        />
      </PresentationYear>
      <PresentationYear year="2011">
        <PresentationItem
          title="How to automate Flex application with Selenium RC"
          link="https://seleniumcamp.com/archive/selenium-camp-2011/materials/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          youtube="Owtsn117cO4"
        />
      </PresentationYear>
      <PresentationYear year="2010">
        <PresentationItem
          title="Who should write automated tests?"
          location="Minsk, Belarus"
          conference="SEF"
          slideshare="idMr6jRfkgk2vK"
        />
      </PresentationYear>
    </div>
  </section>
);

export default presentations;
