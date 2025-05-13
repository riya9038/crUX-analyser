const cruxService = require("../services/cruxService");
const { validateUrls } = require("../utils/validators");

exports.getCruxData = async (req, res, next) => {
  try {
    const { urls } = req.body;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return res.status(400).json({ error: "Please provide at least one URL" });
    }

    const validationErrors = validateUrls(urls);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: "Enter valid URLs",
        details: validationErrors,
      });
    }

    const results = await cruxService.fetchCruxData(urls);
    res.json(results);
  } catch (error) {
    next(error);
  }
};
