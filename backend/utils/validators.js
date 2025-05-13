exports.validateUrls = (urls) => {
  const errors = [];
  const urlRegex = /^(https?:\/\/)www\.[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/\S*)?$/;

  urls.forEach((url, index) => {
    if (!urlRegex.test(url.trim())) {
      errors.push(`Invalid URL at position ${index + 1}: ${url}`);
    }
  });

  return errors;
};
