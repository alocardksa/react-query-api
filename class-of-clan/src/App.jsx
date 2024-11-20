import { fetchPublicMatches } from './api/publicMachesApi'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

// Adjust the import path as necessary

const PublicMatches = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['publicMatches'],
    queryFn: fetchPublicMatches
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Public Matches</h1>
      <ul>
        {data.slice(0, 5).map(match => (
          <li key={match.match_id}>
            <strong>Match ID:</strong> {match.match_id} <br />
            <strong>Duration:</strong> {match.duration} seconds;
            <br />
            <strong>Start Time</strong> {match.start_time};<br />
            <strong>Start Time</strong> {match.game_mode}
            <br />
            <strong>Start Time</strong> {match.radiant_team}
            <br />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PublicMatches
