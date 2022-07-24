import React from "react";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        alt="User Cover Image"
        className={styles.coverimage}
      />
      <div className={styles.profile}>

        <Avatar src="https://i.ibb.co/KrhNshn/woman1.jpg" alt="Profile Picture" />
        <strong>Jen McFarlan</strong>
        <span>Oat Milk Enthusiast</span>
      </div>

      <footer>
        <a href="#"> <PencilLine/> Edit Your Profile</a>
      </footer>  
    </aside>
  );
}
