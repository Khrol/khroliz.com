import React from 'react';
import PresentationItem from './PresentationItem';
import PresentationYear from './PresentationYear';

const presentations = () => (
  <section id="presentations">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>My Public Presentations</h1>
        <p style={{ textAlign: 'center' }}>Most of them are in Russian.</p>
      </div>
      <PresentationYear year="2019">
        <PresentationItem
          title="Big Data Testing"
          details="http://qaasp.tech/igor-khrol"
          location="Minsk, Belarus"
          conference="QAASP"
          // eslint-disable-next-line max-len
          previewLink="https://docs.google.com/presentation/d/e/2PACX-1vQ69CxeXTS4h4b59US5vrHoCJYqGEySfwqAsxLMy2d7pt-VbdC7wfAuMaywwXLi4fwxUyX0GTF5zvzY/embed"
        />
        <PresentationItem
          title="Monads for Testers"
          details="https://seleniumcamp.com/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          previewLink="https://www.youtube.com/embed/djJIi7RGqjk?rel=0"
        />
        <PresentationItem
          title="Monads for Testers"
          details="http://delex-conf.com/"
          location="Minsk, Belarus"
          conference="DelEx"
          // eslint-disable-next-line max-len
          previewLink="https://docs.google.com/presentation/d/e/2PACX-1vToOdhETvsxsR7Eu0fCiJZggBY4Q7U55W-54fm75iJ0FVgEzY6uNgf6y1MGR7llNJqKnatpK7oFzPrV/embed"
        />
      </PresentationYear>
      <PresentationYear year="2018">
        <PresentationItem
          title="Testing artificial intelligence: which side to approach?"
          details="https://item.com.ua/en#!/tproduct/67151017-1534030289949"
          location="Dnipro, Ukraine"
          conference="ITEM"
          previewLink="https://www.youtube.com/embed/WTXin9dQ6w4?rel=0"
        />
        <PresentationItem
          title="How to test Artificial Intelligence and Machine Learning solutions?"
          details="http://qmoconference.com/Archive/2018_04/index.html"
          location="Lviv, Ukraine"
          conference="QMO Converence"
          previewLink="https://www.youtube.com/embed/JUlpxTXdOY0?rel=0"
        />
        <PresentationItem
          title="How to test Machine Learning solutions?"
          details="https://2018.secon.ru/reports/kak-testirovat-sistemy-mashinnogo-obucheniya"
          location="Penza, Russia"
          conference="SECON"
          previewLink="https://www.youtube.com/embed/oDIATBzasG4?rel=0"
        />
        <PresentationItem
          title="How to test Artificial Intelligence and Machine Learning solutions?"
          details="https://seleniumcamp.com/talk/how-to-test-artificial-intelligence-and-machine-learning-solutions/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          previewLink="https://www.youtube.com/embed/ztG3RD3ozxE?rel=0"
        />
        <PresentationItem
          title="How to test Artificial Intelligence and Machine Learning solutions?"
          details="http://delex-conf.com/"
          location="Minsk, Belarus"
          conference="DelEx"
          previewLink="https://www.youtube.com/embed/SNBrP8JQthk?rel=0"
        />
      </PresentationYear>
      <PresentationYear year="2017">
        <PresentationItem
          title="Data Warehouse in Google Cloud"
          details="https://dfua17.firebaseapp.com/schedule/day1?sessionId=148"
          location="Lviv, Ukraine"
          conference="GDG Lviv"
          previewLink="https://www.youtube.com/embed/6I870Dq2YoA?rel=0"
          language="ENG"
        />
        <PresentationItem
          title="Who should write automated tests?"
          details="http://qafest.com/qafest2017/"
          location="Kyiv, Ukraine"
          conference="QA Fest"
          previewLink="https://www.youtube.com/embed/HbEceyiHrmM?rel=0"
        />
        <PresentationItem
          title="Testing in Data World"
          location="Lviv, Ukraine"
          conference="BAQ Conference"
          // eslint-disable-next-line max-len
          previewLink="https://docs.google.com/presentation/d/e/2PACX-1vT5X07r1MWo04DWKfrIyKKgLpj83o2qxOem_5IJqo8U6TfjGqOrf9FbxasPvP1uFjV_VeKT_Cuv883d/embed"
        />
        <PresentationItem
          title="Testing in Data World"
          details="http://2017.heisenbug-piter.ru/en/talks/4cxymnehiaaysuims0weau/"
          location="Saint Petersburg, Russia"
          conference="Heisenbug"
          previewLink="https://www.youtube.com/embed/bny86gxbUcg?rel=0"
        />
        <PresentationItem
          title="Testing in Data World"
          details="https://comaqa.by/2017/05/25/testing-in-the-data-world/"
          location="Minsk, Belarus"
          conference="COMAQA Spring 2017"
          previewLink="https://www.youtube.com/embed/nFpZQOrZQfw?rel=0"
        />
      </PresentationYear>
      <PresentationYear year="2016">
        <PresentationItem
          title="Test Automation: Do the Same but Better"
          details="http://2016.heisenbug-moscow.ru/en/talks/avtotesty-takie-zhe-no-luchshe/"
          location="Moscow, Russia"
          conference="Heisenbug"
          previewLink="https://www.youtube.com/embed/JYY_52DTJqs?rel=0"
        />
        <PresentationItem
          title="Test Automation: Do the Same but Better"
          details="https://comaqa.by/2016/11/20/comaqa-autumn-2016-igor-khrol/"
          location="Minsk, Belarus"
          conference="COMAQA Autumn 2016"
          previewLink="https://www.youtube.com/embed/NioKI_ymVJA?rel=0"
        />
        <PresentationItem
          title="Test Automation: Do the Same but Better"
          details="https://www.testcon.lt/2016/"
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
          details="https://seleniumcamp.com/talk/good-tests-change-your-application/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          previewLink="https://www.youtube.com/embed/joi_vmNLYtk?rel=0"
        />
        <PresentationItem
          title="How to do tests quick and improve development efficiency"
          details="http://agile.by/2016/01/11/agile-by-gathering-23-yanvarya"
          location="Minsk, Belarus"
          conference="Agile.by Gathering"
          previewLink="https://www.slideshare.net/slideshow/embed_code/key/NwEe66AAKwnCW0"
        />
      </PresentationYear>
      <PresentationYear year="2015">
        <PresentationItem
          title="Who is a tester in Agile?"
          details="http://qafest.com/qafest2015/"
          location="Kyiv, Ukraine"
          conference="QA Fest"
          previewLink="https://www.youtube.com/embed/s4uSeWUDz_w?rel=0"
        />
        <PresentationItem
          title="Test Automation: throw away redundant and test the point"
          details="http://qafest.com/qafest2015/"
          location="Kyiv, Ukraine"
          conference="QA Fest"
          previewLink="https://www.youtube.com/embed/ZC_GH4AANqc?rel=0"
        />
        <PresentationItem
          title="Test Automation: throw away excess and check the point"
          details="https://comaqa.by/2015/09/16/conf2-extra/"
          location="Minsk, Belarus"
          conference="COMAQA.BY Conf #2"
          previewLink="https://www.youtube.com/embed/w1hjnphkACA?rel=0"
        />
        <PresentationItem
          title="Test Automation: Available for Everyone or The Destiny of The Elite?"
          details="https://sqadays.com/en/talk/33559"
          location="Minsk, Belarus"
          conference="SQA Days-17"
          previewLink="https://player.vimeo.com/video/130289554"
        />
        <PresentationItem
          title="Grail: steps for your Python-tests"
          details="https://habr.com/company/wargaming/blog/259619/"
          location="Minsk, Belarus"
          conference="Python Meetup"
          previewLink="https://www.youtube.com/embed/KVlUfJIOc5E?rel=0"
        />
        <PresentationItem
          title="Grail: steps for your Python-tests"
          details="https://2015.codefest.ru/lecture/989"
          location="Novosibirsk, Russia"
          conference="CodeFest"
          previewLink="https://www.youtube.com/embed/T5nz0Gwr1b8?rel=0"
        />
        <PresentationItem
          title="Webium: Page Objects in Python"
          details="https://seleniumcamp.com/talk/webium-page-objects-in-python/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          previewLink="https://www.youtube.com/embed/XrL1BLgkKyA?rel=0"
        />
      </PresentationYear>
      <PresentationYear year="2014">
        <PresentationItem
          title="Modern QA: let's do it quickly"
          location="Minsk, Belarus"
          conference="SEF.BY to Students"
          previewLink="//www.slideshare.net/slideshow/embed_code/key/NZ6ewYgs0bpYYh"
        />
        <PresentationItem
          title="Increase Selenium tests stability via JavaScript"
          // eslint-disable-next-line max-len
          details="https://confengine.com/selenium-conf-2014/proposal/335/increase-selenium-tests-stability-via-javascript"
          location="Bangalore, India"
          conference="SeleniumConf"
          previewLink="https://www.youtube.com/embed/GvRA9VAA9rw?rel=0"
          language="ENG"
        />
        <PresentationItem
          title="WG Talks for Students"
          location="Minsk, Belarus"
          conference="SEF.BY to Students"
          previewLink="//www.slideshare.net/slideshow/embed_code/key/NZ6ewYgs0bpYYh"
        />
        <PresentationItem
          title="Test Automation: throw away excess and check the point"
          details="https://sqadays.com/en/talk/19552"
          location="Moscow, Russia"
          conference="SQA Days-15"
          previewLink="https://player.vimeo.com/video/93944414"
        />
        <PresentationItem
          title="Increase Selenium tests stability via JavaScript"
          details="https://seleniumcamp.com/archive/selenium-camp-2014/materials/js-with-selenium/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          previewLink="//www.slideshare.net/slideshow/embed_code/key/pska2KeSlEFozi"
        />
      </PresentationYear>
      <PresentationYear year="2013">
        <PresentationItem
          title="Increase Selenium tests stability via JavaScript"
          details="http://confetqa.ru/program-selen/#khrol"
          location="Online"
          conference="Selen ConfeT&QA, Autumn 2013"
          previewLink="https://www.youtube.com/embed/moclYbCXMPM?rel=0"
        />
        <PresentationItem
          title="Why test automation projects are failing?"
          details="http://www.tapost.org/tapost-2013/"
          location="Riga, Latvia"
          conference="TAPOST"
          previewLink="//www.slideshare.net/slideshow/embed_code/key/wkuxXZANC83hoR"
          language="ENG"
        />
        <PresentationItem
          title="Can we rotate the pyramid? Automate tests with less number of middlemen."
          details="http://confetqa.ru/auto-confetqa-vesna-2013/#khrol"
          location="Online"
          conference="Auto ConfeT&QA, Spring 2013"
          previewLink="https://www.youtube.com/embed/ZentmPn0_pg?rel=0"
        />
        <PresentationItem
          title="WebDriver: Usual Mistakes of Beginners"
          details="https://seleniumcamp.com/archive/selenium-camp-2013/materials/mistakes-of-beginners/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          previewLink="https://www.youtube.com/embed/LtTmki_75vg?rel=0"
        />
      </PresentationYear>
      <PresentationYear year="2012">
        <PresentationItem
          title="Why test automation projects are failing?"
          details="https://sqadays.com/ru/talk/7627"
          location="Minsk, Belarus"
          conference="SQA Days-12"
          previewLink="https://www.youtube.com/embed/SgGH9V4LB5s?rel=0"
        />
        <PresentationItem
          title="Sikuli – tool to automate GUI applications"
          details="http://confetqa.ru/auto-confetqa-vesna-2012/#hrol"
          location="Online"
          conference="Auto ConfeT&QA, Spring 2012"
          previewLink="https://www.youtube.com/embed/LD6ZRKdlRHA?rel=0"
        />
        <PresentationItem
          title="WebDriver: One Migration History"
          details="https://seleniumcamp.com/archive/selenium-camp-2012/materials/migration/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          previewLink="https://www.youtube.com/embed/8ttVa0NxPvA?rel=0"
        />
      </PresentationYear>
      <PresentationYear year="2011">
        <PresentationItem
          title="How to automate Flex application with Selenium RC"
          details="https://seleniumcamp.com/archive/selenium-camp-2011/materials/"
          location="Kyiv, Ukraine"
          conference="SeleniumCamp"
          previewLink="https://www.youtube.com/embed/Owtsn117cO4?rel=0"
        />
      </PresentationYear>
      <PresentationYear year="2010">
        <PresentationItem
          title="Who should write automated tests?"
          location="Minsk, Belarus"
          conference="SEF"
          previewLink="//www.slideshare.net/slideshow/embed_code/key/idMr6jRfkgk2vK"
        />
      </PresentationYear>
    </div>
  </section>
);

export default presentations;
