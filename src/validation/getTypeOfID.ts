enum IDTypes {
  DNUMBER,
  FNUMBER,
}

type GetTypeOfID = (id: string) => IDTypes;

const getTypeOfID: GetTypeOfID = (id: string) => {
  if (!id) {
    throw new Error('ID is undefined');
  }
  const firstDigit = parseInt(id[0], 10);
  return firstDigit > 3 ? IDTypes.DNUMBER : IDTypes.FNUMBER;
};

export { getTypeOfID, IDTypes };
