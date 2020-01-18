enum IDTypes {
  DNUMBER,
  FNUMBER,
}

enum Genders {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

type getTypeFromID = (id: string) => IDTypes;
type GetGenderFromID = (id: string) => Genders;
type IsValid = (id: string) => boolean;

export { IDTypes, Genders, getTypeFromID, GetGenderFromID, IsValid };
