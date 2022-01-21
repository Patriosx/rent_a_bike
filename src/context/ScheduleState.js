import React, { useReducer } from "react";
import ScheduleContext from "./ScheduleContext"; //context que permite que todos los componentes hijos accedan a los datos del contexto
import ScheduleReducer from "./ScheduleReducer"; //aqui decidimos que funciones vamos a ejecutar
import { getSchedulesFirebase, bookingBikeFirebase } from "../server/firebase";
const ScheduleState = (props) => {
  const initialState = {
    schedules: [],
    customerList: [],
    user: "",
  };
  //   const [state, dispatch] = useReducer(reducer, initialArg);
  const [state, dispatch] = useReducer(ScheduleReducer, initialState);

  const getSchedules = async () => {
    const scheduleList = await getSchedulesFirebase();
    dispatch({
      type: "GET_SCHEDULES",
      payload: scheduleList,
    });
  };
  const getCustomerList = () => {
    const customers = state.schedules.flatMap((schedule) => schedule.customers);
    const uniq = [...new Set(customers)];
  };
  const getCurrentUser = (user) => {
    dispatch({
      type: "USER",
      payload: user,
    });
  };
  const toggleBookingBike = (selectedSchedule) => {
    bookingBikeFirebase(selectedSchedule, state.user);
    getSchedules();
  };

  return (
    <ScheduleContext.Provider
      value={{
        schedules: state.schedules,
        customerList: state.customerList,
        user: state.user,
        getSchedules,
        getCustomerList,
        getCurrentUser,
        toggleBookingBike,
      }}
    >
      {props.children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleState;
