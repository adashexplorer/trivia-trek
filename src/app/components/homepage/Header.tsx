import React from "react";
import { HeaderStyles } from "@/app/styles/homepage/Header.styles";

const Header = () => (
    <header className={HeaderStyles.header}>
        <h1 className={HeaderStyles.title}>
            Welcome to TriviaTrek
        </h1>
        <p className={HeaderStyles.subtitle}>
            Your destination for online quizzes and fun challenges!
        </p>
        <div className={HeaderStyles.buttonWrapper}>
            <button className={HeaderStyles.button}>
                Start Exploring
            </button>
        </div>
    </header>
);

export default Header;
