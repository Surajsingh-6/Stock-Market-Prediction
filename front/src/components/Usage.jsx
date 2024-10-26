import React from 'react'

function usage() {
  return (
    <div className='mt-48 p-16'>
      <h1 className='text-3xl italic font-serif text-center'>Welcome to the Stock Prediction Website!</h1>
      <p>This website allows you to predict stock prices using historical data. Please follow the steps below to get started.</p>

      <h2>Step 1: Gather Historical Data</h2>
      <ol>
        <li>
          <strong>Visit the NSE Website:</strong> Click on the link provided in the navigation bar to access the National Stock Exchange (NSE) website.
        </li>
        <li>
          <strong>Search for Your Desired Stock:</strong> Use the search bar to find the stock equity you want to analyze.
        </li>
        <li>
          <strong>Access Historical Data:</strong>
          <ul>
            <li>Navigate to the <strong>Historical Data</strong> section for the selected stock.</li>
            <li>Set the filter to display <strong>1 Year of Data</strong>.</li>
            <li>Download the data as a <strong>CSV file</strong>.</li>
          </ul>
        </li>
      </ol>

      <h2>Step 2: Upload the CSV File</h2>
      <ol>
        <li>
          <strong>Go to the Upload Section:</strong> Return to our website and find the file upload section.
        </li>
        <li>
          <strong>Upload the CSV File:</strong>
          <ul>
            <li>Click on the <strong>Choose File</strong> button and select the CSV file you downloaded from the NSE website.</li>
          </ul>
        </li>
      </ol>

      <h2>Step 3: Input Required Information</h2>
      <ol>
        <li>
          <strong>Enter the Future Date:</strong> In the designated field, input the future date for which you want to predict the stock price (e.g., <em>15-Oct-2024</em>).
        </li>
        <li>
          <strong>Enter the Last Price:</strong> Input the last closing price of the stock from the previous day. This information is usually found in the same historical data section.
        </li>
      </ol>

      <h2>Step 4: Submit Your Data</h2>
      <ol>
        <li>
          <strong>Submit:</strong> Click the <strong>Submit</strong> button to send your data for processing.
        </li>
        <li>
          <strong>Receive Predictions:</strong> After a moment, you will receive the predicted stock price and the accuracy of the prediction.
        </li>
      </ol>

      <h2>Notes:</h2>
      <ul>
        <li>Ensure the CSV file format matches the expected structure (Date, Previous Close, Open, etc.).</li>
        <li>If you encounter any issues during the upload, please check the file format and try again.</li>
      </ul>

      <h2>Support</h2>
      <p>For any questions or assistance, please contact our support team.</p>
    </div>
  )
}

export default usage