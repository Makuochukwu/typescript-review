/**
 * Generic utility to remove duplicates from an array of objects
 * based on a specific key.
 */
export function removeDuplicates<T>(array: T[], key: keyof T): T[] {
  const seen = new Set();
  return array.filter((item) => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}

/**
 * Utility to group array items by a specific property
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, currentItem) => {
    const groupKey = String(currentItem[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(currentItem);
    return result;
  }, {} as Record<string, T[]>);
}
