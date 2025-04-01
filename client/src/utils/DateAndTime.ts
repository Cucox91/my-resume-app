export default function formatDate(date: Date | null): string {
  if (!date) {
    return "";
  }
  //Raziel: Check why it breaks if I remove the line below, and if doing this will apply UTC to the Date.
  const cleanDate = new Date(date);

  const month = String(cleanDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(cleanDate.getDate()).padStart(2, "0");
  const year = cleanDate.getFullYear();

  return `${month}-${day}-${year}`;
}
