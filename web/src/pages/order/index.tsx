import React, { useEffect, useState } from 'react'
import api from '../../services/api';

interface User {
  orders: {
    order: {
      _id: string
    }
  }[]
}

interface Order {
  state: string
}

const Order = () => {
  const [user, setUser] = useState<User>()
  const [listOrders, setListOrders] = useState<Order[]>([])
  const [orderid, setOrderid] = useState<string>()

  useEffect(() => {
    api.get(`users/${localStorage.getItem("id")}`).then(response => {
      setUser(response.data);
    });
  }, []);

  useEffect(() => {
    let list = [] as Order[]

    user?.orders.map(o => (
      api.get(`orders/${o.order._id}`).then(response => {
        setOrderid(response.data.state)
        list.push(response.data)
      })
    ))

    setListOrders(list)
    console.log(list.length)
  }, [user]);

  return (
    <div>{listOrders.length}</div>
  )
}

export default Order