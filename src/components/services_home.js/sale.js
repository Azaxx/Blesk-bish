import React from 'react';
import { Link } from 'react-router-dom';
import './sale.css';

export default  class Sale extends React.Component {
  render(){
    return(
      <div>
        <div className="image-home"></div>
        <h5> <Link to="/">Главная страница</Link>>>Скидки</h5>
        <h2 className="h3-home">Программы для постоянных клиентов</h2>
        <ul>
          <p className="p-home">1. «Постоянный клиент»</p>

          <li className="p-home-5">Если Вам требуется постоянная уборка для поддержания порядка и чистоты в квартире, то эта программа - для Вас!</li>
          <li className="p-home-5">Ваша постоянная скидка на генеральную уборку 15%!</li>
          <li className="p-home-5">А также - 10% скидка на все наши услуги!</li>
          <li className="p-home-5">Для того, чтобы получить обслуживание по программе "Постоянный клиент ", Вам нужно заказывать у нас генеральную уборку не реже 2 разa в 3 месяца.</li>
          <li className="-phome-5">Уже с третьего заказа Вы получите скидки!!!</li>

          <p className="p-home">2. «VIP-клиент»</p>

          <li className="p-home-5">«VIP-клиент» - программа для тех, кто хотел бы переложить все заботы по уборке квартиры на нас.</li>
          <li className="p-home-5">VIP-клиенты получают скидку 33% на периодическую уборку,</li>
          <li className="p-home-5">1 раз в 3 месяца - проведение генеральной уборки в квартире со скидкой 25%! а также 10% скидки на все наши услуги.</li>
          <li className="p-home-5">Кроме того, для VIP-клиентов предусмотрено:</li>
          <li className="p-home-5">- 2 раза в год -мойка окон изнутри и снаружи бесплатно!</li>
          <li className="p-home-5">- 1 раз в 3 месяца: мойка изнутри - кухонных шкафов (при освобожденных полках), холодильника, духовки, СВЧ, бесплатно!</li>
          <li className="p-home-5">Вы можете стать VIP-клиентом, если Вы заказываете периодическую уборку не реже 4-х раз в месяц.</li>
        </ul>
        <h5> <Link to="/">Главная страница</Link>>>Скидки</h5>
        </div>
    );
  };
};