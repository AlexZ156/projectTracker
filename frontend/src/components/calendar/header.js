'use strict';

import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import Controls from './controls';

const stateToProps = ({activeProjectId, projects}) => ({
    activeProjectId,
    projects
});

const Header = ({month}) => {

    return(
        <thead>
            <tr>
                <Controls month={month}/>
            </tr>
            <tr>
                {Object.keys(month).map(key => {
                   return <th key={key}>{dateFormat(month[key].timestamp, 'dd')}</th>
               })}
            </tr>
        </thead>
    );
};

export default connect(stateToProps)(Header);