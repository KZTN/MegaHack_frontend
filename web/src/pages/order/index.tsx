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

  useEffect(() => {
    api.get(`users/${localStorage.getItem("id")}`).then(response => {
      setUser(response.data);
    });
  }, []);

  async function getOrders(id: string) {
    await api.get(`orders/${id}`).then(response => {
      listOrders.push(response.data)
    })
    // aqui o lenght é 1
    console.log(listOrders.length)
  }

  useEffect(() => {
    user?.orders.map(o => (
      getOrders(o.order._id)
    ))
      // aqui o lenght é 0
    console.log(listOrders.length)
  }, [user]);

  return (
    <div>{listOrders.length}</div>
  )
}

export default Order