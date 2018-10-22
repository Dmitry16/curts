import React, { Component } from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

export default class InitialChart extends Component<{history: any}, {}> {
    render() {

        const makeRandomColor = () => {
            let str = '#';
            for (let i=1; i<7; i++) {
                str = str + Math.floor(Math.random()*10);
            }
            return str;
        }

        const renderLines = () => {
            let lines = [];
            this.props.history[0] ? (Object as any).keys(this.props.history[0]).forEach((key, ind) => {
                if (key !== 'year')
                    lines.push(<Line type="monotone" dataKey={key} stroke={makeRandomColor()} activeDot={{r: 8}}/>)
            }) : null
            return lines;
        }

        const renderCharts = () => {
            return this.props.history ? (
                <LineChart width={600} height={300} data={this.props.history}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="x"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                        {
                            renderLines()
                        }
                </LineChart>
            ) : null
        }
        
        return renderCharts()
    }
}