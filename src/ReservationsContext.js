import {createContext, useState, useContext} from "react";

const ReservationTimesContext = createContext(undefined);

export const ReservationTimesProvider = ({ children }) => {
    const [reservationTimes] = useState(
        [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ]
    );

    return <ReservationTimesContext.Provider value={{reservationTimes}}>{children}</ReservationTimesContext.Provider>
}

export const useReservationTimes = () => useContext(ReservationTimesContext);
export default ReservationTimesContext;