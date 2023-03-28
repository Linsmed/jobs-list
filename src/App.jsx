import React, { useState, useEffect } from 'react';
import './App.css';
import data from '../data.json';
import Card from './components/Card';
import Filter from './components/Filter';
import Clear from './components/Clear';
import Header from './components/Header';
import Modal from './components/Modal';
import { reduce } from 'lodash';
import './App.css';
data.map((job) => {
  job.filters = [job.role, job.level];
  job.filters = job.filters.concat(job.languages, job.tools);
  return job;
});
function App() {
  const [pickFilters, setPickFilters] = useState([]);
  const [lastJob, setLastJob] = useState(data);
  const [jobClicked, setJobClicked] = useState('');
  useEffect(() => {
    if (pickFilters.length > 0) {
      handleData();
    } else {
      dj;
    }
  }, [pickFilters]);
  return (
    <>
      <main className="font-spartan relative">
        {jobClicked.length > 0 && (
          <div
            onClick={() => {
              setJobClicked('');
            }}
            className="overflow-auto scrollbar-hide z-10 fixed w-screen h-screen lg:px-40 px-10 py-20 drop-shadow-2xl bg-black bg-opacity-75"
          >
            <div
              className="mx-auto max-w-7xl"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div>
                <Modal jobClicked={jobClicked} setJobClicked={setJobClicked} />
              </div>
            </div>
          </div>
        )}
        <Header />
        <section className="bg-lightCyan h-full pt-12">
          {pickFilters.length > 0 && (
            <div className=" max-w-7xl mx-auto sm:px-20 px-5 -mt-14 lg:mb-0 mb-5">
              <div className="bg-white rounded-md">
                <div className="flex sm:justify-between justify-around px-4 py-1 items-center">
                  <div className="flex flex-wrap">
                    {pickFilters.map((filter, index) => {
                      <Filter
                        key={index}
                        filter={filter}
                        handleRemove={handleRemove}
                      />;
                    })}
                  </div>
                  <Clear clearFilters={clearFilters} />
                </div>
              </div>
            </div>
          )}
          {lastJob.map((jobs, index) => {
            <Card
              key={index}
              jobs={jobs}
              setJobClicked={setJobClicked}
              handleFilter={handleFilter}
            />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
