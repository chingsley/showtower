import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import ProfileSectionHeader from './ProfileSectionHeader';

const Section = styled.section`
  // border: 1px solid red;

  .pp-about {
    &__description {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.164);
      border-radius: 5px;
      // color: #34495e;
      padding: 2rem;
      // font-size: 1.17vw;
      font-size: 0.95rem;
      // font-style: italic;
      font-family: montserrat;
      letter-spacing: 0.5px;
      line-height: 1.4;
      text-rendering: optimizeLegibility;
      font-smoothing: antialiased;
      -webkit-font-smoothing: antialiased;
      -moz-osx-fon-smoothing: grayscale;

      // &__quote:before,
      // &__quote:after {
      //   // border: 1px solid red;
      //   content: '"';
      //   font-size: 2rem;
      //   font-style: italic;
      //   font-weight: bold;
      // }
    }
    &__banner {
      padding: 2em;
      // background: rgb(249, 191, 63);
      // background: #fafbfc;
      background: #e9ecef;

      &__text {
        line-height: 1.5;
      }
      &__btn {
        // border: 1px solid black;
        // border-radius: 3px;
        padding: 0;
      }
    }
  }
`;

function ProfileMain() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section>
      <div className="pp-about">
        <ProfileSectionHeader title="Who Am I?" subtitle="About me" />
        <p
          className="pp-about__description"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <q className="pp-about__description__quote">
            I am a professional software engineer, a graduate of Nnamdi Azikiwe
            university with a degree in computer engineering, and an Alumni of
            Andela Fellowship. I have gotten core software engineering
            experience from different companies including Andela and Access
            Bank. In Andela I served as a technical coordinator in my team
            working to deliver high quality applications. In Access bank, I took
            on the role of a solutions architect and software developer where
            some of my notable projects include automation of account reporting
            and the Access payment gateway application. <br />
            While freelancing, I have worked on a number of exciting products
            both for professional and personal gain. Some of which include a
            Ship management application for the military, a customisable
            portfolio/cv application, Show Tower, that improves users’ chances
            of getting hired by recruiting managers, a crime/crisis reporting
            app called iReporter. My main stack is Javascript NodeJS with React,
            but I also have experience with Python flask.
            {/* <br /> I find it
            particularly interesting working on database designs having worked
            with a wide array of databases including but not limited to mongoDB,
            Postgres, mysql, mssql and sqlite3. I enjoy solving problems and I’m
            a frequent user of hackerrank and codility. Additionally I enjoy
            working with a team of smart professionals, bringing out the best in
            each other and working to provide an innovative solution to any form
            of challenges. */}
          </q>
        </p>
      </div>
    </Section>
  );
}

export default ProfileMain;
