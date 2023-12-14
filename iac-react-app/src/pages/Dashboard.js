import '../styles/global.css';
import '../styles/courses.css';
import React, { useContext, useEffect, useState } from 'react';
import Sidemenu from '../components/Sidemenu';
import PageContent from '../components/PageContent';
import RightSide from '../components/RightSide';
import Planner from '../components/Planner';
import { AuthContext } from './auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { fetchStudentData } from '../services/services';

/**
 * Represents the Dashboard component.
 * @returns {JSX.Element} The rendered Dashboard component.
 */
function Dashboard() {
  const student_id = JSON.parse(localStorage.getItem('student_id'));
  const token = JSON.parse(localStorage.getItem('token'));
  const [info, setInfo] = useState('');

  if (token === null) {
    window.history.replaceState(null, '', '/Login');
    window.location.reload();
  }

  useEffect(() => {
    fetchStudentData(student_id, token, info, setInfo);
  }, [student_id, token, info]);

  return (
    <div className="iac-app">
      <div className="iac-layout-columns">
        <div className="iac-main-app-content">
          <div className="iac-main-content-wrapper">
            <div className="iac-main-content">
              <PageContent
                contentTitle={info ? `${info.first_name} ${info.last_name}'s dashboard` : 'Loading...'}
              />
              <Planner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
