import MediaQuery from 'react-responsive';

const Example = () => (
  <div>
    <div>Device Test!</div>
    <MediaQuery maxWidth={575}>
      <div>
        <h2>{name}</h2>
        <Tabs>
          <div label="FACT">
            <br />
            <h3>THE &lsquo;WHAT&rsquo;</h3>
            <p>{description}</p>
            <h4>THE &lsquo;GOOD&rsquo;</h4>
            <p>{good}</p>
            <h4>THE &lsquo;BAD&rsquo;</h4>
            <p>{bad}</p>
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
    </MediaQuery>
    <MediaQuery minWidth={576}>
      <div className="container">
        <h2>{name}</h2>
        <div className="row">
          <div className="col-8">
            <h3>FACT</h3>
            <br />
            <h3>THE &lsquo;WHAT&rsquo;</h3>
            <p>{description}</p>
            <h4>THE &lsquo;GOOD&rsquo;</h4>
            <p>{good}</p>
            <h4>THE &lsquo;BAD&rsquo;</h4>
            <p>{bad}</p>
          </div>
          <div className="col-4">
            <h3>OPINIONS</h3>
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
        </div>
      </div>
    </MediaQuery>

  </div>
);