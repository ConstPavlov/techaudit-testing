export const abc = 1;

// solve task 4
// SELECT
//   product_category,
//   SUM(quantity) AS quantity_sum,
//   CASE
//     WHEN SUM(quantity) < 50 THEN 'Low Sales'
//     WHEN SUM(quantity) BETWEEN 50 AND 100 THEN 'Medium Sales'
//     ELSE 'High Sales'
//   END AS sales_level
