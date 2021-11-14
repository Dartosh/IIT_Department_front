import React, { Fragment, Component } from 'react';
import './styles.css';

const Columns = () => (
    <Fragment>
        <p className="title">Bla-bla-bla</p>
    </Fragment>
);

const Table = () => (
    <table>
        <tbody>
            <tr>
                <Columns />
            </tr>
        </tbody>
    </table>
);

export default Table;