import { Navigate } from "react-router-dom";

export function RedirectToOtpForgePage() {
  return <Navigate to="/otpforge" replace />;
}
