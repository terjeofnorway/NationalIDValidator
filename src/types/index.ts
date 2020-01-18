enum IDTypes {
  DNUMBER,
  FNUMBER,
}

type GetTypeOfID = (id: string) => IDTypes;
type IsValid = (id: string) => boolean;

export { IDTypes, GetTypeOfID, IsValid };
