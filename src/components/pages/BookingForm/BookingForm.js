import React from "react";
import { useReservationTimes } from "../../../ReservationsContext";
import { Form, Formik, useFormik } from "formik";
import * as Yup from 'yup';
import useSubmit from "../../../useSubmit";

function BookingForm(props) {
    const submit = { useSubmit }

    const { reservationTimes } = useReservationTimes();
    console.log(reservationTimes);
    return (
        <Formik initialValues={{
            resDate: "",
            resTime: "",
            guests: 1,
            occasion: "",
        }}
            onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object({
                resDate: Yup.string().required("Required"),
                resTime: Yup.string().required("Required"),
                guests: Yup.number().min(1, "Minumum guest 1").max(10, "Maximum guest 10").required("Required"),
                occasion: Yup.string().required("Required"),
            })}
        >{
                props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <form method="post" style={{ display: "grid", maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="resDate" className="form-label">Choose Date</label>
                                <input type="date" 
                                    id="resDate"
                                    aria-label="Choose date"
                                    value={values.resDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.resDate && touched.resDate
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    } />
                                {errors.resDate && touched.resDate && (
                                    <div className="invalid-feedback">{errors.resDate}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="resTime" className="form-label">Choose Time</label>
                                <select id="resTime"
                                    value={values.resTime}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.resTime && touched.resTime
                                            ? "form-select is-invalid"
                                            : "form-select"
                                    }
                                    aria-label="Choose time" >
                                    <option value="">Choose</option>
                                    {[...reservationTimes].map((time, key) => {
                                        return (<option key={time}>{time}</option>)
                                    })}
                                </select>
                                {errors.resTime && touched.resTime && (
                                    <div className="invalid-feedback">{errors.resTime}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="guests" className="form-label">Number of Guests</label>
                                <input type="number" id="guests" placeholder="1" min="1" max="10"
                                    aria-label="Number of Guests"
                                    value={values.guests}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.guests && touched.guests
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    } />
                                {errors.guests && touched.guests && (
                                    <div className="invalid-feedback">{errors.guests}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="occasion" className="form-label">Occasion</label>
                                <select id="occasion" aria-label="Choose occasion"
                                    value={values.occasion}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.occasion && touched.occasion
                                            ? "form-select is-invalid"
                                            : "form-select"
                                    } >
                                    <option value="">Choose</option>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </select>
                                {errors.occasion && touched.occasion && (
                                    <div className="invalid-feedback">{errors.occasion}</div>
                                )}
                            </div>

                            <input className="btn btn-yellow" type="submit" value="Make Your reservation"></input>
                        </form>
                    );
                }
            }
        </Formik>

    )
};
export default BookingForm;