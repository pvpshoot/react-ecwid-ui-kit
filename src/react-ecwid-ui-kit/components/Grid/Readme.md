For layout composition i prefer to use `react-flexbox-grid`.

You can find documentation about it [here](https://github.com/roylee0704/react-flexbox-grid)

# !!! Important:

The recommended way to use react-flexbox-grid is with a tool like webpack or Meteor, make sure you set it up to support requiring CSS files. For example, the minimum required loader configuration for webpack would look like this:
```javascript
{
  test: /\.css$/,
  loader: 'style-loader!css-loader',
  include: /flexboxgrid/
}
```
react-flexbox-grid imports the styles from flexboxgrid, that's why we're configuring the loader for it.

```
const { Grid, Row, Col } = require('./');
<Grid fluid>
  <Row>
    <Col xs={6} md={3}>
      Hello, world!
    </Col>
  </Row>
</Grid>
```

```
const { Grid, Row, Col } = require('./');
const debug = {
  minHeight: 50,
  marginBottom: 20,
  background: '#04a2ca',
};

<Grid fluid>
  <Row>
    <Col type="row" xs={12} sm={3} md={2} lg={1}><div style={debug}/></Col>
    <Col type="row" xs={6} sm={6} md={8} lg={10}> <div style={debug}/> </Col>
    <Col type="row" xs={6} sm={3} md={2} lg={1}> <div style={debug}/> </Col>
  </Row>
  <Row>
    <Col type="row" xs={12} sm={3} md={2} lg={1}><div style={debug}/></Col>
    <Col type="row" xs={12} sm={9} md={10} lg={11}><div style={debug}/></Col>
  </Row>
  <Row>
    <Col type="row" xs={10} sm={6} md={8} lg={10}><div style={debug}/></Col>
    <Col type="row" xs={2} sm={6} md={4} lg={2}><div style={debug}/></Col>
  </Row>
</Grid>
```
