import React, { useReducer } from "react";
import ScheduleContext from "./ScheduleContext"; //context que permite que todos los componentes hijos accedan a los datos del contexto
import ScheduleReducer from "./ScheduleReducer"; //aqui decidimos que funciones vamos a ejecutar

const ScheduleState = (props) => {
  const initialState = {
    schedules: [
      {
        time: "8:30",
        available: 1,
        customers: [],
      },
      {
        time: "9:30",
        available: 8,
        customers: [],
      },
      {
        time: "10:00",
        available: 8,
        customers: [],
      },
      {
        time: "10:30",
        available: 8,
        customers: [],
      },
      {
        time: "11:00",
        available: 8,
        customers: [],
      },
      {
        time: "11:30",

        available: 8,
        customers: [],
      },
      {
        time: "12:00",
        available: 8,
        customers: [],
      },
      {
        time: "12:30",
        available: 8,
        customers: [],
      },
      {
        time: "13:00",
        available: 8,
        customers: [],
      },
      {
        time: "13:30",
        available: 8,
        customers: [],
      },
      {
        time: "14:00",
        available: 8,
        customers: [],
      },
      {
        time: "14:30",
        available: 8,
        customers: [],
      },
      {
        time: "15:00",
        available: 8,
        customers: [],
      },
      {
        time: "15:30",
        available: 8,
        customers: [],
      },
      {
        time: "16:00",
        available: 0,
        customers: [],
      },
    ],
    customerList: [],
    user: "",
  };

  //   const [state, dispatch] = useReducer(reducer, initialArg);
  const [state, dispatch] = useReducer(ScheduleReducer, initialState);

  const getCustomerList = () => {
    const customers = state.schedules.flatMap((schedule) => schedule.customers);
    const uniq = [...new Set(customers)];
    console.log(uniq);
  };
  const getCurrentUser = (user) => {
    dispatch({
      type: "USER",
      payload: user,
    });
  };
  const toggleBookingBike = (selectedSchedule) => {
    //busco la hora
    const isCurrentUser = selectedSchedule.customers.includes(state.user);
    const index = state.schedules.findIndex(
      (schedule) => schedule.time === selectedSchedule.time
    );
    const clone = state.schedules;

    //en caso de que el usuario ya haya reservado una moto a esta hora
    if (!isCurrentUser) {
      if (clone[index].available === 0) return;

      clone[index].available -= 1;
      clone[index].customers.push(state.user);
    } else {
      clone[index].available += 1;
      clone[index].customers.pop();
    }

    dispatch({
      type: "SCHEDULES",
      payload: clone,
    });
  };

  return (
    <ScheduleContext.Provider
      value={{
        schedules: state.schedules,
        customerList: state.customerList,
        user: state.user,
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
