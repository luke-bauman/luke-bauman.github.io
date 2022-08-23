import { iCategorySubGroup } from './interfaces';
import { randomHalvesOfList, shuffledArray } from '../../utils/arrays';
import { choreList } from '../../constants/chores';

export function getDailyAssignedChores() {
  const assignedChores = Object.keys(choreList).map((choreGroup, i) => {
    const shuffledSubCategory: string[] = shuffledArray(choreList[choreGroup]);
    return {
      categoryName: choreGroup,
      categoryAssignments: createSeparateChoreLists(shuffledSubCategory),
    };
  });
  return assignedChores;
}

function createSeparateChoreLists(choreList: string[]): iCategorySubGroup[] {
  const { listOne, listTwo } = randomHalvesOfList(choreList);
  return [
    {
      name: 'Luke',
      chores: listOne,
    },
    {
      name: 'Quinn',
      chores: listTwo,
    },
  ];
}
