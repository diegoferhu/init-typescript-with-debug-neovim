export const handler = async (untidyElements: any): Promise<any> => {
  const tidyElements = bubleSort(untidyElements);
  console.log(
    `Final array tidy: ${tidyElements}, Initial array untidy: ${untidyElements}`
  );
  return tidyElements;
};

function bubleSort(untidyElements: number[]): number[] {
  const elementsToSort = [...untidyElements];
  const numberElementsToSort = elementsToSort.length;
  let skip = false;
  let temp = null;

  for (let i = 0; i < numberElementsToSort; i++) {
    for (let j = 0; j < numberElementsToSort - i - 1; j++) {
      skip = true;
      if (elementsToSort[j] > elementsToSort[j + 1]) {
        skip = false;
        temp = elementsToSort[j];
        elementsToSort[j] = elementsToSort[j + 1];
        elementsToSort[j + 1] = temp;
      }
    }
    console.log(`Step: ${i}, My array: ${elementsToSort}`);
    if (skip === true) {
      break;
    }
  }
  return elementsToSort;
}
