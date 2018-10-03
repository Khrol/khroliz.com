import React from 'react';
import PresentationItem from './PresentationItem';
import PresentationYear from './PresentationYear';

const presentations = () => (
    <section id="presentations">
        <div className="row">
            <div className="twelve columns collapsed">
                <h1>My Public Presentations</h1>
                <p style={{textAlign: 'center'}}>Most of them are in Russian.</p>
            </div>
            <PresentationYear year="2018">
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
            </PresentationYear>
        </div>
    </section>
);

export default presentations;
