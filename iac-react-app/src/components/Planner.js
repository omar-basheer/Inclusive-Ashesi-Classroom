import React, { useState } from 'react';
import '../styles/global.css';

const PlannerItem = ({ plannerItemData }) => {
  const [completed, setCompleted] = useState(plannerItemData.completed);

  const handleCheckboxChange = () => {
    setCompleted(!completed); // Toggle the completion status
  };

  return (
    <div className={`PlannerItem-styles__root planner-item ${completed ? 'completed' : ''}`}>
      <div className="PlannerItem-styles__completed">
        {/* Checkbox input and label */}
        <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
      </div>
      <div className="PlannerItem-styles__icon" aria-hidden="true" style={{ color: 'rgb(102, 102, 102)' }}>
        {/* Assignment icon SVG */}
        {/* You can include an SVG icon or use an icon library like FontAwesome */}
        <span>📚</span>
      </div>
      <div className="PlannerItem-styles__layout">
        <div className="PlannerItem-styles__innerLayout">
          <div className="PlannerItem-styles__details">
            <div className="PlannerItem-styles__type">
              {/* Assignment type */}
              {plannerItemData.type}
            </div>
            <a href="/courses/1945/assignments/34506/submissions/1959" className="css-lpe5ea-view-link">
              {/* Assignment title */}
              {plannerItemData.title}
            </a>
          </div>
          <div className="PlannerItem-styles__secondary">
            <div className="PlannerItem-styles__badges">
              {/* Badges list */}
              {plannerItemData.badges.map((badge, index) => (
                <div key={index} className="badge">
                  {badge}
                </div>
              ))}
            </div>
            <div className="PlannerItem-styles__metrics">
              <div className="PlannerItem-styles__due">
                {/* Due date */}
                Due: {plannerItemData.dueDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Planner = () => {
  // Array of planner data (each object represents an assignment)
  const plannerData = [
    {
      completed: false,
      type: 'Homework',
      title: 'Algorithms Design and Analysis',
      badges: ['This assignment is based on the reading of Chapter 2 of the textbook and your understanding of it.'],
      dueDate: '2023-12-31',
    },
    {
      completed: true,
      type: 'Project',
      title: 'Software Enginerering Final Group Project',
      badges: ['GitHub repository link and project report'],
      dueDate: '2023-12-15',
    },
    // Add more assignments as needed
  ];

  return (
    <div>
      {plannerData.map((item, index) => (
        <PlannerItem key={index} plannerItemData={item} />
      ))}
    </div>
  );
};

export default Planner;