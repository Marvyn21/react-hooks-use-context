import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import ThemedButton from "./ThemedButton";
import { ThemeProvider } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);

  function toggleTheme() {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }} >
      <main className={theme}>
        <UserProvider value={{ user, setUser }} >
          <Header />
          <Profile />
        </UserProvider>
        <ThemedButton>Themed Button</ThemedButton>
      </main>
    </ThemeProvider>

  );
}

export default App;
