import React from 'react'
import {ListOfHackers} from '../../components/ListOfHackers'
import {Row, Col, Input, Cascader, Button} from 'antd';
const options = [
    {
      value: '1',
      label: 'Web Development',
    },
    {
      value: '2',
      label: 'Mobile Development',
    }
  ];
export const RegisterTeam = ()=>{

    return(
        <>
        <Row gutter={12}>
      <Col span={12}><Input placeholder="Team's Name" /></Col>
      <Col span={12}><Cascader options={options} placeholder="Category" /></Col>
    </Row>
    <Row>
<ListOfHackers></ListOfHackers>
    </Row>
    <br/>
    <Row>
    <Button type="primary" style={{width:'100%'}}>Register</Button>
    </Row>
    <br/>
<Row>

    <Button type="dashed" style={{width:'100%'}}>Clear</Button>
</Row>


        </>
    )
}