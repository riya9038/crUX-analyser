# Screenshots

## Landing Page
![Screenshot 2025-05-14 152328](https://github.com/user-attachments/assets/9e031988-7cee-4389-be6b-99c6a469da57)

## CRUX Report for a Single URL

![Screenshot 2025-05-14 152357](https://github.com/user-attachments/assets/027dbfd1-eab4-43c4-bdab-6ae2d46f7ca4)

## CRUX Report for Bulk URLs

![Screenshot 2025-05-14 152447](https://github.com/user-attachments/assets/55f6f5a1-a75c-49e8-8644-2a1729c5d9d8)

## Sorting Data based on URL

![Screenshot 2025-05-14 152510](https://github.com/user-attachments/assets/46861ecb-fb87-4072-a07d-fe37b3a5d543)

## Sorting Data based on Metrics

![Screenshot 2025-05-14 152538](https://github.com/user-attachments/assets/9c3df824-2068-4456-910f-269d7a563bed)

## Filtering Metrics

![Screenshot 2025-05-14 152635](https://github.com/user-attachments/assets/c7fdf5ea-0297-4a37-a75d-5ea8c2439cc9)

## Empty State Mangaement

![Screenshot 2025-05-14 152648](https://github.com/user-attachments/assets/6c55d1c6-ae18-4634-a455-51cb21e26196)

## Error Handling
![Screenshot 2025-05-14 152555](https://github.com/user-attachments/assets/6a048bb6-0008-40b0-96c6-bcc7addb8f91)

![Screenshot 2025-05-14 152618](https://github.com/user-attachments/assets/4fcc5e3a-0670-440d-9fc1-29dbd2c7cbff)

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
