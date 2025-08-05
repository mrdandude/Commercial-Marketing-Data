import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Load the data
# Replace '/path/to/your/yuh.xlsx' with the actual path to your Excel file
file_path = "/yuh.xlsx"
df = pd.read_excel(file_path)

# Extract churn values, drop NaNs
churn_data = df["Arr Net New"].dropna().values

# Calculate mean
mean_churn = np.mean(churn_data)

# Identify outliers(IQR method)
Q1 = np.percentile(churn_data, 25)
Q3 = np.percentile(churn_data, 75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
outliers = churn_data[churn_data < lower_bound]
mean_outlier_churn = np.mean(outliers)

# Plot it!!!!!
plt.figure(figsize=(14, 6))
plt.hist(churn_data, bins=50, color='#048a24', edgecolor='black')

# Add vertical lines for mean, median, and outlier average
plt.axvline(mean_churn, color='green', linestyle='--', linewidth=2, label='Average Churn')
# plt.axvline(median_churn, color='blue', linestyle='--', linewidth=2, label='Median Churn') # Removed the median line
plt.axvline(mean_outlier_churn, color='red', linestyle=':', linewidth=2, label='Average Outlier Churn')

# Add the abels and title
plt.title('Distribution of Churned ARR (Commercial Sector)')
plt.xlabel('Churned ARR')
plt.ylabel('Number of Accounts')
plt.legend()
plt.grid(axis='y', linestyle='--', alpha=0.7)

# Display the plot itself!!!
plt.tight_layout()
plt.show()
