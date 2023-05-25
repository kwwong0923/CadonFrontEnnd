import React, { useState, Fragment, createContext } from "react";

// Components
// Nav
import Logo from "./components/NavBar/Logo";
import CategorySelection from "./components/NavBar/CategorySelection";
import Nav from "./components/NavBar/Nav";
// Main

// CSS Module
import styles from "./App.module.css";
export const AppContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPost, setCurrentPost] = useState("12312312");
  const [filteredPosts, setFilterPosts] = useState([]);

  const contextValue = {
    currentUser, setCurrentUser, currentPost, setCurrentPost,
  }
  return (
    <AppContext.Provider value={[currentUser, setCurrentUser, currentPost, setCurrentPost]}>
      <Fragment>
        <header>
          <section className={styles.topLeft}>
            <Logo />
            <CategorySelection />
          </section>
          <section className={styles.topRight}>
            <Nav />
          </section>
        </header>
        <main>
          <section className={styles.centerLeft}></section>
          <section className={styles.centerRight}></section>
        </main>
      </Fragment>
    </AppContext.Provider>
  );
}

export default App;