import {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {

    const savedUser =
      localStorage.getItem("reclaimUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  const sendOTP = (phone) => {

    localStorage.setItem(
      "reclaimPhone",
      phone
    );

    console.log("Demo OTP: 123456");
  };

  const verifyOTP = (otp) => {

    if (otp !== "123456") {
      return false;
    }

    const phone =
      localStorage.getItem("reclaimPhone");

    const newUser = {
      id: Date.now(),
      name: "Reclaim User",
      phone,
      role: "user",
    };

    setUser(newUser);

    localStorage.setItem(
      "reclaimUser",
      JSON.stringify(newUser)
    );

    return true;
  };

  const loginAdmin = () => {

    const admin = {
      id: 999,
      name: "Admin",
      phone: "9999999999",
      role: "admin",
    };

    setUser(admin);

    localStorage.setItem(
      "reclaimUser",
      JSON.stringify(admin)
    );
  };

  const logout = () => {

    setUser(null);

    localStorage.removeItem(
      "reclaimUser"
    );

    localStorage.removeItem(
      "reclaimPhone"
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        sendOTP,
        verifyOTP,
        loginAdmin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}