import React from "react";
import HTML from "./../assets/html.png";
import CSS from "./../assets/css.png";
import JavaScript from "./../assets/javascript.png";
import react from "./../assets/react.png";
import git from "./../assets/github.png";
import tailwind from "./../assets/tailwind.png";
import mui from "./../assets/mui.png";
import typescript from "./../assets/typescript.png";
import SkillsIcons from "./SkillsIcons";

const Skills = () => {
  return (
    <div name="skills" className="w-full py-40 bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#fc5657] ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8">
          <SkillsIcons image={HTML} title="HTML" />
          <SkillsIcons image={CSS} title="CSS" />
          <SkillsIcons image={JavaScript} title="JavaScript" />
          <SkillsIcons image={react} title="React" />
          <SkillsIcons image={git} title="GitHub" />
          <SkillsIcons image={tailwind} title="Tailwind CSS" />
          <SkillsIcons image={mui} title="Material Ui" />
          {/* <SkillsIcons image={typescript} title="TypeScript" /> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
