export interface iAssignedChores {
  categoryName: string;
  categoryAssignments: iCategorySubGroup[];
}

export interface iCategorySubGroup {
  name: string;
  chores: any[];
}
