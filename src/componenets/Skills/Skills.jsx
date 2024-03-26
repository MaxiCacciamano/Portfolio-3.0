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
        <Card className="hover" title="JavaScript" experience="2 años"  logo={<JSLogo/>}/>
        <Card className="hover" title="Html" experience="2 años"  logo={<HTML/>}/>
        <Card className="hover" title="Css" experience="2 años"  logo={<CSS3/>}/>
        <Card className="hover" title="Boostrap" experience="2 años"  logo={<Boostrap/>}/>
        <Card className="hover" title="Sequelize" experience="2 años"  logo={<Sequelize/>}/>
        <Card className="hover" title="React" experience="2 años"  logo={<React/>}/>
        <Card className="hover" title="Redux" experience="2 años"  logo={<Redux/>}/>
        <Card className="hover" title="NodeJs" experience="2 años"  logo={<Nodejs/>}/>
        <Card className="hover" title="ExpresJs" experience="2 años"  logo={<Expresjs/>}/>
        <Card className="hover" title="MongoDb" experience="2 años"  logo={<MongoDb/>}/>
        <Card className="hover" title="TypeScript" experience="2 años"  logo={<Typescript/>}/>
        <Card className="hover" title="Sass" experience="2 años"  logo={<Sass/>}/>
        <Card className="hover" title="PostgreSQL" experience="2 años"  logo={<PostgreSQL/>}/>
        <Card className="hover" title="Git" experience="2 años"  logo={<Git/>}/>
        <Card className="hover" title="GitHub" experience="2 años"  logo={<GitHub/>}/>
        <Card className="hover" title="WordPress" experience="2 años"  logo={<Wordpress/>}/>
        <Card className="hover" title="Scrum" experience="2 años"  logo={<Scrum/>}/>
        <Card className="hover" title="SQLserver" experience="2 años"  logo={<Sqlserver/>}/>
        <Card className="hover" title="C#" experience="2 años"  logo={<C/>}/>
        <Card className="hover" title=".Net" experience="2 años"  logo={<Net/>}/>
        <Card className="hover" title="NextJs" experience="2 años"  logo={<Nextjs/>}/>
        <Card className="hover" title="Tailwind" experience="2 años"  logo={<J/>}/>
        <Card className="hover" title="JavaScript" experience="2 años"  logo={<JSLogo/>}/>
        <Card className="hover" title="JavaScript" experience="2 años"  logo={<JSLogo/>}/>
    </div>
  )
}
