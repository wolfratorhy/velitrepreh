}).catch((err: Error) => {
  // Log the error for debugging purposes
  console.error('An unexpected error occurred:', err);

  // Handle different types of errors accordingly
  if (err instanceof CustomError) {
    // Handle custom errors that might have specific requirements
    handleCustomError(err);
  } else {
    // For generic errors, you might want to notify the user or perform a generic action
    notifyUserOfError();
    performGenericRecovery();
  }
});
