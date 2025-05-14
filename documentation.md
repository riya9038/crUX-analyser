# Screenshots

## Landing Page

![Screenshot 2025-05-14 015744](https://github.com/user-attachments/assets/e4586d1b-4fb7-40df-836a-c497994d74c1)

## CRUX Report for a Single URL

![Screenshot 2025-05-14 015355](https://github.com/user-attachments/assets/7b751902-921c-45b9-83a4-e3bf6832b8dc)

## CRUX Report for Bulk URLs

![Screenshot 2025-05-14 015452](https://github.com/user-attachments/assets/cb9ac60e-2c81-46d7-865f-4dc7120a0a56)

## Sorting Data based on URL

![Screenshot 2025-05-14 020536](https://github.com/user-attachments/assets/de854fb0-c8ba-4c3e-899b-966540f3308d)

## Sorting Data based on Metrics

![Screenshot 2025-05-14 020604](https://github.com/user-attachments/assets/d748eddf-9b68-4547-b7a5-555f2433cc78)

## Filtering Metrics

![Screenshot 2025-05-14 015518](https://github.com/user-attachments/assets/80eaf7a5-2fe6-4aa3-bada-9072e47bf6c0)

![Screenshot 2025-05-14 015535](https://github.com/user-attachments/assets/e3c3bdc1-05ef-4b0e-8ead-be75e205546d)

## Empty State Mangaement

![Screenshot 2025-05-14 015602](https://github.com/user-attachments/assets/f1fe0089-303f-4a64-9913-79cbd8234d67)

## Error Handling

![Screenshot 2025-05-14 015630](https://github.com/user-attachments/assets/56802e2d-681d-4a6b-9b87-7f787aa4f3bb)

![Screenshot 2025-05-14 015712](https://github.com/user-attachments/assets/046105b2-759b-49d4-a3c1-fe957b424f65)

# Known Issues

- Limited error messages from CrUX API sometimes make debugging difficult

- Bulk processing of many URLs (>20) can be slow due to API rate limits

- Some edge cases in URL formatting not fully handled

# Next Steps

- Implement user authentication for saved reports

- Add historical data tracking

- Enhance recommendations engine with more sophisticated analysis

- Implement CSV export functionality

- Add more visualization options (charts, graphs)

# Insights and Recommendations Implementation

The application provides basic performance insights based on CrUX metrics:

- Identifies poor-performing URLs (LCP > 4s, CLS > 0.25, etc.)

- Suggests common optimizations (image compression, preloading, etc.)

- Highlights opportunities for improvement based on metric distributions
