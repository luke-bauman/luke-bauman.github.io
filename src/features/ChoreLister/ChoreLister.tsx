import { getDailyAssignedChores } from './choreAssignment';
import { iAssignedChores, iCategorySubGroup } from './interfaces';
import { useLocalStorage } from './../../hooks/useLocalStorage';
import { todayNumber } from '../../utils/prng';
import { useEffect, useRef } from 'react';

import { Checkbox } from 'primereact/checkbox';
import { Card } from 'primereact/card';
import { Messages } from 'primereact/messages';

const dailyAssignedChores = getDailyAssignedChores();

export function ChoreLister() {
  const messages = useRef<Messages>(null);

  const [lastSavedDayNumber, setLastSavedDayNumber] = useLocalStorage<number>(
    'lastSavedDate',
    todayNumber,
  );
  const [selectedChores, setSelectedChores] = useLocalStorage<string[]>(
    'selectedChores',
    [],
  );

  useEffect(() => {
    if (todayNumber !== lastSavedDayNumber) {
      setSelectedChores([]);
      setLastSavedDayNumber(todayNumber);
      messages.current &&
        messages.current.show([
          {
            severity: 'success',
            detail: "It's a new day, chore progress has been reset!",
            sticky: true,
          },
        ]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function onChoreChange(e: any) {
    const selectedCities = [...selectedChores];
    if (e.checked) {
      selectedCities.push(e.value);
    } else {
      selectedCities.splice(selectedCities.indexOf(e.value), 1);
    }
    setSelectedChores(selectedCities);
    setLastSavedDayNumber(todayNumber);
  }

  function choreGroup(choreGroup: iAssignedChores) {
    return (
      <li key={choreGroup.categoryName} className="mb-5">
        <Card>
          <h2 className="h3 mb-3 text-left">{choreGroup.categoryName}</h2>
          <div className="row">
            {choreGroup.categoryAssignments.map((categorySubGroup, i) =>
              choreSubGroup(categorySubGroup, choreGroup, i),
            )}
          </div>
        </Card>
      </li>
    );
  }

  function choreSubGroup(
    categorySubGroup: iCategorySubGroup,
    choreGroup: iAssignedChores,
    index: number,
  ) {
    return (
      <div key={categorySubGroup + `${index}`} className="col-6">
        <h3 className="h5 text-left mb-3">{categorySubGroup.name}:</h3>
        <ul>
          {categorySubGroup.chores.map((chore: string, choreIndex) => {
            const choreIdentifier = choreGroup.categoryName + chore;
            const isChecked = selectedChores.indexOf(choreIdentifier) !== -1;
            return (
              <li className="d-flex align-items-center mb-2" key={chore + choreIndex}>
                <Checkbox
                  className="me-2"
                  name={choreGroup.categoryName + categorySubGroup.name}
                  inputId={chore + choreIndex}
                  value={choreIdentifier}
                  checked={isChecked}
                  onChange={onChoreChange}
                ></Checkbox>
                <label htmlFor={chore + choreIndex} className="p-checkbox-label">
                  <span className={isChecked ? 'text-strike-through' : ''}>{chore}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1 className="h1 mb-3 text-left">Chores - {new Date().toLocaleDateString()} 🗓️</h1>
      <div className="mb-3">
        <Messages ref={messages} />
      </div>
      <ul>{dailyAssignedChores.map((choreCategory) => choreGroup(choreCategory))}</ul>;
    </div>
  );
}
