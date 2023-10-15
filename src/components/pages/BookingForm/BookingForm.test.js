import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { ReservationTimesProvider } from "../../../ReservationsContext";

test('Renders the BookingForm heading', () => {
    render(
        <ReservationTimesProvider>
            <BookingForm />
        </ReservationTimesProvider>);
    const choseDateLabel = screen.getByText("Choose Date");
    expect(choseDateLabel).toBeInTheDocument();

    const choseTimeLabel = screen.getByText("Choose Time");
    expect(choseTimeLabel).toBeInTheDocument();

    const numberGuestLabel = screen.getByText("Number of Guests");
    expect(numberGuestLabel).toBeInTheDocument();

    const occasionLabel = screen.getByText("Occasion");
    expect(occasionLabel).toBeInTheDocument();

})