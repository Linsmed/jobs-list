import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import data from '../components/Data';
import img1 from '../components/images/photosnap.svg';
import Button from 'react-bootstrap/Button';

export const Job = () => {
  const [person, setPerson] = useState(data);
  return (
    <>
      {person.map((item) => {
        const { id, logo, company, position, postedAt, contract, location } =
          item;
        return (
          <>
            <Card body key={id}>
              <div>
                <img src={img1} />

                <Card.Link href="#">{company}</Card.Link>
                <Button className="btn-success">New</Button>
                <Button className="btn-dark">Featured</Button>
                <div>
                  <b>{position}</b>
                </div>
                <div>
                  <p>{postedAt}</p>
                </div>
              </div>
              <div>
                <Card.Link href="#">senior</Card.Link>
                <Card.Link href="#">html</Card.Link>
                <Card.Link href="#">css</Card.Link>
                <Card.Link href="#">javascript</Card.Link>
              </div>
            </Card>
          </>
        );
      })}
      ;
    </>
  );
};
