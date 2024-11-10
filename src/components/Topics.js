import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Topics.css';

function Topics() {
  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently, user } = useAuth0();
  const navigate = useNavigate();

  const topics = [
    { title: 'Gerak Parabola', id: 'projectile' },
    { title: 'Bandul Sederhana', id: 'pendulum' },
    { title: 'Gerak Harmonik Sederhana', id: 'harmonic' },
    { title: 'Hukum Newton', id: 'newton' },
    { title: 'Hukum Termodinamika', id: 'thermodynamics' },
    { title: 'Optika Geometris', id: 'optics' },
    { title: 'Gelombang dan Bunyi', id: 'waves' },
  ];

  const handleCardClick = async (topicId) => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      const userData = { auth0Id: user.sub, lastSimulation: topicId };
      await axios.post('http://localhost:8000/api/userstate', userData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate(`/simulation/${topicId}`);
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div className="topic-selection">
      <h2 className="section-title">Pilih Topik Simulasi</h2>
      <div className="grid-container">
        {topics.map((topic) => (
          <div key={topic.id} className="card" onClick={() => handleCardClick(topic.id)}>
            <h3>{topic.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics;
