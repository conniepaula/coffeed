import React from "react";
import styles from "./Avatar.module.css";

export function Avatar({hasBorder = true, src}) {
  return (
    <div>
      <img
        src={src}
        alt="User Profile Photo"
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      />
    </div>
  );
}
