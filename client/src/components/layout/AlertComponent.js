import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "reactstrap";

const AlertComponent = () => {
  const alerts = useSelector((state) => state.alertReducer);
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Alert key={alert.id} className="mt-2" color={alert.alertType}>
        {alert.msg}
      </Alert>
    ))
  );
};

export default AlertComponent;
