import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
// import { useStore } from '../../../app/stores/store';

export default observer(function UdhetariNavBar() {
  const {
    udhetariStore: { logoutUdhetari, isLoggedIn },
  } = useStore();

  return (
    <Sidebar.Pushable
      className="sideBarA"
      style={{ marginTop: "-44px", marginBottom: "40px" }}
    >
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        vertical
        visible
        width="wide"
        direction="left"
      >
        {isLoggedIn ? (
          <Menu.Item
            style={{ marginTop: "20%" }}
            as={NavLink}
            to="/udhetariProfile"
          >
            <Icon name="user" />
            Profili
          </Menu.Item>
        ) : null}
        <Menu.Item as={NavLink} to="/rezervimet">
          <Icon className="suitcase icon" />
          Rezervo Bileta
        </Menu.Item>

        <Menu.Item as={NavLink} to="/njoftimet">
          <Icon className="bullhorn icon" />
          Njoftimet
        </Menu.Item>

        <Menu.Item onClick={logoutUdhetari}>
          <Icon name="log out" />
          Dil
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic style={{ height: "100vh" }}></Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
});
