import React from "react";

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
]