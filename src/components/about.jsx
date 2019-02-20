import React, { Component } from "react";
import posed from "react-pose";

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

class About extends Component {
  state = {};
  render() {
    return (
      <Container className="about">
        <h1>About</h1>
        <P>
          When all the other students at Art College submitted paintings and
          drawings for their final projects, I built a "virtual bank" using
          Macromedia Director and its Lingo scripting language, and presented it
          on an Apple Power Macintosh 5400. This was in 1996, before any bank in
          the UK was offering online banking. The idea came from my father, who
          has always been a pioneer.
        </P>
        <P>
          After graduating from college, while working as a junior graphic
          designer at my fathers design agency, I tagged along with some of the
          nerds around the office, and started learning HTML. We used the newly
          released Internet Explorer 3 (the first browser to support CSS), and
          Netscape 4, and built stuff using HoTMetaL, FrontPage, and
          Dreamweaver. I started off converting techinical manuals for British
          Telecom (the agency's main client) to HTML format. Raw HTML tables,
          and more tables, and more tables.
        </P>
        <P>
          It wasn't long before I discovered Perl and CGI scripting, and thanks
          to Matt's script archive, a powerful new world opened up. Perl for
          dummies became my bedtime reading.
        </P>
        <P>
          During a family vacation to America in 2000, I picked a book on ASP
          3.0 (it wasnt 'classic' at the time), and VBScript became my new
          passion. That lead me to work with databases and T-SQL, using
          Microsoft Access and eventually SQL Server.
        </P>
        <P>
          My fathers design agency was now solely focused on website design, and
          I was on my way to becoming it's best developer. I built the first
          content management system anyone had ever seen, using ASP and an
          Access Database.
        </P>
        <P>
          Over the 10 years the agency was aquired 3 times, and was finally
          scooped up by Razorfish (one of the worlds largest interactive
          agencies) in 1999. We collectively decided we didn't like their style
          and 10 of us quit so we could start a fresh new web design agency.
        </P>
        <P>
          I remember building a boilerplate project called "Starting Point", it
          was like what Bootstrap is today, but this was way before Github,
          Sourceforge was the only place to share code. Yuck.
        </P>
        <P>
          After around 14 years and a few hundred websites later, and having
          moved onto Microsoft VB.NET, I decided to call it a day and start a
          fresh in London.
        </P>
        <P>
          Next came 4 years of being a tech lead for a small team of front end
          developers working in fintech, working with Adobe CQ5 (now AEM), and
          then I accepted the offer of becoming website manager at a fintech
          startup in Chicago, USA.
        </P>
        <P>
          Four years of Chicago winter was enough for my wife and kids, and I.
          So since August 2018 I have been working remotely from our beautiful
          new home in Dallas, Texas.
        </P>
        <P>
          Over the past 21 years, technologies have come and gone, but the
          underlying HTML, CSS and JavaScript have been there all along. One
          thing that hasnt changed is the passion I have for this job.
        </P>
        <P>
          These days I keep my hands very dirty in all the code, just the way I
          like it. I can call myself a full stack developer because of the story
          above and the list below, its most of the tech that I can remember
          using, but I'm sure theres more...
        </P>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Lingo</li>
          <li>Windows</li>
          <li>Perl</li>
          <li>Apache</li>
          <li>Active Server Pages</li>
          <li>IIS</li>
          <li>XML</li>
          <li>XLS</li>
          <li>OSX</li>
          <li>T-SQL</li>
          <li>Microsoft Access</li>
          <li>Microsoft SQL Server</li>
          <li>VB.NET</li>
          <li>Visual Studio</li>
          <li>Action Script</li>
          <li>MooTools</li>
          <li>jQuery</li>
          <li>Backbone</li>
          <li>AppleScript</li>
          <li>Python</li>
          <li>Eclipse</li>
          <li>Postgres</li>
          <li>Linux</li>
          <li>Bash</li>
          <li>Objective-C</li>
          <li>JSP</li>
          <li>Git</li>
          <li>React</li>
          <li>SSH</li>
          <li>Bootstrap</li>
          <li>Visual Studio Code</li>
          <li>PHP</li>
          <li>Composer</li>
          <li>MySQL</li>
          <li>LESS</li>
          <li>DNS</li>
          <li>Gulp</li>
          <li>Webpack</li>
          <li>NPM</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>REST</li>
          <li>Wordpress</li>
          <li>Drupal</li>
          <li>Adobe AEM</li>
          <li>SASS</li>
        </ul>
      </Container>
    );
  }
}

export default About;
