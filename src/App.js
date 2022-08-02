import React, { useState } from 'react';
import './App.css';
import { Layout, Avatar, Menu, /*Icon */ Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { UserProfile, ODICareer, Batting, Bowling, TestCareer } from './UserProfile';
import CareerDetails from './CareerDetails';
// import {name as userName1 , country as userCountry1 , age as userAge1 , born as userBorn1 , profession as UserProfession1 , activity as userActivity1 } from "./Daniel_Makonski.json"
// import {name as userName2 , country as userCountry2 , age as userAge2 , born as userBorn2 , profession as UserProfession2 , activity as userActivity2 } from  "./Andrew_Rubert.json"

import { User1 } from './Andrew_Rubert';
import { User2 } from './Daniel_Makonski';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [visible, setVisible] = useState(false);
  const onSelect = name => {
    setSelectedPlayer(name);
    setVisible(true);
  }
  const ViewProfileButton = ({name}) => {
    return <Button type='dashed' style={{float:'right'}} onClick={()=>onSelect(name)}> View Full Profile >> </Button>
  }

  const onClose = () => setVisible(false);
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
          <Title style={{ color: 'white' }} level={3}>User Dasboard Design</Title>
        </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
              <SubMenu
                title={
                  <span>
                    {/* <Icon type="mail" /> */}
                    <span>About US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Country 1'>
                  <Menu.Item key='location1'> Location 1</Menu.Item>
                  <Menu.Item key='location2'> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>

                <UserProfile name={User1.name} country={User1.country} avatarSrc='./USER2.PNG'>
                  <ODICareer matches='239' >
                    <Batting runs='11,520' score='183' />
                    <br></br>
                    <Bowling wickets='4' bowlingAvg='166.25' />
                  </ODICareer>
                  <TestCareer matches=' 79' >
                    <Batting runs='6,749' score='243' />
                  </TestCareer>
                  <ViewProfileButton name={User1.name}/>
                </UserProfile>

                <UserProfile name={User2.name} country={User2.country} avatarSrc='./USER1.PNG'>
                  <TestCareer matches='12' >
                    <Bowling wickets='62' bowlingAvg='20.63' />
                  </TestCareer>
                  <ViewProfileButton name={User2.name}/>
                </UserProfile>
              </div>
            </Content>
            <CareerDetails player={selectedPlayer} visible={visible} onClose={onClose} />
            <Footer style={{ textAlign: 'center' }}>User Dashboard Design created by Teslaru Roland</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
