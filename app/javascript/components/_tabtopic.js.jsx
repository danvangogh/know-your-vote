import React from 'react';

import Tabs from './Tabs';

const TabTopic = () => (
  <div>
    <h1>Topic 1</h1>
    <Tabs>
      <div label="FACT">
        <br />
        <h3>THE &lsquo;WHAT&rsquo;</h3>
        <p>
          These enemies must be found. Our conscience cannot rest so long as nearly 45 million Americans don&apos;t have health insurance and the millions more who do are going bankrupt trying to pay for it. But it also means binding our particular grievances - for better health care, and better schools, and better jobs - to the larger aspirations of all Americans - the white woman struggling to break the glass ceiling, the white man whose been laid off, the immigrant trying to feed his family. But if we see this conflict only from one side or the other, then we will be blind to the truth: the only resolution is for the aspirations of both sides to be met through two states, where Israelis and Palestinians each live in peace and security.

          And the lack of basic services in so many urban black neighborhoods - parks for kids to play in, police walking the beat, regular garbage pick-up and building code enforcement - all helped create a cycle of violence, blight and neglect that continue to haunt us. Indeed, none of us should tolerate these extremists.
        </p>
        <h4>THE &lsquo;GOOD&rsquo;</h4>
        <p>
          The fact is that the comments that have been made and the issues that have surfaced over the last few weeks reflect the complexities of race in this country that we&apos;ve never really worked through - a part of our union that we have yet to perfect. And occasionally it finds voice in the church on Sunday morning, in the pulpit and in the pews. And that&apos; to be expected.

          We are one people, all of us pledging allegiance to the stars and stripes, all of us defending the United States of America. Wright deliver a sermon called &ldquo;The Audacity of Hope.&rdquo; And during the course of that sermon, he introduced me to someone named Jesus Christ.
        </p>
        <h4>THE &lsquo;BAD&rsquo;</h4>
        <p>
          And I&apos;ve found that no matter where I am, or who I&apos;m talking to, there&apos;s a common theme that emerges. I&apos;ll recruit an army of new teachers, and pay them higher salaries and give them more support. Together, you represent the harmony between tradition and progress. Violent extremists have exploited these tensions in a small but potent minority of Muslims. That is the responsibility we have to one another as human beings. Given our interdependence, any world order that elevates one nation or group of people over another will inevitably fail.
        </p>
      </div>
      <div label="OPINIONS">
        <div className="card">
          <div className="card-header">
            Quote
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>And I&apos;ve found that no matter where I am, or who I&apos;m talking to, there&apos;s a common theme that emerges. I&apos;ll recruit an army of new teachers, and pay them higher salaries and give them more support. </p>
              <footer className="blockquote-footer">
                Obama
                <cite title="Source Title"> CBC News</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Quote
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Together, you represent the harmony between tradition and progress. Violent extremists have exploited these tensions in a small but potent minority of Muslims. That is the responsibility we have to one another as human beings. Given our interdependence, any world order that elevates one nation or group of people over another will inevitably fail.</p>
              <footer className="blockquote-footer">
                Trudeau
                <cite title="Source Title"> Twitter</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </Tabs>
  </div>
);

export default TabTopic;
