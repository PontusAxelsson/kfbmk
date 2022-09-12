import React from "react";
import { Navigate } from "react-location";

const Info = React.lazy(() => import("./info/Info"));
const News = React.lazy(() => import("./news/News"));
const FindHere = React.lazy(() => import("./find/FindHere"));

export const PagesRoutes = [
	{
		path: '/info',
		element: <Info />
	},
	{
		path: '/news',
		element: <News />
	},
	{
		path: '/map',
		element: <FindHere />
	},
	{
		element: <Navigate to="/info" />,
	},
]