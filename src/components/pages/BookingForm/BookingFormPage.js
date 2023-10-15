import React from "react";
import BookingForm from "./BookingForm";
import { ReservationTimesProvider } from "../../../ReservationsContext";

function BookingFormPage(props) {
    return (
        <div className="container">
            <div className="row">
                <h1>Booking Form</h1>
            </div>
            <div className="row">
                <ReservationTimesProvider>
                    <BookingForm />
                </ReservationTimesProvider>
            </div>
        </div>
    )
};
export default BookingFormPage;