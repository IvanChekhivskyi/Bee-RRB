import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";



const AppRouter = () => {



    return (
        <Switch>
                {adminRoutes.map(rout =>
                    <Route component={rout.component}
                           path={rout.path}
                           exact={rout.exact}
                           key={rout.path}
                    />
                )}
                <Redirect to={"/had"}/>
            </Switch>
    );
};

export default AppRouter;