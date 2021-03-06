// import React from "react";
// import { AppRegistry, Image, StatusBar, FlatList } from "react-native";
// import { Container, Content, Text, ListItem, List } from "native-base";
import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";
const routes = [
  {key: "Home", name:"Home", route:"Home"},
  {key: "Camera", name:"Camera", route:"Camera"},
  {key: "Profile", name:"Profile", route:"Profile"},
  {key: "Resource", name:"Resource", route:"Resource"}];

const coverPage = require('../../assets/coverpage.png')
export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }
  render() {
    return (
      <Container>
        <Content
        bounces={false}
        style={{ flex: 1, backgroundColor: "#fff", top: -1, left: -5 }}
        >
          {/* <Image
            source={require('../../assets/testcover.png')}
            style={{
              flex: 1,
              resizeMode: 'contain',
              height: 120,
              // alignSelf: "stretch",
              // justifyContent: "center",
              // alignItems: ""
            }}>
          </Image> */}
          <Right style={styles.hearderText}>
            <Text>Menu</Text>
          </Right>

 <List
            dataArray={routes}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}
