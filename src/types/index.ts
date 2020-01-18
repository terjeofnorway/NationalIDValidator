enum IDTypes {
  DNUMBER,
  FNUMBER,
}

enum Genders {
  MALE,
  FEMALE,
}

type getTypeFromID = (id: string) => IDTypes;
type GetGenderFromID = (id: string) => Genders;
type IsValid = (id: string) => boolean;

export { IDTypes, Genders, getTypeFromID, GetGenderFromID, IsValid };
