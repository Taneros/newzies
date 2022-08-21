import React from 'react'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice'

function App(): JSX.Element {
  const { data = [], isFetching } = useFetchBreedsQuery()

  return (
    <div>
      {}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {isFetching && (
            <tr>
              <td>...</td>
              <td>{['Data is Fetching...']}</td>
            </tr>
          )}
          {!isFetching &&
            data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
