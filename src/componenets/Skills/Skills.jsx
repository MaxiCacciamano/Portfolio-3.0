import { Card } from './Card'
import JSLogo from './svg/js.jsx';
import HTML from './svg/Html.jsx'
import './card.css'
import CSS3 from './svg/css.jsx';
import Boostrap from './svg/Boostrap.jsx';
import Sequelize from './svg/Sequelize.jsx';
import React from './svg/React.jsx';
import Redux from './svg/Redux.jsx';
import Nodejs from './svg/Nodejs.jsx';
import Expresjs from './svg/Expresjs.jsx';
import MongoDb from './svg/MongoDb.jsx';
import Typescript from './svg/Typescript.jsx';
import Sass from './svg/Sass.jsx';
import PostgreSQL from './svg/Postgresql.jsx';
import Git from './svg/Git.jsx';
import GitHub from './svg/Github.jsx';
import Wordpress from './svg/Wordpress.jsx';
import Scrum from './svg/Scrum.jsx';
import Sqlserver from './svg/Sqlserver.jsx';
import C from './svg/C.jsx';
import Net from './svg/Net.jsx';
import Nextjs from './svg/Nextjs.jsx';
import J from './svg/j.jsx';

export const Skills = () => {
  return (
    <div className="skills">
        <Card className="hover" title="JavaScript" experience="2 years"  logo={<JSLogo/>}/>
        <Card className="hover" title="Html" experience="2 years"  logo={<HTML/>}/>
        <Card className="hover" title="Css" experience="2 years"  logo={<CSS3/>}/>
        <Card className="hover" title="Boostrap" experience="2 years"  logo={<Boostrap/>}/>
        <Card className="hover" title="Sequelize" experience="2 years"  logo={<Sequelize/>}/>
        <Card className="hover" title="React" experience="2 years"  logo={<React/>}/>
        <Card className="hover" title="Redux" experience="2 years"  logo={<Redux/>}/>
        <Card className="hover" title="NodeJs" experience="2 years"  logo={<Nodejs/>}/>
        <Card className="hover" title="ExpresJs" experience="2 years"  logo={<Expresjs/>}/>
        <Card className="hover" title="MongoDb" experience="2 years"  logo={<MongoDb/>}/>
        <Card className="hover" title="TypeScript" experience="2 years"  logo={<Typescript/>}/>
        <Card className="hover" title="Sass" experience="2 years"  logo={<Sass/>}/>
        <Card className="hover" title="PostgreSQL" experience="2 years"  logo={<PostgreSQL/>}/>
        <Card className="hover" title="Git" experience="2 years"  logo={<Git/>}/>
        <Card className="hover" title="GitHub" experience="2 years"  logo={<GitHub/>}/>
        <Card className="hover" title="WordPress" experience="2 years"  logo={<Wordpress/>}/>
        <Card className="hover" title="Scrum" experience="2 years"  logo={<Scrum/>}/>
        <Card className="hover" title="SQLserver" experience="2 years"  logo={<Sqlserver/>}/>
        <Card className="hover" title="C#" experience="2 years"  logo={<C/>}/>
        <Card className="hover" title=".Net" experience="2 years"  logo={<Net/>}/>
        <Card className="hover" title="NextJs" experience="2 years"  logo={<Nextjs/>}/>
        <Card className="hover" title="Tailwind" experience="2 years"  logo={<J/>}/>
        <Card className="hover" title="JavaScript" experience="2 years"  logo={<JSLogo/>}/>
        <Card className="hover" title="JavaScript" experience="2 years"  logo={<JSLogo/>}/>
    </div>
  )
}
