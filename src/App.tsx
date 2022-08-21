import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getDailyNumber, shuffleArray } from './random';

export function randomHalvesOfList(list: any[]): { listOne: any[], listTwo: any[] } {
  const roughHalf = list.length / 2;
  const giveMoreIfNotEqual = getDailyNumber() >= .5;
  const halfNumber = giveMoreIfNotEqual ? Math.ceil(roughHalf) : Math.floor(roughHalf);
  const listOne = list.slice(0, halfNumber).sort();
  const listTwo = list.slice(halfNumber, list.length).sort();
  return { listOne, listTwo }
}

function App() {
  const choreList: any = {
    Daily: ["Litter", "Kitchen Counters", , "Outdoor Plants", "Dishes", "Sweeping", "Backyard Poop", "Tidy Main Floor"],
    Weekly: ["Laundry (inc. bedsheets)", "Upstairs Bath", "Pickup Yard", "Lower Bath", "Vacuuming", "Indoor Plants"],
    Monthly: ["Mopping Floors", "Dusting", "Yard Work", "Change Filters", "Clean out Fridge"],
    Yearly: ["Clear Gutters"]
  }
  return (
    <div className="App p-3">
      <h1 className='h1 mb-5'>Chores - {new Date().toLocaleDateString()} 🗓️</h1>
      <main>
        <ul>
          {Object.keys(choreList).map((key, i) => {
            const listByCategory: string[] = choreList[key];
            shuffleArray(listByCategory);
            const { listOne, listTwo } = randomHalvesOfList(listByCategory)
            return (
              <li key={i} className="mb-5 container">
                <h2 className='h3 mb-3'>{key} Chores</h2>
                <div className='row'>
                  <div className="col-6">
                    <h3 className='h5'>Luke:</h3>
                    <ul>
                      {listOne.map((chore, choreIndex) => {
                        return <li className="mb-2" key={chore + choreIndex}>{chore}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="col-6">
                    <h3 className='h5'>Quinn:</h3>
                    <ul>
                      {listTwo.map((chore, choreIndex) => {
                        return <li className="mb-2" key={chore + choreIndex}>{chore}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
