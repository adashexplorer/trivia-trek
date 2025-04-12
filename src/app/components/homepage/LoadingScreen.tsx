"use client";

import React from "react";
import { LoaderCircle } from "lucide-react";
import {LoadingScreenStyles} from '@/app/styles/homepage/LoadingScreen.styles';

const LoadingScreen = () => {
    return (
        <div className={LoadingScreenStyles.container}>
            <LoaderCircle className={LoadingScreenStyles.spinner} size={60} />
        </div>
    );
};

export default LoadingScreen;