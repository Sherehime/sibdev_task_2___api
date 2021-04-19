import React from "react";
import { Button, Col, Layout, Menu, Row } from "antd";
import style from "./page.module.css";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import FavoritesConteiner from "./Favorutes/FavoritesContainer";
import SearchConteiner from "./Search/SearchConteiner";
import logo from "../../assets/img/sibdevLogo.png";
const { Header, Content } = Layout;

const Page = (props) => {
  return (
    <Layout className={style.layout}>
      <Header>
        <Row>
          <Col span={2}>
            <div className={style.logo}>
              <img src={logo} alt="" />
            </div>
          </Col>
          <Col span={20}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <NavLink to="/page/search">Поиск</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/page/favorites">Избранное</NavLink>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={props.logout}>
              Выйти
            </Button>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "50px 55px" }}>
        <div className={style.content}>
          <Switch>
            <Route
              exact
              path="/page"
              render={() => <Redirect to={"/page/search"} />}
            />
            <Route path="/page/search" render={() => <SearchConteiner />} />
            <Route
              path="/page/favorites"
              render={() => <FavoritesConteiner />}
            />
          </Switch>
        </div>
      </Content>
    </Layout>
  );
};

export default Page;
