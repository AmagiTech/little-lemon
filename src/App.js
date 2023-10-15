import './App.css';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Footer from './components/layouts/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/Home/HomePage';
import MenuPage from './components/pages/Menu/MenuPage';
import AboutPage from './components/pages/About/AboutPage';
import ReservationsPage from './components/pages/Reservations/ReservationsPage';
import OrderOnlinePage from './components/pages/OrderOnline/OrderOnlinePage';
import LoginPage from './components/pages/Login/LoginPage';
import React from "react";
import BookingFormPage from './components/pages/BookingForm/BookingFormPage';
import { ReservationTimesProvider } from './ReservationsContext';

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/reservations' element={<ReservationsPage />} />
          <Route path='/order-online' element={<OrderOnlinePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/booking' element={<BookingFormPage />} />
        </Routes>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
