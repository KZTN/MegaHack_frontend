import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import ScrollArea from 'react-scrollbar'

import './styles.css'

import SideBar from '../../components/sidebar'

interface User {
  orders: {
    _id: string
    state: string

    product: {
      _id: string
      name: string
      price: number
      thumbnail: string
    }

    establishment: {
      _id: string
      name: string
      thumbnail: string
    }
  }[]
}

const Order = () => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    api.get(`users/${localStorage.getItem("id")}`).then(response => {
      setUser(response.data);
    });
  }, []);

  return (
    <div>
      
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        vertical={true}
      >
        <div className="wrapper-favorites">
          {user?.orders.map(order => (
            <div
              className="wrapper-item"
              id={order._id}
            >
              <div className="item-thumbnail">
                <img src={order.product.thumbnail} alt="" />
              </div>
              <div className="wrapper-body">
                <div className="wrapper-header">
                  <strong>{order.product.name}</strong>
                  <strong>R${order.product.price}</strong>
                  <span>{order.establishment.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <SideBar />
    </div>
  )
}

export default Order