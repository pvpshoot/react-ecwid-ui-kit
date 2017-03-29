import React, { Component } from 'react';

import {
  Button,
  Input,
  RadioGroup,
  CheckBox,
  Select,
  Icon,
  Link,
} from './react-ecwid-ui-kit/components';


import './App.css';

const TEST_DATA = [
  {
    value: 1,
    label: 'Label',
  },
  {
    value: 2,
    note: 'with note',
  },
  {
    value: 3,
    disabled: true,
  },
  {
    value: 4,
    checked: true,
  },
];

class App extends Component {

  click = () => alert(123);
  render() {
    return (
      <div className="wrapper normalized">
        <h2>Buttons: </h2>
        <p>
          <Button onPress={this.click}>Default</Button>
          <Button type="alt">alt</Button>
          <Button type="primary">primary</Button>
          <Button type="info-light">info-light</Button>
          <Button type="warning">warning</Button>
        </p>
        <p>
          <Button inProgress onPress={this.click}>Default</Button>
          <Button inProgress type="alt">alt</Button>
          <Button inProgress type="primary">primary</Button>
          <Button inProgress type="info-light">info-light</Button>
          <Button inProgress type="warning">warning</Button>
        </p>

        <h2>Form: </h2>
        <div style={{ width: '50%' }}>
          <Input type="search" onChange={console.log} />
          <Input type="search" onChange={console.log} status="success" />
          <Input type="search" onChange={console.log} status="error" />
          <Input type="search" onChange={console.log} disabled />
          <Input type="search" onChange={console.log} group="@#$" />
          <Input type="search" onChange={console.log} suffix="suffix" prefix="prefix" />
        </div>

        <h2>Radio:</h2>
        <div >
          <RadioGroup dataList={TEST_DATA} onChange={console.log} />
        </div>
        <h2>Checkboxes:</h2>
        <div >
          <CheckBox name="one" onChange={console.log} />
          <CheckBox name="one" onChange={console.log} labelOn="LOL" labelOff="KEK" />
          <CheckBox name="one" onChange={console.log} disabled />
          <CheckBox name="one" onChange={console.log} size="tiny" />
        </div>
        <h2>Select:</h2>
        <div >
          <Select options={TEST_DATA} onChange={console.log} />
        </div>
        <h2>Icon:</h2>
        <div >
          <Icon name="customer_groups" />
        </div>
        <h2>Link:</h2>
        <div >
          <Link href="#">LINK</Link>
        </div>
      </div>
    );
  }
}


export default App;
