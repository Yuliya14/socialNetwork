import React, { Component } from "react";

export const withSuspense = (Component: any) => {
    return (props: any) =>  <React.Suspense fallback={<div>Загрузка...</div>}>
        <Component {...props} />
    </React.Suspense>
}
