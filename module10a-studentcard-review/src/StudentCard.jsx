// Import React so React.useState works correctly in this component.
import React from "react";

// StudentCard component
// This component displays a student profile card.
// It receives props (name, major, year, bio, imageUrl)
// and uses React state to show or hide the bio when a button is clicked.

function StudentCard(props) {

  // Props are values passed from the parent component (App.jsx).
  // Destructuring pulls the individual values from props.
  const { name, major, year, bio, imageUrl } = props;

  // State: showBio controls whether the bio text is visible.
  // React.useState(false) sets the initial value to false.
  // setShowBio updates the state and causes React to re-render.
  const [showBio, setShowBio] = React.useState(false);

  // This function runs when the button is clicked.
  // It toggles the showBio state between true and false.
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  // JSX layout for the student profile card
  return (
    <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>

      {/* Profile image coming from props */}
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />

      {/* Student name from props */}
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>

      {/* Major and year from props */}
      <p style={{ margin: '4px 0', fontSize: '16px' }}>
        {major} – {year}
      </p>

      {/* Button that triggers toggleBio to update state */}
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {/* Button text changes depending on state */}
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>

      {/* Conditional rendering: bio only shows when showBio is true */}
      {showBio && (
        <p style={{ marginTop: '16px', fontSize: '14px' }}>
          {bio}
        </p>
      )}
    </div>
  );
}

export default StudentCard;