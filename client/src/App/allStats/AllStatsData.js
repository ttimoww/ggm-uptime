import React from 'react';

const AllStatsData = (props) => {
    return ( 
        <div className="allstats__info__container">
            <p>Total tests: {props.stats.overal.total}</p>
            <table>
                <tbody>
                    <tr>
                        <th>Color</th>
                        <th>Status</th>
                        <th>Percentage</th>
                    </tr>
                    <tr>
                        <td><div style={{backgroundColor: '#63CDDA'}}></div></td>
                        <td>200</td>
                        <td>{Math.round(props.stats.overal.s200.percentage)}%</td>
                    </tr>
                    <tr>
                        <td><div style={{backgroundColor: '#e67e22'}}></div></td>
                        <td>400</td>
                        <td>{Math.round(props.stats.overal.s400.percentage)}%</td>
                    </tr>
                    <tr>
                        <td><div style={{backgroundColor: '#e67e22'}}></div></td>
                        <td>401</td>
                        <td>{Math.round(props.stats.overal.s401.percentage)}%</td>
                    </tr>
                    <tr>
                        <td><div style={{backgroundColor: '#e67e22'}}></div></td>
                        <td>403</td>
                        <td>{Math.round(props.stats.overal.s403.percentage)}%</td>
                    </tr>
                    <tr>
                        <td><div style={{backgroundColor: '#e74c3c'}}></div></td>
                        <td>500</td>
                        <td>{Math.round(props.stats.overal.s500.percentage)}%</td>
                    </tr>
                    <tr>
                        <td><div style={{backgroundColor: '#e74c3c'}}></div></td>
                       <td>501</td>
                        <td>{Math.round(props.stats.overal.s501.percentage)}%</td>
                    </tr>
                    <tr>
                        <td><div style={{backgroundColor: '#e74c3c'}}></div></td>
                        <td>502</td>
                        <td>{Math.round(props.stats.overal.s502.percentage)}%</td>
                    </tr>
                    <tr>
                        <td><div style={{backgroundColor: '#e74c3c'}}></div></td>
                        <td>503</td>
                        <td>{Math.round(props.stats.overal.s503.percentage)}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default AllStatsData;