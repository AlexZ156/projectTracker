'use strict';
import { connect } from 'react-redux';
import Calendar from './../calendar/'

const stateToProps = ({projectActive}) =>({
    projectActive
});

const ProjectEdit = ({projectActive}) => {

    console.log(projectActive)
    return(
        <div>
            {!!Object.keys(projectActive).length && 
                <div>
                    <h1>{projectActive.name}</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>main</td>
                            </tr>
                            <tr>
                                <td>help</td>
                            </tr>
                            <tr>
                                <td>feed</td>
                            </tr>
                        </tbody>
                    </table>
                    <Calendar/>
                    <button>+++ Save +++</button>
                </div>
            }
        </div>
    )
}

export default connect(stateToProps)(ProjectEdit);