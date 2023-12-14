import React from 'react';
import '../styles/global.css'
import '../styles/preferences.css'

/**
 * Represents an AutoAidOption component.
 * @param {Object} props - The component props.
 * @param {string} props.summary - The summary text.
 * @param {string} props.expandableText - The expandable text.
 * @param {boolean} props.expanded - Indicates if the component is expanded.
 * @param {string} props.arrowDirection - The direction of the arrow icon.
 * @param {function} props.handleExpandToggleClick - The click event handler for expanding/collapsing the component.
 * @param {boolean} props.isSwitched - Indicates if the switch button is switched on.
 * @param {function} props.handleAccessibilitySwitch - The click event handler for the switch button.
 * @returns {JSX.Element} The AutoAidOption component.
 */
function AutoAidOption ({ 
  summary,
  expandableText,
  expanded,
  arrowDirection,
  handleExpandToggleClick,
  isSwitched,
  handleAccessibilitySwitch
 }){
  return (
    <tr className="view-row">
      <td className="view-cell">
        <div className="toggle-details">
          <button className={`toggle-details-toggle ${expanded ? 'expanded' : ''}`} onClick={handleExpandToggleClick}>
            <span className="toggle-details-summary">
              <span className="toggle-icon">
                {arrowDirection === 'down' ? (
                  <svg className="toggle-icon" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.55076 0L0.449951 1.10081L5.3491 6.00074L0.449951 10.8991L1.55076 11.9999L7.5515 6.00074L1.55076 0Z" fill="black" />
                  </svg>
                ) : (
                  <svg className="toggle-icon" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.00109863 0.836588L0.673157 0.163574L7.00062 6.49009L13.3271 0.163574L14.0011 0.836588L7.00062 7.83611L0.00109863 0.836588Z" fill="black" />
                  </svg>
                )}
              </span>
              <span className="summary_text">{summary}</span>
            </span>
          </button>
          <div className={expanded ? 'expandable_1' : 'expandable_0'}>
            <div>
              <div>{expandableText}</div>
            </div>
          </div>
        </div>
      </td>
      <td className="view-cell"></td>
      <td className="view-cell">
        <button className="view-cell-button" onClick={handleAccessibilitySwitch}>
          <span className={`button-content ${isSwitched ? 'inactive' : ''}`}>
            <span className="button-layout">
              <span className="button-icon">
                {isSwitched ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0104 0.010498C4.49626 0.010498 0.010376 4.49638 0.010376 10.0105C0.010376 15.5246 4.49626 20.0105 10.0104 20.0105C15.5245 20.0105 20.0104 15.5246 20.0104 10.0105C20.0104 4.49638 15.5245 0.010498 10.0104 0.010498ZM10.0104 18.834C5.14449 18.834 1.18684 14.8764 1.18684 10.0105C1.18684 5.14461 5.14449 1.18697 10.0104 1.18697C14.8763 1.18697 18.8339 5.14461 18.8339 10.0105C18.8339 14.8764 14.8763 18.834 10.0104 18.834ZM13.3381 5.85097L10.0099 9.1792L6.68284 5.85097L5.85107 6.68274L9.17814 10.011L5.85108 13.338L6.68286 14.1698L10.0099 10.8427L13.3381 14.1698L14.1699 13.338L10.8417 10.011L14.1699 6.68274L13.3381 5.85097Z" fill="#E0061F" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.96 14.3044L5.11222 10.4567L6.68333 8.88555L8.96 11.1622L13.6856 6.43667L15.2567 8.00778L8.96 14.3044ZM10 0C4.47667 0 0 4.47667 0 10C0 15.5233 4.47667 20 10 20C15.5222 20 20 15.5233 20 10C20 4.47667 15.5222 0 10 0Z" fill="#0B874B" />
                  </svg>
                )}
              </span>
            </span>
          </span>
        </button>
      </td>
    </tr>
  );
};

export default AutoAidOption;