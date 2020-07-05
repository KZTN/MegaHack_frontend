import React, { useState, useEffect } from "react";
import ActionsHeader from "../../components/ActionsHeader";
import logo from "../../assets/notification.jpg";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import SideBar from "../../components/sidebar";
import "./styles.scss";
import TitleBar from "../../components/titlebar";

type Notifications_Type = [
  {
    _id: string;
    title: string;
    description: string;
    thumbnail: string;
  }
];
const NOTIFICATIONS_INITIAL_STATE: Notifications_Type = [
  {
    _id: "",
    title: "",
    description: "",
    thumbnail: "",
  },
];
export default function Notifications() {
  const history = useHistory();

  const [notifications, setNotificaitons] = useState<Notifications_Type>(
    NOTIFICATIONS_INITIAL_STATE
  );
  const [ischecked, setIschecked] = useState<boolean>(false);
  const [listcheckboxes, setListcheckboxes] = useState([]);
  const [checkall, setCheckall] = useState<boolean>(false);
  var arrlistcheckboxes: any = [];

  function handleCheckAll() {
    arrlistcheckboxes = [];
    if (checkall) {
      setCheckall(false);
      setIschecked(false);
      setListcheckboxes([]);
    } else {
      setCheckall(true);
      setIschecked(true);
      notifications.map((notification, index) => {
        arrlistcheckboxes.push(index);
      });
      setListcheckboxes(arrlistcheckboxes);
    }
  }

  async function handleDeleteNotifications() {}
  function handleCheckBoxItem(index: any) {
    arrlistcheckboxes = listcheckboxes;
    if (!arrlistcheckboxes.find((elementBox: any) => elementBox === index)) {
      arrlistcheckboxes.push(index);
      setIschecked(true);
    } else {
      arrlistcheckboxes.splice(arrlistcheckboxes.indexOf(index), 1);
      if (arrlistcheckboxes.length === 0) {
        setIschecked(false);
      }
    }
    setListcheckboxes(arrlistcheckboxes);
  }
  async function getNotifications() {
    await api
      .get(`/users/${localStorage.getItem("id")}`)
      .then((response) => {
        setNotificaitons(response.data.notifications);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    if (localStorage.getItem("id")) {
      getNotifications();
    } else {
      history.push("/");
    }
  }, [history]);
  return (
    <>
      <TitleBar title="Notificações" />
      <SideBar />

      <section id="notifications">
        <ActionsHeader />
        <div className="content">
          <div className="list-wrapper">
            <div className="section-header">
              <h1>Notificações</h1>
            </div>
            <ul>
              <div className="ul-header">
                <div className="header-actions">
                  <input
                    type="checkbox"
                    checked={checkall}
                    onClick={handleCheckAll}
                    disabled={!notifications[0]}
                    id="checkall"
                  />
                  <button
                    disabled={!ischecked}
                    onClick={() => handleDeleteNotifications()}
                  >
                    Excluir
                  </button>
                </div>
                <div className="header-index">
                  <span>
                    Notificações 1 - {notifications.length} de{" "}
                    {notifications.length}
                  </span>
                </div>
              </div>
              {!notifications[0] ? (
                <li style={{ width: "100vh" }}>
                  Sua lista de notificações está vazia
                </li>
              ) : (
                notifications.map((notification, index) => (
                  <li key={notification._id}>
                    <input
                      type="checkbox"
                      id="selectall"
                      value={index}
                      checked={
                        checkall ||
                        listcheckboxes.find(
                          (elementBox) => elementBox === index
                        )
                      }
                      onChange={(e) => handleCheckBoxItem(e.target.value)}
                    />
                    <div className="li-content">
                      <div className="li-photo">
                        <img src={logo} alt="logo" />
                      </div>
                      <div className="li-details">
                        <div className="li-title">
                          {notification.title.length > 40 ? (
                            <span>
                              {notification.title.substring(0, 40)}
                              ...
                            </span>
                          ) : (
                            <span>{notification.description}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
