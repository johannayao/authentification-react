import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./dashboard.css"
const Dashboard = () => {
    const [upcomingReservations, setUpcomingReservations] = useState([]);
    const [pastReservations, setPastReservations] = useState([]);

    // Simuler la récupération des réservations de l'utilisateur
    useEffect(() => {
        // Récupérer les réservations de l'utilisateur depuis l'API (remplacer par appel API réel)
        const reservations = [
            { id: 1, date: '2024-11-20', service: 'Coupe', status: 'upcoming' },
            { id: 2, date: '2024-10-15', service: 'Coloration', status: 'past' },
        ];

        // Filtrer les réservations selon leur statut
        setUpcomingReservations(reservations.filter(r => r.status === 'upcoming'));
        setPastReservations(reservations.filter(r => r.status === 'past'));
    }, []);

    return (
        <div className="user-dashboard">
            <h1>Bienvenue dans votre dashboard</h1>

            <div className="section">
                <h2>Réservations à venir</h2>
                {upcomingReservations.length === 0 ? (
                    <p>Aucune réservation à venir.</p>
                ) : (
                    <ul>
                        {upcomingReservations.map(reservation => (
                            <li key={reservation.id}>
                                <span>{reservation.date} - {reservation.service}</span>
                                <Link to={`/reservations/${reservation.id}`}>Modifier / Annuler</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="section">
                <h2>Historique des réservations</h2>
                {pastReservations.length === 0 ? (
                    <p>Aucune réservation passée.</p>
                ) : (
                    <ul>
                        {pastReservations.map(reservation => (
                            <li key={reservation.id}>
                                <span>{reservation.date} - {reservation.service}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* <div className="section">
                <h2>Profil</h2>
                <Link to="/profile">Gérer mon profil</Link>
            </div> */}

            {/* <div className="section">
                <h2>Notifications</h2>
                <p>Aucune nouvelle notification.</p>
            </div> */}

            <div className="section">
                {/* <button onClick={() => alert('Déconnexion')}>Se déconnecter</button> */}
            </div>
        </div>
    );
};

export default Dashboard;
