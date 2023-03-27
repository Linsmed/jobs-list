import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Filter({ job, currentItem, setCurrentItem, id, index }) {
  return (
    <Card>
      <div key={id}>
        <span className="d-flex justify-content-start">
          <Button onClick={() => setCurrentItem(id)}>Frontend</Button>
          <Button onClick={() => setCurrentItem(index)}>css</Button>
          <Button onClick={() => setCurrentItem(index)}>javaScript</Button>
        </span>
        <a className="d-flex justify-content-end">clear</a>
      </div>
    </Card>
  );
}

export default Filter;
