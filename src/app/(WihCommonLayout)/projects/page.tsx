import React from "react";

const ProjectPage = () => {
  return (
    <div className="px-8 md:px-16 lg:px-24 mb-24">
      <div className="text-center mb-16">
        <p className="text-2xl text-blue-500">Portfolio</p>
        <h1 className="text-5xl font-bold">My Recent Work</h1>
      </div>
      <div>
        <div className="flex w-full flex-col">
          <div className="card bg-base-200 rounded-box grid h-20 place-items-center">
            content
          </div>
          <div className="divider"></div>
          <div className="card bg-base-200 rounded-box grid h-20 place-items-center">
            content
          </div>
          <div className="divider"></div>
          <div className="card bg-base-200 rounded-box grid h-20 place-items-center">
            content
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
