import { choreList } from '../../constants/chores';
import { shuffleArray, randomHalvesOfList } from '../../utils/arrays';

export function ChoreLister() {
  return (
    <ul>
      {Object.keys(choreList).map((key, i) => {
        const listByCategory: string[] = choreList[key];
        shuffleArray(listByCategory);
        const { listOne, listTwo } = randomHalvesOfList(listByCategory);
        return (
          <li key={i} className="mb-5 container">
            <h2 className="h3 mb-3">{key} Chores</h2>
            <div className="row">
              <div className="col-6">
                <h3 className="h5">Luke:</h3>
                <ul>
                  {listOne.map((chore, choreIndex) => {
                    return (
                      <li className="mb-2" key={chore + choreIndex}>
                        {chore}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-6">
                <h3 className="h5">Quinn:</h3>
                <ul>
                  {listTwo.map((chore, choreIndex) => {
                    return (
                      <li className="mb-2" key={chore + choreIndex}>
                        {chore}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
