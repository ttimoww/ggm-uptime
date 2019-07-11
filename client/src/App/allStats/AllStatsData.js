import React from 'react';

const AllStatsData = (props) => {
    return ( 
        <div className="allstats__info__container">
            <p>Total tests: {props.stats.overal.total}</p>
            <table>
                <tbody>
                    <tr>
                        <th>Status</th>
                        <th>Percentage</th>
                    </tr>
                    <tr>
                        <td>200</td>
                        <td>{props.stats.overal.s200.percentage.toString}%</td>
                    </tr>
                    <tr>
                        <td>400</td>
                        <td>{props.stats.overal.s400.percentage}%</td>
                    </tr>
                    <tr>
                        <td>401</td>
                        <td>{props.stats.overal.s401.percentage}%</td>
                    </tr>
                    <tr>
                        <td>403</td>
                        <td>{props.stats.overal.s403.percentage}%</td>
                    </tr>
                    <tr>
                        <td>500</td>
                        <td>{props.stats.overal.s500.percentage}%</td>
                    </tr>
                    <tr>
                        <td>501</td>
                        <td>{props.stats.overal.s501.percentage}%</td>
                    </tr>
                    <tr>
                        <td>502</td>
                        <td>{props.stats.overal.s502.percentage}%</td>
                    </tr>
                    <tr>
                        <td>503</td>
                        <td>{props.stats.overal.s503.percentage}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default AllStatsData;