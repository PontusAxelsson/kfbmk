import React from "react";
import { Navigate, Route, Location } from "react-location";

const Info = React.lazy(() => import("./info/Info"));
const News = React.lazy(() => import("./news/News"));
const FindHere = React.lazy(() => import("./find/FindHere"));

export interface AppRouteMeta {
	title: string;
}

export const PagesRoutes: Route[] = [
	{
		path: '/',
		element: <Navigate to="/info"/>,
	},
	{
		path: '/info',
		element: <Info />,
		meta: {
			title: 'Allmän information'
		}
	},
	{
		path: '/news',
		element: <News />,
		meta: {
			title: 'Nyheter'
		}
	},
	{
		path: '/map',
		element: <FindHere />,
		meta: {
			title: 'Hitta hit'
		}
	},
	{
		path: '*',
		element: <Navigate to="/info" />
	},
]