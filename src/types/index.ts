enum IDTypes {
  DNUMBER,
  FNUMBER,
}

enum Genders {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

type GetTypeFromID = (id: string) => IDTypes;
type GetGenderFromID = (id: string) => Genders;
type GetDateFromID = (id: string) => Date;
type GetCenturyFromIndividDigits = (digits: string) => number;
type IsValid = (id: string) => boolean;

export { IDTypes, Genders, GetTypeFromID, GetGenderFromID, GetDateFromID, IsValid, GetCenturyFromIndividDigits };
