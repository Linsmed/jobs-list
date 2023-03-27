import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import data from '../components/Data';
import img1 from '../components/images/photosnap.svg';
import Button from 'react-bootstrap/Button';

export const Job = ({ currentItem, job }) => {
  const [person, setPerson] = useState(data);
  return (
    <>
      {person.map((item) => {
        const {
          id,
          logo,
          company,
          position,
          postedAt,
          contract,
          location,
          languages,
          role,
          level,
          tools,
        } = item;
        return (
          <div>
            <Card body key={id} style={{ width: '1440px' }} className="mb-5">
              <div>
                <div className="d-flex justify-content-start">
                  <img src={img1} />

                  <Card.Link href="# " className="mr-6 ml-6">
                    {company}
                  </Card.Link>
                  <Button className="btn btn-success btn-xs ml-3 mr-6">
                    New
                  </Button>
                  <Button className="btn-dark btn-xs ml-3 mr-6">
                    Featured
                  </Button>
                </div>

                <div>
                  <b className="d-flex justify-content-start">{position}</b>
                  <div className="d-flex justify-content-end">
                    <Button>{role}</Button>
                    <Button>{level}</Button>
                    <Button>{languages}</Button>
                    <Button>{tools}</Button>
                  </div>
                </div>
                <div>
                  <span className="d-flex justify-content-start">
                    <h6>{postedAt} .</h6>
                    <h6>{contract} .</h6>
                    <h6>{location} .</h6>
                  </span>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
      ;
    </>
  );
};
